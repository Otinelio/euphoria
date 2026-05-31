import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PINLogin } from "@/components/PINLogin";
import { useSettingsStore } from "@/store/settingsStore";
import { useOrdersStore, type OrderStatus } from "@/store/ordersStore";
import { useOrderPolling } from "@/hooks/useOrderPolling";
import { StatusBadge } from "@/components/StatusBadge";
import { formatFCFA } from "@/lib/format";
import { QRCodeCanvas } from "qrcode.react";
import { Printer } from "lucide-react";

export const Route = createFileRoute("/reception")({
  component: ReceptionPage,
  head: () => ({ meta: [{ title: "Reception — Euphoria" }, { name: "robots", content: "noindex" }] }),
});

const nextStatus: Record<OrderStatus, OrderStatus | null> = {
  Pending: "Confirmed",
  Confirmed: "Preparing",
  Preparing: "Served",
  Served: null,
};

function ReceptionPage() {
  const pin = useSettingsStore((s) => s.receptionPin);
  const [ok, setOk] = useState(false);
  if (!ok) return <PINLogin title="RECEPTION" expected={pin} onSuccess={() => setOk(true)} />;
  return <Dashboard />;
}

function Dashboard() {
  useOrderPolling();
  const orders = useOrdersStore((s) => s.orders);
  const setStatus = useOrdersStore((s) => s.setStatus);
  const [tab, setTab] = useState<"orders" | "tables" | "qr" | "today">("orders");
  const pending = orders.filter((o) => o.status !== "Served").length;

  useEffect(() => {
    document.title = pending > 0 ? `(${pending}) New Orders — Euphoria Reception` : "Reception — Euphoria";
  }, [pending]);

  const today = new Date().toDateString();
  const todayOrders = orders.filter((o) => new Date(o.timestamp).toDateString() === today);
  const revenue = todayOrders.reduce((a, o) => a + o.total, 0);

  return (
    <div className="min-h-screen bg-[#0a0a0a] grid lg:grid-cols-[220px_1fr]">
      <aside className="bg-cardx border-r border-subtle p-5">
        <div className="font-display text-2xl tracking-widest text-gold mb-6">EUPHORIA</div>
        {[
          ["orders", "Live Orders"],
          ["tables", "Tables"],
          ["qr", "QR Codes"],
          ["today", "Today"],
        ].map(([k, l]) => (
          <button key={k} onClick={() => setTab(k as never)} className="block w-full text-left py-2 font-body uppercase text-xs tracking-[0.2em]" style={{ color: tab === k ? "var(--accent-gold)" : "var(--text-primary)" }}>
            {l}
          </button>
        ))}
      </aside>
      <main className="p-6 space-y-6">
        {tab === "orders" && (
          <div className="space-y-4">
            <h1 className="font-display text-3xl tracking-widest text-gold">LIVE ORDERS</h1>
            {orders.length === 0 && <p className="font-body text-muted-foreground-x">No orders yet. Send one from a /table/N tab.</p>}
            {orders.map((o) => {
              const ago = Math.round((Date.now() - new Date(o.timestamp).getTime()) / 60000);
              const next = nextStatus[o.status];
              return (
                <div key={o.id} className="bg-cardx border border-subtle p-5 flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <p className="font-display text-3xl tracking-widest text-gold">TABLE {o.table}</p>
                      <StatusBadge status={o.status} />
                      <span className="text-xs text-muted-foreground-x font-body">{ago} min ago</span>
                    </div>
                    <ul className="font-body text-sm mt-3 space-y-1">
                      {o.items.map((i) => <li key={i.id}>{i.name} × {i.qty}</li>)}
                    </ul>
                    <p className="font-display text-xl text-[var(--text-primary)] mt-3">{formatFCFA(o.total)}</p>
                  </div>
                  {next && (
                    <button onClick={() => setStatus(o.id, next)} className="self-start px-5 py-2 border border-gold text-gold font-body uppercase text-xs tracking-[0.2em] hover:bg-gold hover:text-[#0a0a0a] transition-colors">
                      Mark {next}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
        {tab === "tables" && (
          <div>
            <h1 className="font-display text-3xl tracking-widest text-gold mb-6">TABLES</h1>
            <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
              {Array.from({ length: 20 }).map((_, i) => {
                const num = i + 1;
                const active = orders.find((o) => o.table === num && o.status !== "Served");
                const color = !active ? "bg-[#1a1a1a]" : active.status === "Pending" ? "bg-gold text-[#0a0a0a]" : active.status === "Served" ? "bg-green-700" : "bg-blue-700";
                return <div key={num} className={`aspect-square flex flex-col items-center justify-center border border-subtle ${color}`}>
                  <p className="font-display text-2xl">{num}</p>
                  <p className="text-[10px] font-body uppercase tracking-widest opacity-80">{active?.status ?? "Free"}</p>
                </div>;
              })}
            </div>
          </div>
        )}
        {tab === "qr" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h1 className="font-display text-3xl tracking-widest text-gold">QR CODES</h1>
              <button onClick={() => window.print()} className="flex items-center gap-2 px-4 py-2 border border-gold text-gold font-body uppercase text-xs tracking-[0.2em]">
                <Printer className="w-4 h-4" /> Print all
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 12 }).map((_, i) => {
                const num = i + 1;
                const url = typeof window !== "undefined" ? `${window.location.origin}/table/${num}` : "";
                return <div key={num} className="bg-white p-4 text-center">
                  <p className="font-display text-xl text-[#0a0a0a]">EUPHORIA</p>
                  <p className="font-body text-xs uppercase tracking-widest text-[#0a0a0a] mb-3">Table {num}</p>
                  {url && <QRCodeCanvas value={url} size={140} />}
                </div>;
              })}
            </div>
          </div>
        )}
        {tab === "today" && (
          <div>
            <h1 className="font-display text-3xl tracking-widest text-gold mb-6">TODAY</h1>
            <div className="grid sm:grid-cols-3 gap-4">
              <Stat label="Orders" value={`${todayOrders.length}`} />
              <Stat label="Revenue" value={formatFCFA(revenue)} />
              <Stat label="Avg order" value={formatFCFA(todayOrders.length ? Math.round(revenue / todayOrders.length) : 0)} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-cardx border border-subtle p-5">
      <p className="font-body text-xs uppercase tracking-widest text-muted-foreground-x">{label}</p>
      <p className="font-display text-3xl text-gold mt-2">{value}</p>
    </div>
  );
}
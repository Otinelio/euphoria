import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PINLogin } from "@/components/PINLogin";
import { useSettingsStore } from "@/store/settingsStore";
import { useMenuStore } from "@/store/menuStore";
import { useOrdersStore } from "@/store/ordersStore";
import { formatFCFA } from "@/lib/format";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { Trash2 } from "lucide-react";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
  head: () => ({ meta: [{ title: "Admin — Euphoria" }, { name: "robots", content: "noindex" }] }),
});

function AdminPage() {
  const pin = useSettingsStore((s) => s.adminPin);
  const [ok, setOk] = useState(false);
  if (!ok) return <PINLogin title="ADMIN" expected={pin} onSuccess={() => setOk(true)} />;
  return <Dashboard />;
}

function Dashboard() {
  const { food, updateFood, removeFood } = useMenuStore();
  const settings = useSettingsStore();
  const orders = useOrdersStore((s) => s.orders);
  const [tab, setTab] = useState<"menu" | "orders" | "analytics" | "settings">("menu");

  // Analytics: orders per day (last 7)
  const perDay = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(); d.setDate(d.getDate() - (6 - i));
    const key = d.toDateString();
    return { day: d.toLocaleDateString(undefined, { weekday: "short" }), count: orders.filter((o) => new Date(o.timestamp).toDateString() === key).length };
  });
  const itemCounts = new Map<string, number>();
  orders.forEach((o) => o.items.forEach((i) => itemCounts.set(i.name, (itemCounts.get(i.name) ?? 0) + i.qty)));
  const top5 = [...itemCounts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5).map(([name, count]) => ({ name, count }));

  return (
    <div className="min-h-screen bg-[#0a0a0a] grid lg:grid-cols-[220px_1fr]">
      <aside className="bg-cardx border-r border-subtle p-5">
        <div className="font-display text-2xl tracking-widest text-gold mb-6">ADMIN</div>
        {[["menu", "Menu"], ["orders", "Order History"], ["analytics", "Analytics"], ["settings", "Settings"]].map(([k, l]) => (
          <button key={k} onClick={() => setTab(k as never)} className="block w-full text-left py-2 font-body uppercase text-xs tracking-[0.2em]" style={{ color: tab === k ? "var(--accent-gold)" : "var(--text-primary)" }}>{l}</button>
        ))}
      </aside>
      <main className="p-6 space-y-6">
        {tab === "menu" && (
          <div>
            <h1 className="font-display text-3xl tracking-widest text-gold mb-6">MENU MANAGEMENT</h1>
            <div className="grid gap-3">
              {food.map((m) => (
                <div key={m.id} className="bg-cardx border border-subtle p-4 flex items-center gap-4">
                  <img src={m.image} alt={m.name} className="w-16 h-16 object-cover" />
                  <div className="flex-1">
                    <p className="font-display text-lg tracking-wide">{m.name}</p>
                    <p className="font-body text-xs text-muted-foreground-x">{m.category} · {formatFCFA(m.price)}</p>
                  </div>
                  <label className="flex items-center gap-2 text-xs font-body">
                    <input type="checkbox" checked={m.available} onChange={(e) => updateFood(m.id, { available: e.target.checked })} />
                    Available
                  </label>
                  <button onClick={() => removeFood(m.id)} className="text-red-500"><Trash2 className="w-4 h-4" /></button>
                </div>
              ))}
            </div>
          </div>
        )}
        {tab === "orders" && (
          <div>
            <h1 className="font-display text-3xl tracking-widest text-gold mb-6">ORDER HISTORY</h1>
            <button onClick={() => {
              const txt = orders.map((o) => `Table ${o.table} — ${new Date(o.timestamp).toLocaleString()} — ${formatFCFA(o.total)} — ${o.status}\n  ${o.items.map((i) => `${i.name} x${i.qty}`).join(", ")}`).join("\n\n");
              const blob = new Blob([txt || "No orders"], { type: "text/plain" });
              const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "euphoria-orders.txt"; a.click();
            }} className="mb-4 px-4 py-2 border border-gold text-gold font-body uppercase text-xs tracking-[0.2em]">Export</button>
            <div className="space-y-2">
              {orders.map((o) => (
                <div key={o.id} className="bg-cardx border border-subtle p-4 font-body text-sm">
                  <p className="font-display text-lg text-gold">Table {o.table} · {new Date(o.timestamp).toLocaleString()}</p>
                  <p>{o.items.map((i) => `${i.name} x${i.qty}`).join(", ")}</p>
                  <p className="text-muted-foreground-x">{formatFCFA(o.total)} — {o.status}</p>
                </div>
              ))}
              {orders.length === 0 && <p className="text-muted-foreground-x font-body">No orders yet.</p>}
            </div>
          </div>
        )}
        {tab === "analytics" && (
          <div className="space-y-8">
            <h1 className="font-display text-3xl tracking-widest text-gold">ANALYTICS</h1>
            <div>
              <p className="font-body uppercase text-xs tracking-widest text-muted-foreground-x mb-3">Orders per day (last 7)</p>
              <div className="h-64 bg-cardx border border-subtle p-4">
                <ResponsiveContainer><BarChart data={perDay}><XAxis dataKey="day" stroke="#9a9a9a" /><YAxis stroke="#9a9a9a" allowDecimals={false} /><Tooltip contentStyle={{ background: "#141414", border: "1px solid #2a2a2a" }} /><Bar dataKey="count" fill="#d4af37" /></BarChart></ResponsiveContainer>
              </div>
            </div>
            <div>
              <p className="font-body uppercase text-xs tracking-widest text-muted-foreground-x mb-3">Top 5 items</p>
              <div className="h-64 bg-cardx border border-subtle p-4">
                <ResponsiveContainer><BarChart data={top5} layout="vertical"><XAxis type="number" stroke="#9a9a9a" allowDecimals={false} /><YAxis type="category" dataKey="name" stroke="#9a9a9a" width={120} /><Tooltip contentStyle={{ background: "#141414", border: "1px solid #2a2a2a" }} /><Bar dataKey="count" fill="#722f37" /></BarChart></ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
        {tab === "settings" && (
          <div className="max-w-lg space-y-4">
            <h1 className="font-display text-3xl tracking-widest text-gold mb-2">SETTINGS</h1>
            <p className="font-body text-xs text-muted-foreground-x">Note: orders are stored in this browser only. Reception sees orders from /table tabs opened in the same browser.</p>
            <Setting label="WhatsApp number" value={settings.whatsappNumber} onChange={(v) => settings.update({ whatsappNumber: v })} />
            <Setting label="Restaurant name" value={settings.restaurantName} onChange={(v) => settings.update({ restaurantName: v })} />
            <Setting label="Tagline" value={settings.tagline} onChange={(v) => settings.update({ tagline: v })} />
            <Setting label="Reception PIN (4 digits)" value={settings.receptionPin} onChange={(v) => settings.update({ receptionPin: v.replace(/\D/g, "").slice(0, 4) })} />
            <Setting label="Admin PIN (4 digits)" value={settings.adminPin} onChange={(v) => settings.update({ adminPin: v.replace(/\D/g, "").slice(0, 4) })} />
          </div>
        )}
      </main>
    </div>
  );
}

function Setting({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block font-body uppercase text-[10px] tracking-[0.3em] text-muted-foreground-x mb-2">{label}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} className="w-full bg-[#0a0a0a] border border-subtle px-3 py-2 text-sm font-body focus:border-gold outline-none" />
    </div>
  );
}
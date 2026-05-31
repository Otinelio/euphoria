import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { P as PINLogin } from "./PINLogin-C4MpUj8c.js";
import { u as useSettingsStore } from "./settingsStore-Ebfo6NmT.js";
import { u as useOrdersStore } from "./ordersStore-D_fd3WX_.js";
import { S as StatusBadge } from "./StatusBadge-BzE9fC7o.js";
import { f as formatFCFA } from "./format-CZhDL1kI.js";
import { QRCodeCanvas } from "qrcode.react";
import { Printer } from "lucide-react";
import "framer-motion";
import "zustand";
import "zustand/middleware";
function useOrderPolling(intervalMs = 5e3) {
  useEffect(() => {
    const tick = () => {
      try {
        const raw = localStorage.getItem("euphoria-orders");
        if (!raw) return;
        const parsed = JSON.parse(raw);
        const current = useOrdersStore.getState().orders;
        if (parsed?.state?.orders && (parsed.state.orders.length !== current.length || JSON.stringify(parsed.state.orders) !== JSON.stringify(current))) {
          useOrdersStore.setState({ orders: parsed.state.orders });
        }
      } catch {
      }
    };
    const id = setInterval(tick, intervalMs);
    window.addEventListener("storage", tick);
    return () => {
      clearInterval(id);
      window.removeEventListener("storage", tick);
    };
  }, [intervalMs]);
}
const nextStatus = {
  Pending: "Confirmed",
  Confirmed: "Preparing",
  Preparing: "Served",
  Served: null
};
function ReceptionPage() {
  const pin = useSettingsStore((s) => s.receptionPin);
  const [ok, setOk] = useState(false);
  if (!ok) return /* @__PURE__ */ jsx(PINLogin, { title: "RECEPTION", expected: pin, onSuccess: () => setOk(true) });
  return /* @__PURE__ */ jsx(Dashboard, {});
}
function Dashboard() {
  useOrderPolling();
  const orders = useOrdersStore((s) => s.orders);
  const setStatus = useOrdersStore((s) => s.setStatus);
  const [tab, setTab] = useState("orders");
  const pending = orders.filter((o) => o.status !== "Served").length;
  useEffect(() => {
    document.title = pending > 0 ? `(${pending}) New Orders — Euphoria Reception` : "Reception — Euphoria";
  }, [pending]);
  const today = (/* @__PURE__ */ new Date()).toDateString();
  const todayOrders = orders.filter((o) => new Date(o.timestamp).toDateString() === today);
  const revenue = todayOrders.reduce((a, o) => a + o.total, 0);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#0a0a0a] grid lg:grid-cols-[220px_1fr]", children: [
    /* @__PURE__ */ jsxs("aside", { className: "bg-cardx border-r border-subtle p-5", children: [
      /* @__PURE__ */ jsx("div", { className: "font-display text-2xl tracking-widest text-gold mb-6", children: "EUPHORIA" }),
      [["orders", "Live Orders"], ["tables", "Tables"], ["qr", "QR Codes"], ["today", "Today"]].map(([k, l]) => /* @__PURE__ */ jsx("button", { onClick: () => setTab(k), className: "block w-full text-left py-2 font-body uppercase text-xs tracking-[0.2em]", style: {
        color: tab === k ? "var(--accent-gold)" : "var(--text-primary)"
      }, children: l }, k))
    ] }),
    /* @__PURE__ */ jsxs("main", { className: "p-6 space-y-6", children: [
      tab === "orders" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl tracking-widest text-gold", children: "LIVE ORDERS" }),
        orders.length === 0 && /* @__PURE__ */ jsx("p", { className: "font-body text-muted-foreground-x", children: "No orders yet. Send one from a /table/N tab." }),
        orders.map((o) => {
          const ago = Math.round((Date.now() - new Date(o.timestamp).getTime()) / 6e4);
          const next = nextStatus[o.status];
          return /* @__PURE__ */ jsxs("div", { className: "bg-cardx border border-subtle p-5 flex flex-col md:flex-row gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxs("p", { className: "font-display text-3xl tracking-widest text-gold", children: [
                  "TABLE ",
                  o.table
                ] }),
                /* @__PURE__ */ jsx(StatusBadge, { status: o.status }),
                /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground-x font-body", children: [
                  ago,
                  " min ago"
                ] })
              ] }),
              /* @__PURE__ */ jsx("ul", { className: "font-body text-sm mt-3 space-y-1", children: o.items.map((i) => /* @__PURE__ */ jsxs("li", { children: [
                i.name,
                " × ",
                i.qty
              ] }, i.id)) }),
              /* @__PURE__ */ jsx("p", { className: "font-display text-xl text-[var(--text-primary)] mt-3", children: formatFCFA(o.total) })
            ] }),
            next && /* @__PURE__ */ jsxs("button", { onClick: () => setStatus(o.id, next), className: "self-start px-5 py-2 border border-gold text-gold font-body uppercase text-xs tracking-[0.2em] hover:bg-gold hover:text-[#0a0a0a] transition-colors", children: [
              "Mark ",
              next
            ] })
          ] }, o.id);
        })
      ] }),
      tab === "tables" && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl tracking-widest text-gold mb-6", children: "TABLES" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 md:grid-cols-6 gap-3", children: Array.from({
          length: 20
        }).map((_, i) => {
          const num = i + 1;
          const active = orders.find((o) => o.table === num && o.status !== "Served");
          const color = !active ? "bg-[#1a1a1a]" : active.status === "Pending" ? "bg-gold text-[#0a0a0a]" : active.status === "Served" ? "bg-green-700" : "bg-blue-700";
          return /* @__PURE__ */ jsxs("div", { className: `aspect-square flex flex-col items-center justify-center border border-subtle ${color}`, children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-2xl", children: num }),
            /* @__PURE__ */ jsx("p", { className: "text-[10px] font-body uppercase tracking-widest opacity-80", children: active?.status ?? "Free" })
          ] }, num);
        }) })
      ] }),
      tab === "qr" && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-6", children: [
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl tracking-widest text-gold", children: "QR CODES" }),
          /* @__PURE__ */ jsxs("button", { onClick: () => window.print(), className: "flex items-center gap-2 px-4 py-2 border border-gold text-gold font-body uppercase text-xs tracking-[0.2em]", children: [
            /* @__PURE__ */ jsx(Printer, { className: "w-4 h-4" }),
            " Print all"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: Array.from({
          length: 12
        }).map((_, i) => {
          const num = i + 1;
          const url = typeof window !== "undefined" ? `${window.location.origin}/table/${num}` : "";
          return /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 text-center", children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-xl text-[#0a0a0a]", children: "EUPHORIA" }),
            /* @__PURE__ */ jsxs("p", { className: "font-body text-xs uppercase tracking-widest text-[#0a0a0a] mb-3", children: [
              "Table ",
              num
            ] }),
            url && /* @__PURE__ */ jsx(QRCodeCanvas, { value: url, size: 140 })
          ] }, num);
        }) })
      ] }),
      tab === "today" && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl tracking-widest text-gold mb-6", children: "TODAY" }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsx(Stat, { label: "Orders", value: `${todayOrders.length}` }),
          /* @__PURE__ */ jsx(Stat, { label: "Revenue", value: formatFCFA(revenue) }),
          /* @__PURE__ */ jsx(Stat, { label: "Avg order", value: formatFCFA(todayOrders.length ? Math.round(revenue / todayOrders.length) : 0) })
        ] })
      ] })
    ] })
  ] });
}
function Stat({
  label,
  value
}) {
  return /* @__PURE__ */ jsxs("div", { className: "bg-cardx border border-subtle p-5", children: [
    /* @__PURE__ */ jsx("p", { className: "font-body text-xs uppercase tracking-widest text-muted-foreground-x", children: label }),
    /* @__PURE__ */ jsx("p", { className: "font-display text-3xl text-gold mt-2", children: value })
  ] });
}
export {
  ReceptionPage as component
};

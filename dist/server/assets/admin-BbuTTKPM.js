import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { P as PINLogin } from "./PINLogin-C4MpUj8c.js";
import { u as useSettingsStore } from "./settingsStore-Ebfo6NmT.js";
import { u as useMenuStore } from "./menuStore-BXLsVVXR.js";
import { u as useOrdersStore } from "./ordersStore-D_fd3WX_.js";
import { f as formatFCFA } from "./format-CZhDL1kI.js";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar } from "recharts";
import { Trash2 } from "lucide-react";
import "framer-motion";
import "zustand";
import "zustand/middleware";
function AdminPage() {
  const pin = useSettingsStore((s) => s.adminPin);
  const [ok, setOk] = useState(false);
  if (!ok) return /* @__PURE__ */ jsx(PINLogin, { title: "ADMIN", expected: pin, onSuccess: () => setOk(true) });
  return /* @__PURE__ */ jsx(Dashboard, {});
}
function Dashboard() {
  const {
    food,
    updateFood,
    removeFood
  } = useMenuStore();
  const settings = useSettingsStore();
  const orders = useOrdersStore((s) => s.orders);
  const [tab, setTab] = useState("menu");
  const perDay = Array.from({
    length: 7
  }).map((_, i) => {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() - (6 - i));
    const key = d.toDateString();
    return {
      day: d.toLocaleDateString(void 0, {
        weekday: "short"
      }),
      count: orders.filter((o) => new Date(o.timestamp).toDateString() === key).length
    };
  });
  const itemCounts = /* @__PURE__ */ new Map();
  orders.forEach((o) => o.items.forEach((i) => itemCounts.set(i.name, (itemCounts.get(i.name) ?? 0) + i.qty)));
  const top5 = [...itemCounts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5).map(([name, count]) => ({
    name,
    count
  }));
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#0a0a0a] grid lg:grid-cols-[220px_1fr]", children: [
    /* @__PURE__ */ jsxs("aside", { className: "bg-cardx border-r border-subtle p-5", children: [
      /* @__PURE__ */ jsx("div", { className: "font-display text-2xl tracking-widest text-gold mb-6", children: "ADMIN" }),
      [["menu", "Menu"], ["orders", "Order History"], ["analytics", "Analytics"], ["settings", "Settings"]].map(([k, l]) => /* @__PURE__ */ jsx("button", { onClick: () => setTab(k), className: "block w-full text-left py-2 font-body uppercase text-xs tracking-[0.2em]", style: {
        color: tab === k ? "var(--accent-gold)" : "var(--text-primary)"
      }, children: l }, k))
    ] }),
    /* @__PURE__ */ jsxs("main", { className: "p-6 space-y-6", children: [
      tab === "menu" && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl tracking-widest text-gold mb-6", children: "MENU MANAGEMENT" }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-3", children: food.map((m) => /* @__PURE__ */ jsxs("div", { className: "bg-cardx border border-subtle p-4 flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("img", { src: m.image, alt: m.name, className: "w-16 h-16 object-cover" }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-lg tracking-wide", children: m.name }),
            /* @__PURE__ */ jsxs("p", { className: "font-body text-xs text-muted-foreground-x", children: [
              m.category,
              " · ",
              formatFCFA(m.price)
            ] })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2 text-xs font-body", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", checked: m.available, onChange: (e) => updateFood(m.id, {
              available: e.target.checked
            }) }),
            "Available"
          ] }),
          /* @__PURE__ */ jsx("button", { onClick: () => removeFood(m.id), className: "text-red-500", children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" }) })
        ] }, m.id)) })
      ] }),
      tab === "orders" && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl tracking-widest text-gold mb-6", children: "ORDER HISTORY" }),
        /* @__PURE__ */ jsx("button", { onClick: () => {
          const txt = orders.map((o) => `Table ${o.table} — ${new Date(o.timestamp).toLocaleString()} — ${formatFCFA(o.total)} — ${o.status}
  ${o.items.map((i) => `${i.name} x${i.qty}`).join(", ")}`).join("\n\n");
          const blob = new Blob([txt || "No orders"], {
            type: "text/plain"
          });
          const a = document.createElement("a");
          a.href = URL.createObjectURL(blob);
          a.download = "euphoria-orders.txt";
          a.click();
        }, className: "mb-4 px-4 py-2 border border-gold text-gold font-body uppercase text-xs tracking-[0.2em]", children: "Export" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          orders.map((o) => /* @__PURE__ */ jsxs("div", { className: "bg-cardx border border-subtle p-4 font-body text-sm", children: [
            /* @__PURE__ */ jsxs("p", { className: "font-display text-lg text-gold", children: [
              "Table ",
              o.table,
              " · ",
              new Date(o.timestamp).toLocaleString()
            ] }),
            /* @__PURE__ */ jsx("p", { children: o.items.map((i) => `${i.name} x${i.qty}`).join(", ") }),
            /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground-x", children: [
              formatFCFA(o.total),
              " — ",
              o.status
            ] })
          ] }, o.id)),
          orders.length === 0 && /* @__PURE__ */ jsx("p", { className: "text-muted-foreground-x font-body", children: "No orders yet." })
        ] })
      ] }),
      tab === "analytics" && /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl tracking-widest text-gold", children: "ANALYTICS" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-body uppercase text-xs tracking-widest text-muted-foreground-x mb-3", children: "Orders per day (last 7)" }),
          /* @__PURE__ */ jsx("div", { className: "h-64 bg-cardx border border-subtle p-4", children: /* @__PURE__ */ jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxs(BarChart, { data: perDay, children: [
            /* @__PURE__ */ jsx(XAxis, { dataKey: "day", stroke: "#9a9a9a" }),
            /* @__PURE__ */ jsx(YAxis, { stroke: "#9a9a9a", allowDecimals: false }),
            /* @__PURE__ */ jsx(Tooltip, { contentStyle: {
              background: "#141414",
              border: "1px solid #2a2a2a"
            } }),
            /* @__PURE__ */ jsx(Bar, { dataKey: "count", fill: "#d4af37" })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-body uppercase text-xs tracking-widest text-muted-foreground-x mb-3", children: "Top 5 items" }),
          /* @__PURE__ */ jsx("div", { className: "h-64 bg-cardx border border-subtle p-4", children: /* @__PURE__ */ jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxs(BarChart, { data: top5, layout: "vertical", children: [
            /* @__PURE__ */ jsx(XAxis, { type: "number", stroke: "#9a9a9a", allowDecimals: false }),
            /* @__PURE__ */ jsx(YAxis, { type: "category", dataKey: "name", stroke: "#9a9a9a", width: 120 }),
            /* @__PURE__ */ jsx(Tooltip, { contentStyle: {
              background: "#141414",
              border: "1px solid #2a2a2a"
            } }),
            /* @__PURE__ */ jsx(Bar, { dataKey: "count", fill: "#722f37" })
          ] }) }) })
        ] })
      ] }),
      tab === "settings" && /* @__PURE__ */ jsxs("div", { className: "max-w-lg space-y-4", children: [
        /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl tracking-widest text-gold mb-2", children: "SETTINGS" }),
        /* @__PURE__ */ jsx("p", { className: "font-body text-xs text-muted-foreground-x", children: "Note: orders are stored in this browser only. Reception sees orders from /table tabs opened in the same browser." }),
        /* @__PURE__ */ jsx(Setting, { label: "WhatsApp number", value: settings.whatsappNumber, onChange: (v) => settings.update({
          whatsappNumber: v
        }) }),
        /* @__PURE__ */ jsx(Setting, { label: "Restaurant name", value: settings.restaurantName, onChange: (v) => settings.update({
          restaurantName: v
        }) }),
        /* @__PURE__ */ jsx(Setting, { label: "Tagline", value: settings.tagline, onChange: (v) => settings.update({
          tagline: v
        }) }),
        /* @__PURE__ */ jsx(Setting, { label: "Reception PIN (4 digits)", value: settings.receptionPin, onChange: (v) => settings.update({
          receptionPin: v.replace(/\D/g, "").slice(0, 4)
        }) }),
        /* @__PURE__ */ jsx(Setting, { label: "Admin PIN (4 digits)", value: settings.adminPin, onChange: (v) => settings.update({
          adminPin: v.replace(/\D/g, "").slice(0, 4)
        }) })
      ] })
    ] })
  ] });
}
function Setting({
  label,
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { className: "block font-body uppercase text-[10px] tracking-[0.3em] text-muted-foreground-x mb-2", children: label }),
    /* @__PURE__ */ jsx("input", { value, onChange: (e) => onChange(e.target.value), className: "w-full bg-[#0a0a0a] border border-subtle px-3 py-2 text-sm font-body focus:border-gold outline-none" })
  ] });
}
export {
  AdminPage as component
};

import { jsx, jsxs } from "react/jsx-runtime";
import { useParams } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { CheckCircle, ShoppingCart } from "lucide-react";
import { u as useMenuStore } from "./menuStore-BXLsVVXR.js";
import { u as useCartStore } from "./cartStore-Mu-5IcZ3.js";
import { C as CartDrawer } from "./CartDrawer-Bd7uR-ls.js";
import { M as MenuItemCard } from "./MenuItemCard-O3RR5sty.js";
import { S as StatusBadge } from "./StatusBadge-BzE9fC7o.js";
import { u as useOrdersStore } from "./ordersStore-D_fd3WX_.js";
import "zustand";
import "zustand/middleware";
import "framer-motion";
import "./format-CZhDL1kI.js";
import "./whatsapp-BO6hiolq.js";
import "./settingsStore-Ebfo6NmT.js";
import "./Badge-CStHiTpk.js";
import "sonner";
function TablePage() {
  const {
    tableNumber
  } = useParams({
    from: "/table/$tableNumber"
  });
  const table = Number(tableNumber) || 1;
  const food = useMenuStore((s) => s.food);
  const setOpen = useCartStore((s) => s.setOpen);
  const count = useCartStore((s) => s.count());
  const [cat, setCat] = useState("Starters");
  const [lastOrderId, setLastOrderId] = useState(null);
  const order = useOrdersStore((s) => s.orders.find((o) => o.id === lastOrderId));
  useEffect(() => {
    const onSent = () => {
      const latest = useOrdersStore.getState().orders[0];
      if (latest) setLastOrderId(latest.id);
    };
    window.addEventListener("euphoria-order-sent", onSent);
    return () => window.removeEventListener("euphoria-order-sent", onSent);
  }, []);
  const cats = ["Starters", "Burgers", "Mains", "Sides", "Desserts"];
  if (lastOrderId && order) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center px-6 bg-[#0a0a0a]", children: /* @__PURE__ */ jsxs("div", { className: "text-center max-w-md", children: [
      /* @__PURE__ */ jsx(CheckCircle, { className: "w-16 h-16 text-gold mx-auto" }),
      /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl tracking-widest text-gold mt-6", children: "ORDER SENT" }),
      /* @__PURE__ */ jsx("p", { className: "font-body text-muted-foreground-x mt-3", children: "Your order has been sent to the bar. We'll confirm shortly." }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 flex justify-center", children: /* @__PURE__ */ jsx(StatusBadge, { status: order.status }) }),
      /* @__PURE__ */ jsx("button", { onClick: () => setLastOrderId(null), className: "mt-8 px-6 py-2.5 border border-gold text-gold font-body uppercase text-xs tracking-[0.25em]", children: "Order more" })
    ] }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#0a0a0a] pb-24", children: [
    /* @__PURE__ */ jsxs("header", { className: "text-center py-8 border-b border-subtle", children: [
      /* @__PURE__ */ jsx("p", { className: "font-display text-3xl tracking-widest text-gold", children: "EUPHORIA" }),
      /* @__PURE__ */ jsxs("p", { className: "font-body uppercase text-xs tracking-[0.4em] text-muted-foreground-x mt-1", children: [
        "Table ",
        table
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "sticky top-0 z-30 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-subtle", children: /* @__PURE__ */ jsx("div", { className: "flex gap-3 px-4 py-3 overflow-x-auto", children: cats.map((c) => /* @__PURE__ */ jsx("button", { onClick: () => setCat(c), className: "font-body uppercase text-xs tracking-[0.25em] px-3 py-1.5 whitespace-nowrap", style: {
      color: cat === c ? "var(--accent-gold)" : "var(--text-primary)"
    }, children: c }, c)) }) }),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-4 px-4 py-6", children: food.filter((f) => f.category === cat).map((i, idx) => /* @__PURE__ */ jsx(MenuItemCard, { item: i, index: idx, compact: true }, i.id)) }),
    count > 0 && /* @__PURE__ */ jsxs("button", { onClick: () => setOpen(true), className: "fixed bottom-5 left-1/2 -translate-x-1/2 px-6 py-3.5 bg-gold text-[#0a0a0a] font-body uppercase tracking-[0.25em] text-xs font-bold flex items-center gap-2 glow-gold", children: [
      /* @__PURE__ */ jsx(ShoppingCart, { className: "w-4 h-4" }),
      " Review order (",
      count,
      ")"
    ] }),
    /* @__PURE__ */ jsx(CartDrawer, { tableNumber: table })
  ] });
}
export {
  TablePage as component
};

import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import { X, Trash2, Minus, Plus, MessageCircle, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { u as useCartStore } from "./cartStore-Mu-5IcZ3.js";
import { f as formatFCFA } from "./format-CZhDL1kI.js";
import { o as openWhatsApp, a as buildOrderMessage } from "./whatsapp-BO6hiolq.js";
import { u as useOrdersStore } from "./ordersStore-D_fd3WX_.js";
function CartFab() {
  const count = useCartStore((s) => s.count());
  const setOpen = useCartStore((s) => s.setOpen);
  if (count === 0) return null;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: () => setOpen(true),
      className: "fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gold text-[#0a0a0a] flex items-center justify-center glow-gold hover:scale-110 transition-transform",
      "aria-label": "Open cart",
      children: [
        /* @__PURE__ */ jsx(ShoppingCart, { className: "w-6 h-6" }),
        /* @__PURE__ */ jsx("span", { className: "absolute -top-1 -right-1 min-w-[22px] h-[22px] px-1 rounded-full bg-bordeaux text-white text-xs font-bold flex items-center justify-center", children: count })
      ]
    }
  );
}
function CartDrawer({ tableNumber }) {
  const { items, open, setOpen, inc, dec, remove, total, clear } = useCartStore();
  const [mode, setMode] = useState("Takeaway");
  const [address, setAddress] = useState("");
  const addOrder = useOrdersStore((s) => s.add);
  const send = () => {
    if (items.length === 0) return;
    const t = total();
    if (tableNumber) {
      addOrder({ table: tableNumber, items, total: t });
      clear();
      setOpen(false);
      window.dispatchEvent(new CustomEvent("euphoria-order-sent"));
      return;
    }
    openWhatsApp(
      buildOrderMessage(
        items.map((i) => ({ name: i.name, qty: i.qty, price: i.price })),
        t,
        mode,
        mode === "Delivery" ? address : void 0
      )
    );
    clear();
    setOpen(false);
  };
  return /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setOpen(false),
        className: "fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm"
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.aside,
      {
        initial: { x: "100%" },
        animate: { x: 0 },
        exit: { x: "100%" },
        transition: { type: "spring", damping: 28, stiffness: 240 },
        className: "fixed top-0 right-0 bottom-0 z-[80] w-full sm:w-[420px] bg-[#141414] border-l border-gold/30 flex flex-col",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-5 border-b border-subtle", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl tracking-widest text-gold", children: "Your Order" }),
            /* @__PURE__ */ jsx("button", { onClick: () => setOpen(false), "aria-label": "Close", className: "text-[var(--text-primary)] hover:text-gold", children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto p-5 space-y-4", children: [
            items.length === 0 && /* @__PURE__ */ jsx("p", { className: "font-body text-sm text-muted-foreground-x", children: "Your cart is empty." }),
            items.map((i) => /* @__PURE__ */ jsxs("div", { className: "flex gap-3 border-b border-subtle pb-4", children: [
              /* @__PURE__ */ jsx("img", { src: i.image, alt: i.name, className: "w-16 h-16 object-cover rounded-sm" }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsx("p", { className: "font-display text-lg tracking-wide", children: i.name }),
                  /* @__PURE__ */ jsx("button", { onClick: () => remove(i.id), className: "text-muted-foreground-x hover:text-red-500", children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" }) })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "font-body text-sm text-gold", children: formatFCFA(i.price * i.qty) }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mt-2", children: [
                  /* @__PURE__ */ jsx("button", { onClick: () => dec(i.id), className: "w-7 h-7 border border-subtle flex items-center justify-center hover:border-gold", children: /* @__PURE__ */ jsx(Minus, { className: "w-3 h-3" }) }),
                  /* @__PURE__ */ jsx("span", { className: "font-body text-sm w-6 text-center", children: i.qty }),
                  /* @__PURE__ */ jsx("button", { onClick: () => inc(i.id), className: "w-7 h-7 border border-subtle flex items-center justify-center hover:border-gold", children: /* @__PURE__ */ jsx(Plus, { className: "w-3 h-3" }) })
                ] })
              ] })
            ] }, i.id))
          ] }),
          items.length > 0 && /* @__PURE__ */ jsxs("div", { className: "border-t border-subtle p-5 space-y-4", children: [
            !tableNumber && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: ["Takeaway", "Delivery"].map((m) => /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setMode(m),
                  className: `py-2 font-body text-xs uppercase tracking-[0.2em] border transition-colors ${mode === m ? "border-gold text-gold bg-gold/10" : "border-subtle text-muted-foreground-x"}`,
                  children: m
                },
                m
              )) }),
              mode === "Delivery" && /* @__PURE__ */ jsx(
                "input",
                {
                  value: address,
                  onChange: (e) => setAddress(e.target.value),
                  placeholder: "Delivery address",
                  className: "w-full bg-[#0a0a0a] border border-subtle px-3 py-2 text-sm font-body focus:border-gold outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between font-display text-xl", children: [
              /* @__PURE__ */ jsx("span", { children: "Total" }),
              /* @__PURE__ */ jsx("span", { className: "text-gold", children: formatFCFA(total()) })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: send,
                className: "w-full py-3.5 bg-gold text-[#0a0a0a] font-body uppercase text-xs tracking-[0.25em] font-semibold hover:bg-[var(--accent-gold-hover)] transition-colors flex items-center justify-center gap-2",
                children: tableNumber ? /* @__PURE__ */ jsx(Fragment, { children: "Send to bar" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4" }),
                  " Send order via WhatsApp"
                ] })
              }
            )
          ] })
        ]
      }
    )
  ] }) });
}
export {
  CartDrawer as C,
  CartFab as a
};

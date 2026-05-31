import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { M as MenuItemCard } from "./MenuItemCard-O3RR5sty.js";
import { u as useMenuStore } from "./menuStore-BXLsVVXR.js";
import "./Badge-CStHiTpk.js";
import "./cartStore-Mu-5IcZ3.js";
import "zustand";
import "zustand/middleware";
import "./format-CZhDL1kI.js";
import "sonner";
const categories = ["Starters", "Burgers", "Mains", "Sides", "Desserts"];
function Countdown() {
  const [s, setS] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = /* @__PURE__ */ new Date();
      const end = new Date(now);
      end.setHours(23, 59, 59);
      const diff = end.getTime() - now.getTime();
      const h = Math.floor(diff / 36e5);
      const m = Math.floor(diff % 36e5 / 6e4);
      const sec = Math.floor(diff % 6e4 / 1e3);
      setS(`${h}h ${m}m ${sec}s`);
    };
    tick();
    const id = setInterval(tick, 1e3);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsx("span", { children: s });
}
function MenuPage() {
  const food = useMenuStore((s) => s.food);
  const [active, setActive] = useState("Starters");
  const items = food.filter((f) => f.category === active);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative h-[55vh] flex items-end overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: {
        backgroundImage: "url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2000&q=70)"
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/30" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 pb-14 px-6 lg:px-8 mx-auto max-w-7xl w-full", children: [
        /* @__PURE__ */ jsx("p", { className: "font-body uppercase text-xs tracking-[0.4em] text-gold", children: "Eat well, eat boldly" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-6xl md:text-8xl tracking-wider text-[var(--text-primary)] mt-3", children: "THE FOOD MENU" }),
        /* @__PURE__ */ jsx("p", { className: "font-body text-lg italic text-muted-foreground-x mt-3", children: "Street-inspired. Kitchen-elevated." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-gold-hover)] text-[#0a0a0a] py-3 px-6 flex items-center justify-center gap-3 font-body uppercase tracking-[0.2em] text-xs font-semibold", children: [
      /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
      "Today's special: 20% off truffle fries — ends in ",
      /* @__PURE__ */ jsx(Countdown, {})
    ] }),
    /* @__PURE__ */ jsx("div", { className: "sticky top-20 z-30 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-subtle", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 overflow-x-auto", children: /* @__PURE__ */ jsx("div", { className: "flex gap-2 md:gap-6 py-4 min-w-max", children: categories.map((c) => /* @__PURE__ */ jsxs("button", { onClick: () => setActive(c), className: "relative font-body uppercase text-xs md:text-sm tracking-[0.25em] px-3 py-2 transition-colors", style: {
      color: active === c ? "var(--accent-gold)" : "var(--text-primary)"
    }, children: [
      c,
      active === c && /* @__PURE__ */ jsx(motion.span, { layoutId: "menu-underline", className: "absolute -bottom-px left-0 right-0 h-0.5 bg-gold" })
    ] }, c)) }) }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-6 lg:px-8 py-14", children: [
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-6", children: items.map((i, idx) => /* @__PURE__ */ jsx(MenuItemCard, { item: i, index: idx }, i.id)) }),
      items.length === 0 && /* @__PURE__ */ jsx("p", { className: "text-center font-body text-muted-foreground-x py-10", children: "No items in this category yet." })
    ] })
  ] });
}
export {
  MenuPage as component
};

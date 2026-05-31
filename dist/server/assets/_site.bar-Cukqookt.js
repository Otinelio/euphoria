import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Wine, MessageCircle } from "lucide-react";
import { P as PillBadge } from "./Badge-CStHiTpk.js";
import { f as formatFCFA } from "./format-CZhDL1kI.js";
import { o as openWhatsApp } from "./whatsapp-BO6hiolq.js";
import { u as useMenuStore } from "./menuStore-BXLsVVXR.js";
import "./settingsStore-Ebfo6NmT.js";
import "zustand";
import "zustand/middleware";
function DrinkCard({ drink, index = 0 }) {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.5, delay: index % 6 * 0.06 },
      whileHover: { y: -4 },
      className: "group relative bg-[#0f0f0f] border border-subtle overflow-hidden hover:border-gold/70 transition-all hover:glow-gold",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative h-52 overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: drink.image,
              alt: drink.name,
              loading: "lazy",
              className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/40 to-transparent" }),
          drink.badges.length > 0 && /* @__PURE__ */ jsx("div", { className: "absolute top-3 left-3 flex flex-wrap gap-1.5", children: drink.badges.map((b) => /* @__PURE__ */ jsx(PillBadge, { label: b }, b)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl tracking-wide text-gold", children: drink.name }),
              /* @__PURE__ */ jsxs("p", { className: "font-body text-xs uppercase tracking-[0.2em] text-muted-foreground-x mt-1 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(Wine, { className: "w-3 h-3" }),
                " ",
                drink.base
              ] })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "font-display text-xl text-[var(--text-primary)] whitespace-nowrap", children: formatFCFA(drink.price) })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-body text-sm text-muted-foreground-x mt-3 leading-relaxed", children: drink.notes }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => openWhatsApp(`Hello, I'd like to order: ${drink.name} (${formatFCFA(drink.price)})`),
              className: "mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground-x hover:text-gold transition-colors font-body",
              children: [
                /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4" }),
                " Ask your server"
              ]
            }
          )
        ] })
      ]
    }
  );
}
const categories = ["Signatures", "Classics", "Mocktails", "Beers"];
function BarPage() {
  const drinks = useMenuStore((s) => s.drinks);
  const food = useMenuStore((s) => s.food);
  const [active, setActive] = useState("Signatures");
  const items = drinks.filter((d) => d.category === active);
  const pick = drinks.find((d) => d.name === "Euphoria Smoke") ?? drinks[0];
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative h-[60vh] flex items-end overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: {
        backgroundImage: "url(https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2000&q=70)"
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 pb-14 px-6 mx-auto max-w-7xl w-full", children: [
        /* @__PURE__ */ jsx("p", { className: "font-body uppercase text-xs tracking-[0.4em] text-gold", children: "From our bartenders" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-7xl md:text-9xl tracking-widest text-gold mt-3", children: "THE BAR" }),
        /* @__PURE__ */ jsx("p", { className: "font-body text-lg italic text-muted-foreground-x mt-3", children: "Crafted. Shaken. Elevated." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "sticky top-20 z-30 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-subtle", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 overflow-x-auto", children: /* @__PURE__ */ jsx("div", { className: "flex gap-2 md:gap-6 py-4 min-w-max", children: categories.map((c) => /* @__PURE__ */ jsxs("button", { onClick: () => setActive(c), className: "relative font-body uppercase text-xs md:text-sm tracking-[0.25em] px-3 py-2 transition-colors", style: {
      color: active === c ? "var(--accent-gold)" : "var(--text-primary)"
    }, children: [
      c,
      active === c && /* @__PURE__ */ jsx(motion.span, { layoutId: "bar-underline", className: "absolute -bottom-px left-0 right-0 h-0.5 bg-gold" })
    ] }, c)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-7xl px-6 lg:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: items.map((d, i) => /* @__PURE__ */ jsx(DrinkCard, { drink: d, index: i }, d.id)) }),
    pick && /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-b from-[#0a0a0a] via-[#1a0e10] to-[#0a0a0a] py-20 px-6", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl grid md:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("img", { src: pick.image, alt: pick.name, loading: "lazy", className: "w-full h-[420px] object-cover" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 ring-1 ring-gold/40" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-body uppercase text-xs tracking-[0.4em] text-gold", children: "Bartender's pick" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-5xl md:text-6xl tracking-wider text-[var(--text-primary)] mt-3", children: pick.name }),
        /* @__PURE__ */ jsxs("p", { className: "font-body text-base text-muted-foreground-x mt-4 leading-relaxed", children: [
          "Our most-requested signature. ",
          pick.notes,
          ". Served theatrically — a brief curl of smoke escapes as the glass is uncovered tableside."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "font-display text-3xl text-gold mt-6", children: formatFCFA(pick.price) }),
        /* @__PURE__ */ jsx(Link, { to: "/reserve", className: "inline-block mt-6 px-6 py-3 border border-gold text-gold font-body uppercase text-xs tracking-[0.25em] hover:bg-gold hover:text-[#0a0a0a] transition-all", children: "Try this tonight" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-6 lg:px-8 py-20", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl tracking-wider text-[var(--text-primary)] text-center mb-10", children: "PAIR WITH SOMETHING FROM THE KITCHEN" }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-3 gap-4", children: food.slice(0, 3).map((f) => /* @__PURE__ */ jsxs(Link, { to: "/menu", className: "relative h-44 overflow-hidden border border-subtle group", children: [
        /* @__PURE__ */ jsx("img", { src: f.image, alt: f.name, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute bottom-3 left-4", children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-xl text-gold", children: f.name }),
          /* @__PURE__ */ jsx("p", { className: "font-body text-xs text-[var(--text-primary)]", children: formatFCFA(f.price) })
        ] })
      ] }, f.id)) })
    ] })
  ] });
}
export {
  BarPage as component
};

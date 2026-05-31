import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronDown, Music, Calendar, Wine, Star, Plus } from "lucide-react";
import { useMemo, useState, useEffect } from "react";
import { C as CountUp } from "./CountUp-B_wYMHgf.js";
import { M as MenuItemCard } from "./MenuItemCard-O3RR5sty.js";
import { u as useMenuStore } from "./menuStore-BXLsVVXR.js";
import { e as events } from "./eventsData-5Swl_hRC.js";
import { f as formatFCFA } from "./format-CZhDL1kI.js";
import "./Badge-CStHiTpk.js";
import "./cartStore-Mu-5IcZ3.js";
import "zustand";
import "zustand/middleware";
import "sonner";
function Particles({ count = 28 }) {
  const dots = useMemo(
    () => Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 1 + Math.random() * 3,
      delay: Math.random() * 6,
      duration: 6 + Math.random() * 8
    })),
    [count]
  );
  return /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", children: dots.map((d) => /* @__PURE__ */ jsx(
    "span",
    {
      className: "absolute rounded-full bg-gold",
      style: {
        left: `${d.left}%`,
        top: `${d.top}%`,
        width: d.size,
        height: d.size,
        opacity: 0.6,
        boxShadow: "0 0 8px rgba(212,175,55,0.8)",
        animation: `float-particle ${d.duration}s ease-in-out ${d.delay}s infinite`
      }
    },
    d.id
  )) });
}
const TYPE_TEXT = "Where every night tells a story.";
function Typewriter() {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (n >= TYPE_TEXT.length) return;
    const t = setTimeout(() => setN(n + 1), 55);
    return () => clearTimeout(t);
  }, [n]);
  return /* @__PURE__ */ jsxs("p", { className: "font-body italic text-base md:text-lg text-[var(--text-primary)] mt-6 min-h-[1.5em]", children: [
    TYPE_TEXT.slice(0, n),
    /* @__PURE__ */ jsx("span", { className: "inline-block w-px h-5 bg-gold ml-0.5 animate-pulse align-middle" })
  ] });
}
function HomePage() {
  const food = useMenuStore((s) => s.food);
  const drinks = useMenuStore((s) => s.drinks);
  const signatureBites = food.filter((f) => f.badges.length > 0).slice(0, 3);
  const featuredCocktails = drinks.filter((d) => d.category === "Signatures").slice(0, 3);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden grain", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: {
        backgroundImage: "url(https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=2000&q=70)"
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/40 to-[#0a0a0a]" }),
      /* @__PURE__ */ jsx(Particles, { count: 32 }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-center px-6", children: [
        /* @__PURE__ */ jsx(motion.p, { initial: {
          opacity: 0,
          y: 10
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.7
        }, className: "font-body text-xs md:text-sm uppercase tracking-[0.45em] text-gold", children: "Welcome to" }),
        /* @__PURE__ */ jsx(motion.h1, { initial: {
          opacity: 0,
          scale: 0.94
        }, animate: {
          opacity: 1,
          scale: 1
        }, transition: {
          duration: 0.9,
          delay: 0.15
        }, className: "font-display text-[18vw] md:text-[10vw] leading-none tracking-[0.06em] text-[var(--text-primary)] my-2", style: {
          textShadow: "0 0 40px rgba(212,175,55,0.45)"
        }, children: "EUPHORIA" }),
        /* @__PURE__ */ jsx(motion.p, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          duration: 0.8,
          delay: 0.4
        }, className: "font-body uppercase text-sm md:text-base text-[var(--text-primary)] tracking-[0.3em]", children: "Pub Food & Bar" }),
        /* @__PURE__ */ jsx(Typewriter, {}),
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 10
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.9
        }, className: "mt-10 flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsx(Link, { to: "/menu", className: "px-7 py-3.5 bg-gold text-[#0a0a0a] font-body uppercase text-xs tracking-[0.25em] font-semibold hover:scale-105 hover:glow-gold transition-all", children: "Explore the menu" }),
          /* @__PURE__ */ jsx(Link, { to: "/reserve", className: "px-7 py-3.5 border border-bordeaux text-[var(--accent-bordeaux)] font-body uppercase text-xs tracking-[0.25em] font-semibold hover:bg-bordeaux hover:text-white transition-all", style: {
            color: "#a44a55"
          }, children: "Reserve a table" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0,
        y: -10
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 1.3,
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1.4
      }, className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-gold", children: /* @__PURE__ */ jsx(ChevronDown, { className: "w-6 h-6" }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "relative bg-bordeaux py-3 overflow-hidden border-y border-gold/40", children: /* @__PURE__ */ jsx("div", { className: "flex whitespace-nowrap animate-marquee gap-12", children: Array.from({
      length: 2
    }).map((_, k) => /* @__PURE__ */ jsx("div", { className: "flex items-center gap-12 shrink-0", children: [{
      icon: Music,
      text: "Live Music Every Friday & Saturday"
    }, {
      icon: Calendar,
      text: "Happy Hour Mon–Thu 17:00–20:00"
    }, {
      icon: Wine,
      text: "200+ Cocktails to Discover"
    }, {
      icon: Star,
      text: "Rated 4.8 / 5 by Our Guests"
    }].map((m, i) => /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-3 text-gold font-body uppercase text-sm tracking-[0.2em]", children: [
      /* @__PURE__ */ jsx(m.icon, { className: "w-4 h-4" }),
      " ",
      m.text
    ] }, i)) }, k)) }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 px-6 lg:px-8 mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsx("p", { className: "font-body uppercase text-xs tracking-[0.4em] text-gold mb-3", children: "From the kitchen" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-5xl md:text-6xl tracking-wider text-[var(--text-primary)]", children: "SIGNATURE BITES" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: signatureBites.map((item, i) => /* @__PURE__ */ jsx(MenuItemCard, { item, index: i }, item.id)) }),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsx(Link, { to: "/menu", className: "inline-block px-7 py-3.5 border border-gold text-gold font-body uppercase text-xs tracking-[0.25em] hover:bg-gold hover:text-[#0a0a0a] transition-all", children: "View full menu" }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "relative py-24 px-6 lg:px-8 bg-gradient-to-br from-[#0a0a0a] via-[#1a0e10] to-[#0a0a0a]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsx("p", { className: "font-body uppercase text-xs tracking-[0.4em] text-gold mb-3", children: "From the bar" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-5xl md:text-6xl tracking-wider text-[var(--text-primary)]", children: "CRAFTED COCKTAILS" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: featuredCocktails.map((d, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.08,
        duration: 0.5
      }, className: "group relative overflow-hidden border border-subtle bg-[#0f0f0f] hover:border-gold/60 transition-colors", children: [
        /* @__PURE__ */ jsx("div", { className: "h-64 overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: d.image, alt: d.name, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" }) }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl tracking-wide text-gold", children: d.name }),
          /* @__PURE__ */ jsx("p", { className: "font-body text-xs uppercase tracking-[0.25em] text-muted-foreground-x mt-1", children: d.base }),
          /* @__PURE__ */ jsx("p", { className: "font-body text-sm text-[var(--text-primary)] mt-3", children: d.notes }),
          /* @__PURE__ */ jsx("p", { className: "font-display text-xl text-[var(--text-primary)] mt-4", children: formatFCFA(d.price) })
        ] })
      ] }, d.id)) }),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsx(Link, { to: "/bar", className: "inline-block px-7 py-3.5 bg-gold text-[#0a0a0a] font-body uppercase text-xs tracking-[0.25em] font-semibold hover:scale-105 transition-transform", children: "View full bar" }) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "relative h-[70vh] flex items-center justify-center bg-fixed bg-center bg-cover", style: {
      backgroundImage: "url(https://images.unsplash.com/photo-1538488881038-e252a119ace7?auto=format&fit=crop&w=2000&q=70)"
    }, children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[#0a0a0a]/75" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-center px-6 max-w-5xl", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-5xl md:text-7xl tracking-wider text-gold", children: [
          "More than a bar.",
          /* @__PURE__ */ jsx("br", {}),
          "An experience."
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-6 mt-12", children: [{
          icon: Wine,
          label: "Cocktails",
          value: 200,
          suffix: "+"
        }, {
          icon: Calendar,
          label: "Years of nights",
          value: 5,
          suffix: ""
        }, {
          icon: Star,
          label: "Avg rating",
          value: 4.8,
          suffix: " / 5"
        }].map((s, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: i * 0.15
        }, className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsx(s.icon, { className: "w-8 h-8 text-gold mb-3" }),
          /* @__PURE__ */ jsx("p", { className: "font-display text-4xl md:text-5xl text-[var(--text-primary)]", children: s.value % 1 === 0 ? /* @__PURE__ */ jsx(CountUp, { end: s.value, suffix: s.suffix }) : /* @__PURE__ */ jsxs("span", { children: [
            s.value,
            s.suffix
          ] }) }),
          /* @__PURE__ */ jsx("p", { className: "font-body uppercase text-xs tracking-[0.25em] text-muted-foreground-x mt-2", children: s.label })
        ] }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 px-6 lg:px-8 mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsx("p", { className: "font-body uppercase text-xs tracking-[0.4em] text-gold mb-3", children: "What's happening" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-5xl md:text-6xl tracking-wider text-[var(--text-primary)]", children: "UPCOMING EVENTS" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: events.slice(0, 3).map((e, i) => /* @__PURE__ */ jsxs(motion.article, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.08
      }, className: "bg-cardx border border-subtle overflow-hidden hover:border-gold/60 transition-colors", children: [
        /* @__PURE__ */ jsx("div", { className: "h-48 overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: e.image, alt: e.name, loading: "lazy", className: "w-full h-full object-cover hover:scale-110 transition-transform duration-700" }) }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl tracking-wider text-gold", children: e.name }),
          /* @__PURE__ */ jsxs("p", { className: "font-body text-xs uppercase tracking-[0.2em] text-muted-foreground-x mt-1 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Calendar, { className: "w-3 h-3" }),
            " ",
            e.date,
            " · ",
            e.time
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-body text-sm text-[var(--text-primary)] mt-3 leading-relaxed", children: e.description }),
          /* @__PURE__ */ jsx(Link, { to: "/reserve", className: "mt-4 inline-block text-gold font-body uppercase text-xs tracking-[0.25em] hover:underline", children: "RSVP →" })
        ] })
      ] }, e.id)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "relative py-24 px-6 border-y-2 border-gold/40 bg-[#0a0a0a]", children: /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-5xl md:text-7xl tracking-wider text-[var(--text-primary)]", children: "READY FOR YOUR NIGHT?" }),
      /* @__PURE__ */ jsx("p", { className: "font-body text-lg text-muted-foreground-x mt-6", children: "Reserve your table. The evening begins when you arrive." }),
      /* @__PURE__ */ jsxs(Link, { to: "/reserve", className: "inline-flex items-center gap-2 mt-10 px-10 py-4 bg-gold text-[#0a0a0a] font-body uppercase text-sm tracking-[0.3em] font-bold hover:scale-105 glow-gold transition-transform", children: [
        /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" }),
        " Reserve now"
      ] })
    ] }) })
  ] });
}
export {
  HomePage as component
};

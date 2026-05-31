import { jsxs, jsx } from "react/jsx-runtime";
import { Award, Users, Sparkles, Calendar, Wine, Star, Moon } from "lucide-react";
import { C as CountUp } from "./CountUp-B_wYMHgf.js";
import "react";
import "framer-motion";
function AboutPage() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative h-[45vh] flex items-end overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: {
        backgroundImage: "url(https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=2000&q=70)"
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 pb-10 px-6 mx-auto max-w-7xl w-full", children: /* @__PURE__ */ jsx("h1", { className: "font-display text-6xl md:text-8xl tracking-widest text-gold", children: "OUR STORY" }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "font-body text-[var(--text-primary)] space-y-4 leading-relaxed", children: [
        /* @__PURE__ */ jsx("p", { children: "Euphoria was founded as a refuge for those who seek more from their evenings — great food, crafted drinks, and an atmosphere that pulses with life." }),
        /* @__PURE__ */ jsx("p", { children: "Born in Lomé, raised by its nights. We pour with intention, plate with care, and welcome you like a regular even on your first visit." }),
        /* @__PURE__ */ jsx("p", { children: "Five years in, the night still belongs to us — and to you." })
      ] }),
      /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=900&q=70", alt: "Inside Euphoria", className: "w-full h-[420px] object-cover" })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-6", children: [{
      icon: Award,
      title: "Craft",
      text: "Cocktails built like watches. Plates composed like songs."
    }, {
      icon: Users,
      title: "Community",
      text: "Every face that walks in becomes part of the room."
    }, {
      icon: Sparkles,
      title: "Experience",
      text: "Atmosphere isn't decor. It's choreography."
    }].map((v) => /* @__PURE__ */ jsxs("div", { className: "bg-cardx border border-subtle p-8", children: [
      /* @__PURE__ */ jsx(v.icon, { className: "w-7 h-7 text-gold mb-4" }),
      /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl tracking-wider text-gold", children: v.title }),
      /* @__PURE__ */ jsx("p", { className: "font-body text-sm text-muted-foreground-x mt-3 leading-relaxed", children: v.text })
    ] }, v.title)) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#0f0f0f] border-y border-subtle py-14", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center", children: [{
      icon: Calendar,
      val: 5,
      label: "Years open",
      suffix: ""
    }, {
      icon: Wine,
      val: 200,
      label: "Cocktails",
      suffix: "+"
    }, {
      icon: Star,
      val: 48,
      label: "Rating",
      suffix: " / 50"
    }, {
      icon: Moon,
      val: 1800,
      label: "Nights",
      suffix: "+"
    }].map((s, i) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(s.icon, { className: "w-6 h-6 text-gold mx-auto mb-3" }),
      /* @__PURE__ */ jsx("p", { className: "font-display text-4xl text-[var(--text-primary)]", children: /* @__PURE__ */ jsx(CountUp, { end: s.val, suffix: s.suffix }) }),
      /* @__PURE__ */ jsx("p", { className: "font-body text-xs uppercase tracking-widest text-muted-foreground-x mt-2", children: s.label })
    ] }, i)) }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-6xl px-6 py-20", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl tracking-wider text-[var(--text-primary)] text-center mb-10", children: "THE TEAM" }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-3 gap-6", children: [{
        name: "Kofi Asante",
        role: "Head Bartender",
        img: "photo-1622253692010-333f2da6031d",
        quote: "Every glass tells a story."
      }, {
        name: "Amélie Dossou",
        role: "Executive Chef",
        img: "photo-1577219491135-ce391730fb2c",
        quote: "Comfort, elevated."
      }, {
        name: "Yawa Mensah",
        role: "Floor Manager",
        img: "photo-1559941707-c1bcadc2bf12",
        quote: "I run on the energy of the room."
      }].map((t) => /* @__PURE__ */ jsxs("div", { className: "bg-cardx border border-subtle overflow-hidden", children: [
        /* @__PURE__ */ jsx("img", { src: `https://images.unsplash.com/${t.img}?auto=format&fit=crop&w=600&q=70`, alt: t.name, className: "w-full h-72 object-cover" }),
        /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-2xl tracking-wide text-gold", children: t.name }),
          /* @__PURE__ */ jsx("p", { className: "font-body text-xs uppercase tracking-widest text-muted-foreground-x mt-1", children: t.role }),
          /* @__PURE__ */ jsxs("p", { className: "font-body italic text-sm mt-3", children: [
            '"',
            t.quote,
            '"'
          ] })
        ] })
      ] }, t.name)) })
    ] })
  ] });
}
export {
  AboutPage as component
};

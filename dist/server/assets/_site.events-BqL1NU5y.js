import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Calendar, Clock, MessageCircle } from "lucide-react";
import { e as events, w as weeklySchedule } from "./eventsData-5Swl_hRC.js";
import { o as openWhatsApp, c as buildRSVPMessage } from "./whatsapp-BO6hiolq.js";
import { useState } from "react";
import "./settingsStore-Ebfo6NmT.js";
import "zustand";
import "zustand/middleware";
function RSVPForm({
  eventName
}) {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(2);
  return /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
    e.preventDefault();
    openWhatsApp(buildRSVPMessage({
      name,
      event: eventName,
      date: (/* @__PURE__ */ new Date()).toLocaleDateString(),
      guests
    }));
  }, className: "space-y-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsx("input", { value: name, onChange: (e) => setName(e.target.value), required: true, placeholder: "Your name", className: "bg-[#0a0a0a] border border-subtle px-2 py-1.5 text-sm font-body focus:border-gold outline-none" }),
      /* @__PURE__ */ jsx("input", { type: "number", min: 1, value: guests, onChange: (e) => setGuests(+e.target.value), className: "bg-[#0a0a0a] border border-subtle px-2 py-1.5 text-sm font-body focus:border-gold outline-none" })
    ] }),
    /* @__PURE__ */ jsxs("button", { className: "w-full py-2 bg-gold text-[#0a0a0a] font-body uppercase text-[10px] tracking-[0.25em] font-semibold flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ jsx(MessageCircle, { className: "w-3 h-3" }),
      " RSVP via WhatsApp"
    ] })
  ] });
}
function EventsPage() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative h-[55vh] flex items-end overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: {
        backgroundImage: "url(https://images.unsplash.com/photo-1571266028243-d220c6a6f4ea?auto=format&fit=crop&w=2000&q=70)"
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 pb-14 px-6 mx-auto max-w-7xl w-full", children: [
        /* @__PURE__ */ jsx("h1", { className: "font-display text-6xl md:text-8xl tracking-wider text-gold", children: "EVENTS & NIGHTS" }),
        /* @__PURE__ */ jsx("p", { className: "font-body text-lg italic text-muted-foreground-x mt-3", children: "Something happening every night." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-7xl px-6 py-16", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: events.map((e, i) => /* @__PURE__ */ jsxs(motion.article, { initial: {
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
      /* @__PURE__ */ jsxs("div", { className: "h-56 overflow-hidden relative", children: [
        /* @__PURE__ */ jsx("img", { src: e.image, alt: e.name, loading: "lazy", className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl tracking-wider text-gold", children: e.name }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 text-xs text-muted-foreground-x font-body mt-2 uppercase tracking-[0.2em]", children: [
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(Calendar, { className: "w-3 h-3" }),
            " ",
            e.date
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(Clock, { className: "w-3 h-3" }),
            " ",
            e.time
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "font-body text-sm text-[var(--text-primary)] mt-3 leading-relaxed", children: e.description }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-3", children: e.tags.map((t) => /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-widest px-2 py-1 bg-[#0a0a0a] border border-subtle font-body", children: t }, t)) }),
        /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsx(RSVPForm, { eventName: e.name }) })
      ] })
    ] }, e.id)) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#0f0f0f] border-y border-subtle py-14", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl tracking-wider text-[var(--text-primary)] text-center mb-10", children: "WEEKLY SCHEDULE" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3", children: weeklySchedule.map((d) => /* @__PURE__ */ jsxs("div", { className: "bg-cardx border border-subtle p-4 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mb-2", children: [
          /* @__PURE__ */ jsx("span", { className: `w-2 h-2 rounded-full ${d.hasEvent ? "bg-gold" : "bg-[#3a3a3a]"}` }),
          /* @__PURE__ */ jsx("p", { className: "font-display text-xl tracking-widest text-[var(--text-primary)]", children: d.day })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "font-body text-xs text-muted-foreground-x uppercase tracking-widest", children: d.name })
      ] }, d.day)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-4xl px-6 py-20 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl tracking-wider text-gold", children: "HOST YOUR EVENT HERE" }),
      /* @__PURE__ */ jsx("p", { className: "font-body text-base text-muted-foreground-x mt-4", children: "Birthdays, corporate gatherings, brand launches. Reach out and we'll design the night with you." }),
      /* @__PURE__ */ jsxs("button", { onClick: () => openWhatsApp("Hello Euphoria, I'd like to inquire about a private event booking."), className: "mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-[#0a0a0a] font-body uppercase text-xs tracking-[0.25em] font-semibold hover:scale-105 transition-transform", children: [
        /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4" }),
        " Private event inquiry"
      ] })
    ] })
  ] });
}
export {
  EventsPage as component
};

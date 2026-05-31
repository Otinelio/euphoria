import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Video, MessageCircle } from "lucide-react";
import { o as openWhatsApp, b as buildContactMessage } from "./whatsapp-BO6hiolq.js";
import "./settingsStore-Ebfo6NmT.js";
import "zustand";
import "zustand/middleware";
function ContactPage() {
  const [f, setF] = useState({
    name: "",
    email: "",
    subject: "Reservation",
    message: ""
  });
  return /* @__PURE__ */ jsxs("div", { className: "pt-28", children: [
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-7xl px-6 py-10", children: /* @__PURE__ */ jsx("h1", { className: "font-display text-6xl md:text-8xl tracking-widest text-gold", children: "FIND US" }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-6 pb-20 grid lg:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-5 font-body text-[var(--text-primary)]", children: [
        /* @__PURE__ */ jsxs("p", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5 text-gold mt-0.5" }),
          " Boulevard du 13 Janvier, Lomé, Togo"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 text-gold" }),
          " +228 90 00 00 00"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5 text-gold" }),
          " hello@euphoria.tg"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5 text-gold mt-0.5" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { children: "Mon–Thu 17h–01h" }),
            /* @__PURE__ */ jsx("p", { children: "Fri–Sat 17h–03h" }),
            /* @__PURE__ */ jsx("p", { children: "Sun 18h–00h" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 pt-2", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "text-gold", children: /* @__PURE__ */ jsx(Instagram, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "text-gold", children: /* @__PURE__ */ jsx(Facebook, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "text-gold", children: /* @__PURE__ */ jsx(Video, { className: "w-5 h-5" }) })
        ] }),
        /* @__PURE__ */ jsx("iframe", { title: "map", src: "https://www.google.com/maps?q=Lome,Togo&output=embed", className: "w-full h-72 border border-subtle mt-6 grayscale contrast-125", loading: "lazy" })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        openWhatsApp(buildContactMessage(f));
      }, className: "bg-cardx border border-subtle p-6 space-y-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl tracking-wider text-gold", children: "WRITE TO US" }),
        /* @__PURE__ */ jsx("input", { required: true, placeholder: "Your name", value: f.name, onChange: (e) => setF({
          ...f,
          name: e.target.value
        }), className: "w-full bg-[#0a0a0a] border border-subtle px-3 py-2.5 text-sm font-body focus:border-gold outline-none" }),
        /* @__PURE__ */ jsx("input", { required: true, type: "email", placeholder: "Email", value: f.email, onChange: (e) => setF({
          ...f,
          email: e.target.value
        }), className: "w-full bg-[#0a0a0a] border border-subtle px-3 py-2.5 text-sm font-body focus:border-gold outline-none" }),
        /* @__PURE__ */ jsx("select", { value: f.subject, onChange: (e) => setF({
          ...f,
          subject: e.target.value
        }), className: "w-full bg-[#0a0a0a] border border-subtle px-3 py-2.5 text-sm font-body focus:border-gold outline-none", children: ["Reservation", "Event Inquiry", "Feedback", "Other"].map((s) => /* @__PURE__ */ jsx("option", { children: s }, s)) }),
        /* @__PURE__ */ jsx("textarea", { required: true, placeholder: "Your message", rows: 5, value: f.message, onChange: (e) => setF({
          ...f,
          message: e.target.value
        }), className: "w-full bg-[#0a0a0a] border border-subtle px-3 py-2.5 text-sm font-body focus:border-gold outline-none" }),
        /* @__PURE__ */ jsxs("button", { className: "w-full py-3 bg-gold text-[#0a0a0a] font-body uppercase text-xs tracking-[0.25em] font-semibold flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4" }),
          " Send via WhatsApp"
        ] })
      ] })
    ] })
  ] });
}
export {
  ContactPage as component
};

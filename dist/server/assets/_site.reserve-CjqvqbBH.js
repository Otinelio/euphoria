import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { User, Phone, Calendar, Users, MessageCircle } from "lucide-react";
import { o as openWhatsApp, d as buildReservationMessage } from "./whatsapp-BO6hiolq.js";
import "./settingsStore-Ebfo6NmT.js";
import "zustand";
import "zustand/middleware";
const slots = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
const occasions = ["Just a night out", "Birthday", "Anniversary", "Business"];
function ReservePage() {
  const [f, setF] = useState({
    name: "",
    phone: "",
    date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
    time: "20:00",
    guests: 2,
    occasion: occasions[0],
    notes: ""
  });
  return /* @__PURE__ */ jsxs("div", { className: "pt-28", children: [
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-6 py-10", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-7xl tracking-widest text-gold", children: "RESERVE YOUR TABLE" }),
      /* @__PURE__ */ jsx("p", { className: "font-body italic text-muted-foreground-x mt-2", children: "Arrive. Settle in. Let the night unfold." })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-3xl px-6 pb-20", children: /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
      e.preventDefault();
      openWhatsApp(buildReservationMessage(f));
    }, className: "bg-cardx border border-subtle p-8 space-y-5", children: [
      /* @__PURE__ */ jsx(Field, { icon: /* @__PURE__ */ jsx(User, { className: "w-4 h-4" }), label: "Full name", children: /* @__PURE__ */ jsx("input", { required: true, value: f.name, onChange: (e) => setF({
        ...f,
        name: e.target.value
      }), className: "input" }) }),
      /* @__PURE__ */ jsx(Field, { icon: /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }), label: "Phone", children: /* @__PURE__ */ jsx("input", { required: true, value: f.phone, onChange: (e) => setF({
        ...f,
        phone: e.target.value
      }), className: "input" }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
        /* @__PURE__ */ jsx(Field, { icon: /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }), label: "Date", children: /* @__PURE__ */ jsx("input", { type: "date", value: f.date, onChange: (e) => setF({
          ...f,
          date: e.target.value
        }), className: "input" }) }),
        /* @__PURE__ */ jsx(Field, { icon: /* @__PURE__ */ jsx(Users, { className: "w-4 h-4" }), label: "Guests", children: /* @__PURE__ */ jsx("input", { type: "number", min: 1, max: 20, value: f.guests, onChange: (e) => setF({
          ...f,
          guests: +e.target.value
        }), className: "input" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "font-body uppercase text-[10px] tracking-[0.3em] text-muted-foreground-x", children: "Time" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-2", children: slots.map((s) => /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setF({
          ...f,
          time: s
        }), className: `px-4 py-2 text-sm font-body border transition-colors ${f.time === s ? "border-gold text-gold bg-gold/10" : "border-subtle text-[var(--text-primary)]"}`, children: s }, s)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "font-body uppercase text-[10px] tracking-[0.3em] text-muted-foreground-x", children: "Occasion" }),
        /* @__PURE__ */ jsx("select", { value: f.occasion, onChange: (e) => setF({
          ...f,
          occasion: e.target.value
        }), className: "input mt-2", children: occasions.map((o) => /* @__PURE__ */ jsx("option", { children: o }, o)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "font-body uppercase text-[10px] tracking-[0.3em] text-muted-foreground-x", children: "Special requests" }),
        /* @__PURE__ */ jsx("textarea", { rows: 3, value: f.notes, onChange: (e) => setF({
          ...f,
          notes: e.target.value
        }), className: "input mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("button", { className: "w-full py-3.5 bg-gold text-[#0a0a0a] font-body uppercase text-xs tracking-[0.3em] font-bold flex items-center justify-center gap-2 hover:bg-[var(--accent-gold-hover)] transition-colors", children: [
        /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4" }),
        " Send reservation via WhatsApp"
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("style", { children: `.input { width:100%; background:#0a0a0a; border:1px solid var(--border-subtle); padding:.65rem .8rem; font-family: var(--font-body); font-size:.9rem; outline:none; color: var(--text-primary); }
      .input:focus { border-color: var(--accent-gold); }` })
  ] });
}
function Field({
  icon,
  label,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("label", { className: "font-body uppercase text-[10px] tracking-[0.3em] text-muted-foreground-x flex items-center gap-2 mb-2", children: [
      icon,
      " ",
      label
    ] }),
    children
  ] });
}
export {
  ReservePage as component
};

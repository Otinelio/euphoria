import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Video, MessageCircle } from "lucide-react";
import { openWhatsApp, buildContactMessage } from "@/lib/whatsapp";

export const Route = createFileRoute("/_site/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Find Us — Euphoria Pub Food & Bar" },
      { name: "description", content: "Visit us in Lomé. Hours, phone, address and contact form." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  const [f, setF] = useState({ name: "", email: "", subject: "Reservation", message: "" });
  return (
    <div className="pt-28">
      <section className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="font-display text-6xl md:text-8xl tracking-widest text-gold">FIND US</h1>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-20 grid lg:grid-cols-2 gap-10">
        <div className="space-y-5 font-body text-[var(--text-primary)]">
          <p className="flex items-start gap-3"><MapPin className="w-5 h-5 text-gold mt-0.5" /> Boulevard du 13 Janvier, Lomé, Togo</p>
          <p className="flex items-center gap-3"><Phone className="w-5 h-5 text-gold" /> +228 90 00 00 00</p>
          <p className="flex items-center gap-3"><Mail className="w-5 h-5 text-gold" /> hello@euphoria.tg</p>
          <div className="flex items-start gap-3"><Clock className="w-5 h-5 text-gold mt-0.5" /><div><p>Mon–Thu 17h–01h</p><p>Fri–Sat 17h–03h</p><p>Sun 18h–00h</p></div></div>
          <div className="flex gap-4 pt-2">
            <a href="#" className="text-gold"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-gold"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-gold"><Video className="w-5 h-5" /></a>
          </div>
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Lome,Togo&output=embed"
            className="w-full h-72 border border-subtle mt-6 grayscale contrast-125"
            loading="lazy"
          />
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); openWhatsApp(buildContactMessage(f)); }}
          className="bg-cardx border border-subtle p-6 space-y-4"
        >
          <h2 className="font-display text-3xl tracking-wider text-gold">WRITE TO US</h2>
          <input required placeholder="Your name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} className="w-full bg-[#0a0a0a] border border-subtle px-3 py-2.5 text-sm font-body focus:border-gold outline-none" />
          <input required type="email" placeholder="Email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} className="w-full bg-[#0a0a0a] border border-subtle px-3 py-2.5 text-sm font-body focus:border-gold outline-none" />
          <select value={f.subject} onChange={(e) => setF({ ...f, subject: e.target.value })} className="w-full bg-[#0a0a0a] border border-subtle px-3 py-2.5 text-sm font-body focus:border-gold outline-none">
            {["Reservation", "Event Inquiry", "Feedback", "Other"].map((s) => <option key={s}>{s}</option>)}
          </select>
          <textarea required placeholder="Your message" rows={5} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} className="w-full bg-[#0a0a0a] border border-subtle px-3 py-2.5 text-sm font-body focus:border-gold outline-none" />
          <button className="w-full py-3 bg-gold text-[#0a0a0a] font-body uppercase text-xs tracking-[0.25em] font-semibold flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4" /> Send via WhatsApp
          </button>
        </form>
      </section>
    </div>
  );
}
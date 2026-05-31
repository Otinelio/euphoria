import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { User, Phone, Calendar, Users, MessageCircle } from "lucide-react";
import { openWhatsApp, buildReservationMessage } from "@/lib/whatsapp";

export const Route = createFileRoute("/_site/reserve")({
  component: ReservePage,
  head: () => ({
    meta: [
      { title: "Reserve a Table — Euphoria" },
      { name: "description", content: "Reserve your table at Euphoria. The evening begins when you arrive." },
      { property: "og:url", content: "/reserve" },
    ],
    links: [{ rel: "canonical", href: "/reserve" }],
  }),
});

const slots = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
const occasions = ["Just a night out", "Birthday", "Anniversary", "Business"];

function ReservePage() {
  const [f, setF] = useState({
    name: "", phone: "", date: new Date().toISOString().slice(0, 10),
    time: "20:00", guests: 2, occasion: occasions[0], notes: "",
  });
  return (
    <div className="pt-28">
      <section className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="font-display text-5xl md:text-7xl tracking-widest text-gold">RESERVE YOUR TABLE</h1>
        <p className="font-body italic text-muted-foreground-x mt-2">Arrive. Settle in. Let the night unfold.</p>
      </section>
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <form
          onSubmit={(e) => { e.preventDefault(); openWhatsApp(buildReservationMessage(f)); }}
          className="bg-cardx border border-subtle p-8 space-y-5"
        >
          <Field icon={<User className="w-4 h-4" />} label="Full name">
            <input required value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} className="input" />
          </Field>
          <Field icon={<Phone className="w-4 h-4" />} label="Phone">
            <input required value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} className="input" />
          </Field>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field icon={<Calendar className="w-4 h-4" />} label="Date">
              <input type="date" value={f.date} onChange={(e) => setF({ ...f, date: e.target.value })} className="input" />
            </Field>
            <Field icon={<Users className="w-4 h-4" />} label="Guests">
              <input type="number" min={1} max={20} value={f.guests} onChange={(e) => setF({ ...f, guests: +e.target.value })} className="input" />
            </Field>
          </div>
          <div>
            <label className="font-body uppercase text-[10px] tracking-[0.3em] text-muted-foreground-x">Time</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {slots.map((s) => (
                <button type="button" key={s} onClick={() => setF({ ...f, time: s })}
                  className={`px-4 py-2 text-sm font-body border transition-colors ${f.time === s ? "border-gold text-gold bg-gold/10" : "border-subtle text-[var(--text-primary)]"}`}>
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="font-body uppercase text-[10px] tracking-[0.3em] text-muted-foreground-x">Occasion</label>
            <select value={f.occasion} onChange={(e) => setF({ ...f, occasion: e.target.value })} className="input mt-2">
              {occasions.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label className="font-body uppercase text-[10px] tracking-[0.3em] text-muted-foreground-x">Special requests</label>
            <textarea rows={3} value={f.notes} onChange={(e) => setF({ ...f, notes: e.target.value })} className="input mt-2" />
          </div>
          <button className="w-full py-3.5 bg-gold text-[#0a0a0a] font-body uppercase text-xs tracking-[0.3em] font-bold flex items-center justify-center gap-2 hover:bg-[var(--accent-gold-hover)] transition-colors">
            <MessageCircle className="w-4 h-4" /> Send reservation via WhatsApp
          </button>
        </form>
      </section>
      <style>{`.input { width:100%; background:#0a0a0a; border:1px solid var(--border-subtle); padding:.65rem .8rem; font-family: var(--font-body); font-size:.9rem; outline:none; color: var(--text-primary); }
      .input:focus { border-color: var(--accent-gold); }`}</style>
    </div>
  );
}

function Field({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="font-body uppercase text-[10px] tracking-[0.3em] text-muted-foreground-x flex items-center gap-2 mb-2">
        {icon} {label}
      </label>
      {children}
    </div>
  );
}
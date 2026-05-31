import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, Clock, MessageCircle } from "lucide-react";
import { events, weeklySchedule } from "@/data/eventsData";
import { openWhatsApp, buildRSVPMessage } from "@/lib/whatsapp";
import { useState } from "react";

export const Route = createFileRoute("/_site/events")({
  component: EventsPage,
  head: () => ({
    meta: [
      { title: "Events & Nights — Euphoria" },
      { name: "description", content: "DJ nights, themed parties, live music. Something happening every night at Euphoria." },
      { property: "og:title", content: "Events — Euphoria" },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
});

function RSVPForm({ eventName }: { eventName: string }) {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(2);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        openWhatsApp(buildRSVPMessage({ name, event: eventName, date: new Date().toLocaleDateString(), guests }));
      }}
      className="space-y-2"
    >
      <div className="grid grid-cols-2 gap-2">
        <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your name" className="bg-[#0a0a0a] border border-subtle px-2 py-1.5 text-sm font-body focus:border-gold outline-none" />
        <input type="number" min={1} value={guests} onChange={(e) => setGuests(+e.target.value)} className="bg-[#0a0a0a] border border-subtle px-2 py-1.5 text-sm font-body focus:border-gold outline-none" />
      </div>
      <button className="w-full py-2 bg-gold text-[#0a0a0a] font-body uppercase text-[10px] tracking-[0.25em] font-semibold flex items-center justify-center gap-2">
        <MessageCircle className="w-3 h-3" /> RSVP via WhatsApp
      </button>
    </form>
  );
}

function EventsPage() {
  return (
    <div>
      <section className="relative h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1571266028243-d220c6a6f4ea?auto=format&fit=crop&w=2000&q=70)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
        <div className="relative z-10 pb-14 px-6 mx-auto max-w-7xl w-full">
          <h1 className="font-display text-6xl md:text-8xl tracking-wider text-gold">EVENTS &amp; NIGHTS</h1>
          <p className="font-body text-lg italic text-muted-foreground-x mt-3">Something happening every night.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((e, i) => (
            <motion.article
              key={e.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-cardx border border-subtle overflow-hidden hover:border-gold/60 transition-colors"
            >
              <div className="h-56 overflow-hidden relative">
                <img src={e.image} alt={e.name} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 to-transparent" />
              </div>
              <div className="p-6">
                <h2 className="font-display text-3xl tracking-wider text-gold">{e.name}</h2>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground-x font-body mt-2 uppercase tracking-[0.2em]">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {e.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {e.time}</span>
                </div>
                <p className="font-body text-sm text-[var(--text-primary)] mt-3 leading-relaxed">{e.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {e.tags.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-[#0a0a0a] border border-subtle font-body">{t}</span>
                  ))}
                </div>
                <div className="mt-5">
                  <RSVPForm eventName={e.name} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-[#0f0f0f] border-y border-subtle py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-4xl tracking-wider text-[var(--text-primary)] text-center mb-10">WEEKLY SCHEDULE</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {weeklySchedule.map((d) => (
              <div key={d.day} className="bg-cardx border border-subtle p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className={`w-2 h-2 rounded-full ${d.hasEvent ? "bg-gold" : "bg-[#3a3a3a]"}`} />
                  <p className="font-display text-xl tracking-widest text-[var(--text-primary)]">{d.day}</p>
                </div>
                <p className="font-body text-xs text-muted-foreground-x uppercase tracking-widest">{d.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="font-display text-4xl md:text-5xl tracking-wider text-gold">HOST YOUR EVENT HERE</h2>
        <p className="font-body text-base text-muted-foreground-x mt-4">
          Birthdays, corporate gatherings, brand launches. Reach out and we'll design the night with you.
        </p>
        <button
          onClick={() => openWhatsApp("Hello Euphoria, I'd like to inquire about a private event booking.")}
          className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-[#0a0a0a] font-body uppercase text-xs tracking-[0.25em] font-semibold hover:scale-105 transition-transform"
        >
          <MessageCircle className="w-4 h-4" /> Private event inquiry
        </button>
      </section>
    </div>
  );
}
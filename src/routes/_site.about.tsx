import { createFileRoute } from "@tanstack/react-router";
import { Award, Users, Sparkles, Calendar, Wine, Star, Moon } from "lucide-react";
import { CountUp } from "@/components/CountUp";

export const Route = createFileRoute("/_site/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Our Story — Euphoria Pub Food & Bar" },
      { name: "description", content: "How Euphoria came to be — craft, community, experience in the heart of Lomé." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <div>
      <section className="relative h-[45vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=2000&q=70)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        <div className="relative z-10 pb-10 px-6 mx-auto max-w-7xl w-full">
          <h1 className="font-display text-6xl md:text-8xl tracking-widest text-gold">OUR STORY</h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="font-body text-[var(--text-primary)] space-y-4 leading-relaxed">
          <p>Euphoria was founded as a refuge for those who seek more from their evenings — great food, crafted drinks, and an atmosphere that pulses with life.</p>
          <p>Born in Lomé, raised by its nights. We pour with intention, plate with care, and welcome you like a regular even on your first visit.</p>
          <p>Five years in, the night still belongs to us — and to you.</p>
        </div>
        <img src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=900&q=70" alt="Inside Euphoria" className="w-full h-[420px] object-cover" />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-6">
        {[
          { icon: Award, title: "Craft", text: "Cocktails built like watches. Plates composed like songs." },
          { icon: Users, title: "Community", text: "Every face that walks in becomes part of the room." },
          { icon: Sparkles, title: "Experience", text: "Atmosphere isn't decor. It's choreography." },
        ].map((v) => (
          <div key={v.title} className="bg-cardx border border-subtle p-8">
            <v.icon className="w-7 h-7 text-gold mb-4" />
            <h3 className="font-display text-2xl tracking-wider text-gold">{v.title}</h3>
            <p className="font-body text-sm text-muted-foreground-x mt-3 leading-relaxed">{v.text}</p>
          </div>
        ))}
      </section>

      <section className="bg-[#0f0f0f] border-y border-subtle py-14">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Calendar, val: 5, label: "Years open", suffix: "" },
            { icon: Wine, val: 200, label: "Cocktails", suffix: "+" },
            { icon: Star, val: 48, label: "Rating", suffix: " / 50" },
            { icon: Moon, val: 1800, label: "Nights", suffix: "+" },
          ].map((s, i) => (
            <div key={i}>
              <s.icon className="w-6 h-6 text-gold mx-auto mb-3" />
              <p className="font-display text-4xl text-[var(--text-primary)]"><CountUp end={s.val} suffix={s.suffix} /></p>
              <p className="font-body text-xs uppercase tracking-widest text-muted-foreground-x mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-4xl tracking-wider text-[var(--text-primary)] text-center mb-10">THE TEAM</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { name: "Kofi Asante", role: "Head Bartender", img: "photo-1622253692010-333f2da6031d", quote: "Every glass tells a story." },
            { name: "Amélie Dossou", role: "Executive Chef", img: "photo-1577219491135-ce391730fb2c", quote: "Comfort, elevated." },
            { name: "Yawa Mensah", role: "Floor Manager", img: "photo-1559941707-c1bcadc2bf12", quote: "I run on the energy of the room." },
          ].map((t) => (
            <div key={t.name} className="bg-cardx border border-subtle overflow-hidden">
              <img src={`https://images.unsplash.com/${t.img}?auto=format&fit=crop&w=600&q=70`} alt={t.name} className="w-full h-72 object-cover" />
              <div className="p-5">
                <p className="font-display text-2xl tracking-wide text-gold">{t.name}</p>
                <p className="font-body text-xs uppercase tracking-widest text-muted-foreground-x mt-1">{t.role}</p>
                <p className="font-body italic text-sm mt-3">"{t.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
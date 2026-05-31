import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronDown, Music, Calendar, Wine, Star, Plus } from "lucide-react";
import { Particles } from "@/components/Particles";
import { CountUp } from "@/components/CountUp";
import { MenuItemCard } from "@/components/MenuItemCard";
import logo from "@/images/logoEuphoria.png";
import { useMenuStore } from "@/store/menuStore";
import { events } from "@/data/eventsData";
import { formatFCFA } from "@/lib/format";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/_site/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Euphoria Pub Food & Bar — Lomé" },
      {
        name: "description",
        content: "Upscale urban pub & bar in Lomé. Craft cocktails, elevated street food, unforgettable nights.",
      },
      { property: "og:title", content: "Euphoria Pub Food & Bar — Lomé" },
      { property: "og:description", content: "Where every night tells a story." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const TYPE_TEXT = "Where every night tells a story.";

function Typewriter() {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (n >= TYPE_TEXT.length) return;
    const t = setTimeout(() => setN(n + 1), 55);
    return () => clearTimeout(t);
  }, [n]);
  return (
    <p className="font-body italic text-base md:text-lg text-[var(--text-primary)] mt-6 min-h-[1.5em]">
      {TYPE_TEXT.slice(0, n)}
      <span className="inline-block w-px h-5 bg-gold ml-0.5 animate-pulse align-middle" />
    </p>
  );
}

function HomePage() {
  const food = useMenuStore((s) => s.food);
  const drinks = useMenuStore((s) => s.drinks);
  const signatureBites = food.filter((f) => f.badges.length > 0).slice(0, 3);
  const featuredCocktails = drinks.filter((d) => d.category === "Signatures").slice(0, 3);

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=2000&q=70)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/40 to-[#0a0a0a]" />
        <Particles count={32} />
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-body text-xs md:text-sm uppercase tracking-[0.45em] text-gold"
          >
            Welcome to
          </motion.p>
          <motion.img
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src={logo}
            alt="Euphoria Pub Food & Bar"
            className="mx-auto h-80 w-auto object-contain"
          />
          <motion.h1
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="sr-only"
          >
            EUPHORIA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body uppercase text-sm md:text-base text-[var(--text-primary)] tracking-[0.3em]"
          >
            Pub Food &amp; Bar
          </motion.p>
          <Typewriter />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/menu"
              className="px-7 py-3.5 bg-gold text-[#0a0a0a] font-body uppercase text-xs tracking-[0.25em] font-semibold hover:scale-105 hover:glow-gold transition-all"
            >
              Explore the menu
            </Link>
            <Link
              to="/reserve"
              className="px-7 py-3.5 border border-bordeaux text-[var(--accent-bordeaux)] font-body uppercase text-xs tracking-[0.25em] font-semibold hover:bg-bordeaux hover:text-white transition-all"
              style={{ color: "#a44a55" }}
            >
              Reserve a table
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, repeat: Infinity, repeatType: "reverse", duration: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* TONIGHT MARQUEE */}
      <section className="relative bg-bordeaux py-3 overflow-hidden border-y border-gold/40">
        <div className="flex whitespace-nowrap animate-marquee gap-12">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12 shrink-0">
              {[
                { icon: Music, text: "Live Music Every Friday & Saturday" },
                { icon: Calendar, text: "Happy Hour Mon–Thu 17:00–20:00" },
                { icon: Wine, text: "200+ Cocktails to Discover" },
                { icon: Star, text: "Rated 4.8 / 5 by Our Guests" },
              ].map((m, i) => (
                <span key={i} className="flex items-center gap-3 text-gold font-body uppercase text-sm tracking-[0.2em]">
                  <m.icon className="w-4 h-4" /> {m.text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SIGNATURE BITES */}
      <section className="py-24 px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <p className="font-body uppercase text-xs tracking-[0.4em] text-gold mb-3">From the kitchen</p>
          <h2 className="font-display text-5xl md:text-6xl tracking-wider text-[var(--text-primary)]">SIGNATURE BITES</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {signatureBites.map((item, i) => (
            <MenuItemCard key={item.id} item={item} index={i} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-block px-7 py-3.5 border border-gold text-gold font-body uppercase text-xs tracking-[0.25em] hover:bg-gold hover:text-[#0a0a0a] transition-all"
          >
            View full menu
          </Link>
        </div>
      </section>

      {/* COCKTAIL SPOTLIGHT */}
      <section className="relative py-24 px-6 lg:px-8 bg-gradient-to-br from-[#0a0a0a] via-[#1a0e10] to-[#0a0a0a]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="font-body uppercase text-xs tracking-[0.4em] text-gold mb-3">From the bar</p>
            <h2 className="font-display text-5xl md:text-6xl tracking-wider text-[var(--text-primary)]">CRAFTED COCKTAILS</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredCocktails.map((d, i) => (
              <motion.div
                key={d.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative overflow-hidden border border-subtle bg-[#0f0f0f] hover:border-gold/60 transition-colors"
              >
                <div className="h-64 overflow-hidden">
                  <img src={d.image} alt={d.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-3xl tracking-wide text-gold">{d.name}</h3>
                  <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground-x mt-1">{d.base}</p>
                  <p className="font-body text-sm text-[var(--text-primary)] mt-3">{d.notes}</p>
                  <p className="font-display text-xl text-[var(--text-primary)] mt-4">{formatFCFA(d.price)}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/bar" className="inline-block px-7 py-3.5 bg-gold text-[#0a0a0a] font-body uppercase text-xs tracking-[0.25em] font-semibold hover:scale-105 transition-transform">
              View full bar
            </Link>
          </div>
        </div>
      </section>

      {/* ATMOSPHERE PARALLAX */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1538488881038-e252a119ace7?auto=format&fit=crop&w=2000&q=70)" }}
      >
        <div className="absolute inset-0 bg-[#0a0a0a]/75" />
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h2 className="font-display text-5xl md:text-7xl tracking-wider text-gold">More than a bar.<br />An experience.</h2>
          <div className="grid grid-cols-3 gap-6 mt-12">
            {[
              { icon: Wine, label: "Cocktails", value: 200, suffix: "+" },
              { icon: Calendar, label: "Years of nights", value: 5, suffix: "" },
              { icon: Star, label: "Avg rating", value: 4.8, suffix: " / 5" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center"
              >
                <s.icon className="w-8 h-8 text-gold mb-3" />
                <p className="font-display text-4xl md:text-5xl text-[var(--text-primary)]">
                  {s.value % 1 === 0 ? <CountUp end={s.value} suffix={s.suffix} /> : (
                    <span>{s.value}{s.suffix}</span>
                  )}
                </p>
                <p className="font-body uppercase text-xs tracking-[0.25em] text-muted-foreground-x mt-2">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS TEASER */}
      <section className="py-24 px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <p className="font-body uppercase text-xs tracking-[0.4em] text-gold mb-3">What's happening</p>
          <h2 className="font-display text-5xl md:text-6xl tracking-wider text-[var(--text-primary)]">UPCOMING EVENTS</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {events.slice(0, 3).map((e, i) => (
            <motion.article
              key={e.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-cardx border border-subtle overflow-hidden hover:border-gold/60 transition-colors"
            >
              <div className="h-48 overflow-hidden">
                <img src={e.image} alt={e.name} loading="lazy" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl tracking-wider text-gold">{e.name}</h3>
                <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground-x mt-1 flex items-center gap-2">
                  <Calendar className="w-3 h-3" /> {e.date} · {e.time}
                </p>
                <p className="font-body text-sm text-[var(--text-primary)] mt-3 leading-relaxed">{e.description}</p>
                <Link to="/reserve" className="mt-4 inline-block text-gold font-body uppercase text-xs tracking-[0.25em] hover:underline">
                  RSVP →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* RESERVATION CTA */}
      <section className="relative py-24 px-6 border-y-2 border-gold/40 bg-[#0a0a0a]">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-5xl md:text-7xl tracking-wider text-[var(--text-primary)]">READY FOR YOUR NIGHT?</h2>
          <p className="font-body text-lg text-muted-foreground-x mt-6">
            Reserve your table. The evening begins when you arrive.
          </p>
          <Link
            to="/reserve"
            className="inline-flex items-center gap-2 mt-10 px-10 py-4 bg-gold text-[#0a0a0a] font-body uppercase text-sm tracking-[0.3em] font-bold hover:scale-105 glow-gold transition-transform"
          >
            <Plus className="w-4 h-4" /> Reserve now
          </Link>
        </div>
      </section>
    </div>
  );
}
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { DrinkCard } from "@/components/DrinkCard";
import { useMenuStore } from "@/store/menuStore";
import type { DrinkCategory } from "@/data/barData";
import { formatFCFA } from "@/lib/format";

export const Route = createFileRoute("/_site/bar")({
  component: BarPage,
  head: () => ({
    meta: [
      { title: "The Bar — Euphoria Pub Food & Bar" },
      { name: "description", content: "Crafted. Shaken. Elevated. Signature cocktails, classics, mocktails and more." },
      { property: "og:title", content: "The Bar — Euphoria" },
      { property: "og:url", content: "/bar" },
    ],
    links: [{ rel: "canonical", href: "/bar" }],
  }),
});

const categories: DrinkCategory[] = ["Signatures", "Classics", "Mocktails", "Beers"];

function BarPage() {
  const drinks = useMenuStore((s) => s.drinks);
  const food = useMenuStore((s) => s.food);
  const [active, setActive] = useState<DrinkCategory>("Signatures");
  const items = drinks.filter((d) => d.category === active);
  const pick = drinks.find((d) => d.name === "Euphoria Smoke") ?? drinks[0];

  return (
    <div>
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2000&q=70)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
        <div className="relative z-10 pb-14 px-6 mx-auto max-w-7xl w-full">
          <p className="font-body uppercase text-xs tracking-[0.4em] text-gold">From our bartenders</p>
          <h1 className="font-display text-7xl md:text-9xl tracking-widest text-gold mt-3">THE BAR</h1>
          <p className="font-body text-lg italic text-muted-foreground-x mt-3">Crafted. Shaken. Elevated.</p>
        </div>
      </section>

      {/* TABS */}
      <div className="sticky top-20 z-30 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-subtle">
        <div className="mx-auto max-w-7xl px-4 overflow-x-auto">
          <div className="flex gap-2 md:gap-6 py-4 min-w-max">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className="relative font-body uppercase text-xs md:text-sm tracking-[0.25em] px-3 py-2 transition-colors"
                style={{ color: active === c ? "var(--accent-gold)" : "var(--text-primary)" }}
              >
                {c}
                {active === c && (
                  <motion.span layoutId="bar-underline" className="absolute -bottom-px left-0 right-0 h-0.5 bg-gold" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((d, i) => (
          <DrinkCard key={d.id} drink={d} index={i} />
        ))}
      </section>

      {/* BARTENDER'S PICK */}
      {pick && (
        <section className="bg-gradient-to-b from-[#0a0a0a] via-[#1a0e10] to-[#0a0a0a] py-20 px-6">
          <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <img src={pick.image} alt={pick.name} loading="lazy" className="w-full h-[420px] object-cover" />
              <div className="absolute inset-0 ring-1 ring-gold/40" />
            </div>
            <div>
              <p className="font-body uppercase text-xs tracking-[0.4em] text-gold">Bartender's pick</p>
              <h2 className="font-display text-5xl md:text-6xl tracking-wider text-[var(--text-primary)] mt-3">{pick.name}</h2>
              <p className="font-body text-base text-muted-foreground-x mt-4 leading-relaxed">
                Our most-requested signature. {pick.notes}. Served theatrically — a brief curl of smoke escapes as the glass is uncovered tableside.
              </p>
              <p className="font-display text-3xl text-gold mt-6">{formatFCFA(pick.price)}</p>
              <Link to="/reserve" className="inline-block mt-6 px-6 py-3 border border-gold text-gold font-body uppercase text-xs tracking-[0.25em] hover:bg-gold hover:text-[#0a0a0a] transition-all">
                Try this tonight
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* PAIR WITH KITCHEN */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <h2 className="font-display text-4xl tracking-wider text-[var(--text-primary)] text-center mb-10">PAIR WITH SOMETHING FROM THE KITCHEN</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {food.slice(0, 3).map((f) => (
            <Link
              key={f.id}
              to="/menu"
              className="relative h-44 overflow-hidden border border-subtle group"
            >
              <img src={f.image} alt={f.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
              <div className="absolute bottom-3 left-4">
                <p className="font-display text-xl text-gold">{f.name}</p>
                <p className="font-body text-xs text-[var(--text-primary)]">{formatFCFA(f.price)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
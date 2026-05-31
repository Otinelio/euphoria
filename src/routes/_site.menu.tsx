import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { MenuItemCard } from "@/components/MenuItemCard";
import { useMenuStore } from "@/store/menuStore";
import type { FoodCategory } from "@/data/menuData";

export const Route = createFileRoute("/_site/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Menu — Euphoria Pub Food & Bar" },
      { name: "description", content: "Street-inspired, kitchen-elevated. Burgers, mains, sides and desserts at Euphoria." },
      { property: "og:title", content: "Menu — Euphoria" },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
});

const categories: FoodCategory[] = ["Starters", "Burgers", "Mains", "Sides", "Desserts"];

function Countdown() {
  const [s, setS] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const end = new Date(now);
      end.setHours(23, 59, 59);
      const diff = end.getTime() - now.getTime();
      const h = Math.floor(diff / 3.6e6);
      const m = Math.floor((diff % 3.6e6) / 6e4);
      const sec = Math.floor((diff % 6e4) / 1e3);
      setS(`${h}h ${m}m ${sec}s`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{s}</span>;
}

function MenuPage() {
  const food = useMenuStore((s) => s.food);
  const [active, setActive] = useState<FoodCategory>("Starters");
  const items = food.filter((f) => f.category === active);

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2000&q=70)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/30" />
        <div className="relative z-10 pb-14 px-6 lg:px-8 mx-auto max-w-7xl w-full">
          <p className="font-body uppercase text-xs tracking-[0.4em] text-gold">Eat well, eat boldly</p>
          <h1 className="font-display text-6xl md:text-8xl tracking-wider text-[var(--text-primary)] mt-3">THE FOOD MENU</h1>
          <p className="font-body text-lg italic text-muted-foreground-x mt-3">Street-inspired. Kitchen-elevated.</p>
        </div>
      </section>

      {/* TODAY'S SPECIAL */}
      <div className="bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-gold-hover)] text-[#0a0a0a] py-3 px-6 flex items-center justify-center gap-3 font-body uppercase tracking-[0.2em] text-xs font-semibold">
        <Clock className="w-4 h-4" />
        Today's special: 20% off truffle fries — ends in <Countdown />
      </div>

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
                  <motion.span
                    layoutId="menu-underline"
                    className="absolute -bottom-px left-0 right-0 h-0.5 bg-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* GRID */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((i, idx) => (
            <MenuItemCard key={i.id} item={i} index={idx} />
          ))}
        </div>
        {items.length === 0 && (
          <p className="text-center font-body text-muted-foreground-x py-10">No items in this category yet.</p>
        )}
      </section>
    </div>
  );
}
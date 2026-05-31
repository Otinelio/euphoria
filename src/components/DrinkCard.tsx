import { motion } from "framer-motion";
import { Wine, MessageCircle } from "lucide-react";
import type { Drink } from "@/data/barData";
import { PillBadge } from "./Badge";
import { formatFCFA } from "@/lib/format";
import { openWhatsApp } from "@/lib/whatsapp";

export function DrinkCard({ drink, index = 0 }: { drink: Drink; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      whileHover={{ y: -4 }}
      className="group relative bg-[#0f0f0f] border border-subtle overflow-hidden hover:border-gold/70 transition-all hover:glow-gold"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={drink.image}
          alt={drink.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/40 to-transparent" />
        {drink.badges.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {drink.badges.map((b) => (
              <PillBadge key={b} label={b} />
            ))}
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl tracking-wide text-gold">{drink.name}</h3>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground-x mt-1 flex items-center gap-1.5">
              <Wine className="w-3 h-3" /> {drink.base}
            </p>
          </div>
          <span className="font-display text-xl text-[var(--text-primary)] whitespace-nowrap">
            {formatFCFA(drink.price)}
          </span>
        </div>
        <p className="font-body text-sm text-muted-foreground-x mt-3 leading-relaxed">{drink.notes}</p>
        <button
          onClick={() =>
            openWhatsApp(`Hello, I'd like to order: ${drink.name} (${formatFCFA(drink.price)})`)
          }
          className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground-x hover:text-gold transition-colors font-body"
        >
          <MessageCircle className="w-4 h-4" /> Ask your server
        </button>
      </div>
    </motion.div>
  );
}
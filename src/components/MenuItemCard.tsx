import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { MenuItem } from "@/data/menuData";
import { PillBadge } from "./Badge";
import { useCartStore } from "@/store/cartStore";
import { formatFCFA } from "@/lib/format";
import { toast } from "sonner";

export function MenuItemCard({ item, index = 0, compact = false }: { item: MenuItem; index?: number; compact?: boolean }) {
  const add = useCartStore((s) => s.add);
  const setOpen = useCartStore((s) => s.setOpen);
  const soldOut = !item.available;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      whileHover={{ y: -4 }}
      className="group relative bg-cardx border border-subtle overflow-hidden hover:border-gold/60 transition-colors"
    >
      <div className={`relative overflow-hidden ${compact ? "h-40" : "h-56"}`}>
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
            soldOut ? "grayscale opacity-50" : ""
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        {item.badges.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {item.badges.map((b) => (
              <PillBadge key={b} label={b} />
            ))}
          </div>
        )}
        {soldOut && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-2xl text-gold tracking-widest">Sold out</span>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl tracking-wide text-[var(--text-primary)]">{item.name}</h3>
          <span className="font-display text-xl text-gold whitespace-nowrap">{formatFCFA(item.price)}</span>
        </div>
        <p className="font-body text-sm text-muted-foreground-x mt-1.5 leading-relaxed">{item.description}</p>
        <motion.button
          whileTap={{ scale: 0.94 }}
          disabled={soldOut}
          onClick={() => {
            add({ id: item.id, name: item.name, price: item.price, image: item.image });
            setOpen(true);
            toast.success(`${item.name} added to cart`);
          }}
          className="mt-4 w-full flex items-center justify-center gap-2 py-3 border border-gold text-gold font-body uppercase text-xs tracking-[0.25em] hover:bg-gold hover:text-[#0a0a0a] transition-all disabled:opacity-40 disabled:cursor-not-allowed group-hover:glow-gold"
        >
          <Plus className="w-4 h-4" />
          {soldOut ? "Unavailable" : "Add to cart"}
        </motion.button>
      </div>
    </motion.div>
  );
}
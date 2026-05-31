import type { Badge as FoodBadge } from "@/data/menuData";
import type { DrinkBadge } from "@/data/barData";

const styles: Record<string, string> = {
  Popular: "bg-bordeaux text-[var(--text-primary)]",
  "Chef's Pick": "bg-gold text-[#0a0a0a]",
  Spicy: "bg-red-600 text-white",
  Veg: "bg-green-700 text-white",
  Strong: "bg-[#4f1f24] text-[var(--text-primary)]",
};

export function PillBadge({ label }: { label: FoodBadge | DrinkBadge | string }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] font-body font-semibold rounded-sm ${
        styles[label] || "bg-cardx text-[var(--text-primary)]"
      }`}
    >
      {label}
    </span>
  );
}
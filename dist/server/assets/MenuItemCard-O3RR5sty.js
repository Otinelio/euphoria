import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { P as PillBadge } from "./Badge-CStHiTpk.js";
import { u as useCartStore } from "./cartStore-Mu-5IcZ3.js";
import { f as formatFCFA } from "./format-CZhDL1kI.js";
import { toast } from "sonner";
function MenuItemCard({ item, index = 0, compact = false }) {
  const add = useCartStore((s) => s.add);
  const setOpen = useCartStore((s) => s.setOpen);
  const soldOut = !item.available;
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.5, delay: index % 6 * 0.06 },
      whileHover: { y: -4 },
      className: "group relative bg-cardx border border-subtle overflow-hidden hover:border-gold/60 transition-colors",
      children: [
        /* @__PURE__ */ jsxs("div", { className: `relative overflow-hidden ${compact ? "h-40" : "h-56"}`, children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: item.image,
              alt: item.name,
              loading: "lazy",
              className: `w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${soldOut ? "grayscale opacity-50" : ""}`
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" }),
          item.badges.length > 0 && /* @__PURE__ */ jsx("div", { className: "absolute top-3 left-3 flex flex-wrap gap-1.5", children: item.badges.map((b) => /* @__PURE__ */ jsx(PillBadge, { label: b }, b)) }),
          soldOut && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "font-display text-2xl text-gold tracking-widest", children: "Sold out" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl tracking-wide text-[var(--text-primary)]", children: item.name }),
            /* @__PURE__ */ jsx("span", { className: "font-display text-xl text-gold whitespace-nowrap", children: formatFCFA(item.price) })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-body text-sm text-muted-foreground-x mt-1.5 leading-relaxed", children: item.description }),
          /* @__PURE__ */ jsxs(
            motion.button,
            {
              whileTap: { scale: 0.94 },
              disabled: soldOut,
              onClick: () => {
                add({ id: item.id, name: item.name, price: item.price, image: item.image });
                setOpen(true);
                toast.success(`${item.name} added to cart`);
              },
              className: "mt-4 w-full flex items-center justify-center gap-2 py-3 border border-gold text-gold font-body uppercase text-xs tracking-[0.25em] hover:bg-gold hover:text-[#0a0a0a] transition-all disabled:opacity-40 disabled:cursor-not-allowed group-hover:glow-gold",
              children: [
                /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" }),
                soldOut ? "Unavailable" : "Add to cart"
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  MenuItemCard as M
};

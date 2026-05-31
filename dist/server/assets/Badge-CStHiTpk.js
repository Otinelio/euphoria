import { jsx } from "react/jsx-runtime";
const styles = {
  Popular: "bg-bordeaux text-[var(--text-primary)]",
  "Chef's Pick": "bg-gold text-[#0a0a0a]",
  Spicy: "bg-red-600 text-white",
  Veg: "bg-green-700 text-white",
  Strong: "bg-[#4f1f24] text-[var(--text-primary)]"
};
function PillBadge({ label }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: `inline-flex items-center px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] font-body font-semibold rounded-sm ${styles[label] || "bg-cardx text-[var(--text-primary)]"}`,
      children: label
    }
  );
}
export {
  PillBadge as P
};

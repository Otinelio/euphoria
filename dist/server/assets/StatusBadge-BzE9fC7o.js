import { jsxs, jsx } from "react/jsx-runtime";
const colors = {
  Pending: "bg-orange-500",
  Confirmed: "bg-blue-500",
  Preparing: "bg-purple-500",
  Served: "bg-green-500"
};
function StatusBadge({ status }) {
  return /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a0a0a] border border-subtle font-body text-xs uppercase tracking-widest", children: [
    /* @__PURE__ */ jsx("span", { className: `w-2 h-2 rounded-full ${colors[status]}` }),
    status
  ] });
}
export {
  StatusBadge as S
};

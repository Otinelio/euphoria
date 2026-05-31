import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
function PINLogin({
  title,
  expected,
  onSuccess
}) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (pin === expected) onSuccess();
    else {
      setError(true);
      setPin("");
      setTimeout(() => setError(false), 600);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4", children: /* @__PURE__ */ jsxs(
    motion.form,
    {
      onSubmit: submit,
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      "animate-shake": error,
      className: "w-full max-w-sm bg-cardx border border-subtle p-8",
      style: error ? { animation: "shake 0.4s" } : void 0,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center mb-6", children: [
          /* @__PURE__ */ jsx(Lock, { className: "w-7 h-7 text-gold mb-3" }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl tracking-widest text-gold", children: title }),
          /* @__PURE__ */ jsx("p", { className: "font-body text-xs uppercase tracking-[0.3em] text-muted-foreground-x mt-2", children: "Enter 4-digit PIN" })
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "password",
            inputMode: "numeric",
            maxLength: 4,
            value: pin,
            onChange: (e) => setPin(e.target.value.replace(/[^\d]/g, "")),
            autoFocus: true,
            className: "w-full text-center text-3xl tracking-[1em] bg-[#0a0a0a] border border-subtle py-4 font-display text-gold focus:border-gold outline-none"
          }
        ),
        error && /* @__PURE__ */ jsx("p", { className: "text-red-500 font-body text-sm text-center mt-3", children: "Invalid PIN" }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: pin.length !== 4,
            className: "w-full mt-6 py-3 bg-gold text-[#0a0a0a] font-body uppercase tracking-[0.25em] text-xs font-bold disabled:opacity-40 hover:bg-[var(--accent-gold-hover)] transition-colors",
            children: "Enter"
          }
        )
      ]
    }
  ) });
}
export {
  PINLogin as P
};

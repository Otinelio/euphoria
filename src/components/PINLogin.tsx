import { useState } from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export function PINLogin({
  title,
  expected,
  onSuccess,
}: {
  title: string;
  expected: string;
  onSuccess: () => void;
}) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === expected) onSuccess();
    else {
      setError(true);
      setPin("");
      setTimeout(() => setError(false), 600);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4">
      <motion.form
        onSubmit={submit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        animate-shake={error}
        className="w-full max-w-sm bg-cardx border border-subtle p-8"
        style={error ? { animation: "shake 0.4s" } : undefined}
      >
        <div className="flex flex-col items-center mb-6">
          <Lock className="w-7 h-7 text-gold mb-3" />
          <h2 className="font-display text-3xl tracking-widest text-gold">{title}</h2>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground-x mt-2">Enter 4-digit PIN</p>
        </div>
        <input
          type="password"
          inputMode="numeric"
          maxLength={4}
          value={pin}
          onChange={(e) => setPin(e.target.value.replace(/[^\d]/g, ""))}
          autoFocus
          className="w-full text-center text-3xl tracking-[1em] bg-[#0a0a0a] border border-subtle py-4 font-display text-gold focus:border-gold outline-none"
        />
        {error && (
          <p className="text-red-500 font-body text-sm text-center mt-3">Invalid PIN</p>
        )}
        <button
          type="submit"
          disabled={pin.length !== 4}
          className="w-full mt-6 py-3 bg-gold text-[#0a0a0a] font-body uppercase tracking-[0.25em] text-xs font-bold disabled:opacity-40 hover:bg-[var(--accent-gold-hover)] transition-colors"
        >
          Enter
        </button>
      </motion.form>
    </div>
  );
}
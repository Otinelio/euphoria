import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingCart, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { formatFCFA } from "@/lib/format";
import { buildOrderMessage, openWhatsApp } from "@/lib/whatsapp";
import { useOrdersStore } from "@/store/ordersStore";

export function CartFab() {
  const count = useCartStore((s) => s.count());
  const setOpen = useCartStore((s) => s.setOpen);
  if (count === 0) return null;
  return (
    <button
      onClick={() => setOpen(true)}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gold text-[#0a0a0a] flex items-center justify-center glow-gold hover:scale-110 transition-transform"
      aria-label="Open cart"
    >
      <ShoppingCart className="w-6 h-6" />
      <span className="absolute -top-1 -right-1 min-w-[22px] h-[22px] px-1 rounded-full bg-bordeaux text-white text-xs font-bold flex items-center justify-center">
        {count}
      </span>
    </button>
  );
}

export function CartDrawer({ tableNumber }: { tableNumber?: number }) {
  const { items, open, setOpen, inc, dec, remove, total, clear } = useCartStore();
  const [mode, setMode] = useState<"Delivery" | "Takeaway">("Takeaway");
  const [address, setAddress] = useState("");
  const addOrder = useOrdersStore((s) => s.add);

  const send = () => {
    if (items.length === 0) return;
    const t = total();
    if (tableNumber) {
      // QR ordering -> save to localStorage orders, no WhatsApp
      addOrder({ table: tableNumber, items, total: t });
      clear();
      setOpen(false);
      window.dispatchEvent(new CustomEvent("euphoria-order-sent"));
      return;
    }
    openWhatsApp(
      buildOrderMessage(
        items.map((i) => ({ name: i.name, qty: i.qty, price: i.price })),
        t,
        mode,
        mode === "Delivery" ? address : undefined,
      ),
    );
    clear();
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 240 }}
            className="fixed top-0 right-0 bottom-0 z-[80] w-full sm:w-[420px] bg-[#141414] border-l border-gold/30 flex flex-col"
          >
            <div className="flex items-center justify-between p-5 border-b border-subtle">
              <h3 className="font-display text-2xl tracking-widest text-gold">Your Order</h3>
              <button onClick={() => setOpen(false)} aria-label="Close" className="text-[var(--text-primary)] hover:text-gold">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 && (
                <p className="font-body text-sm text-muted-foreground-x">Your cart is empty.</p>
              )}
              {items.map((i) => (
                <div key={i.id} className="flex gap-3 border-b border-subtle pb-4">
                  <img src={i.image} alt={i.name} className="w-16 h-16 object-cover rounded-sm" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-display text-lg tracking-wide">{i.name}</p>
                      <button onClick={() => remove(i.id)} className="text-muted-foreground-x hover:text-red-500">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="font-body text-sm text-gold">{formatFCFA(i.price * i.qty)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => dec(i.id)} className="w-7 h-7 border border-subtle flex items-center justify-center hover:border-gold">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-body text-sm w-6 text-center">{i.qty}</span>
                      <button onClick={() => inc(i.id)} className="w-7 h-7 border border-subtle flex items-center justify-center hover:border-gold">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {items.length > 0 && (
              <div className="border-t border-subtle p-5 space-y-4">
                {!tableNumber && (
                  <>
                    <div className="grid grid-cols-2 gap-2">
                      {(["Takeaway", "Delivery"] as const).map((m) => (
                        <button
                          key={m}
                          onClick={() => setMode(m)}
                          className={`py-2 font-body text-xs uppercase tracking-[0.2em] border transition-colors ${
                            mode === m
                              ? "border-gold text-gold bg-gold/10"
                              : "border-subtle text-muted-foreground-x"
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                    {mode === "Delivery" && (
                      <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Delivery address"
                        className="w-full bg-[#0a0a0a] border border-subtle px-3 py-2 text-sm font-body focus:border-gold outline-none"
                      />
                    )}
                  </>
                )}
                <div className="flex justify-between font-display text-xl">
                  <span>Total</span>
                  <span className="text-gold">{formatFCFA(total())}</span>
                </div>
                <button
                  onClick={send}
                  className="w-full py-3.5 bg-gold text-[#0a0a0a] font-body uppercase text-xs tracking-[0.25em] font-semibold hover:bg-[var(--accent-gold-hover)] transition-colors flex items-center justify-center gap-2"
                >
                  {tableNumber ? (
                    <>Send to bar</>
                  ) : (
                    <>
                      <MessageCircle className="w-4 h-4" /> Send order via WhatsApp
                    </>
                  )}
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
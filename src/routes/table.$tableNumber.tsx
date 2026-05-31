import { createFileRoute, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle, ShoppingCart } from "lucide-react";
import { useMenuStore } from "@/store/menuStore";
import { useCartStore } from "@/store/cartStore";
import { CartDrawer } from "@/components/CartDrawer";
import { MenuItemCard } from "@/components/MenuItemCard";
import { StatusBadge } from "@/components/StatusBadge";
import { useOrdersStore } from "@/store/ordersStore";
import type { FoodCategory } from "@/data/menuData";

export const Route = createFileRoute("/table/$tableNumber")({
  component: TablePage,
  head: () => ({ meta: [{ title: "Order — Euphoria" }, { name: "robots", content: "noindex" }] }),
});

function TablePage() {
  const { tableNumber } = useParams({ from: "/table/$tableNumber" });
  const table = Number(tableNumber) || 1;
  const food = useMenuStore((s) => s.food);
  const setOpen = useCartStore((s) => s.setOpen);
  const count = useCartStore((s) => s.count());
  const [cat, setCat] = useState<FoodCategory>("Starters");
  const [lastOrderId, setLastOrderId] = useState<string | null>(null);
  const order = useOrdersStore((s) => s.orders.find((o) => o.id === lastOrderId));

  useEffect(() => {
    const onSent = () => {
      const latest = useOrdersStore.getState().orders[0];
      if (latest) setLastOrderId(latest.id);
    };
    window.addEventListener("euphoria-order-sent", onSent);
    return () => window.removeEventListener("euphoria-order-sent", onSent);
  }, []);

  const cats: FoodCategory[] = ["Starters", "Burgers", "Mains", "Sides", "Desserts"];

  if (lastOrderId && order) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 bg-[#0a0a0a]">
        <div className="text-center max-w-md">
          <CheckCircle className="w-16 h-16 text-gold mx-auto" />
          <h1 className="font-display text-4xl tracking-widest text-gold mt-6">ORDER SENT</h1>
          <p className="font-body text-muted-foreground-x mt-3">
            Your order has been sent to the bar. We'll confirm shortly.
          </p>
          <div className="mt-6 flex justify-center"><StatusBadge status={order.status} /></div>
          <button onClick={() => setLastOrderId(null)} className="mt-8 px-6 py-2.5 border border-gold text-gold font-body uppercase text-xs tracking-[0.25em]">
            Order more
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] pb-24">
      <header className="text-center py-8 border-b border-subtle">
        <p className="font-display text-3xl tracking-widest text-gold">EUPHORIA</p>
        <p className="font-body uppercase text-xs tracking-[0.4em] text-muted-foreground-x mt-1">Table {table}</p>
      </header>
      <div className="sticky top-0 z-30 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-subtle">
        <div className="flex gap-3 px-4 py-3 overflow-x-auto">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className="font-body uppercase text-xs tracking-[0.25em] px-3 py-1.5 whitespace-nowrap" style={{ color: cat === c ? "var(--accent-gold)" : "var(--text-primary)" }}>
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 px-4 py-6">
        {food.filter((f) => f.category === cat).map((i, idx) => (
          <MenuItemCard key={i.id} item={i} index={idx} compact />
        ))}
      </div>
      {count > 0 && (
        <button onClick={() => setOpen(true)} className="fixed bottom-5 left-1/2 -translate-x-1/2 px-6 py-3.5 bg-gold text-[#0a0a0a] font-body uppercase tracking-[0.25em] text-xs font-bold flex items-center gap-2 glow-gold">
          <ShoppingCart className="w-4 h-4" /> Review order ({count})
        </button>
      )}
      <CartDrawer tableNumber={table} />
    </div>
  );
}
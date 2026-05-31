import { create } from "zustand";
import { persist } from "zustand/middleware";
const useCartStore = create()(
  persist(
    (set, get) => ({
      items: [],
      open: false,
      setOpen: (open) => set({ open }),
      add: (item) => set((s) => {
        const existing = s.items.find((i) => i.id === item.id);
        if (existing) {
          return {
            items: s.items.map(
              (i) => i.id === item.id ? { ...i, qty: i.qty + 1 } : i
            )
          };
        }
        return { items: [...s.items, { ...item, qty: 1 }] };
      }),
      remove: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
      inc: (id) => set((s) => ({
        items: s.items.map((i) => i.id === id ? { ...i, qty: i.qty + 1 } : i)
      })),
      dec: (id) => set((s) => ({
        items: s.items.map((i) => i.id === id ? { ...i, qty: i.qty - 1 } : i).filter((i) => i.qty > 0)
      })),
      clear: () => set({ items: [] }),
      total: () => get().items.reduce((a, i) => a + i.price * i.qty, 0),
      count: () => get().items.reduce((a, i) => a + i.qty, 0)
    }),
    { name: "euphoria-cart" }
  )
);
export {
  useCartStore as u
};

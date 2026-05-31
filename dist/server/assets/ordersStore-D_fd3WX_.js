import { create } from "zustand";
import { persist } from "zustand/middleware";
const useOrdersStore = create()(
  persist(
    (set) => ({
      orders: [],
      add: (o) => {
        const id = crypto.randomUUID();
        const order = {
          ...o,
          id,
          status: "Pending",
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        };
        set((s) => ({ orders: [order, ...s.orders] }));
        return id;
      },
      setStatus: (id, status) => set((s) => ({
        orders: s.orders.map((o) => o.id === id ? { ...o, status } : o)
      })),
      clearOld: () => set((s) => {
        const cutoff = Date.now() - 7 * 24 * 60 * 60 * 1e3;
        return {
          orders: s.orders.filter(
            (o) => new Date(o.timestamp).getTime() > cutoff
          )
        };
      })
    }),
    { name: "euphoria-orders" }
  )
);
export {
  useOrdersStore as u
};

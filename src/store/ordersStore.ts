import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "./cartStore";

export type OrderStatus = "Pending" | "Confirmed" | "Preparing" | "Served";

export interface Order {
  id: string;
  table: number;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  timestamp: string;
}

interface OrdersState {
  orders: Order[];
  add: (o: Omit<Order, "id" | "status" | "timestamp">) => string;
  setStatus: (id: string, s: OrderStatus) => void;
  clearOld: () => void;
}

export const useOrdersStore = create<OrdersState>()(
  persist(
    (set) => ({
      orders: [],
      add: (o) => {
        const id = crypto.randomUUID();
        const order: Order = {
          ...o,
          id,
          status: "Pending",
          timestamp: new Date().toISOString(),
        };
        set((s) => ({ orders: [order, ...s.orders] }));
        return id;
      },
      setStatus: (id, status) =>
        set((s) => ({
          orders: s.orders.map((o) => (o.id === id ? { ...o, status } : o)),
        })),
      clearOld: () =>
        set((s) => {
          const cutoff = Date.now() - 7 * 24 * 60 * 60 * 1000;
          return {
            orders: s.orders.filter(
              (o) => new Date(o.timestamp).getTime() > cutoff,
            ),
          };
        }),
    }),
    { name: "euphoria-orders" },
  ),
);
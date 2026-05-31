import { useEffect } from "react";
import { useOrdersStore } from "@/store/ordersStore";

export function useOrderPolling(intervalMs = 5000) {
  useEffect(() => {
    const tick = () => {
      try {
        const raw = localStorage.getItem("euphoria-orders");
        if (!raw) return;
        const parsed = JSON.parse(raw);
        const current = useOrdersStore.getState().orders;
        if (
          parsed?.state?.orders &&
          (parsed.state.orders.length !== current.length ||
            JSON.stringify(parsed.state.orders) !== JSON.stringify(current))
        ) {
          useOrdersStore.setState({ orders: parsed.state.orders });
        }
      } catch {}
    };
    const id = setInterval(tick, intervalMs);
    window.addEventListener("storage", tick);
    return () => {
      clearInterval(id);
      window.removeEventListener("storage", tick);
    };
  }, [intervalMs]);
}
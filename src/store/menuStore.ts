import { create } from "zustand";
import { persist } from "zustand/middleware";
import { seedMenu, type MenuItem } from "@/data/menuData";
import { seedBar, type Drink } from "@/data/barData";

interface MenuState {
  food: MenuItem[];
  drinks: Drink[];
  addFood: (m: MenuItem) => void;
  updateFood: (id: string, patch: Partial<MenuItem>) => void;
  removeFood: (id: string) => void;
  addDrink: (d: Drink) => void;
  updateDrink: (id: string, patch: Partial<Drink>) => void;
  removeDrink: (id: string) => void;
  reset: () => void;
}

export const useMenuStore = create<MenuState>()(
  persist(
    (set) => ({
      food: seedMenu,
      drinks: seedBar,
      addFood: (m) => set((s) => ({ food: [m, ...s.food] })),
      updateFood: (id, patch) =>
        set((s) => ({
          food: s.food.map((i) => (i.id === id ? { ...i, ...patch } : i)),
        })),
      removeFood: (id) => set((s) => ({ food: s.food.filter((i) => i.id !== id) })),
      addDrink: (d) => set((s) => ({ drinks: [d, ...s.drinks] })),
      updateDrink: (id, patch) =>
        set((s) => ({
          drinks: s.drinks.map((i) => (i.id === id ? { ...i, ...patch } : i)),
        })),
      removeDrink: (id) =>
        set((s) => ({ drinks: s.drinks.filter((i) => i.id !== id) })),
      reset: () => set({ food: seedMenu, drinks: seedBar }),
    }),
    { name: "euphoria-menu" },
  ),
);
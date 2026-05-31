import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SettingsState {
  receptionPin: string;
  adminPin: string;
  whatsappNumber: string;
  restaurantName: string;
  tagline: string;
  update: (patch: Partial<Omit<SettingsState, "update">>) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      receptionPin: "9999",
      adminPin: "9999",
      whatsappNumber: "+22890000000",
      restaurantName: "Euphoria Pub Food & Bar",
      tagline: "Where the night finds its voice.",
      update: (patch) => set(patch),
    }),
    { name: "euphoria-settings" }
  )
);
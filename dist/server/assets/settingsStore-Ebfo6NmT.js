import { create } from "zustand";
import { persist } from "zustand/middleware";
const useSettingsStore = create()(
  persist(
    (set) => ({
      receptionPin: "9999",
      adminPin: "9999",
      whatsappNumber: "+22890000000",
      restaurantName: "Euphoria Pub Food & Bar",
      tagline: "Where the night finds its voice.",
      update: (patch) => set(patch)
    }),
    { name: "euphoria-settings" }
  )
);
export {
  useSettingsStore as u
};

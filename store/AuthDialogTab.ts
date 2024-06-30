import { create } from "zustand";

export const useAuthDialogTabStore = create((set) => ({
  tabIndex: 0,
  setTabIndex: (index: number) => set({ tabIndex: index }),
}));

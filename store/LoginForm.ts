import { create } from "zustand";

export const useLoginFormStore = create((set) => ({
  isPasswordVisible: false,
  setIsPasswordVisibility: (value: boolean) =>
    set({ isPasswordVisible: value }),
  loginError: "",
  setLoginError: (value: string) => set({ loginError: value }),
}));

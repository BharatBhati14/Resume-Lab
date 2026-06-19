import { create } from "zustand";

const useAuthStore = create((set) => ({
  // user: null,
  isLoggedIn: false,

  login: () =>
    set({
      // user,
      isLoggedIn: true,
    }),

  logout: () =>
    set({
      // user: null,
      isLoggedIn: false,
    }),

  checkAuth: (isValid) => set({ isLoggedIn: isValid }),
}));

export default useAuthStore;

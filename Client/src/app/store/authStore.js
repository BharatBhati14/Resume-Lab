import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
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
    }),
    {
      name: "auth-storage",

      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useAuthStore;

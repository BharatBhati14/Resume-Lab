import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  token: null,

  login: (user, token) =>
    set({
      user,
      token,
      isLoggedIn: true
    }),

  logout: () =>
    set({
      user: null,
      token: null,
      isLoggedIn: false
    })
}));

export default useAuthStore;
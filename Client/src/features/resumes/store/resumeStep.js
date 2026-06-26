import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStepStore = create(
  persist(
    (set) => ({
      currentStep: 0,

      setCurrentStep: (step) => set({ currentStep: step }),
    }),
    {
      name: "resume-step",
      //   storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

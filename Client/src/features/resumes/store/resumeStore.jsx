import { create } from "zustand";

const useResumeStore = create((set) => ({
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
  },
  experiences: [],
  education: [],
  skills: [],
  

  updatePersonalInfo: (data) =>
    set((state) => ({
      personalInfo: {
        ...state.personalInfo,
        ...data,
      },
    })),
}));

export default useResumeStore;

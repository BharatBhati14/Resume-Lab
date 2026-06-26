import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const initialState = {
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    linkedin: "",
    github: "",
    portfolio: "",
    profileImage: "",
  },

  title: "",

  summary: "",

  experience: [],

  projects: [],

  skills: {
    technical: [],
    soft: [],
    tools: [],
  },

  education: [],

  certifications: [],

  languages: [],
};

export const useResumeStore = create(
  persist(
    (set) => ({
      ...initialState,

      updateSection: (section, value) =>
        set({
          [section]: value,
        }),

      setPersonalInfo: (personalInfo) => set({ personalInfo }),

      setTitle: (title) => set({ title }),

      setSummary: (summary) => set({ summary }),

      setExperience: (experience) => set({ experience }),

      setEducation: (education) => set({ education }),

      setProjects: (projects) => set({ projects }),

      setSkills: (skills) => set({ skills }),

      setCertifications: (certifications) => set({ certifications }),

      setLanguages: (languages) => set({ languages }),

      resetResume: () => set(initialState),
    }),
    {
      name: "resume-builder",

      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

import axios from "axios";
import { useMutation } from "@tanstack/react-query";

export const useGenerateResume = () => {
  return useMutation({
    mutationFn: async (payload) => {
      const { data } = await axios.post(
        "/api/ai/resumes/generate",
        payload
      );
console.log(data)
      return data;
    },
  });
};

export const useSaveResume = () => {
  return useMutation({
    mutationFn: async (payload) => {
      const { data } = await axios.post(
        "/api/ai/resumes/save",
        payload
      );

      return data.resume;
    },
  });
};

export const useRegenerateSection = () => {
  return useMutation({
    mutationFn: async (payload) => {
      const { data } = await axios.post(
        "/api/ai/resumes/regenerate",
        payload
      );

      return data;
    },
  });
};
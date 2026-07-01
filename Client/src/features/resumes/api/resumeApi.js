import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { updateResumeData } from "../hooks/useUpdateResume";

export const useGenerateResume = () => {
  // const navigate = useNavigate();
  return useMutation({
    mutationFn: async (payload) => {
      const { data } = await axios.post("/api/ai/resumes/generate", payload);
      console.log(data);
      return data;
    },
    onSuccess: (response) => {
      updateResumeData(response.data);
      // navigate("/preview");
    },
  });
};

export const useSaveResume = () => {
  return useMutation({
    mutationFn: async (payload) => {
      const { data } = await axios.post("/api/ai/resumes/save", payload);

      return data.resume;
    },
  });
};

export const useRegenerateSection = () => {
  return useMutation({
    mutationFn: async (payload) => {
      const { data } = await axios.post("/api/ai/resumes/regenerate", payload);

      return data;
    },
  });
};

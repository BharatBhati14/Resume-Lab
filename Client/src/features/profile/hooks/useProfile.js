import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const getProfile = () => {
  return useQuery({
    queryKey: ["profile"],

    queryFn: async () => {
      const { data } = await axios.get("/api/profile");
      console.log(data)
      return data.data;
    },

    staleTime: 1000 * 60 * 60, // 10 mins
  });
};

export const updateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload) => {
      const { data } = await axios.post(
        "/api/profile",
        payload
      );
      console.log(data)
      return data.data;
    },

    onSuccess: (updatedProfile) => {
      queryClient.setQueryData(
        ["profile"],
        updatedProfile
      );
    },
  });
};
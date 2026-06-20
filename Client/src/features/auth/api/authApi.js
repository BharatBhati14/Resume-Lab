import axios from "axios";

export const apiClient = axios.create({
  baseURL: "/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Register User
export const registerUser = async (data) => {
  const response = await apiClient.post("/api/auth/register", data);
  return response.data;
};

// Login
export const loginUser = async (data) => {
  const response = await apiClient.post("/api/auth/login", data);
  // console.log(response);
  return response.data;
};

// get Current user details
export const currentUser = async (data) => {
  const response = await apiClient.get("/api/auth/me");
  return response.data;
};
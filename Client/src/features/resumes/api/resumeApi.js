// createResume.js

import axios from "axios";

export const createResume = async (data) => {
  const response = await axios.post(
    "/api/resumes",
    data
  );

  return response.data;
};

// getResume.js

import axios from "axios";

export const getResume = async (id) => {
  const response = await axios.get(
    `/api/resumes/${id}`
  );

  return response.data;
};

// Frontend
//     ↓
// API Layer
//     ↓
// Backend
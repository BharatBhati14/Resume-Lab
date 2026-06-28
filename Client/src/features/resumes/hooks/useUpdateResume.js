// import axios from "axios";
import { useResumeStore } from "../store/resumeStore";

export const updateResumeData = (generatedData) => {
  const { updateSection } = useResumeStore.getState();

  const {
    summary,
    skills,
    experience: currentExperience,
    projects: currentProjects,
  } = useResumeStore.getState();

  // Merge experience
  const updatedExperience = currentExperience.map((exp, index) => ({
    ...exp,
    description:
      generatedData.experience[index]?.description ?? exp.description,
    technologies:
      generatedData.experience[index]?.technologies ?? exp.technologies,
    jobTitle: generatedData.experience[index]?.jobTitle ?? exp.jobTitle,
  }));

  // Merge projects
  const updatedProjects = currentProjects.map((project, index) => ({
    ...project,
    description:
      generatedData.projects[index]?.description ?? project.description,
    technologies:
      generatedData.projects[index]?.technologies ?? project.technologies,
    title:
      generatedData.projects[index]?.name ??
      generatedData.projects[index]?.title ??
      project.title,
  }));

  updateSection("summary", generatedData.summary ?? summary);
  updateSection("skills", generatedData.skills ?? skills);
  updateSection("experience", updatedExperience);
  updateSection("projects", updatedProjects);
};

// getResume.js

// export const getResume = async (id) => {
//   const response = await axios.get(`/api/resumes/${id}`);

//   return response.data;
// };

// Frontend
//     ↓
// API Layer
//     ↓
// Backend

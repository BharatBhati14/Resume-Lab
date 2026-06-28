import { useGenerateResume } from "../api/resumeApi";
import { useResumeStore } from "../store/resumeStore";

export const toSendResumeData = () => {
  const title = useResumeStore((state) => state.title);
  const summary = useResumeStore((state) => state.summary);
  let experience = useResumeStore((state) => state.experience); //jobTitle description technologies
  let projects = useResumeStore((state) => state.projects); // title description technologies
  const skills = useResumeStore((state) => state.skills);

  experience = experience.map((exp) => ({
    jobTitle: exp.jobTitle,
    description: exp.description,
    technologies: exp.technologies,
  }));

  projects = projects.map((project) => ({
    title: project.title,
    description: project.description,
    technologies: project.technologies,
  }));

  const resumeData = { title, summary, experience, projects, skills };
  return resumeData;
};

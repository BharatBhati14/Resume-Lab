const emptyProject = {
  title: "",
  description: "",
  technologies: "",
  liveUrl: "",
  githubUrl: "",
};

export const mapProjectsToForm = (projects) =>
  projects.length
    ? projects.map((project) => ({
        ...project,
        description: Array.isArray(project.description)
          ? project.description.join("\n")
          : project.description,
        technologies: Array.isArray(project.technologies)
          ? project.technologies.join(", ")
          : project.technologies,
      }))
    : [emptyProject];

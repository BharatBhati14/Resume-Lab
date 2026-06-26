import { useForm, useFieldArray } from "react-hook-form";
import { useResumeStore } from "../../store/resumeStore";
import { ProjectCard } from "./ProjectCard";
import SaveButton from "../../../../shared/components/SaveButton";
import { projectsSchema } from "../../schema/resume.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import PreviousButton from "../../../../shared/components/PreviousButton";
import { useEffect } from "react";
import {mapProjectsToForm} from "../../utils/mapProjectsToForm"

export default function ProjectSection({ onNext, onPrev }) {
  const projects = useResumeStore((state) => state.projects);
  const updateSection = useResumeStore((state) => state.updateSection);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(projectsSchema),
    defaultValues: {
      projects: mapProjectsToForm(projects),
    },
  });

  useEffect(() => {
    reset({
      projects: mapProjectsToForm(projects),
    });
  }, [projects, reset]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "projects",
  });

  const onSubmit = (data) => {
    const transformedProjects = data.projects.map((project) => ({
      ...project,

      technologies: project.technologies
        .split(",")
        .map((tech) => tech.trim())
        .filter(Boolean),

      description: project.description
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
    }));

    updateSection("projects", transformedProjects);

    console.log(transformedProjects);
    onNext();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 max-w-7xl mx-auto"
    >
      <div className="pl-6">
        <h1 className="text-blue-950 font-bold text-2xl md:text-3xl">
          Projects
        </h1>

        <p className="mt-1 text-sm text-gray-500">Add your projects.</p>
      </div>

      {fields.map((field, index) => (
        <ProjectCard
          key={field.id}
          index={index}
          register={register}
          errors={errors}
          remove={remove}
        />
      ))}

      {fields.length >= 3 && (
        <p className="text-sm text-gray-500">Maximum 3 projects allowed.</p>
      )}

      <button
        type="button"
        disabled={fields.length >= 3}
        onClick={() =>
          append({
            title: "",
            description: "",
            technologies: "",
            liveUrl: "",
            githubUrl: "",
          })
        }
        className={`rounded-lg border border-blue-600 px-4.5 py-2.5 ml-6 text-[1rem] font-medium text-blue-600 hover:bg-blue-50 
    ${
      fields.length >= 3
        ? "cursor-not-allowed border-gray-300 text-gray-400 hover:bg-white"
        : "cursor-pointer"
    }`}
      >
        Add Project
      </button>

      {/* <button
        type="submit"
        className="rounded-lg bg-blue-600 px-5 py-2 text-white"
      >
        Save
      </button> */}
      <PreviousButton onPrev={onPrev} />
      <SaveButton />
    </form>
  );
}

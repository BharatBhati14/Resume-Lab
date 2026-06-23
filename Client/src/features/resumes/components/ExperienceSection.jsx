import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { experienceSchema } from "../schema/resume.schema";
import { ExperienceCard } from "./ExperienceCard";
import { useResumeStore } from "../store/resumeStore";

const inputClass = "w-full rounded-lg border border-gray-300 px-4 py-3";

export default function ExperienceSection() {
  const setExperience = useResumeStore((state) => state.setExperience);
  const updateSection = useResumeStore((state) => state.updateSection);

  const {
    register,
    control,
    // watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(experienceSchema),

    defaultValues: {
      experience: [
        {
          company: "",
          jobTitle: "",
          location: "",
          startDate: "",
          endDate: "",
          isCurrent: false,
          description: "",
          technologies: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  });

  const onSubmit = (data) => {
    console.log(data);

    const transformedExperience = data.experience.map((exp) => ({
      ...exp,

      technologies: exp.technologies
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),

      description: exp.description
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
    }));

    // setExperience(transformedExperience);
    updateSection("experience", transformedExperience);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 mx-auto max-w-7xl"
    >
      <div className="pl-6">
        <h1 className="text-blue-950 font-bold text-2xl md:text-3xl">
          Experience Section
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Add your job and experience details.
        </p>
      </div>
      {fields.map((field, index) => {
        const isCurrent = false;
        // watch(`experience.${index}.isCurrent`);

        return (
          <ExperienceCard
            key={field.id}
            index={index}
            register={register}
            // control={control}
            errors={errors}
            remove={remove}
            // isCurrent={isCurrent}
          />
        );
      })}

      <button
        type="button"
        onClick={() =>
          append({
            company: "",
            jobTitle: "",
            location: "",
            startDate: "",
            endDate: "",
            isCurrent: false,
            description: "",
            technologies: "",
          })
        }
        className="rounded-lg border border-blue-600 px-4.5 py-2.5 ml-6 text-[1rem] font-medium text-blue-600 hover:bg-blue-50 cursor-pointer"
      >
        Add More Experience
      </button>

      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-5 py-2.5 ml-6 font-medium text-white hover:bg-blue-700 cursor-pointer"
      >
        Save
      </button>
    </form>
  );
}

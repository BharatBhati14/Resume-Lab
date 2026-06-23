import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { experienceSchema } from "../schema/resume.schema";
import { ExperienceCard } from "./ExperienceCard";

const inputClass = "w-full rounded-lg border border-gray-300 px-4 py-3";

export default function ExperienceSection() {
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

    const payload = {
      ...data,

      experience: data.experience.map((exp) => ({
        ...exp,

        technologies: exp.technologies
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),

        description: exp.description
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean),
      })),
    };
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 mx-auto max-w-7xl"
    >
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
        className="rounded-lg border border-blue-600 px-4.5 py-2.5 text-[1rem] font-medium text-blue-600 hover:bg-blue-50 cursor-pointer"
      >
        Add More Experience
      </button>

      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700 cursor-pointer"
      >
        Save
      </button>
    </form>
  );
}

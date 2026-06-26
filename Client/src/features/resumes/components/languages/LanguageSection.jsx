import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { languagesSchema } from "../../schema/resume.schema";
import { LanguageCard } from "./LanguageCard";
import { useResumeStore } from "../../store/resumeStore";
import SaveButton from "../../../../shared/components/SaveButton";
import PreviousButton from "../../../../shared/components/PreviousButton";
import { useEffect } from "react";

export default function LanguageSection({ onPrev }) {
  const languages = useResumeStore((state) => state.languages);
  const updateSection = useResumeStore((state) => state.updateSection);

  const emptyLanguage = {
    name: "",
    proficiency: "",
  };

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(languagesSchema),

    defaultValues: {
      languages: languages.length > 0 ? languages : [emptyLanguage],
    },
  });

  useEffect(() => {
    reset({
      languages: languages.length > 0 ? languages : [emptyLanguage],
    });
  }, [languages, reset]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "languages",
  });

  const onSubmit = (data) => {
    updateSection("languages", data.languages);

    console.log(data.languages);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 max-w-7xl mx-auto"
    >
      <div className="pl-6">
        <h1 className="text-blue-950 font-bold text-2xl md:text-3xl">
          Languages
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Add languages you can communicate in.
        </p>
      </div>

      {fields.map((field, index) => (
        <LanguageCard
          key={field.id}
          index={index}
          register={register}
          errors={errors}
          remove={remove}
        />
      ))}

      {fields.length >= 5 && (
        <p className="text-sm text-gray-500 pl-6">
          Maximum 5 languages allowed.
        </p>
      )}

      <button
        type="button"
        disabled={fields.length >= 5}
        onClick={() =>
          append({
            name: "",
            proficiency: "",
          })
        }
        className={`rounded-lg border border-blue-600 px-4.5 py-2.5 ml-6 text-[1rem] font-medium text-blue-600 hover:bg-blue-50
        ${
          fields.length >= 5
            ? "cursor-not-allowed border-gray-300 text-gray-400 hover:bg-white"
            : "cursor-pointer"
        }`}
      >
        Add Language
      </button>

      <PreviousButton onPrev={onPrev} />
      <SaveButton />
    </form>
  );
}

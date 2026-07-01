import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { educationSchema } from "../../schema/resume.schema";
import { EducationCard } from "./EducationCard";
import { useResumeStore } from "../../store/resumeStore";
import SaveButton from "../../../../shared/components/SaveButton";
import PreviousButton from "../../../../shared/components/PreviousButton";
import { useEffect } from "react";

export default function EducationSection({ onNext, onPrev }) {
  const education = useResumeStore((state) => state.education);
  const updateSection = useResumeStore((state) => state.updateSection);

  const emptyEducation = {
    institution: "",
    degree: "",
    fieldOfStudy: "",
    location: "",
    startDate: "",
    endDate: "",
    isCurrent: false,
    grade: "",
    description: "",
  };

  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(educationSchema),

    defaultValues: {
      education: education.length > 0 ? education : [emptyEducation],
    },
  });

  useEffect(() => {
    reset({
      education: education.length > 0 ? education : [emptyEducation],
    });
  }, [education, reset]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  const onSubmit = (data) => {
    updateSection("education", data.education);

    console.log(data.education);
    onNext();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 mx-auto max-w-7xl"
    >
      <div className="pl-6">
        <h1 className="text-blue-950 font-bold text-2xl md:text-3xl">
          Education Section
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Add your education details.
        </p>
      </div>

      {fields.length === 1 && (
        <p className="mb-2 mx-2 md:mx-0 rounded-lg border border-blue-200 bg-blue-50 p-3 text-[1rem] text-blue-800">
          Education details are optional. If you don't want to include it, click
          the
          <span className="font-semibold "> Remove</span> button.
        </p>
      )}

      {fields.map((field, index) => (
        <EducationCard
          key={field.id}
          index={index}
          register={register}
          errors={errors}
          remove={remove}
          isCurrent={watch(`education.${index}.isCurrent`)}
        />
      ))}

      {fields.length >= 5 && (
        <p className=" text-gray-700 pl-4">
          Maximum 5 Education entries allowed.
        </p>
      )}

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <button
          type="button"
          disabled={fields.length >= 5}
          onClick={() =>
            append({
              institution: "",
              degree: "",
              fieldOfStudy: "",
              location: "",
              startDate: "",
              endDate: "",
              isCurrent: false,
              grade: "",
              description: "",
            })
          }
          className={`rounded-lg border border-blue-600 px-4.5 py-2.5 mx-6 text-[1rem] font-medium text-blue-600 hover:bg-blue-50 
    ${
      fields.length >= 5
        ? "cursor-not-allowed border-gray-300 text-gray-400 hover:bg-white"
        : "cursor-pointer"
    }`}
        >
          Add Education
        </button>

        <div>
          <PreviousButton onPrev={onPrev} />
          <SaveButton />
        </div>
      </div>
    </form>
  );
}

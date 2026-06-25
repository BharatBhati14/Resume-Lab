import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { certificationsSchema } from "../../schema/resume.schema";
import { CertificationCard } from "./CertificationCard";
import { useResumeStore } from "../../store/resumeStore";
import SaveButton from "../../../../shared/components/SaveButton";

export default function CertificationSection() {
  const updateSection = useResumeStore((state) => state.updateSection);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(certificationsSchema),

    defaultValues: {
      certifications: [
        {
          name: "",
          issuer: "",
          issueDate: "",
          url: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "certifications",
  });

  const onSubmit = (data) => {
    updateSection("certifications", data.certifications);

    console.log(data.certifications);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 max-w-7xl mx-auto"
    >
      <div className="pl-6">
        <h1 className="text-blue-950 font-bold text-2xl md:text-3xl">
          Certifications
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Add your professional certifications.
        </p>
      </div>

      {fields.map((field, index) => (
        <CertificationCard
          key={field.id}
          index={index}
          register={register}
          errors={errors}
          remove={remove}
        />
      ))}

      {fields.length >= 5 && (
        <p className="text-sm text-gray-500 pl-6">
          Maximum 5 certifications allowed.
        </p>
      )}

      <button
        type="button"
        disabled={fields.length >= 5}
        onClick={() =>
          append({
            name: "",
            issuer: "",
            issueDate: "",
            url: "",
          })
        }
        className={`rounded-lg border border-blue-600 px-4.5 py-2.5 ml-6 text-[1rem] font-medium text-blue-600 hover:bg-blue-50
        ${
          fields.length >= 5
            ? "cursor-not-allowed border-gray-300 text-gray-400 hover:bg-white"
            : "cursor-pointer"
        }`}
      >
        Add Certification
      </button>

      <SaveButton />
    </form>
  );
}

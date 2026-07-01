import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { languagesSchema } from "../../schema/resume.schema";
import { LanguageCard } from "./LanguageCard";
import { useResumeStore } from "../../store/resumeStore";
import PreviousButton from "../../../../shared/components/PreviousButton";
import { useEffect } from "react";
import { toSendResumeData } from "../../hooks/useToSendResumeData";
import { useGenerateResume } from "../../api/resumeApi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Spinner from "../../../../shared/components/Spinner";

export default function LanguageSection({ onPrev }) {
  const location = useLocation();
  const isResumePage = location.pathname === "/resume";
  const navigate = useNavigate();

  const languages = useResumeStore((state) => state.languages);
  const updateSection = useResumeStore((state) => state.updateSection);

  const resumeData = toSendResumeData();
  const generateResumeMutation = useGenerateResume();

  const handleGenerate = async () => {
    try {
      await generateResumeMutation.mutateAsync(resumeData);
      navigate("/preview");
    } catch (error) {
      if (error.response?.status === 401) {
        // console.log(error.response?.status);
        navigate("/login");
      }
    }
  };

  // const handleGenerate = () => {
  //   generateResumeMutation.mutate(resumeData);
  // };

  const emptyLanguage = {
    name: "",
    proficiency: "",
  };

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
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
    if (!isResumePage) navigate("/preview");
  };

  if (generateResumeMutation.isPending) {
    return <Spinner />;
  }

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 max-w-7xl  mx-auto"
      >
        <div className="pl-6">
          <h1 className="text-blue-950 font-bold text-2xl md:text-3xl">
            Languages
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Add languages you can communicate in.
          </p>
        </div>

        {fields.length === 1 && (
          <p className="mb-2 mx-2 md:mx-0 rounded-lg border border-blue-200 bg-blue-50 p-3 text-[1rem] text-blue-800">
            Languages are optional. If you don't want to include it, click the{" "}
            <span className="font-semibold "> Remove</span> button.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-6">
          {fields.map((field, index) => (
            <LanguageCard
              key={field.id}
              index={index}
              register={register}
              errors={errors}
              remove={remove}
            />
          ))}
        </div>

        {fields.length >= 5 && (
          <p className="text-sm text-gray-500 pl-6">
            Maximum 5 languages allowed.
          </p>
        )}
        <div className="flex justify-start flex-col sm:flex-row gap-4 my-8">
          <button
            type="button"
            disabled={fields.length >= 5}
            onClick={() =>
              append({
                name: "",
                proficiency: "",
              })
            }
            className={`rounded-lg border border-blue-600 px-4.5 py-2.5 mx-6 text-[1rem] font-medium text-blue-600 hover:bg-blue-50
        ${
          fields.length >= 5
            ? "cursor-not-allowed border-gray-300 text-gray-400 hover:bg-white"
            : "cursor-pointer"
        }`}
          >
            Add Language
          </button>

          <div>
            <PreviousButton onPrev={onPrev} />
            {isResumePage ? (
              <button
                type="submit"
                className="border rounded-lg bg-blue-600 px-5 py-2.5 mr-6 font-medium text-white hover:bg-blue-700 cursor-pointer"
              >
                Save
              </button>
            ) : (
              <button
                type="submit"
                className="border rounded-lg bg-blue-600 px-6 py-2.5 mr-6 font-medium text-white hover:bg-blue-700 cursor-pointer"
              >
                Save & Preview
              </button>
            )}
          </div>
        </div>
      </form>

      {/* Generate Resume Button */}
      {/* <div className="flex justify-center mt-20  mb-8">
        {isResumePage && <Link>
          <button
            onClick={handleGenerate}
            className="rounded-lg bg-green-600 text-[1.07rem] px-6 py-3 mb-8 text-white font-medium shadow-md transition-all duration-200 hover:bg-green-700 hover:shadow-lg active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-400 cursor-pointer"
            disabled={generateResumeMutation.isPending || !isValid}
          >
            {generateResumeMutation.isPending
              ? "Generating..."
              : "Generate Resume"}
          </button>
        </Link>}

        {!isResumePage && <Link>
          <button
            className="rounded-lg bg-green-600 text-[1.07rem] px-6 py-3 mb-8 text-white font-medium shadow-md transition-all duration-200 hover:bg-green-700 hover:shadow-lg active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-400 cursor-pointer"
          > Preview Resume
          </button>
        </Link>}
      </div> */}

      <div className="flex justify-center mt-16 mb-10 px-4">
        <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
          {/* Generate Resume (Primary Action) */}
          {isResumePage && (
            <button
              onClick={handleGenerate}
              disabled={generateResumeMutation.isPending || !isValid}
              className="inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-green-700 hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-gray-400 disabled:shadow-none"
            >
              {generateResumeMutation.isPending ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Generating...
                </span>
              ) : (
                "Generate Resume"
              )}
            </button>
          )}

          {/* Preview Resume (Secondary Action) */}
          {/* {!isResumePage && (
            <Link
              to="/resume/preview"
              className="inline-flex items-center justify-center rounded-4xl border border-blue-600  px-8 py-3.5 text-sm md:text-[1.05rem] font-semibold text-blue-600 shadow-md transition-all duration-200 hover:bg-blue-50 hover:shadow-md active:scale-[0.98]"
            >
              Preview Resume
            </Link>
          )} */}
        </div>
      </div>
    </div>
  );
}

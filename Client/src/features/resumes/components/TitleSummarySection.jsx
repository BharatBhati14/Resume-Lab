import { useForm } from "react-hook-form";
import { useResumeStore } from "../store/resumeStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { titleSummarySchema } from "../schema/resume.schema";
import SaveButton from "../../../shared/components/SaveButton";
import Optional from "../../../shared/components/Optional";
import PreviousButton from "../../../shared/components/PreviousButton";
import { useEffect } from "react";

export default function TitleSummarySection({ onNext, onPrev }) {
  const updateSection = useResumeStore((state) => state.updateSection);
  const title = useResumeStore((state) => state.title);
  const summary = useResumeStore((state) => state.summary);

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm({
    resolver: zodResolver(titleSummarySchema),
    defaultValues: {
      title,
      summary,
      // title: "",
      // summary: "",
    },
  });

  // useEffect(() => {
  //   console.log("resetting title summart", title, summary);

  //   reset({
  //     title: title ?? "",
  //     summary: summary ?? "",
  //   });
  // }, [title, summary, reset]);

  const onSubmit = (data) => {
    console.log(data);
    updateSection("title", data.title);
    updateSection("summary", data.summary);
    onNext();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 p-6 max-w-7xl mx-auto"
    >
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-blue-950">
          Professional Summary
        </h1>
        <p className="text-sm text-gray-500">
          Add your resume title and summary.
        </p>
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Resume Title <Optional />
        </label>

        <input
          {...register("title")}
          placeholder="Frontend Developer"
          className="w-full rounded-lg border border-gray-300 px-4 py-3"
        />
        <p className="text-red-500 text-sm">{errors?.title?.message}</p>
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Professional Summary{" "}
          <span className="text-[14px] font-normal text-gray-500 pl-1 italic">
            (optional but recommended)
          </span>
        </label>

        <textarea
          rows={5}
          {...register("summary")}
          placeholder="Write a short professional summary..."
          className="w-full rounded-lg border border-gray-300 px-4 py-3"
        />
        <p className="text-red-500 text-sm">{errors?.summary?.message}</p>
      </div>
      <PreviousButton onPrev={onPrev} />
      <SaveButton />
    </form>
  );
}

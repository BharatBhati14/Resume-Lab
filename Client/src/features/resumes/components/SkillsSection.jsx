import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { skillsSchema } from "../schema/resume.schema";
import { useResumeStore } from "../store/resumeStore";

import SaveButton from "../../../shared/components/SaveButton";
import PreviousButton from "../../../shared/components/PreviousButton";
import { useEffect } from "react";

export default function SkillsSection({ onNext, onPrev }) {
  const skills = useResumeStore((state) => state.skills);
  const updateSection = useResumeStore((state) => state.updateSection);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(skillsSchema),
    defaultValues: {
      technical: skills.technical.join(", "),
      soft: skills.soft.join(", "),
      tools: skills.tools.join(", "),
    },
  });

  useEffect(() => {
    reset({
      technical: skills.technical.join(", "),
      soft: skills.soft.join(", "),
      tools: skills.tools.join(", "),
    });
  }, [skills, reset]);

  const onSubmit = (data) => {
    const transformedSkills = {
      technical: data.technical
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),

      soft: data.soft
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),

      tools: data.tools
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    };

    updateSection("skills", transformedSkills);

    console.log(transformedSkills);
    onNext();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-7xl mx-auto space-y-8"
    >
      <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition space-y-6">
        <div className="pb-2">
          <h1 className="text-blue-950 font-bold text-2xl md:text-3xl">
            Skills Section
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Add your technical skills, soft skills, and tools.
          </p>
        </div>
        {/* Technical Skills */}
        <div>
          <label className="mb-2 block text-sm font-medium ">
            Technical Skills
          </label>

          <input
            {...register("technical")}
            placeholder="React, Node.js, MongoDB, Express"
            className="w-full rounded-lg border border-gray-400 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <p className="mt-1 text-xs text-gray-500">
            Separate skills with commas. 3 skills are recommended
          </p>

          <p className="mt-1 text-sm text-red-500">
            {errors?.technical?.message}
          </p>
        </div>

        {/* Soft Skills */}
        <div>
          <label className="mb-2 block text-sm font-medium">Soft Skills</label>

          <input
            {...register("soft")}
            placeholder="Leadership, Communication, Teamwork"
            className="w-full rounded-lg border border-gray-400 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <p className="mt-1 text-xs text-gray-500">
            Separate skills with commas.
          </p>

          <p className="mt-1 text-sm text-red-500">{errors?.soft?.message}</p>
        </div>

        {/* Tools */}
        <div>
          <label className="mb-2 block text-sm font-medium ">
            Tools & Platforms
          </label>

          <input
            {...register("tools")}
            placeholder="Git, Docker, Postman"
            className="w-full rounded-lg border border-gray-400 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <p className="mt-1 text-xs text-gray-500">
            Separate tools with commas.
          </p>

          <p className="mt-1 text-sm text-red-500">{errors?.tools?.message}</p>
        </div>
      </div>

      <PreviousButton onPrev={onPrev} />
      <SaveButton />
    </form>
  );
}

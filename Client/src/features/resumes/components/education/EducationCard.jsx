import { useState } from "react";
import Optional from "../../../../shared/components/Optional";

export function EducationCard({ index, register, errors, remove, isCurrent, }) {
  // const [isCurrent, setIsCurrent] = useState(false);

  const inputClass =
    "w-full rounded-lg border border-gray-400 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200";

  const errorClass = "mt-1 text-sm text-red-500";

  return (
    <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition space-y-4">
      <div className="flex items-center justify-between pb-4">
        <h3 className="text-xl font-semibold">Education {index + 1}</h3>

        <button
          type="button"
          onClick={() => remove(index)}
          className="rounded-lg px-3 py-2 text-red-600 hover:bg-red-50 cursor-pointer"
        >
          Remove
        </button>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Institution</label>

        <input
          {...register(`education.${index}.institution`)}
          placeholder="University Name"
          className={inputClass}
        />

        <p className={errorClass}>
          {errors?.education?.[index]?.institution?.message}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-2 block text-sm font-medium">Degree</label>

          <input
            {...register(`education.${index}.degree`)}
            placeholder="B.Tech"
            className={inputClass}
          />

          <p className={errorClass}>
            {errors?.education?.[index]?.degree?.message}
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Field of Study
          </label>

          <input
            {...register(`education.${index}.fieldOfStudy`)}
            placeholder="Computer Science"
            className={inputClass}
          />

          <p className={errorClass}>
            {errors?.education?.[index]?.fieldOfStudy?.message}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-2 block text-sm font-medium">Start Date</label>

          <input
            type="month"
            {...register(`education.${index}.startDate`)}
            className={inputClass}
          />

          <p className={errorClass}>
            {errors?.education?.[index]?.startDate?.message}
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">End Date</label>

          <input
            type="month"
            disabled={isCurrent}
            {...register(`education.${index}.endDate`)}
            className={inputClass}
          />

          <p className={errorClass}>
            {!isCurrent && errors?.education?.[index]?.endDate?.message}
          </p>
        </div>
      </div>

      <label className="inline-flex items-center gap-3 text-[1rem] font-medium">
        <input
          type="checkbox"
          {...register(`education.${index}.isCurrent`)}
          // onClick={() => setIsCurrent((prev) => !prev)}
          className="h-4 w-4"
        />
        I am currently studying here
      </label>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Grade / CGPA <Optional />
          </label>

          <input
            {...register(`education.${index}.grade`)}
            placeholder="8.9 CGPA"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium">
            Location <Optional />
          </label>

          <input
            {...register(`education.${index}.location`)}
            placeholder="Mumbai, India"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Description{" "}
          <span className="text-[14px] font-normal text-gray-500 pl-1 italic">
            (optional but recommended)
          </span>
        </label>

        <textarea
          rows={3}
          {...register(`education.${index}.description`)}
          placeholder="Achievements, coursework, activities..."
          className={inputClass}
        />

        <p className={errorClass}>
          {errors?.education?.[index]?.description?.message}
        </p>
      </div>
    </div>
  );
}

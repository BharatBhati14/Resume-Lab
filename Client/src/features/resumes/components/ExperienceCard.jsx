import { useState } from "react";
import { useFieldArray } from "react-hook-form";

export function ExperienceCard({
  index,
  register,
  //   control,
  errors,
  remove,
  //   isCurrent,
}) {
  //   const {
  //     // fields: descriptionFields,
  //     // append: appendDescription,
  //     // remove: removeDescription,
  //   } = useFieldArray({
  //     control,
  //     name: `experience.${index}.description`,
  //   });
  const [isCurrent, setIsCurrent] = useState(false);
  const inputClass =
    "w-full rounded-lg border border-gray-400 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200";
  const errorClass = "mt-1 text-sm text-red-500";

  return (
    <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition space-y-4">
      <div className="flex items-center justify-between  pb-4">
        <h3 className="text-xl font-semibold text-gray-900">
          Experience {index + 1}
        </h3>

        <button
          type="button"
          onClick={() => remove(index)}
          className="rounded-lg px-3 py-2 text-[1rem] font-medium text-red-600 hover:bg-red-50"
        >
          Remove
        </button>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Job Title
        </label>
        <input
          {...register(`experience.${index}.jobTitle`)}
          placeholder="Job Title"
          className={inputClass}
        />

        <p className={errorClass}>
          {errors?.experience?.[index]?.jobTitle?.message}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Company
          </label>
          <input
            {...register(`experience.${index}.company`)}
            placeholder="Company"
            className={inputClass}
          />

          <p className="text-red-500 text-sm">
            {errors?.experience?.[index]?.company?.message}
          </p>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            {...register(`experience.${index}.location`)}
            placeholder="Location"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            type="month"
            {...register(`experience.${index}.startDate`)}
            className={inputClass}
          />

          <p className="text-red-500 text-sm">
            {errors?.experience?.[index]?.startDate?.message}
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            End Date
          </label>
          <input
            type="month"
            disabled={isCurrent}
            {...register(`experience.${index}.endDate`)}
            className={inputClass}
          />

          <p className="text-red-500 text-sm">
            {!isCurrent && errors?.experience?.[index]?.endDate?.message}
          </p>
        </div>
      </div>

      <label className="inline-flex items-center gap-3 text-[1rem] font-medium text-gray-700">
        <input
          type="checkbox"
          {...register(`experience.${index}.isCurrent`)}
          className="h-4 w-4 rounded border-gray-300 text-blue-600"
          onClick={() => setIsCurrent((prev) => !prev)}
        />
        I currently work here
      </label>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          rows={3}
          {...register(`experience.${index}.description`)}
          placeholder={`Built scalable APIs
Improved performance by 40%
Mentored junior developers`}
          className={inputClass}
        />
        <p className="text-red-500 text-sm">
          {errors?.experience?.[index]?.description?.message}
        </p>

        {/* <div className="space-y-2 mt-2">
            {descriptionFields.map((desc, descIndex) => (
                <div key={desc.id} className="flex gap-2">
                <input
                    {...register(`experience.${index}.description.${descIndex}`)}
                    className="w-full border rounded p-2"
                    placeholder="Built a scalable API..."
                />

                <button
                    type="button"
                    onClick={() => removeDescription(descIndex)}
                >
                    ×
                </button>
                </div>
            ))}
            </div> */}

        {/* <button
            type="button"
            onClick={() => appendDescription("")}
            className="mt-2 text-blue-600"
            >
            Add Bullet
            </button> */}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Technologies Used
        </label>
        <input
          {...register(`experience.${index}.technologies`)}
          placeholder="React, Node.js, MongoDB"
          className={inputClass}
        />
        <p className="mt-1 text-xs text-gray-500">
          Separate technologies with commas
        </p>
        <p className="text-red-500 text-sm">
          {errors?.experience?.[index]?.technologies?.message &&
            "Atleast one technology is needed"}
        </p>
      </div>
    </div>
  );
}

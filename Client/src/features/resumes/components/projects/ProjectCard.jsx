export function ProjectCard({ index, register, errors, remove }) {
  const inputClass =
    "w-full rounded-lg border border-gray-400 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200";
  const errorClass = "mt-1 text-sm text-red-500";

  return (
    <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition space-y-4">
      <div className="flex items-center justify-between  pb-4">
        <h3 className="text-xl font-semibold text-gray-900">
          Project {index + 1}
        </h3>

        {index > 0 && (
          <button
            type="button"
            onClick={() => remove(index)}
            className="rounded-lg px-3 py-2 text-[1rem] font-medium text-red-600 hover:bg-red-50 cursor-pointer"
          >
            Remove
          </button>
        )}
      </div>

      <div>
        <label className="block mb-2 font-medium">Project Title</label>

        <input
          {...register(`projects.${index}.title`)}
          placeholder="Project Title"
          className={inputClass}
        />
        <p className={errorClass}>
          {errors?.projects?.[index]?.title?.message}
        </p>
      </div>

      <div>
        <label className="block mb-2 font-medium">Description</label>

        <textarea
          rows={4}
          {...register(`projects.${index}.description`)}
          placeholder={`Built authentication system
Implemented dashboard
Optimized performance`}
          className={inputClass}
        />
        <p className="text-red-500 text-sm">
          {errors?.projects?.[index]?.description?.message}
        </p>
      </div>

      <div>
        <label className="block mb-2 font-medium">Technologies</label>

        <input
          {...register(`projects.${index}.technologies`)}
          placeholder="React, Node.js, MongoDB"
          className={inputClass}
        />
        <p className="text-red-500 text-sm">
          {errors?.projects?.[index]?.technologies?.message}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block mb-2 font-medium">
            Live URL{" "}
            <span className="text-[14px] font-normal text-gray-500 pl-1 italic">
              (optional)
            </span>
          </label>

          <input
            {...register(`projects.${index}.liveUrl`)}
            placeholder="https://example.com"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            GitHub URL{" "}
            <span className="text-[14px] font-normal text-gray-500 pl-1 italic">
              (optional)
            </span>
          </label>

          <input
            {...register(`projects.${index}.githubUrl`)}
            placeholder="https://github.com/user/repo"
            className={inputClass}
          />
        </div>
      </div>
    </div>
  );
}

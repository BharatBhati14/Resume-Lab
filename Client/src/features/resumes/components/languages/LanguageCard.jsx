export function LanguageCard({ index, register, errors, remove }) {
  const inputClass =
    "w-full rounded-lg border border-gray-400 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200";

  const errorClass = "mt-1 mb-4 text-sm text-red-500";

  return (
    <div className="w-100 rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition space-y-4">
      <div className="flex items-center justify-between pb-4">
        <h3 className="text-xl font-semibold text-gray-900">
          Language {index + 1}
        </h3>

        <button
          type="button"
          onClick={() => remove(index)}
          className="rounded-lg px-3 py-2 text-red-600 hover:bg-red-50 cursor-pointer"
        >
          Remove
        </button>
      </div>
      <div className="md:max-w-125">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Language
          </label>

          <input
            {...register(`languages.${index}.name`)}
            placeholder="English"
            className={inputClass}
          />

          <p className={errorClass}>
            {errors?.languages?.[index]?.name?.message}
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Proficiency
          </label>

          <select
            {...register(`languages.${index}.proficiency`)}
            className={inputClass}
          >
            <option value="">Select proficiency</option>
            <option value="basic">Basic</option>
            <option value="intermediate">Intermediate</option>
            <option value="fluent">Fluent</option>
            <option value="native">Native</option>
          </select>

          <p className={errorClass}>
            {errors?.languages?.[index]?.proficiency?.message}
          </p>
        </div>
      </div>
    </div>
  );
}

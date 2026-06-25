export function CertificationCard({ index, register, errors, remove }) {
  const inputClass =
    "w-full rounded-lg border border-gray-400 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200";

  const errorClass = "mt-1 text-sm text-red-500";

  return (
    <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition space-y-4">
      <div className="flex items-center justify-between pb-4">
        <h3 className="text-xl font-semibold text-gray-900">
          Certification {index + 1}
        </h3>

        <button
          type="button"
          onClick={() => remove(index)}
          className="rounded-lg px-3 py-2 text-red-600 hover:bg-red-50 cursor-pointer"
        >
          Remove
        </button>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Certification Name
        </label>

        <input
          {...register(`certifications.${index}.name`)}
          placeholder="AWS Certified Developer"
          className={inputClass}
        />

        <p className={errorClass}>
          {errors?.certifications?.[index]?.name?.message}
        </p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Issuer
        </label>

        <input
          {...register(`certifications.${index}.issuer`)}
          placeholder="Amazon Web Services"
          className={inputClass}
        />

        <p className={errorClass}>
          {errors?.certifications?.[index]?.issuer?.message}
        </p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Issue Date
        </label>

        <input
          type="month"
          {...register(`certifications.${index}.issueDate`)}
          className={inputClass}
        />

        <p className={errorClass}>
          {errors?.certifications?.[index]?.issueDate?.message}
        </p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Certificate URL
          <span className="ml-1 text-xs italic text-gray-500">(optional)</span>
        </label>

        <input
          {...register(`certifications.${index}.url`)}
          placeholder="https://certificate-link.com"
          className={inputClass}
        />

        <p className={errorClass}>
          {errors?.certifications?.[index]?.url?.message}
        </p>
      </div>
    </div>
  );
}

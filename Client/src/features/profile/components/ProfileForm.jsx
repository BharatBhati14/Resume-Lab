import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalInfoSchema } from "../schemas/personalInfo.schema";
import { getProfile, updateProfile } from "../hooks/useProfile";
import { useResumeStore } from "../../resumes/store/resumeStore";

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200";

export default function ProfileForm({ onNext, onPrev }) {
  // let profileData = {};
  const setPersonalInfo = useResumeStore((state) => state.setPersonalInfo);

  const location = useLocation();
  const isResumePage = location.pathname === "/resume";
  const isEditPage = location.pathname === "/resume/edit";
  const navigate = useNavigate();

  const { data: profile, isLoading } = getProfile();
  const updateProfileMutation = updateProfile();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    resolver: zodResolver(personalInfoSchema),
    // values: profile || {},

    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      website: "",
      linkedin: "",
      github: "",
      portfolio: "",
      profileImage: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    const res = updateProfileMutation.mutate(data);
    // profile = {...res}
    setPersonalInfo(data);
    // profileData = data;
    onNext();
  };

  useEffect(() => {
    if (!profile) return;
    console.log("it runs");
    console.log("resetting form", profile);

    reset({
      fullName: profile.fullName || "",
      email: profile.email || "",
      phone: profile.phone || "",
      location: profile.location || "",
      website: profile.website || "",
      linkedin: profile.linkedin || "",
      github: profile.github || "",
      portfolio: profile.portfolio || "",
      profileImage: profile.profileImage || "",
    });

    setPersonalInfo(profile);
  }, [profile, reset]);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="mx-auto max-w-7xl">
      <div className="rounded-2xl border-0 border-gray-200 bg-white p-6 mb-8 shadow-sm md:p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Personal Information
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Add your profile and professional details.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 gap-y-6 gap-x-10 md:grid-cols-2">
            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Full Name
              </label>

              <input
                {...register("fullName")}
                placeholder="John Doe"
                className={inputClass}
              />

              {errors.fullName && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>

              <input
                {...register("email")}
                placeholder="john@example.com"
                className={inputClass}
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Phone
              </label>

              <input
                {...register("phone")}
                placeholder="+91 9876543210"
                className={inputClass}
              />

              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Location */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Location
              </label>

              <input
                {...register("location")}
                placeholder="Mumbai, India"
                className={inputClass}
              />

              {errors.location && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.location.message}
                </p>
              )}
            </div>

            {/* Website */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Website
              </label>

              <input
                {...register("website")}
                placeholder="https://yourwebsite.com"
                className={inputClass}
              />

              {errors.website && (
                <p className="mt-1 text-sm text-red-500">
                  {errors?.website?.message}
                </p>
              )}
            </div>

            {/* LinkedIn */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                LinkedIn
              </label>

              <input
                {...register("linkedin")}
                placeholder="https://linkedin.com/in/johndoe"
                className={inputClass}
              />

              {errors.linkedin && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.linkedin.message}
                </p>
              )}
            </div>

            {/* GitHub */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                GitHub
              </label>

              <input
                {...register("github")}
                placeholder="https://github.com/johndoe"
                className={inputClass}
              />

              {errors.github && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.github.message}
                </p>
              )}
            </div>

            {/* Portfolio */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Portfolio
              </label>

              <input
                {...register("portfolio")}
                placeholder="https://portfolio.com"
                className={inputClass}
              />

              {errors.portfolio && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.portfolio.message}
                </p>
              )}
            </div>

            {/* Profile Image */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Profile Image URL
              </label>

              <input
                {...register("profileImage")}
                placeholder="https://..."
                className={inputClass}
              />

              {errors.profileImage && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.profileImage.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-8 mt-12">
            <button
              type="submit"
              disabled={!isDirty}
              className="rounded-lg bg-blue-600 px-6 py-2 text-md font-medium text-white transition hover:bg-blue-700 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              Save Changes
            </button>

            {(isResumePage || isEditPage) && (
              <button
                type="button"
                disabled={!isValid}
                className="rounded-lg bg-white px-6 py-2 text-md font-medium border-2 text-blue-900 border-blue-700 transition hover:bg-blue-700 hover:text-white cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400 disabled:border-0 disabled:text-white"
                onClick={handleSubmit((data) => {
                  setPersonalInfo(data);
                  onNext();
                })}
              >
                Next
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

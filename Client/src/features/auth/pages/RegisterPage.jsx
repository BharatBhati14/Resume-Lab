import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../zodSchema/registerFormSchema";
import { Link, useNavigate } from "react-router-dom";
// import { registerMutation } from "../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../api/authApi";

function RegisterPage() {
  const navigate = useNavigate(); 
  const registerMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      navigate("/");
    },
  });
  
  // Form Submission
  const onSubmit = (data) => {
    registerMutation.mutate(data);
  };

  const onError = (errors) => {
    // console.log("FORM ERRORS", errors);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });

  return (
    <div className="min-h-[90vh] bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
        <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>

        <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>

            <input
              id="name"
              type="text"
              {...register("username")}
              autoComplete="username"
              className={`w-full rounded-lg border px-3 py-2 outline-none transition
            ${
              errors.username
                ? "border-red-500 focus:ring-2 focus:ring-red-300"
                : "border-gray-300 focus:ring-2 focus:ring-blue-400"
            }`}
            />

            {errors.username && (
              <p className="mt-1 text-sm text-red-500">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>

            <input
              id="email"
              type="email"
              {...register("email")}
              autoComplete="email"
              className={`w-full rounded-lg border px-3 py-2 outline-none transition
            ${
              errors.email
                ? "border-red-500 focus:ring-2 focus:ring-red-300"
                : "border-gray-300 focus:ring-2 focus:ring-blue-400"
            }`}
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              {...register("password")}
              autoComplete="new-password"
              className={`w-full rounded-lg border px-3 py-2 outline-none transition
            ${
              errors.password
                ? "border-red-500 focus:ring-2 focus:ring-red-300"
                : "border-gray-300 focus:ring-2 focus:ring-blue-400"
            }`}
            />

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium mb-1"
            >
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              {...register("confirmPassword")}
              autoComplete="new-password"
              className={`w-full rounded-lg border px-3 py-2 outline-none transition
            ${
              errors.confirmPassword
                ? "border-red-500 focus:ring-2 focus:ring-red-300"
                : "border-gray-300 focus:ring-2 focus:ring-blue-400"
            }`}
            />

            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Btn */}
          <div className="space-y-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-blue-700 py-2.5 font-medium text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400 cursor-pointer"
            >
              {isSubmitting ? "Creating..." : "Create Account"}
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-blue-600 hover:text-blue-700 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;

// const setAuth = useAuthStore((state) => state.login);
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../zodSchema/loginFormSchema";
import { loginUser } from "../api/authApi";
import { Mutation, useMutation } from "@tanstack/react-query";
import useAuthStore from "../../../app/store/authStore";

function LoginPage() {
  const navigate = useNavigate(); 
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn)
  const login = useAuthStore((state) => state.login)

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      login()
      navigate("/resume");
      // console.log(useAuthStore.getState().isLoggedIn)
    },
  });
  const onSubmit = async (data) => {
    loginMutation.mutate(data);
    // loginMutation.isSuccess && login(true);
  };

  const onError = (errors) => {
    // console.log(errors);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-8 ">
      <div className="w-full max-w-104 bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
        <h1 className="text-2xl font-bold text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Sign in to your account
        </p>

        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="space-y-5"
        >
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              autoComplete="email"
              {...register("email")}
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
            <div className="flex items-center justify-between mb-1">
              <label
                htmlFor="password"
                className="text-sm font-medium"
              >
                Password
              </label>
            </div>

            <input
              id="password"
              type="password"
              autoComplete="current-password"
              {...register("password")}
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

          {loginMutation.isError && <p className="text-md text-red-500">Invalid Email or Password</p>}

          {/* Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-blue-700 py-2.5 font-medium text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400 cursor-pointer"
          >
            {isSubmitting ? "Signing In..." : "Log In"}
          </button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>

            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-3 text-gray-500">
                or
              </span>
            </div>
          </div>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"
            >
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
import { Link, Outlet, useLocation } from "react-router-dom";

function AuthLayout() {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {/* <header className="top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <span className="font-bold text-2xl sm:text-3xl">
            ResumeLab
          </span>

          {isLoginPage ? (
            <Link
              to="/register"
              className="px-4 py-2 rounded-lg border-2 border-blue-900 hover:bg-blue-800 hover:text-white transition"
            >
              Create Account
            </Link>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg border-2 border-blue-900 hover:bg-blue-800 hover:text-white transition"
            >
              Log In
            </Link>
          )}
        </div>
      </header> */}

      <Outlet />
    </>
  );
}

export default AuthLayout;
import { Link } from "react-router-dom";
import useAuthStore from "../../../app/store/authStore";
import { apiClient, currentUser } from "../../auth/api/authApi";
import { useQuery } from "@tanstack/react-query";
const DashboardPage = () => {
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  const { isLoading, error } = useQuery({
    queryKey: ["auth"],
    queryFn: currentUser,

    onSuccess: (data) => {
      login(data.success);
    },
    onError: () => {
      logout();
    },
  });

  const resume = {
    id: 1,
    name: "Software Engineer Resume",
    updated: "2 hours ago",
    atsScore: 87,
  };

  const suggestions = [
    "Add measurable achievements",
    "Improve professional summary",
    "Include more ATS keywords",
    "Add missing technical skills",
  ];

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto min-h-fit bg-gray-100 flex flex-col">
        <h1 className="text-xl md:text-2xl p-6 pb-0 font-bold">Dashboard</h1>

        <div className="flex flex-1">
          {/* MAIN */}
          <main className="flex-1 p-4 md:p-6">
            {/* WELCOME */}
            <section className="bg-white rounded-xl shadow-sm p-5 md:p-6 mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                Welcome back 👋
              </h2>

              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Create, optimize, and manage your resume with AI.
              </p>

              <button className="w-full md:w-auto bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                Create / Improve Resume
              </button>
            </section>

            {/* STATS */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-xl shadow-sm p-5">
                <h3 className="text-gray-500">Resume Status</h3>
                <p className="text-xl md:text-2xl font-bold mt-2">Active</p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-5">
                <h3 className="text-gray-500">ATS Score</h3>
                <p className="text-xl md:text-2xl font-bold mt-2">
                  {resume.atsScore}%
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-5">
                <h3 className="text-gray-500">Last Updated</h3>
                <p className="text-sm md:text-base font-bold mt-2">
                  {resume.updated}
                </p>
              </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* RESUME */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-4">
                  Your Resume
                </h3>

                <div className="border rounded-lg p-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <h4 className="font-semibold">{resume.name}</h4>
                    <p className="text-sm text-gray-500">
                      Updated {resume.updated}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <span className="font-semibold text-green-600">
                      ATS {resume.atsScore}
                    </span>

                    <button className="text-blue-600 hover:underline">
                      Edit
                    </button>

                    <button className="text-gray-600 hover:underline">
                      Download
                    </button>
                  </div>
                </div>
              </div>

              {/* AI SUGGESTIONS */}
              <div className="bg-white rounded-xl shadow-sm p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-4">
                  AI Suggestions
                </h3>

                <ul className="space-y-3">
                  {suggestions.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-700 text-sm md:text-base"
                    >
                      <span className="text-green-500">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

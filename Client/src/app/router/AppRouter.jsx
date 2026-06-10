import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ProtectedRoute } from "./ProtectedRoute";

import HomePage from "../../pages/HomePage";
import LoginPage from "../../features/auth/pages/LoginPage";
import DashboardPage from "../../features/dashboard/pages/DashboardPage";
import ResumeBuilderPage from "../../features/resumes/pages/ResumeBuilderPage";
import PersonalInfoForm from "../../features/resumes/components/PersonalInfoForm";
import ResumePreview from "../../features/resumes/components/ResumePreview";

import useAuthStore from "../store/authStore";
import { Navigate } from "react-router-dom";

function AppRouter() {

  function ProtectedRoute({ children }) {
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }

    return children;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/preview" element={<ResumePreview />} />
        {/* GET resume */}
        <Route path="/resume" element={<ResumeBuilderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../../shared/layouts/MainLayout";
import AuthLayout from "../../features/auth/Layout/AuthLayout";

import HomePage from "../../pages/HomePage";
import DashboardPage from "../../features/dashboard/pages/DashboardPage";
import ResumeBuilderPage from "../../features/resumes/pages/ResumeBuilderPage";
import PersonalInfoForm from "../../features/resumes/components/PersonalInfoForm";
import ResumePreview from "../../features/resumes/components/ResumePreview";

import LoginPage from "../../features/auth/pages/LoginPage";
import RegisterPage from "../../features/auth/pages/RegisterPage";

import useAuthStore from "../store/authStore";
import { currentUser } from "../../features/auth/api/authApi";
import { useQuery } from "@tanstack/react-query";
import ProfileForm from "../../features/profile/components/ProfileForm";

function ProtectedRoute({ children }) {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfileForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/resume"
            element={
              <ProtectedRoute>
                <ResumeBuilderPage />
              </ProtectedRoute>
            }
          />

          {/* <Route path="/resume" element={<ResumeBuilderPage />} /> */}
          <Route path="/preview" element={<ResumePreview />} />
        </Route>

        {/* GET resume */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

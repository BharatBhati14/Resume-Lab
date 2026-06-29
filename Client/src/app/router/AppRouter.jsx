import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../../shared/layouts/MainLayout";
import AuthLayout from "../../features/auth/Layout/AuthLayout";

import HomePage from "../../pages/HomePage";
import ProfileForm from "../../features/profile/components/ProfileForm";
import DashboardPage from "../../features/dashboard/pages/DashboardPage";
import ResumeBuilderPage from "../../features/resumes/pages/ResumeBuilderPage";
import ResumePreviewPage from "../../features/resumes/pages/ResumePreviewPage";

import LoginPage from "../../features/auth/pages/LoginPage";
import RegisterPage from "../../features/auth/pages/RegisterPage";
import ResumeForm from "../../features/resumes/components/ResumeForm";

import useAuthStore from "../store/authStore";
import { currentUser } from "../../features/auth/api/authApi";
import { useQuery } from "@tanstack/react-query";

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

          <Route
            path="/resume/edit"
            element={
              <ProtectedRoute>
                <ResumeBuilderPage />
              </ProtectedRoute>
            }
          />

          {/* <Route path="/resume" element={<ResumeBuilderPage />} /> */}
          <Route
            path="/preview"
            element={
              <ProtectedRoute>
                <ResumePreviewPage />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* GET resume */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

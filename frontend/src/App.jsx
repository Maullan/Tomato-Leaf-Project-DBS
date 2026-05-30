import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import DiagnosisPage from "./pages/DiagnosisPage";
import SolutionPage from "./pages/SolutionPage";
import HistoryPage from "./pages/HistoryPage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* Protected Routes — butuh login */}
       <Route
          path="/diagnosis"
          element={<DiagnosisPage />}
        />
        <Route
          path="/solution"
          element={
           <SolutionPage />
            
          }
        />
        <Route
          path="/history"
          element={<HistoryPage />}
          />
       <Route
          path="/profile"
          element={<ProfilePage />}
        />
      </Routes>
    </AuthProvider>
  );
}
import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import DiagnosisPage from "./pages/DiagnosisPage";
import HistoryPage from "./pages/HistoryPage";
import ProfilePage from "./pages/ProfilePage";
import SolutionPage from "./pages/SolutionPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

export default function App() {
  return (

    <Routes>

      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/diagnosis" element={<DiagnosisPage />} />

      <Route path="/history" element={<HistoryPage />} />

      <Route path="/profile" element={<ProfilePage />} />

      <Route
      path="/solution"element={<SolutionPage />}/>

      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/forgot-password"
        element={<ForgotPasswordPage />}
      />

    </Routes>

  );
}
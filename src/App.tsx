import { Routes, Route, BrowserRouter } from "react-router";
import Navbar from "./components/layout/Navbar";
import HomeDashboard from "./components/dashboard/HomeDashboard";
import StudyExperience from "./components/study/StudyExperience";
import AdminPanel from "./components/admin/AdminPanel";
import ProfileView from "./components/profile/ProfileView";
import LeaderboardView from "./components/leaderboard/LeaderboardView";
import { Toaster } from "./components/ui/sonner";
import "./theme.css";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans selection:bg-blue-500/30">
        <Navbar />
        <main className="pt-20 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<HomeDashboard />} />
            <Route path="/study" element={<StudyExperience />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/profile" element={<ProfileView />} />
            <Route path="/leaderboard" element={<LeaderboardView />} />
          </Routes>
        </main>
        <Toaster position="top-right" richColors theme="dark" />
      </div>
    </BrowserRouter>
  );
}

export default App;
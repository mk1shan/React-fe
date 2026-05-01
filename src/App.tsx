import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./features/auth/LoginPage";
import RegisterPage from "./features/auth/RegisterPage";
import DashboardPage from "./features/dashboard/DashboardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/DashBoardPage" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

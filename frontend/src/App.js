import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginDonor from "./pages/LoginDonor";
import SignupDonor from "./pages/SignupDonor";
import LoginBeneficiary from "./pages/LoginBeneficiary";
import SignupBeneficiary from "./pages/SignupBeneficiary";
import DonorDashboard from "./pages/DonorDashboard";
import BeneficiaryDashboard from "./pages/BeneficiaryDashboard";
import DonorRequestedPage from "./pages/DonorRequestPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Donor Routes */}
        <Route path="/login-donor" element={<LoginDonor />} />
        <Route path="/signup-donor" element={<SignupDonor />} />
        <Route path="/donor-dashboard" element={<DonorDashboard />} />
        <Route path="/donor-requested" element={<DonorRequestedPage />} />

        {/* Beneficiary Routes */}
        <Route path="/login-beneficiary" element={<LoginBeneficiary />} />
        <Route path="/signup-beneficiary" element={<SignupBeneficiary />} />
        <Route path="/beneficiary-dashboard" element={<BeneficiaryDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

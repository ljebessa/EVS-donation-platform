import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import CurrentProjects from "./pages/CurrentProjects"; // Corrected naming
import CompletedProjects from "./pages/CompletedProjects";
import OurTeam from "./pages/OurTeam"; // ✅ Ensure the correct path
import Contact from "./pages/Contact";
import Donate from "./pages/Donate"; // Ensuring correct routeimport PayPalButton from "./components/PayPalButton";
import FinancialTransparecy from "./pages/FinancialTransparency"; // ✅ Ensure the file name matches exactly
import "./styles/GlobalStyles.css";
import "./styles/Navbar.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/currentprojects" element={<CurrentProjects />} /> {/* Fixed case & naming */}
        <Route path="/completedprojects" element={<CompletedProjects />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/financialtransparency" element={<FinancialTransparecy />} /> 
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "@fontsource/montserrat";

// Backgrounds & logos
const landingBg = "/images/landing-page-image.jpeg";
const logoImg = "/images/lato-logo.jpeg";
const cardImg = "/images/cards-image.png";

// Landing Page
function Landing() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center relative px-4 py-8 font-montserrat">
      <img src={landingBg} alt="landing background" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div className="relative z-10 text-center p-8 bg-white/90 rounded-2xl shadow-2xl max-w-lg">
        <img src={logoImg} alt="Lato logo" className="h-16 mx-auto" />
        <h1 className="mt-4 text-3xl font-bold text-[#005BAC]">Lato Kenya EHS Forms Portal</h1>
        <p className="mt-2 text-gray-700">Select your office location before proceeding</p>

        <div className="mt-6 grid gap-4">
          <Link to="/warehouse" className="block px-6 py-3 bg-[#FFD700] text-[#005BAC] font-semibold rounded-xl shadow hover:scale-105 transition-transform">Warehouse</Link>
          <Link to="/factory" className="block px-6 py-3 bg-[#005BAC] text-white font-semibold rounded-xl shadow hover:scale-105 transition-transform">Factory</Link>
        </div>
      </div>
    </div>
  );
}

// Shared Forms Component
function FormsPage({ title }) {
  return (
    <div className="min-h-screen flex items-center justify-center relative font-montserrat">
      {/* Background */}
      <img
        src={landingBg}
        alt={`${title} background`}
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 bg-white/90 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-[#005BAC]">{title} Forms</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* EHS Induction Quiz */}
          <div
            className="bg-white rounded-xl shadow hover:shadow-xl hover:scale-105 transition cursor-pointer overflow-hidden"
            onClick={() =>
              (window.location.href =
                "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=VCUeetvfmES92oWZgcdOwI_8ZSX-nFFEsBzRjDpbRu5UODVITUVYVkFKVlg0TExBMjgzUTNVQU04NS4u")
            }
          >
            <img src={cardImg} alt="EHS Induction Quiz" className="w-full h-32 object-cover" />
            <div className="p-6">
              <h3 className="font-semibold text-[#005BAC]">EHS Induction Quiz</h3>
              <p className="mt-2 text-sm text-gray-600">Complete your induction quiz.</p>
            </div>
          </div>

          {/* Near Miss Reporting */}
          <div
            className="bg-white rounded-xl shadow hover:shadow-xl hover:scale-105 transition cursor-pointer overflow-hidden"
            onClick={() =>
              (window.location.href =
                "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=VCUeetvfmES92oWZgcdOwI_8ZSX-nFFEsBzRjDpbRu5UNElZTks0UVlGUFNHMFJWVFQ1WTRBVlRIQy4u")
            }
          >
            <img src={cardImg} alt="Near Miss Reporting Form" className="w-full h-32 object-cover" />
            <div className="p-6">
              <h3 className="font-semibold text-[#005BAC]">Near Miss Reporting Form</h3>
              <p className="mt-2 text-sm text-gray-600">Report a near-miss incident.</p>
            </div>
          </div>

          {/* Behaviour Observations */}
          <div
            className="bg-white rounded-xl shadow hover:shadow-xl hover:scale-105 transition cursor-pointer overflow-hidden"
            onClick={() =>
              (window.location.href =
                "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=VCUeetvfmES92oWZgcdOwI_8ZSX-nFFEsBzRjDpbRu5UQ0JRTzRGQTRSUEJLOEY1Q0s0OEk5MERSTS4u")
            }
          >
            <img src={cardImg} alt="Behaviour Observations Form" className="w-full h-32 object-cover" />
            <div className="p-6">
              <h3 className="font-semibold text-[#005BAC]">Behaviour Observations</h3>
              <p className="mt-2 text-sm text-gray-600">Submit behaviour observation reports.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/" className="text-sm text-gray-700 hover:underline">
            ← Back to locations
          </Link>
        </div>
      </div>
    </div>
  );
}

// Main App
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/warehouse" element={<FormsPage title="Warehouse" />} />
        <Route path="/factory" element={<FormsPage title="Factory" />} />
      </Routes>
    </Router>
  );
}

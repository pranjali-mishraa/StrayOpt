// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
// Pages — add imports here as you build each page
// import Home     from "./pages/Home/Home";
// import About    from "./pages/About/About";
// import Login    from "./pages/Login/Login";
// import Register from "./pages/Register/Register";
// import Profile  from "./pages/Profile/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream font-sans">
        
        {/* Navbar sits outside Routes so it shows on every page */}
        <Navbar />
       
        <Routes>

          {/* ── Public routes ── */}
          <Route path="/" element={<Home />} />
          <Route path="/about"  element={<div>About page coming soon 🐾</div>} />
          <Route path="/login"  element={<div>Login page coming soon 🐾</div>} />
          <Route path="/register" element={<div>Register page coming soon 🐾</div>} />

          {/* ── Protected routes (swap placeholder once pages are built) ── */}
          <Route path="/profile"  element={<div>Profile page coming soon 🐾</div>} />
          <Route path="/messages" element={<div>Messages page coming soon 🐾</div>} />
          <Route path="/post"     element={<div>Post a stray coming soon 🐾</div>} />

          {/* ── Catch-all → redirect home ── */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}
// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import PetPage from "./Pages/PetPage";
import Login from "./Pages/Login";
import PostStray from "./Pages/PostStray";
import Profile from "./Pages/Profile";
import About from "./Pages/About";


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream font-sans">
        
        {/* Navbar sits outside Routes so it shows on every page */}
        <Navbar />
       
        <Routes>

          {/* ── Public routes ── */}
          <Route path="/" element={<Home />} />
      
         
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<div>Register page coming soon 🐾</div>} />
          <Route path="/login" element={<Login />} />
          {/* ── Protected routes (swap placeholder once pages are built) ── */}
          <Route path="/post" element={<PostStray />} />
          <Route path="/profile"  element={<Profile/>} />
          <Route path="/messages" element={<div>Messages page coming soon 🐾</div>} />
        
          <Route path="/pets" element={<PetPage />} />

          {/* ── Catch-all → redirect home ── */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
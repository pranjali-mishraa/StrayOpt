import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showLoginHint, setShowLoginHint] = useState(false);

  return (
    <nav className="bg-cream border-b border-border-brand h-16 px-6 md:px-10 flex items-center justify-between sticky top-0 z-50 animate-slide-down">
      
      {/* ── Logo ── */}
      <Link to="/" className="flex items-center gap-2.5 select-none group">
        <div className="w-[34px] h-[34px] bg-rust rounded-[10px] flex items-center justify-center text-[17px] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
          🐾
        </div>
        <span className="font-display text-[22px] font-semibold text-bark-dark tracking-tight">
          Stray<em className="italic text-rust">Opt</em>
        </span>
      </Link>

      {/* ── Nav Links + Profile ── */}
      <div className="flex items-center gap-6">

        {/* Home */}
        <Link
          to="/"
          className="text-[15px] font-medium text-text-mid hover:text-bark-dark transition-colors duration-200 relative group"
        >
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-rust rounded-full transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* About */}
        <Link
          to="/about"
          className="text-[15px] font-medium text-text-mid hover:text-bark-dark transition-colors duration-200 relative group"
        >
          About
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-rust rounded-full transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* ── Profile Circle ── */}
        <div
          className="relative"
          onMouseEnter={() => setShowLoginHint(true)}
          onMouseLeave={() => setShowLoginHint(false)}
        >
          {/* Circle button */}
          <Link
            to="/profile"
            aria-label="Profile"
            className="w-[38px] h-[38px] rounded-full bg-warm border-2 border-border-brand flex items-center justify-center cursor-pointer transition-all duration-200 hover:border-bark hover:shadow-md"
          >
            {/* Default avatar icon */}
            <svg
              width="18" height="18" viewBox="0 0 24 24"
              fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="text-bark"
              aria-hidden="true"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </Link>

          {/* Hover tooltip — Sign In */}
          {showLoginHint && (
            <div className="absolute top-[calc(100%+10px)] right-0 animate-drop-in">
              {/* Arrow */}
              <div className="absolute -top-[5px] right-3.5 w-2.5 h-2.5 bg-bark-dark rotate-45 rounded-sm" />

              <Link
                to="/login"
                className="relative flex items-center gap-2 bg-bark-dark text-cream text-[13px] font-medium px-4 py-2.5 rounded-xl whitespace-nowrap shadow-lg hover:bg-rust transition-colors duration-200"
              >
                <svg
                  width="14" height="14" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
                Sign In
              </Link>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}
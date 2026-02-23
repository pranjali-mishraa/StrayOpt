import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="flex justify-between items-center px-6 md:px-8 py-4 shadow-md relative"
      style={{ backgroundColor: "#556B2F" }}
    >
      {/* Logo */}
      <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
        StrayOpt
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-white font-medium">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">Adopt</li>
        <li className="hover:underline cursor-pointer">About</li>
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        
        {/* Profile Button */}
        <button className="w-10 h-10 bg-white text-[#556B2F] font-semibold rounded-full flex items-center justify-center hover:bg-gray-100 transition duration-300">
          P
        </button>

        {/* Hamburger (Mobile only) */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="absolute top-full left-0 w-full flex flex-col items-center gap-4 py-6 md:hidden shadow-md"
          style={{ backgroundColor: "#556B2F" }}
        >
          <p className="text-white cursor-pointer">Home</p>
          <p className="text-white cursor-pointer">Adopt</p>
          <p className="text-white cursor-pointer">About</p>
        </div>
      )}
    </nav>
  );
}
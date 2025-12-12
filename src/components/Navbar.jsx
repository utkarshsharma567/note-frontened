// const API_KEY = "AIzaSyCLyi1P2KomQuWKQ2XpJqHSBNkkjhpFHfM";
// const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;//grmini api key

import { Link, useLocation } from "react-router-dom";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="w-7 h-7 text-blue-400" />
          <span className="text-2xl text-blue-400 tracking-wide">NoteKeeper</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className={`hover:text-blue-400 transition ${
              location.pathname === "/" ? "text-blue-400 font-semibold" : "text-gray-300"
            }`}
          >
            Home
          </Link>

          <Link
            to="/create"
            className={`hover:text-blue-400 transition ${
              location.pathname === "/create" ? "text-blue-400 font-semibold" : "text-gray-300"
            }`}
          >
            Create Note
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 px-6 py-4 space-y-4">

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className={`block text-lg transition ${
              location.pathname === "/" ? "text-blue-400 font-semibold" : "text-gray-300"
            }`}
          >
            Home
          </Link>

          <Link
            to="/create"
            onClick={() => setOpen(false)}
            className={`block text-lg transition ${
              location.pathname === "/create" ? "text-blue-400 font-semibold" : "text-gray-300"
            }`}
          >
            Create Note
          </Link>

        </div>
      )}
    </nav>
  );
}

export default Navbar;

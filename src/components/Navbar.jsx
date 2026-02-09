import React, { useState, useEffect } from "react";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Quiz", path: "/quiz" },
    { name: "Counselor", path: "/counselor" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
      
        className={`fixed top-0 left-0 w-full h-20 md:h-24 z-50 flex items-center justify-between
        px-4 md:px-10 lg:px-20 transition-all duration-300 backdrop-blur-lg
        ${
          isScrolled
            ? "bg-white/95 text-gray-900 shadow-lg border-b border-gray-200"
            : "bg-gradient-to-r from-slate-900/95 to-emerald-900/95 text-white"
        }`}
      >
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500">
            👨‍🏫
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              CareerGurudev
            </h1>
            <p
              className={`text-xs ${
                isScrolled ? "text-emerald-600" : "text-emerald-300"
              }`}
            >
              10th Pass Guidance
            </p>
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-semibold px-4 py-2 rounded-xl transition
              ${
                location.pathname === link.path
                  ? "bg-emerald-500 text-white"
                  : isScrolled
                  ? "text-gray-700 hover:text-emerald-600 hover:bg-gray-100"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* AUTH (DESKTOP) */}
        <div className="hidden md:flex items-center gap-4">
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Link
              to="/sign-in"
              className={`px-6 py-2 rounded-full font-semibold transition
              ${
                isScrolled
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-900"
              }`}
            >
              Sign In
            </Link>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden p-2 rounded-lg"
        >
          <svg
            className={`w-6 h-6 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* MOBILE OVERLAY */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-white z-50 transform transition-transform duration-300
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setIsMenuOpen(false)}>✖</button>
        </div>

        <div className="p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="block p-4 rounded-xl font-semibold text-gray-700 hover:bg-emerald-50"
            >
              {link.name}
            </Link>
          ))}

          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Link
              to="/sign-in"
              onClick={() => setIsMenuOpen(false)}
              className="block text-center p-4 bg-slate-900 text-white rounded-xl font-semibold"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

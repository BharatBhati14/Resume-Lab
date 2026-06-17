import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    // <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <span className="font-bold text-2xl sm:text-3xl">ResumeLab</span>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          <Link to="/login" className="hover:text-blue-900 cursor-pointer">AI Builder</Link>
          <a href="#features" className="hover:text-blue-900 cursor-pointer">Features</a>
          <a href="#testimonial" className="hover:text-blue-900 cursor-pointer">Reviews</a>
          <a href="#faq" className="hover:text-blue-900 cursor-pointer">FAQ</a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
            <Link to="/login" className="flex items-center px-3 border-2 rounded-lg border-blue-900 hover:text-white hover:bg-blue-700 transition duration-300 box-border">Log In</Link>

            <Link to="/register" className="bg-blue-700 text-white px-5 py-2 rounded-lg">Register</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full backdrop-blur-xl bg-white shadow-lg border-t border-slate-200 md:hidden">
          <nav className="flex flex-col gap-4 p-4">
            <Link to="#features">Features</Link>
            <Link to="#templates">Templates</Link>
            <Link to="#reviews">Reviews</Link>
            <Link to="#faq">FAQ</Link>

            <hr />
              <Link to="/login" className="text-left">Log In </Link>

            <button className="bg-blue-600 text-white py-2 rounded-xl">
              <Link to="/register">Get Started</Link>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;

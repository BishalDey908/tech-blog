import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">
              Tech<span className="text-blue-600">Blog</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Articles
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Tutorials
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              About
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Articles
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Tutorials
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              About
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

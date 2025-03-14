
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/use-cases", label: "Use Cases" },
    { path: "/about", label: "About Us" },
    { path: "/team", label: "Team" },
    { path: "/careers", label: "Careers" },
    { path: "/insights", label: "Insights" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
        scrolled
          ? "py-3 bg-tintto-dark/90 backdrop-blur-lg shadow-lg"
          : "py-4 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center z-20">
          <div className="text-white font-bold text-lg flex items-start">
            Tintto<span className="text-xs text-tintto-accent align-top mt-1">DataLabs</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "nav-item px-3 py-2 rounded-md transition-colors",
                location.pathname === item.path ? "text-white" : "text-white/70 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
          
          <Link
            to="/contact"
            className="btn-primary text-sm py-2 px-4 ml-2"
          >
            <span>Get Started</span>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden z-20 text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-tintto-dark/95 backdrop-blur-lg flex flex-col justify-center items-center transition-all duration-300 ease-in-out z-10",
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-6 items-center">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-xl font-medium transition-all duration-300",
                  location.pathname === item.path
                    ? "text-white"
                    : "text-white/70 hover:text-white",
                  isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {item.label}
              </Link>
            ))}
            
            <Link
              to="/contact"
              className={cn(
                "btn-primary text-sm",
                isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
              style={{
                transitionDelay: isMenuOpen ? `${navItems.length * 50}ms` : "0ms",
              }}
            >
              <span>Get Started</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Use Cases", path: "/use-cases" },
    { name: "About Us", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Careers", path: "/careers" },
    { name: "Insights", path: "/insights" },
    { name: "Contact", path: "/contact" },
  ];

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

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
        scrolled
          ? "py-4 bg-tintto-dark/80 backdrop-blur-lg shadow-lg"
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center z-20">
          <span className="text-white font-bold text-xl md:text-2xl">
            Tintto<span className="text-tintto-accent">Data</span>Labs
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "nav-item",
                location.pathname === item.path && "active"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-6 btn-primary"
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
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
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
                key={item.name}
                to={item.path}
                className={cn(
                  "text-xl font-medium transition-all duration-300",
                  location.pathname === item.path
                    ? "text-white"
                    : "text-white/70 hover:text-white",
                  isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                  `transition-all duration-300 delay-[${index * 50}ms]`
                )}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className={cn(
                "btn-primary mt-4",
                isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                "transition-all duration-300 delay-[400ms]"
              )}
              style={{
                transitionDelay: isMenuOpen ? "400ms" : "0ms",
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

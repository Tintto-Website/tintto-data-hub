
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
        <div className="hidden md:flex items-center">
          <NavigationMenu className="mr-4">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={cn(
                  "nav-item",
                  location.pathname === "/" && "active"
                )}>
                  Home
                </Link>
              </NavigationMenuItem>

              {/* Solutions Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="nav-item">
                  Solutions <ChevronDown className="h-4 w-4 ml-1" />
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-tintto-gray border border-white/10 p-2 rounded-md shadow-lg">
                  <ul className="grid gap-1 p-1 w-40">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/services" 
                          className="block px-4 py-2 text-sm text-white hover:bg-tintto-blue/20 rounded-md"
                        >
                          Services
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/use-cases" 
                          className="block px-4 py-2 text-sm text-white hover:bg-tintto-blue/20 rounded-md"
                        >
                          Use Cases
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Company Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="nav-item">
                  Company <ChevronDown className="h-4 w-4 ml-1" />
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-tintto-gray border border-white/10 p-2 rounded-md shadow-lg">
                  <ul className="grid gap-1 p-1 w-40">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/about" 
                          className="block px-4 py-2 text-sm text-white hover:bg-tintto-blue/20 rounded-md"
                        >
                          About Us
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/team" 
                          className="block px-4 py-2 text-sm text-white hover:bg-tintto-blue/20 rounded-md"
                        >
                          Team
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/careers" 
                          className="block px-4 py-2 text-sm text-white hover:bg-tintto-blue/20 rounded-md"
                        >
                          Careers
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/insights" className={cn(
                  "nav-item",
                  location.pathname === "/insights" && "active"
                )}>
                  Insights
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact" className={cn(
                  "nav-item",
                  location.pathname === "/contact" && "active"
                )}>
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Link
            to="/contact"
            className="btn-primary"
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
            <Link
              to="/"
              className={cn(
                "text-xl font-medium transition-all duration-300",
                location.pathname === "/"
                  ? "text-white"
                  : "text-white/70 hover:text-white",
                isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                "transition-all duration-300 delay-[0ms]"
              )}
              style={{
                transitionDelay: isMenuOpen ? "0ms" : "0ms",
              }}
            >
              Home
            </Link>
            
            {/* Mobile Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={cn(
                "text-xl font-medium transition-all duration-300",
                "text-white/70 hover:text-white",
                isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                "transition-all duration-300 delay-[50ms]"
              )} 
              style={{
                transitionDelay: isMenuOpen ? "50ms" : "0ms",
              }}>
                Solutions <ChevronDown className="inline-block h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-tintto-gray border border-white/10 p-2 rounded-md">
                <DropdownMenuItem asChild>
                  <Link to="/services" className="text-white hover:bg-tintto-blue/20">
                    Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/use-cases" className="text-white hover:bg-tintto-blue/20">
                    Use Cases
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Mobile Company Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={cn(
                "text-xl font-medium transition-all duration-300",
                "text-white/70 hover:text-white",
                isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                "transition-all duration-300 delay-[100ms]"
              )} 
              style={{
                transitionDelay: isMenuOpen ? "100ms" : "0ms",
              }}>
                Company <ChevronDown className="inline-block h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-tintto-gray border border-white/10 p-2 rounded-md">
                <DropdownMenuItem asChild>
                  <Link to="/about" className="text-white hover:bg-tintto-blue/20">
                    About Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/team" className="text-white hover:bg-tintto-blue/20">
                    Team
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/careers" className="text-white hover:bg-tintto-blue/20">
                    Careers
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/insights"
              className={cn(
                "text-xl font-medium transition-all duration-300",
                location.pathname === "/insights"
                  ? "text-white"
                  : "text-white/70 hover:text-white",
                isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                "transition-all duration-300 delay-[150ms]"
              )}
              style={{
                transitionDelay: isMenuOpen ? "150ms" : "0ms",
              }}
            >
              Insights
            </Link>
            
            <Link
              to="/contact"
              className={cn(
                "text-xl font-medium transition-all duration-300",
                location.pathname === "/contact"
                  ? "text-white"
                  : "text-white/70 hover:text-white",
                isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                "transition-all duration-300 delay-[200ms]"
              )}
              style={{
                transitionDelay: isMenuOpen ? "200ms" : "0ms",
              }}
            >
              Contact
            </Link>
            
            <Link
              to="/contact"
              className={cn(
                "btn-primary mt-4",
                isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                "transition-all duration-300 delay-[250ms]"
              )}
              style={{
                transitionDelay: isMenuOpen ? "250ms" : "0ms",
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

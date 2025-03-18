
import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-tintto-blue-dark pt-16 pb-8 text-white">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          <div className="col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-white font-bold text-lg">
                tintto<span className="text-tintto-accent">DataLabs</span>
              </span>
            </Link>
            <p className="text-white/80 mb-6">
              Empowering businesses with intelligent AI and data solutions to drive efficiency, insights, and growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/tintto-ai"
                className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-all hover:bg-white/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="text-white/80 hover:text-white transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-white/80 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/insights" className="text-white/80 hover:text-white transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-3 text-tintto-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/80">contact@tintto.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-3 text-tintto-accent flex-shrink-0 mt-0.5" />
                <a href="https://zcal.co/jpc/25min" className="text-white/80 hover:text-white transition-colors">
                  Book Call
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-tintto-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  Berlin, Germany
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2025 Tintto | All Rights Reserved
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-white/60 hover:text-white/80 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white/80 text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white/80 text-sm">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

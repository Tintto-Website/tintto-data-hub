
import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tintto-dark border-t border-white/10 pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          <div className="col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-white font-bold text-2xl">
                Tintto<span className="text-tintto-accent">Data</span>Labs
              </span>
            </Link>
            <p className="text-white/60 mb-6">
              Empowering businesses with intelligent AI and data solutions to drive efficiency, insights, and growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:bg-white/10"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white/80" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white/80" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/60 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="text-white/60 hover:text-white transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/60 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-white/60 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/careers" className="text-white/60 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-white/60 hover:text-white transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/60 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-tintto-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/60">hello@tinttodatalabs.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-tintto-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/60">+1 (555) 789-1234</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-tintto-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/60">
                  789 Tech Lane, Suite 300,<br />Future City, USA
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm">
            © {currentYear} Tintto Data Labs | All Rights Reserved
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-white/40 hover:text-white/60 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/40 hover:text-white/60 text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white/40 hover:text-white/60 text-sm">
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

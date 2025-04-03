
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";
import { BarChart3, BrainCircuit, Rocket, ShieldCheck } from "lucide-react";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Removing the parallax mouse move effect since we're removing the floating bubbles
  useEffect(() => {
    // Empty effect
    return () => {};
  }, []);
  return <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-white">
      {/* Removing the background container with floating bubbles */}
      <div className="container max-w-7xl mx-auto z-10 pt-24 py-[110px]">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <AnimatedSection direction="up" delay={100}>
              <span className="inline-block px-4 py-2 rounded-full bg-tintto-blue/10 border border-tintto-blue/20 text-sm font-medium mb-6 text-tintto-blue">
                AI & Data Solutions
              </span>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-800">
                Empower Your Business with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-tintto-blue to-tintto-accent">
                  Intelligent AI
                </span>{" "}
                and Data Solutions
              </h1>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={300}>
              <p className="text-gray-600 mb-8 max-w-xl lg:max-w-none text-xl">We design and deploy AI powered solutions and empower your team to visualise them and operate them seamlessly.</p>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={400}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/services" className="btn-primary w-full sm:w-auto">
                  <span>Discover Our Solutions</span>
                </Link>
                <a href="https://zcal.co/jpc/25min" className="btn-secondary w-full sm:w-auto">
                  Get in Touch
                </a>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <AnimatedSection delay={300}>
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-radial from-tintto-blue/20 to-transparent rounded-full animate-glow"></div>
                <div className="glassmorphism absolute inset-4 rounded-full glass-card flex items-center justify-center overflow-hidden border border-white/10">
                  <div className="absolute inset-0 bg-slate-50"></div>
                  <div className="z-10 text-center p-4 md:p-6 w-full">
                    <div className="mb-4 w-14 md:w-20 h-14 md:h-20 mx-auto rounded-full bg-tintto-blue/20 flex items-center justify-center">
                      <BrainCircuit className="w-7 md:w-10 h-7 md:h-10 text-tintto-blue" />
                    </div>
                    <h3 className="text-lg md:text-2xl font-bold mb-2 text-gray-800">AI-Powered Solutions</h3>
                    <p className="text-gray-600 text-xs md:text-sm max-w-[90%] mx-auto">Transform your business with cutting-edge AI Agents and Foundational Data Model Solutions</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
        
        <AnimatedSection className="mt-24" delay={500}>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="w-12 h-12 rounded-lg bg-tintto-blue/20 flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-tintto-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Increase Efficiency</h3>
              <p className="text-gray-600">Achieve up to 50% productivity gains with AI-driven automation.</p>
            </div>
            
            <div className="highlight-card">
              <div className="w-12 h-12 rounded-lg bg-tintto-blue/20 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-tintto-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Lower Costs</h3>
              <p className="text-gray-600">Reduce operational expenses by streamlining processes with smart technology.</p>
            </div>
            
            <div className="highlight-card">
              <div className="w-12 h-12 rounded-lg bg-tintto-blue/20 flex items-center justify-center mb-4">
                <BrainCircuit className="w-6 h-6 text-tintto-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Smarter Insights</h3>
              <p className="text-gray-600">Turn data into decisions with real-time analytics and dashboards.</p>
            </div>
            
            <div className="highlight-card">
              <div className="w-12 h-12 rounded-lg bg-tintto-blue/20 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-tintto-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Trusted Innovation</h3>
              <p className="text-gray-600">Rely on ethical, compliant solutions for long-term success.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce z-20 py-0 mx-0 my-0">
        <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white/80 backdrop-blur-sm shadow-sm">
          <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>;
};
export default Hero;

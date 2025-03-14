
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const xPos = (clientX - left) / width - 0.5;
      const yPos = (clientY - top) / height - 0.5;
      
      const elements = heroRef.current.querySelectorAll(".parallax-element");
      
      elements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.getAttribute("data-speed") || "0.05");
        const xMove = xPos * speed * 40;
        const yMove = yPos * speed * 40;
        
        element.style.transform = `translate3d(${xMove}px, ${yMove}px, 0)`;
      });
    };
    
    document.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0A0F1F 0%, #131d38 100%)" }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-tintto-blue/10 blur-3xl parallax-element"
          data-speed="0.05"
        ></div>
        <div 
          className="absolute bottom-20 right-[10%] w-80 h-80 rounded-full bg-tintto-accent/10 blur-3xl parallax-element"
          data-speed="0.08"
        ></div>
        <div 
          className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-tintto-accent animate-float parallax-element"
          data-speed="0.12"
        ></div>
        <div 
          className="absolute top-2/3 left-1/4 w-6 h-6 rounded-full bg-tintto-blue animate-float parallax-element"
          style={{ animationDelay: "1s" }}
          data-speed="0.1"
        ></div>
        <div 
          className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-white/40 animate-float parallax-element"
          style={{ animationDelay: "1.5s" }}
          data-speed="0.15"
        ></div>
      </div>

      <div className="container max-w-7xl mx-auto z-10 pt-24">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <AnimatedSection direction="up" delay={100}>
              <span className="inline-block px-4 py-2 rounded-full bg-tintto-blue/10 border border-tintto-blue/20 text-tintto-accent text-sm font-medium mb-6">
                AI & Data Solutions
              </span>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Empower Your Business with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-tintto-blue to-tintto-accent">
                  Intelligent AI
                </span>{" "}
                and Data Solutions
              </h1>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={300}>
              <p className="text-lg text-white/80 mb-8 max-w-xl lg:max-w-none">
                Unlock efficiency, cut costs, and drive smarter decisions with our custom AI and data expertise.
              </p>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={400}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/services" className="btn-primary w-full sm:w-auto">
                  <span>Discover Our Solutions</span>
                </Link>
                <Link to="/contact" className="btn-secondary w-full sm:w-auto">
                  Get in Touch
                </Link>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <AnimatedSection delay={300}>
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-radial from-tintto-blue/20 to-transparent rounded-full animate-glow"></div>
                <div className="glassmorphism absolute inset-4 rounded-full glass-card flex items-center justify-center overflow-hidden border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-tintto-blue/10 to-tintto-accent/5"></div>
                  <div className="z-10 text-white text-center p-8">
                    <div className="mb-4 w-16 h-16 mx-auto rounded-full bg-tintto-blue/20 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-tintto-blue to-tintto-accent"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">AI-Powered Solutions</h3>
                    <p className="text-white/70">Transform your business with cutting-edge technology</p>
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
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-tintto-blue to-tintto-accent"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Increase Efficiency</h3>
              <p className="text-white/70">Achieve up to 50% productivity gains with AI-driven automation.</p>
            </div>
            
            <div className="highlight-card">
              <div className="w-12 h-12 rounded-lg bg-tintto-blue/20 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-tintto-blue to-tintto-accent"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lower Costs</h3>
              <p className="text-white/70">Reduce operational expenses by streamlining processes with smart technology.</p>
            </div>
            
            <div className="highlight-card">
              <div className="w-12 h-12 rounded-lg bg-tintto-blue/20 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-tintto-blue to-tintto-accent"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smarter Insights</h3>
              <p className="text-white/70">Turn data into decisions with real-time analytics and dashboards.</p>
            </div>
            
            <div className="highlight-card">
              <div className="w-12 h-12 rounded-lg bg-tintto-blue/20 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-tintto-blue to-tintto-accent"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Innovation</h3>
              <p className="text-white/70">Rely on ethical, compliant solutions for long-term success.</p>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="mt-16 text-center relative z-20" delay={600}>
          <div className="max-w-3xl mx-auto bg-tintto-dark/80 backdrop-blur-sm rounded-lg p-6">
            <p className="text-white/80 text-lg">
              Welcome to Tintto Data Labs, where we transform businesses through the power of AI and data. 
              We design and deliver tailored solutions that enhance productivity, optimize operations, and ensure sustainable growth.
            </p>
          </div>
        </AnimatedSection>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <div className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

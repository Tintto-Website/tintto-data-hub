
import React from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 pb-16 bg-white">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <AnimatedSection direction="up" delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8">
                Empower your business with intelligent AI and data solutions
              </h1>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={300}>
              <p className="text-lg text-tintto-muted mb-10">
                Unlock efficiency, cut costs, and drive smarter decisions with our custom AI and data expertise.
              </p>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={400}>
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="https://zcal.co/jpc/25min" className="btn-primary w-full sm:w-auto">
                  <span>Explore Services</span>
                </a>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <AnimatedSection delay={300}>
              <div className="relative aspect-[4/3] w-full">
                <div className="absolute inset-0 bg-tintto-dark overflow-hidden">
                  <div className="w-full h-full bg-grid-pattern bg-cover opacity-30"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <h2 className="text-2xl md:text-3xl font-medium text-white">
                    We build high-performance, automated data systems that drive growth through AI
                  </h2>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
        
        <AnimatedSection className="mt-24" delay={500}>
          <div className="highlights-grid border-t border-b border-tintto-gray/20">
            <div className="highlight-card border-r border-tintto-gray/20">
              <h3 className="text-xl font-semibold mb-2">Increase Efficiency</h3>
              <p className="text-tintto-muted">Achieve up to 50% productivity gains with AI-driven automation.</p>
            </div>
            
            <div className="highlight-card">
              <h3 className="text-xl font-semibold mb-2">Lower Costs</h3>
              <p className="text-tintto-muted">Reduce operational expenses by streamlining processes with smart technology.</p>
            </div>
            
            <div className="highlight-card border-r border-t border-tintto-gray/20">
              <h3 className="text-xl font-semibold mb-2">Smarter Insights</h3>
              <p className="text-tintto-muted">Turn data into decisions with real-time analytics and dashboards.</p>
            </div>
            
            <div className="highlight-card border-t border-tintto-gray/20">
              <h3 className="text-xl font-semibold mb-2">Trusted Innovation</h3>
              <p className="text-tintto-muted">Rely on ethical, compliant solutions for long-term success.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;

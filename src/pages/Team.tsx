
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-tintto-blue-dark/30 to-tintto-dark">
        <div className="container max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-2 rounded-full bg-tintto-blue/10 border border-tintto-blue/20 text-tintto-accent text-sm font-medium mb-4">
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Experts</h1>
            <p className="text-white/70 max-w-3xl mx-auto text-lg">
              Our global team brings together experts in AI, data science, engineering, and business strategy. 
              We're passionate about solving complex problems and delivering measurable results.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Intro */}
      <section className="py-24 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Our Expertise</h2>
              <p className="text-white/80 max-w-3xl mx-auto">
                With a commitment to continuous research and ethical practices, 
                we ensure our solutions create lasting value for your business.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <AnimatedSection delay={100}>
                <div className="glass-card p-8">
                  <div className="w-16 h-16 rounded-full bg-tintto-blue/20 mx-auto flex items-center justify-center mb-6">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-tintto-blue to-tintto-accent"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">AI Strategy</h3>
                  <p className="text-white/70">
                    Deep knowledge in AI strategy and machine learning implementation.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={200}>
                <div className="glass-card p-8">
                  <div className="w-16 h-16 rounded-full bg-tintto-blue/20 mx-auto flex items-center justify-center mb-6">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-tintto-blue to-tintto-accent"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Data Engineering</h3>
                  <p className="text-white/70">
                    Proficiency in data engineering and analytics implementation.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={300}>
                <div className="glass-card p-8">
                  <div className="w-16 h-16 rounded-full bg-tintto-blue/20 mx-auto flex items-center justify-center mb-6">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-tintto-blue to-tintto-accent"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Business Acumen</h3>
                  <p className="text-white/70">
                    Business acumen to align technology with your strategic goals.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <AnimatedSection>
              <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Collaboration, innovation, and a focus on your success.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Team;

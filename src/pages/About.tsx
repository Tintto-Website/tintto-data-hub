import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
const About = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-tintto-blue-dark/30 to-tintto-dark bg-slate-50">
        <div className="container max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-2 rounded-full bg-tintto-blue/10 border border-tintto-blue/20 text-sm font-medium mb-4 text-tintto-blue">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Learn about our mission, values, and the team behind Tintto Data Labs
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="w-full aspect-square max-w-md mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-radial from-tintto-blue/20 to-transparent rounded-full animate-glow"></div>
                  <div className="absolute inset-0 glass-card rounded-2xl overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-tintto-blue/10 to-tintto-accent/5"></div>
                    <div className="relative z-10 p-10">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="glass-card rounded-lg p-4 bg-white/5">
                          <h4 className="text-lg font-semibold mb-1 text-gray-800">Innovation</h4>
                          <p className="text-gray-600 text-sm">Pushing boundaries with cutting-edge technology</p>
                        </div>
                        <div className="glass-card rounded-lg p-4 bg-white/5">
                          <h4 className="text-lg font-semibold mb-1 text-gray-800">Partnership</h4>
                          <p className="text-gray-600 text-sm">Working closely with clients for shared success</p>
                        </div>
                        <div className="glass-card rounded-lg p-4 bg-white/5">
                          <h4 className="text-lg font-semibold mb-1 text-gray-800">Excellence</h4>
                          <p className="text-gray-600 text-sm">Delivering solutions that exceed expectations</p>
                        </div>
                        <div className="glass-card rounded-lg p-4 bg-white/5">
                          <h4 className="text-lg font-semibold mb-1 text-gray-800">Responsibility</h4>
                          <p className="text-gray-600 text-sm">Prioritizing ethical and sustainable practices</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Tintto Data Labs is dedicated to revolutionizing how businesses leverage AI and data. We combine innovative technology with strategic expertise to create solutions that drive efficiency, insight, and growth. Our focus on ethics and collaboration ensures we deliver value that lasts.
              </p>
              <p className="text-gray-700 mb-8">
                With a team of industry experts and a passion for innovation, we're committed to helping organizations navigate the complex world of AI and data, turning challenges into opportunities and ideas into results.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-10">
                To empower organizations with AI and data solutions that solve real challenges, deliver measurable results, and uphold the highest standards of integrity.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 mt-0.5 flex-shrink-0 rounded-full bg-tintto-blue/20 flex items-center justify-center mr-3">
                    <span className="w-2 h-2 rounded-full bg-tintto-accent"></span>
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Innovation</h4>
                    <p className="text-gray-600">Pushing boundaries with cutting-edge technology.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 mt-0.5 flex-shrink-0 rounded-full bg-tintto-blue/20 flex items-center justify-center mr-3">
                    <span className="w-2 h-2 rounded-full bg-tintto-accent"></span>
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Partnership</h4>
                    <p className="text-gray-600">Working closely with clients for shared success.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 mt-0.5 flex-shrink-0 rounded-full bg-tintto-blue/20 flex items-center justify-center mr-3">
                    <span className="w-2 h-2 rounded-full bg-tintto-accent"></span>
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Excellence</h4>
                    <p className="text-gray-600">Delivering solutions that exceed expectations.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 mt-0.5 flex-shrink-0 rounded-full bg-tintto-blue/20 flex items-center justify-center mr-3">
                    <span className="w-2 h-2 rounded-full bg-tintto-accent"></span>
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Responsibility</h4>
                    <p className="text-gray-600">Prioritizing ethical and sustainable practices.</p>
                  </div>
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default About;
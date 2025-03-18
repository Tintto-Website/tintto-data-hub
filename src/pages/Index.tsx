
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, BrainCircuit, BarChart3 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import UseCaseCard from "@/components/UseCaseCard";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const useCases = [
    {
      title: "AI-Powered Diagnostics",
      description: "Analyze medical images and patient data for faster, more accurate diagnoses.",
      tags: ["Healthcare", "AI Automation"],
      delay: 100,
    },
    {
      title: "Automated Financial Forecasting",
      description: "Use advanced AI algorithms to predict cash flow, revenue, and expenses with high accuracy.",
      tags: ["Finance", "AI Automation"],
      delay: 200,
    },
    {
      title: "Predictive Marketing Campaigns",
      description: "Leverage machine learning for data-driven, predictive marketing that enhances brand positioning.",
      tags: ["Marketing", "Machine Learning"],
      delay: 300,
    },
  ];
  
  const filters = ["All", "Healthcare", "Finance", "Marketing", "AI Automation", "Machine Learning"];
  
  const filteredUseCases = activeFilter === "All"
    ? useCases
    : useCases.filter(useCase => useCase.tags.includes(activeFilter));
  
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />

      {/* Services Section Preview */}
      <section className="py-24 px-6" id="services">
        <div className="container max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="mb-16">
              <span className="inline-block text-sm font-medium mb-4 uppercase tracking-wide">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">End-to-End AI & Data Solutions</h2>
              <p className="text-tintto-muted max-w-3xl">
                At Tintto Data Labs, we offer end-to-end services to accelerate your business with AI and data. 
                Whether you're starting your journey or scaling existing capabilities, our solutions are customized to deliver real impact.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-tintto-gray/20">
            <ServiceCard
              title="AI Agents & Automation"
              description="Deploy intelligent AI agents to automate tasks and solve complex challenges, enhancing your team's focus on strategic goals."
              benefits={[
                "Streamlined workflows", 
                "Adaptive problem-solving", 
                "Tool integration"
              ]}
              icon={<BrainCircuit className="w-8 h-8" />}
              delay={100}
              className="border-r border-tintto-gray/20"
            />

            <ServiceCard
              title="Data Insights & Analytics"
              description="Convert your data into powerful insights with advanced analytics and user-friendly dashboards tailored to your needs."
              benefits={[
                "Scalable data systems", 
                "Real-time visibility", 
                "KPI-focused results"
              ]}
              icon={<BarChart3 className="w-8 h-8" />}
              delay={200}
            />
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-secondary inline-flex items-center">
              View All Services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases Section Preview */}
      <section className="py-24 px-6 bg-tintto-dark" id="use-cases">
        <div className="container max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="mb-16">
              <span className="inline-block text-sm font-medium mb-4 uppercase tracking-wide text-white">
                Use Cases
              </span>
              <h2 className="text-3xl md:text-4xl font-medium mb-6 text-white">Proven Solutions</h2>
              <p className="text-white/70 max-w-3xl">
                The Tintto Data Labs community has discovered countless ways to leverage AI solutions for business growth. 
                Explore our curated use cases below.
              </p>
            </div>
          </AnimatedSection>

          <div className="flex flex-wrap gap-0 mt-8 border-b border-white/10">
            {filters.map(filter => (
              <button
                key={filter}
                className={`px-6 py-3 transition-colors ${activeFilter === filter ? 'bg-white text-tintto-dark' : 'text-white/70 hover:text-white'}`}
                onClick={() => handleFilterClick(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 border-t-0">
            {filteredUseCases.length > 0 ? (
              filteredUseCases.map((useCase, index) => (
                <div key={index} className={`p-8 border-white/10 ${index !== 2 ? 'border-r' : ''}`}>
                  <h3 className="text-xl font-medium mb-3 text-white">{useCase.title}</h3>
                  <p className="text-white/70 mb-4">{useCase.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {useCase.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-white/10 text-white/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <h3 className="text-xl text-white mb-4">No use cases found for this filter</h3>
                <button 
                  className="btn-primary bg-white text-tintto-dark hover:bg-white/80"
                  onClick={() => handleFilterClick("All")}
                >
                  Show All Use Cases
                </button>
              </div>
            )}
          </div>

          <div className="text-center mt-12">
            <Link to="/use-cases" className="btn-primary inline-flex items-center bg-white text-tintto-dark hover:bg-white/80">
              View All Use Cases <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-24 px-6" id="about">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="aspect-[4/3] w-full bg-tintto-dark overflow-hidden">
                  <div className="w-full h-full bg-grid-pattern bg-cover opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border border-white/20 p-4">
                        <h4 className="text-lg font-medium mb-1 text-white">Innovation</h4>
                        <p className="text-white/60 text-sm">Pushing boundaries with cutting-edge technology</p>
                      </div>
                      <div className="border border-white/20 p-4">
                        <h4 className="text-lg font-medium mb-1 text-white">Partnership</h4>
                        <p className="text-white/60 text-sm">Working closely with clients for shared success</p>
                      </div>
                      <div className="border border-white/20 p-4">
                        <h4 className="text-lg font-medium mb-1 text-white">Excellence</h4>
                        <p className="text-white/60 text-sm">Delivering solutions that exceed expectations</p>
                      </div>
                      <div className="border border-white/20 p-4">
                        <h4 className="text-lg font-medium mb-1 text-white">Responsibility</h4>
                        <p className="text-white/60 text-sm">Prioritizing ethical and sustainable practices</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="inline-block text-sm font-medium mb-4 uppercase tracking-wide">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Our Story</h2>
              <p className="text-tintto-muted mb-6">
                Tintto Data Labs is dedicated to revolutionizing how businesses leverage AI and data. We combine innovative technology with strategic expertise to create solutions that drive efficiency, insight, and growth.
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4">Our Mission</h3>
                <p className="text-tintto-muted">
                  To empower organizations with AI and data solutions that solve real challenges, deliver measurable results, and uphold the highest standards of integrity.
                </p>
              </div>
              <Link to="/about" className="btn-primary">
                <span>Learn More About Us</span>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-tintto-dark">
        <div className="container max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-white">Ready to Transform Your Business?</h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Let's collaborate to unlock your business potential with our tailored AI and data solutions. 
              Schedule a consultation with our experts today.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-tintto-dark hover:bg-white/80">
              <span>Get Started</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

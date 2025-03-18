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
  const useCases = [{
    title: "AI-Powered Diagnostics",
    description: "Analyze medical images and patient data for faster, more accurate diagnoses.",
    tags: ["Healthcare", "AI Automation"],
    delay: 100
  }, {
    title: "Automated Financial Forecasting",
    description: "Use advanced AI algorithms to predict cash flow, revenue, and expenses with high accuracy.",
    tags: ["Finance", "AI Automation"],
    delay: 200
  }, {
    title: "Predictive Marketing Campaigns",
    description: "Leverage machine learning for data-driven, predictive marketing that enhances brand positioning.",
    tags: ["Marketing", "Machine Learning"],
    delay: 300
  }, {
    title: "Supply Chain Optimization",
    description: "Use AI to optimize inventory, predict demand, and streamline logistics operations.",
    tags: ["Retail", "AI Automation"],
    delay: 400
  }, {
    title: "Customer Service Automation",
    description: "Deploy intelligent chatbots and virtual assistants to improve customer experience.",
    tags: ["Customer Service", "AI Automation"],
    delay: 500
  }, {
    title: "Fraud Detection Systems",
    description: "Implement machine learning models to identify suspicious patterns and prevent fraud.",
    tags: ["Finance", "Machine Learning", "Security"],
    delay: 600
  }];
  const filters = ["All", "Healthcare", "Finance", "Marketing", "Retail", "Customer Service", "Security", "AI Automation", "Machine Learning"];
  const filteredUseCases = activeFilter === "All" ? useCases : useCases.filter(useCase => useCase.tags.includes(activeFilter));
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />

      {/* Services Section Preview */}
      <section className="py-24 px-6" id="services">
        <div className="container max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-tintto-blue/10 border border-tintto-blue/20 text-tintto-blue text-sm font-medium mb-4">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">End-to-End AI & Data Solutions</h2>
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                At Tintto Data Labs, we offer end-to-end services to accelerate your business with AI and data. 
                Whether you're starting your journey or scaling existing capabilities, our solutions are customized to deliver real impact.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <ServiceCard title="AI Agents & Automation" description="Deploy intelligent AI agents to automate tasks, streamline operations, and integrate seamlessly with your systems, enhancing your team's focus on strategic goals." benefits={["Streamlined workflows", "Adaptive problem-solving", "Tool integration"]} icon={<BrainCircuit className="w-8 h-8" />} delay={100} />

            <ServiceCard title="Data Insights & Analytics" description="Convert your data into powerful insights with advanced analytics and user-friendly dashboards tailored to your needs." benefits={["Scalable data systems", "Real-time visibility", "KPI-focused results"]} icon={<BarChart3 className="w-8 h-8" />} delay={200} />
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-secondary inline-flex items-center">
              View All Services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases Section Preview */}
      <section className="py-24 px-6 bg-tintto-gray" id="use-cases">
        <div className="container max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-tintto-blue/10 border border-tintto-blue/20 text-tintto-blue text-sm font-medium mb-4">
                Use Cases
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Hundreds of Use Cases</h2>
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                The Tintto Data Labs community has discovered countless ways to leverage AI solutions for business growth. 
                Explore our curated use cases below.
              </p>
            </div>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {filters.map(filter => <button key={filter} className={`bubble-filter ${activeFilter === filter ? 'active' : ''}`} onClick={() => handleFilterClick(filter)}>
                {filter}
              </button>)}
          </div>

          <div className="use-case-grid">
            {filteredUseCases.length > 0 ? filteredUseCases.map((useCase, index) => <UseCaseCard key={index} title={useCase.title} description={useCase.description} tags={useCase.tags} delay={useCase.delay} />) : <div className="col-span-3 text-center py-12">
                <h3 className="text-xl text-gray-800 mb-4">No use cases found for this filter</h3>
                <button className="btn-secondary" onClick={() => handleFilterClick("All")}>
                  Show All Use Cases
                </button>
              </div>}
          </div>

          <div className="text-center mt-12">
            <Link to="/use-cases" className="btn-secondary inline-flex items-center">
              View All Use Cases <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-24 px-6" id="about">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="w-full aspect-square max-w-md mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-radial from-tintto-blue/20 to-transparent rounded-full animate-glow"></div>
                  <div className="absolute inset-0 glass-card rounded-2xl overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-tintto-blue/10 to-tintto-accent/5 bg-slate-50"></div>
                    <div className="relative z-10 p-10">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="glass-card rounded-lg p-4 bg-tintto-blue/5">
                          <h4 className="text-lg font-semibold mb-1 text-gray-800">Innovation</h4>
                          <p className="text-gray-600 text-sm">Pushing boundaries with cutting-edge technology</p>
                        </div>
                        <div className="glass-card rounded-lg p-4 bg-tintto-blue/5">
                          <h4 className="text-lg font-semibold mb-1 text-gray-800">Partnership</h4>
                          <p className="text-gray-600 text-sm">Working closely with clients for shared success</p>
                        </div>
                        <div className="glass-card rounded-lg p-4 bg-tintto-blue/5">
                          <h4 className="text-lg font-semibold mb-1 text-gray-800">Excellence</h4>
                          <p className="text-gray-600 text-sm">Delivering solutions that exceed expectations</p>
                        </div>
                        <div className="glass-card rounded-lg p-4 bg-tintto-blue/5">
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
              <span className="inline-block px-4 py-2 rounded-full bg-tintto-blue/10 border border-tintto-blue/20 text-tintto-blue text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Tintto Data Labs is dedicated to revolutionizing how businesses leverage AI and data. We combine innovative technology with strategic expertise to create solutions that drive efficiency, insight, and growth.
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Mission</h3>
                <p className="text-gray-600">
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
      <section className="py-24 px-6 bg-gradient-to-b from-tintto-blue/10 to-tintto-dark">
        <div className="container max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Ready to Transform Your Business?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's collaborate to unlock your business potential with our tailored AI and data solutions. 
              Schedule a consultation with our experts today.
            </p>
            <Link to="/contact" className="btn-primary">
              <span>Get Started</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;
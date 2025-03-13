
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BrainCircuit, BarChart3, LightbulbIcon, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-tintto-blue-dark/30 to-tintto-dark">
        <div className="container max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-2 rounded-full bg-tintto-blue/10 border border-tintto-blue/20 text-tintto-accent text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">End-to-End AI & Data Solutions</h1>
            <p className="text-white/70 max-w-3xl mx-auto text-lg">
              At Tintto Data Labs, we offer end-to-end services to accelerate your business with AI and data. 
              Whether you're starting your journey or scaling existing capabilities, our solutions are customized to deliver real impact.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            
            <ServiceCard
              title="AI Strategy & Consulting"
              description="Build a future-ready AI strategy with expert guidance, from capability assessments to actionable roadmaps."
              benefits={[
                "Strategic alignment", 
                "Team empowerment", 
                "High-impact opportunities"
              ]}
              icon={<LightbulbIcon className="w-8 h-8" />}
              delay={300}
            />
            
            <ServiceCard
              title="Ethical AI & Compliance"
              description="Implement AI with confidence, ensuring privacy, security, and adherence to ethical and regulatory standards."
              benefits={[
                "Risk reduction", 
                "Stakeholder trust", 
                "Sustainable innovation"
              ]}
              icon={<ShieldCheck className="w-8 h-8" />}
              delay={400}
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;

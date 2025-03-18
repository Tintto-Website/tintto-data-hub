
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BrainCircuit, Database } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ServicePillar from "@/components/ServicePillar";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="container max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="inline-block text-sm font-medium mb-4 uppercase tracking-wide">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-medium mb-8">End-to-End AI & Data Solutions</h1>
            <p className="text-tintto-muted max-w-3xl text-lg mb-4">
              At Tintto Data Labs, we accelerate your business growth by merging two powerful streams of innovation: AI Agents and Foundational Models Data Cockpits. 
            </p>
            <p className="text-tintto-muted max-w-3xl text-lg">
              Our intelligent AI agents automate tasks, streamline operations, and integrate seamlessly with your systems, while our foundational models data cockpits consolidate your data and transform it into actionable insights using advanced models and intuitive dashboards. This dual approach empowers you to make informed decisions and operate more efficiently.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Pillars */}
      <section className="py-24 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="mb-12">
            <AnimatedSection>
              <h3 className="text-3xl font-medium">Our Service Pillars</h3>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* AI Agents & Automation */}
            <ServicePillar
              title="AI Agents & Automation"
              description="Our AI agents are designed to handle repetitive tasks and solve complex challenges, freeing up your team's time to focus on strategic initiatives. These agents are adaptive, scalable, and integrate seamlessly with your existing systems."
              useCases={[
                "Workflow Automation: Automate repetitive processes such as data entry, scheduling, and ticket routing",
                "Customer Service Bots: Provide real-time, intelligent support that learns from interactions",
                "Sales & Marketing Automation: Generate leads, qualify prospects, and personalize outreach",
                "Operational Optimization: Monitor processes in real time and adjust operations dynamically",
                "Integration with Enterprise Tools: Seamlessly connect with CRMs, ERPs, and other systems",
                "Real-Time Decision Support: Deliver actionable insights where decisions are made"
              ]}
              icon={<BrainCircuit className="w-8 h-8" />}
              delay={100}
            />

            {/* Foundational Models Data Cockpits */}
            <ServicePillar
              title="Foundational Models Data Cockpits"
              description="Our data cockpits are the analytical powerhouse behind your organization. By leveraging robust data engineering and a suite of statistical, econometric, and simulation models, we create a unified platform where every key performance indicator is visible and actionable."
              useCases={[
                "Data Integration & Transformation: Aggregate data from multiple sources into a unified format",
                "Advanced Statistical Analysis: Apply regression, time series models, and panel data analysis",
                "Forecasting & Predictive Analytics: Use econometric and Bayesian models to forecast trends",
                "Causal Inference & Structural Modeling: Leverage SEM and VAR models for causal relationships",
                "Optimization & Simulation: Utilize Monte Carlo simulations and optimization techniques",
                "Real-Time Dashboarding: Present data via interactive dashboards with drill-down capabilities"
              ]}
              icon={<Database className="w-8 h-8" />}
              delay={200}
            />
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 px-6 bg-tintto-offwhite">
        <div className="container max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-medium mb-6">Ready to Transform Your Business?</h2>
            <p className="text-tintto-muted max-w-2xl mx-auto mb-8">
              Whether you need AI agents to streamline operations or data cockpits to power informed decision-making, 
              our team is ready to help you succeed.
            </p>
            <a href="https://zcal.co/jpc/25min" className="btn-primary text-base py-3 px-8">
              Schedule a Consultation
            </a>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;

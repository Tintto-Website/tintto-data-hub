
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { ChevronRight, Briefcase, Users, Rocket, Heart } from "lucide-react";

interface JobListingProps {
  title: string;
  location: string;
  type: string;
  description: string;
  delay?: number;
}

const JobListing: React.FC<JobListingProps> = ({
  title,
  location,
  type,
  description,
  delay = 0
}) => {
  return (
    <AnimatedSection delay={delay}>
      <div className="glass-card p-6 group transition-all duration-300 hover:translate-y-[-5px]">
        <div className="flex flex-wrap justify-between items-center mb-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="flex space-x-2 mt-2 sm:mt-0">
            <span className="px-3 py-1 bg-tintto-blue/20 text-white/80 rounded-full text-xs">
              {location}
            </span>
            <span className="px-3 py-1 bg-tintto-blue/20 text-white/80 rounded-full text-xs">
              {type}
            </span>
          </div>
        </div>
        <p className="text-white/70 mb-4">{description}</p>
        <Link 
          to="/contact?job=apply" 
          className="flex items-center text-tintto-accent text-sm font-medium group-hover:text-tintto-blue-light transition-colors"
        >
          Apply Now <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </AnimatedSection>
  );
};

const Careers = () => {
  const jobs = [
    {
      title: "AI Developer",
      location: "Berlin, Germany",
      type: "Full Time",
      description: "Join our AI team to design and implement cutting-edge machine learning models and AI systems that solve real business challenges.",
      delay: 100
    },
    {
      title: "Data Analyst",
      location: "Remote",
      type: "Full Time",
      description: "Help our clients transform raw data into valuable insights through analytics, visualization, and actionable recommendations.",
      delay: 200
    },
    {
      title: "Strategy Consultant",
      location: "Berlin, Germany",
      type: "Full Time",
      description: "Guide businesses in developing AI and data strategies that align with their goals and create sustainable competitive advantages.",
      delay: 300
    },
    {
      title: "ML Ops Engineer",
      location: "Remote",
      type: "Full Time",
      description: "Build and maintain scalable infrastructure for deploying, monitoring, and managing machine learning models in production.",
      delay: 400
    },
    {
      title: "Data Engineer",
      location: "Berlin, Germany",
      type: "Full Time",
      description: "Design and build data pipelines, storage systems, and processing frameworks to support our AI and analytics solutions.",
      delay: 500
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 px-6 bg-tintto-blue-dark/30">
        <div className="container max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-2 rounded-full bg-tintto-blue/10 border border-tintto-blue/20 text-tintto-accent text-sm font-medium mb-4">
              Careers
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-white/70 max-w-3xl mx-auto text-lg">
              Ready to shape the future of AI and data? At Tintto Data Labs, you'll work on groundbreaking 
              projects alongside a talented team. We value creativity, growth, and impact.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 px-6">
        <div className="container max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center">Why Join Us</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <AnimatedSection delay={100}>
              <div className="glass-card p-8 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-tintto-blue/20 flex items-center justify-center mb-6">
                  <Rocket className="w-8 h-8 text-tintto-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Innovative Projects</h3>
                <p className="text-white/70">
                  Work on groundbreaking AI and data solutions that have real-world impact across industries.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="glass-card p-8 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-tintto-blue/20 flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-tintto-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Collaborative Culture</h3>
                <p className="text-white/70">
                  Join a supportive, diverse team that values knowledge sharing and collective growth.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="glass-card p-8 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-tintto-blue/20 flex items-center justify-center mb-6">
                  <Briefcase className="w-8 h-8 text-tintto-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Career Growth</h3>
                <p className="text-white/70">
                  Develop your skills with mentorship, continuous learning, and opportunities to lead.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <div className="glass-card p-8 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-tintto-blue/20 flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-tintto-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Work-Life Balance</h3>
                <p className="text-white/70">
                  Enjoy flexible work arrangements, competitive benefits, and a focus on wellbeing.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Current Openings */}
      <section className="py-16 px-6 bg-tintto-gray">
        <div className="container max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center">Current Openings</h2>
          </AnimatedSection>
          
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <JobListing
                key={index}
                title={job.title}
                location={job.location}
                type={job.type}
                description={job.description}
                delay={job.delay}
              />
            ))}
          </div>
          
          <AnimatedSection delay={600}>
            <div className="mt-12 text-center">
              <p className="text-white/70 mb-6">
                Don't see a role that fits your skills? We're always looking for exceptional talent.
              </p>
              <Link to="/contact" className="btn-primary inline-block">
                <span>Contact Us</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Careers;

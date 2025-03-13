
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  const jobOpenings = [
    {
      title: "AI Developer",
      description: "Design and implement AI algorithms and models for client projects.",
      requirements: [
        "3+ years of machine learning experience",
        "Strong Python programming skills",
        "Experience with TensorFlow or PyTorch",
        "Computer science or related degree"
      ]
    },
    {
      title: "Data Analyst",
      description: "Transform complex data into actionable insights and visualizations.",
      requirements: [
        "2+ years of data analysis experience",
        "Proficient in SQL and data visualization tools",
        "Experience with statistical analysis",
        "Strong communication skills"
      ]
    },
    {
      title: "Strategy Consultant",
      description: "Help clients develop and implement effective AI and data strategies.",
      requirements: [
        "5+ years of consulting experience",
        "Understanding of AI/ML concepts",
        "Strong business acumen",
        "Excellent presentation skills"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-tintto-blue-dark/30 to-tintto-dark">
        <div className="container max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-2 rounded-full bg-tintto-blue/10 border border-tintto-blue/20 text-tintto-accent text-sm font-medium mb-4">
              Careers
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-white/70 max-w-3xl mx-auto text-lg">
              Ready to shape the future of AI and data? At Tintto Data Labs, you'll work on groundbreaking projects alongside a talented team.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 px-6">
        <div className="container max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center">What We Offer</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <div className="glass-card p-8 h-full">
                <div className="w-16 h-16 rounded-lg bg-tintto-blue/20 flex items-center justify-center mb-6">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-tintto-blue to-tintto-accent"></div>
                </div>
                <h3 className="text-xl font-bold mb-4">Innovative Projects</h3>
                <p className="text-white/70">
                  Work on groundbreaking AI and data projects with real-world impact.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="glass-card p-8 h-full">
                <div className="w-16 h-16 rounded-lg bg-tintto-blue/20 flex items-center justify-center mb-6">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-tintto-blue to-tintto-accent"></div>
                </div>
                <h3 className="text-xl font-bold mb-4">Learning Culture</h3>
                <p className="text-white/70">
                  A supportive, learning-driven culture that encourages growth and development.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="glass-card p-8 h-full">
                <div className="w-16 h-16 rounded-lg bg-tintto-blue/20 flex items-center justify-center mb-6">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-tintto-blue to-tintto-accent"></div>
                </div>
                <h3 className="text-xl font-bold mb-4">Growth Opportunities</h3>
                <p className="text-white/70">
                  Opportunities to grow professionally and lead innovative initiatives.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 px-6 bg-tintto-gray">
        <div className="container max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center">Current Openings</h2>
          </AnimatedSection>
          
          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <AnimatedSection key={index} delay={index * 100 + 100}>
                <div className="glass-card p-8">
                  <h3 className="text-2xl font-bold mb-3">{job.title}</h3>
                  <p className="text-white/80 mb-6">{job.description}</p>
                  
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-tintto-accent mb-3">Requirements</h4>
                  <ul className="space-y-2 mb-6">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="w-5 h-5 mt-0.5 flex-shrink-0 rounded-full bg-tintto-blue/20 flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-tintto-accent"></span>
                        </span>
                        <span className="text-white/80 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact" className="inline-flex items-center text-tintto-accent hover:text-tintto-blue-light transition-colors">
                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection delay={400} className="text-center mt-12">
            <p className="text-white/70 mb-6">
              Don't see a position that fits your skills? We're always looking for talented individuals to join our team.
            </p>
            <Link to="/contact" className="btn-primary">
              <span>Contact Us About Opportunities</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Careers;

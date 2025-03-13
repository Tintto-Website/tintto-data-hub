
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Users, Rocket, BrainCircuit, Code } from "lucide-react";

const TeamMember = ({ 
  name, 
  role, 
  bio, 
  delay
}: { 
  name: string; 
  role: string; 
  bio: string; 
  delay: number;
}) => {
  return (
    <AnimatedSection delay={delay}>
      <div className="glass-card p-6 h-full group transition-all duration-300 hover:translate-y-[-5px]">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-tintto-blue/20 flex items-center justify-center">
          <div className="text-xl font-bold text-tintto-accent">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
        <h3 className="text-xl font-bold text-center mb-2">{name}</h3>
        <p className="text-tintto-accent text-sm text-center mb-4">{role}</p>
        <p className="text-white/70 text-center">{bio}</p>
      </div>
    </AnimatedSection>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "Emma Johnson",
      role: "AI Strategy Director",
      bio: "Emma leads our AI strategy practice with 15+ years of experience in enterprise AI transformation.",
      delay: 100
    },
    {
      name: "Michael Chen",
      role: "Lead Data Scientist",
      bio: "Michael specializes in machine learning algorithms and has contributed to groundbreaking research in NLP.",
      delay: 200
    },
    {
      name: "Sarah Rodriguez",
      role: "ML Engineering Lead",
      bio: "Sarah brings depth in productionizing ML models and creating robust AI systems that scale.",
      delay: 300
    },
    {
      name: "James Wilson",
      role: "Data Engineering Director",
      bio: "James architects data pipelines and infrastructure that power our most demanding AI applications.",
      delay: 400
    },
    {
      name: "Leila Patel",
      role: "AI Ethics Specialist",
      bio: "Leila ensures our AI solutions adhere to ethical standards and regulatory requirements.",
      delay: 500
    },
    {
      name: "David Kim",
      role: "Client Solutions Lead",
      bio: "David works directly with clients to translate business needs into technical solutions.",
      delay: 600
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

      {/* Team Expertise */}
      <section className="py-16 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <AnimatedSection delay={100}>
              <div className="glass-card p-8 flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-lg bg-tintto-blue/20 flex items-center justify-center mb-6 group-hover:bg-tintto-blue/30 transition-all duration-300">
                  <BrainCircuit className="w-8 h-8 text-tintto-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI Expertise</h3>
                <p className="text-white/70">
                  Deep knowledge in AI strategy, machine learning, and LLM technologies.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="glass-card p-8 flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-lg bg-tintto-blue/20 flex items-center justify-center mb-6 group-hover:bg-tintto-blue/30 transition-all duration-300">
                  <Code className="w-8 h-8 text-tintto-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Technical Excellence</h3>
                <p className="text-white/70">
                  Proficiency in data engineering, analytics, and system architecture.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="glass-card p-8 flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-lg bg-tintto-blue/20 flex items-center justify-center mb-6 group-hover:bg-tintto-blue/30 transition-all duration-300">
                  <Rocket className="w-8 h-8 text-tintto-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Business Acumen</h3>
                <p className="text-white/70">
                  Business acumen to align technology solutions with your strategic goals.
                </p>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                delay={member.delay}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Culture */}
      <section className="py-20 px-6 bg-tintto-gray">
        <div className="container max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Promise</h2>
            <div className="glass-card p-8 md:p-12">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-tintto-blue/20 flex items-center justify-center">
                <Users className="w-10 h-10 text-tintto-accent" />
              </div>
              <p className="text-white/80 text-lg mb-8">
                "We bring together collaboration, innovation, and a relentless focus on your success. 
                Our diverse backgrounds and expertise converge to create solutions that transform businesses 
                and create measurable, sustainable value."
              </p>
              <p className="text-tintto-accent font-medium">
                The Tintto Data Labs Team
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Team;

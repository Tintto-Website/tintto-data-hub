
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UseCaseCard from "@/components/UseCaseCard";
import AnimatedSection from "@/components/AnimatedSection";

const UseCases = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const filterParam = queryParams.get('filter');
  
  const [activeFilter, setActiveFilter] = useState(filterParam || "All");
  
  useEffect(() => {
    if (filterParam) {
      setActiveFilter(filterParam);
    }
  }, [filterParam]);
  
  const categories = [
    "All",
    "LLMs",
    "Strategic Planning",
    "Finance",
    "Performance Metrics",
    "AI Automation",
    "Healthcare",
    "Machine Learning",
    "Data Enrichment",
    "Marketing",
  ];
  
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
      delay: 150,
    },
    {
      title: "Predictive Marketing Campaigns",
      description: "Leverage machine learning for data-driven, predictive marketing that enhances brand positioning.",
      tags: ["Marketing", "Machine Learning"],
      delay: 200,
    },
    {
      title: "Customer Service AI Agents",
      description: "Deploy AI-powered customer service representatives to handle inquiries and resolve issues.",
      tags: ["LLMs", "AI Automation"],
      delay: 250,
    },
    {
      title: "Business Intelligence Dashboard",
      description: "Create interactive dashboards that visualize key performance metrics and business data.",
      tags: ["Performance Metrics", "Data Enrichment"],
      delay: 300,
    },
    {
      title: "Strategic Planning Assistant",
      description: "Use AI to help identify market trends, opportunities, and challenges for strategic planning.",
      tags: ["Strategic Planning", "LLMs"],
      delay: 350,
    },
  ];
  
  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
    if (category === "All") {
      navigate("/use-cases");
    } else {
      navigate(`/use-cases?filter=${encodeURIComponent(category)}`);
    }
  };
  
  const filteredUseCases = activeFilter === "All"
    ? useCases
    : useCases.filter(useCase => useCase.tags.some(tag => tag === activeFilter));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 px-6 bg-tintto-blue-dark/30">
        <div className="container max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-2 rounded-full bg-tintto-blue/10 border border-tintto-blue/20 text-tintto-accent text-sm font-medium mb-4">
              Use Cases
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hundreds of Use Cases</h1>
            <p className="text-white/70 max-w-3xl mx-auto text-lg">
              The Tintto Data Labs community has discovered countless ways to leverage AI solutions for business growth. 
              Explore our curated use cases below.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 px-6 bg-tintto-gray">
        <div className="container max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`bubble-filter ${activeFilter === category ? 'active' : ''}`}
                  onClick={() => handleFilterClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>
          
          <div className="use-case-grid">
            {filteredUseCases.map((useCase, index) => (
              <UseCaseCard
                key={index}
                title={useCase.title}
                description={useCase.description}
                tags={useCase.tags}
                delay={useCase.delay}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default UseCases;

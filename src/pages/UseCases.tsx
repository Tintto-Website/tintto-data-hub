
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
  
  // Set default filter to "AI Automation" if no filter is provided in URL
  const [activeFilter, setActiveFilter] = useState(filterParam || "AI Automation");

  useEffect(() => {
    if (filterParam) {
      setActiveFilter(filterParam);
    } else {
      // If no filter in URL, update URL with default filter
      navigate(`/use-cases?filter=AI%20Automation`, { replace: true });
    }
  }, [filterParam, navigate]);

  const handleFilterClick = (category: string) => {
    setActiveFilter(category === activeFilter ? "" : category);
    if (category === activeFilter) {
      navigate('/use-cases');
    } else {
      navigate(`/use-cases?filter=${encodeURIComponent(category)}`);
    }
  };

  const categories = ["Healthcare", "Finance", "Marketing", "Performance Metrics", "AI Automation", "Machine Learning", "Data Enrichment", "Strategic Planning", "LLMs", "Supply Chain", "Task Automation", "Business Intelligence", "Recruitment", "Brand Positioning", "Revenue Optimization", "Human Resources", "Customer Support", "Sales Enablement", "Customer Experience", "Manufacturing", "Cybersecurity", "Product Development", "Retail & E-commerce", "Legal", "Education & Training", "Cloud Solutions"];

  const useCases = [{
    title: "AI-Powered Diagnostics",
    description: "Analyze medical images and patient data for faster, more accurate diagnoses.",
    tags: ["Healthcare", "AI Automation"],
    delay: 100
  }, {
    title: "Automated Financial Forecasting",
    description: "Use advanced AI algorithms to predict cash flow, revenue, and expenses with high accuracy.",
    tags: ["Finance", "AI Automation"],
    delay: 150
  }, {
    title: "Predictive Marketing Campaigns",
    description: "Leverage machine learning for data-driven, predictive marketing that enhances brand positioning.",
    tags: ["Marketing", "Machine Learning"],
    delay: 200
  }, {
    title: "Customer Service AI Agents",
    description: "Deploy AI-powered customer service representatives to handle inquiries and resolve issues.",
    tags: ["LLMs", "AI Automation"],
    delay: 250
  }, {
    title: "Business Intelligence Dashboard",
    description: "Create interactive dashboards that visualize key performance metrics and business data.",
    tags: ["Performance Metrics", "Data Enrichment"],
    delay: 300
  }, {
    title: "Strategic Planning Assistant",
    description: "Use AI to help identify market trends, opportunities, and challenges for strategic planning.",
    tags: ["Strategic Planning", "LLMs"],
    delay: 350
  }, {
    title: "Content Generation for Marketing",
    description: "Generate blog posts, product descriptions, and ad copy tailored to audience preferences.",
    tags: ["LLMs", "Marketing"],
    delay: 100
  }, {
    title: "AI-Driven Customer Support",
    description: "Provide instant, accurate, and empathetic responses to customer queries, simulating human-like conversations.",
    tags: ["LLMs", "Customer Support"],
    delay: 150
  }, {
    title: "Document Summarization",
    description: "Quickly condense lengthy documents into clear and actionable summaries for busy executives.",
    tags: ["LLMs", "Task Automation"],
    delay: 200
  }, {
    title: "Sentiment Analysis in Text",
    description: "Analyze customer feedback or social media mentions to gauge sentiment and refine messaging.",
    tags: ["LLMs", "Marketing"],
    delay: 250
  }, {
    title: "Real-Time Translation Services",
    description: "Convert text and speech into different languages while maintaining cultural nuances.",
    tags: ["LLMs", "Customer Experience"],
    delay: 300
  }, {
    title: "Scenario Analysis",
    description: "Model multiple business scenarios to evaluate potential outcomes and identify effective strategies.",
    tags: ["Strategic Planning"],
    delay: 100
  }, {
    title: "Market Opportunity Detection",
    description: "Identify emerging trends and gaps in the market to stay ahead of competitors.",
    tags: ["Strategic Planning", "Marketing"],
    delay: 150
  }, {
    title: "Resource Optimization",
    description: "Recommend optimal allocation of financial, human, and material resources to maximize efficiency.",
    tags: ["Strategic Planning", "Performance Metrics"],
    delay: 200
  }, {
    title: "Risk Assessment and Mitigation",
    description: "Analyze potential risks in strategic initiatives and provide actionable recommendations.",
    tags: ["Strategic Planning", "Cybersecurity"],
    delay: 250
  }, {
    title: "Competitor Strategy Prediction",
    description: "Predict competitors' moves based on historical patterns and market activities for proactive planning.",
    tags: ["Strategic Planning", "Brand Positioning"],
    delay: 300
  }, {
    title: "Financial Forecasting",
    description: "Use historical data and market trends to predict cash flow, revenue, and expense trajectories.",
    tags: ["Finance", "Performance Metrics"],
    delay: 100
  }, {
    title: "Expense Management Automation",
    description: "Automatically categorize, track, and flag irregular expenses to streamline financial oversight.",
    tags: ["Finance", "Task Automation"],
    delay: 150
  }, {
    title: "Risk Modeling",
    description: "Identify and quantify financial risks, such as market volatility or credit defaults.",
    tags: ["Finance", "Strategic Planning"],
    delay: 200
  }, {
    title: "Regulatory Compliance Monitoring",
    description: "Ensure compliance with financial regulations by identifying discrepancies in real-time.",
    tags: ["Finance", "Legal"],
    delay: 250
  }, {
    title: "Fraud Detection",
    description: "Detect unusual patterns in transactions that could indicate fraud, helping secure company assets.",
    tags: ["Finance", "Cybersecurity"],
    delay: 300
  }, {
    title: "Custom KPI Dashboards",
    description: "Build tailored dashboards that consolidate performance metrics from various departments.",
    tags: ["Performance Metrics", "Business Intelligence"],
    delay: 100
  }, {
    title: "Predictive Performance Insights",
    description: "Leverage AI to predict future performance trends and identify potential areas of underperformance.",
    tags: ["Performance Metrics", "Machine Learning"],
    delay: 150
  }, {
    title: "Department-Wide Benchmarking",
    description: "Compare team performance against industry standards to identify strengths and weaknesses.",
    tags: ["Performance Metrics", "Human Resources"],
    delay: 200
  }, {
    title: "Real-Time Data Alerts",
    description: "Set up notifications to alert decision-makers of significant deviations from key metrics.",
    tags: ["Performance Metrics", "Business Intelligence"],
    delay: 250
  }, {
    title: "Employee Performance Optimization",
    description: "Provide personalized recommendations to employees based on their work patterns.",
    tags: ["Performance Metrics", "Human Resources"],
    delay: 300
  }, {
    title: "End-to-End Process Automation",
    description: "Automate workflows from data input to final reporting, reducing human error and speeding up execution.",
    tags: ["AI Automation", "Task Automation"],
    delay: 100
  }, {
    title: "Intelligent Task Assignment",
    description: "Use AI to assign tasks to team members based on their skills, availability, and workload.",
    tags: ["AI Automation", "Human Resources"],
    delay: 150
  }, {
    title: "Automated Quality Control",
    description: "Continuously monitor processes to ensure adherence to quality standards without human intervention.",
    tags: ["AI Automation", "Manufacturing"],
    delay: 200
  }, {
    title: "Dynamic Workflow Adjustments",
    description: "Adapt workflows dynamically in response to real-time conditions or bottlenecks.",
    tags: ["AI Automation", "Process Optimization"],
    delay: 250
  }, {
    title: "Compliance Automation",
    description: "Ensure regulatory compliance by automating documentation and reporting processes.",
    tags: ["AI Automation", "Legal"],
    delay: 300
  }, {
    title: "Patient Care Recommendations",
    description: "Provide personalized care plans based on a patient's medical history and current condition.",
    tags: ["Healthcare", "Data Enrichment"],
    delay: 100
  }, {
    title: "Optimized Hospital Operations",
    description: "Manage hospital bed allocation, staff schedules, and resource utilization using predictive analytics.",
    tags: ["Healthcare", "Performance Metrics"],
    delay: 150
  }, {
    title: "Medical Image Analysis",
    description: "Process X-rays, MRIs, and other scans to detect anomalies like tumors or fractures with high accuracy.",
    tags: ["Healthcare", "Machine Learning"],
    delay: 200
  }, {
    title: "Drug Development Assistance",
    description: "Use AI to identify potential compounds and accelerate the drug discovery process.",
    tags: ["Healthcare", "Product Development"],
    delay: 250
  }, {
    title: "Real-Time Model Tuning",
    description: "Continuously adjust ML models based on incoming data to improve predictive accuracy.",
    tags: ["Machine Learning"],
    delay: 100
  }, {
    title: "Fraud Detection Models",
    description: "Train ML algorithms to identify fraudulent activities in financial transactions or e-commerce.",
    tags: ["Machine Learning", "Cybersecurity"],
    delay: 150
  }, {
    title: "Demand Forecasting",
    description: "Predict product or service demand with higher accuracy by analyzing historical data.",
    tags: ["Machine Learning", "Supply Chain"],
    delay: 200
  }, {
    title: "Image and Object Recognition",
    description: "Identify and classify objects in images for use cases in retail, security, and manufacturing.",
    tags: ["Machine Learning", "Manufacturing"],
    delay: 250
  }, {
    title: "ML for Personalization",
    description: "Tailor user experiences on apps or websites by recommending content, products, or services.",
    tags: ["Machine Learning", "Customer Experience"],
    delay: 300
  }, {
    title: "Enhanced Customer Profiles",
    description: "Augment CRM data with third-party insights like social media activity and purchasing habits.",
    tags: ["Data Enrichment", "Sales Enablement"],
    delay: 100
  }, {
    title: "Intelligent Data Matching",
    description: "Identify and merge duplicate records in large datasets to improve accuracy and consistency.",
    tags: ["Data Enrichment", "Data Quality"],
    delay: 150
  }, {
    title: "Semantic Tagging of Content",
    description: "Add meaningful tags to unstructured data, making it easier to search and analyze.",
    tags: ["Data Enrichment", "Content Management"],
    delay: 200
  }, {
    title: "Behavioral Data Integration",
    description: "Combine clickstream data, purchase history, and preferences to offer actionable insights.",
    tags: ["Data Enrichment", "Customer Experience"],
    delay: 250
  }, {
    title: "Geospatial Data Enhancement",
    description: "Add location-specific context to datasets, ideal for logistics and market targeting.",
    tags: ["Data Enrichment", "Marketing"],
    delay: 300
  }, {
    title: "AI-Driven Campaign Optimization",
    description: "Continuously monitor and adjust marketing campaigns for better targeting and ROI.",
    tags: ["Marketing", "AI Automation"],
    delay: 100
  }, {
    title: "Personalized Customer Outreach",
    description: "Analyze customer preferences to deliver tailored emails, offers, and advertisements.",
    tags: ["Marketing", "Customer Experience"],
    delay: 150
  }, {
    title: "Social Media Monitoring",
    description: "Track brand mentions and sentiment in real-time to refine strategies or address issues.",
    tags: ["Marketing", "Brand Positioning"],
    delay: 200
  }, {
    title: "Content Performance Prediction",
    description: "Predict the potential success of content based on historical engagement metrics.",
    tags: ["Marketing", "Machine Learning"],
    delay: 250
  }, {
    title: "Audience Segmentation",
    description: "Group customers into detailed segments for hyper-targeted marketing campaigns.",
    tags: ["Marketing", "Data Enrichment"],
    delay: 300
  }, {
    title: "Dynamic Resource Allocation",
    description: "Automatically scale cloud resources based on real-time workload demands.",
    tags: ["Cloud Solutions", "Performance Metrics"],
    delay: 100
  }, {
    title: "Security Incident Detection",
    description: "Identify unusual activity patterns and flag potential security breaches in cloud environments.",
    tags: ["Cloud Solutions", "Cybersecurity"],
    delay: 150
  }, {
    title: "Cloud Cost Optimization",
    description: "Recommend ways to reduce spending by analyzing usage patterns and resource allocations.",
    tags: ["Cloud Solutions", "Finance"],
    delay: 200
  }, {
    title: "Multi-Cloud Management",
    description: "Seamlessly integrate and manage workloads across multiple cloud providers.",
    tags: ["Cloud Solutions", "IT Operations"],
    delay: 250
  }, {
    title: "Data Migration Automation",
    description: "Automate migration of databases and applications to the cloud with minimal downtime.",
    tags: ["Cloud Solutions", "AI Automation"],
    delay: 300
  }, {
    title: "Real-Time Inventory Tracking",
    description: "Monitor stock levels and provide alerts when replenishment is needed.",
    tags: ["Supply Chain", "Performance Metrics"],
    delay: 100
  }, {
    title: "Route Optimization",
    description: "Suggest the fastest and most cost-effective shipping routes for delivery trucks or freight.",
    tags: ["Supply Chain", "Optimization"],
    delay: 150
  }, {
    title: "Supplier Risk Analysis",
    description: "Continuously assess supplier reliability and identify potential risks in the supply chain.",
    tags: ["Supply Chain", "Strategic Planning"],
    delay: 200
  }, {
    title: "Automated Procurement",
    description: "Handle order generation, approval workflows, and supplier communication autonomously.",
    tags: ["Supply Chain", "AI Automation"],
    delay: 250
  }, {
    title: "Email Response Automation",
    description: "Generate and send personalized responses to routine inquiries based on content analysis.",
    tags: ["Task Automation", "AI Automation"],
    delay: 100
  }, {
    title: "Document Filing",
    description: "Automatically classify and store files in the correct folders based on their content.",
    tags: ["Task Automation", "Data Enrichment"],
    delay: 150
  }, {
    title: "Meeting Preparation",
    description: "Summarize agendas, previous meeting notes, and key points for upcoming discussions.",
    tags: ["Task Automation", "LLMs"],
    delay: 200
  }, {
    title: "Customer Follow-Ups",
    description: "Automate reminders or updates to customers post-purchase or post-service.",
    tags: ["Task Automation", "Customer Experience"],
    delay: 250
  }, {
    title: "Project Status Reporting",
    description: "Compile project updates from multiple sources and generate progress reports.",
    tags: ["Task Automation", "Performance Metrics"],
    delay: 300
  }, {
    title: "Trend Identification",
    description: "Identify emerging trends within large datasets, helping businesses adapt quickly to market shifts.",
    tags: ["Business Intelligence", "Strategic Planning"],
    delay: 100
  }, {
    title: "Cross-Departmental Insights",
    description: "Correlate data across sales, marketing, and operations for a unified view of performance.",
    tags: ["Business Intelligence", "Performance Metrics"],
    delay: 150
  }, {
    title: "Anomaly Detection",
    description: "Highlight unusual patterns in business data that could indicate problems or opportunities.",
    tags: ["Business Intelligence", "Data Enrichment"],
    delay: 200
  }, {
    title: "Predictive BI Dashboards",
    description: "Offer real-time insights combined with forecasts to support proactive decision-making.",
    tags: ["Business Intelligence", "Machine Learning"],
    delay: 250
  }, {
    title: "Natural Language Queries",
    description: "Allow users to ask complex data questions in plain language and get instant insights.",
    tags: ["Business Intelligence", "LLMs"],
    delay: 300
  }];

  const filteredUseCases = activeFilter 
    ? useCases.filter(useCase => useCase.tags.some(tag => tag === activeFilter)) 
    : useCases;

  return <div className="min-h-screen flex flex-col">
    <Navbar />
    
    {/* Header */}
    <section className="pt-32 pb-20 px-6 bg-tintto-blue-dark/30 bg-slate-50">
      <div className="container max-w-7xl mx-auto text-center">
        <AnimatedSection>
          <span className="inline-block px-4 py-2 rounded-full bg-tintto-blue/10 border border-tintto-blue/20 text-sm font-medium mb-4 text-tintto-blue">
            Use Cases
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hundreds of Use Cases</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-950">
            The Tintto Data Labs community has discovered countless ways to leverage AI solutions for business growth. 
            Explore our curated use cases below.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Filters */}
    <section className="py-12 px-6 bg-zinc-50">
      <div className="container max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button 
                key={category} 
                className={`bubble-filter ${activeFilter === category ? 'active' : ''}`} 
                onClick={() => handleFilterClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {filteredUseCases.length > 0 ? (
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
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl text-white mb-4">No use cases found</h3>
              <button className="btn-secondary" onClick={() => setActiveFilter("")}>
                Show All Use Cases
              </button>
            </div>
          )}
        </AnimatedSection>
      </div>
    </section>
    
    <Footer />
  </div>;
};

export default UseCases;


import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";

const Insights = () => {
  const articles = [
    {
      title: "AI Automation: The Next Step for Efficiency",
      excerpt: "Explore how AI automation is revolutionizing business processes and creating unprecedented levels of operational efficiency.",
      category: "AI",
      date: "June 15, 2023",
      image: "bg-gradient-to-br from-tintto-blue/30 to-tintto-accent/20"
    },
    {
      title: "Turning Data into Decisions: A Practical Guide",
      excerpt: "Learn practical strategies for transforming your raw data into actionable business insights that drive informed decision-making.",
      category: "Data",
      date: "May 28, 2023",
      image: "bg-gradient-to-br from-tintto-blue-dark/40 to-tintto-blue/20"
    },
    {
      title: "Ethics in AI: Why It Matters Now",
      excerpt: "Understand the critical importance of ethical considerations in AI development and implementation for sustainable business growth.",
      category: "Ethics",
      date: "April 10, 2023",
      image: "bg-gradient-to-br from-tintto-accent/30 to-tintto-blue/20"
    },
    {
      title: "The Future of Machine Learning in Business",
      excerpt: "Discover emerging trends in machine learning and how they're set to transform various business sectors in the coming years.",
      category: "Machine Learning",
      date: "March 22, 2023",
      image: "bg-gradient-to-br from-purple-500/30 to-tintto-blue/20"
    },
    {
      title: "Building a Data-Driven Culture",
      excerpt: "Explore strategies for fostering a data-driven organizational culture that embraces analytics at all levels.",
      category: "Business",
      date: "February 15, 2023",
      image: "bg-gradient-to-br from-tintto-blue-light/30 to-tintto-accent/20"
    },
    {
      title: "Understanding Large Language Models",
      excerpt: "A comprehensive guide to large language models, their capabilities, limitations, and applications in business contexts.",
      category: "LLMs",
      date: "January 30, 2023",
      image: "bg-gradient-to-br from-green-500/30 to-tintto-blue/20"
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
              Insights
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Thought Leadership</h1>
            <p className="text-white/70 max-w-3xl mx-auto text-lg">
              Stay informed with Tintto Data Labs' insights on the latest trends and strategies in AI and data. 
              Our articles offer actionable ideas for your business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <AnimatedSection key={index} delay={index * 100 + 100}>
                <div className="glass-card h-full overflow-hidden group">
                  <div className={`h-48 ${article.image} p-10 flex items-center justify-center transition-all duration-500 group-hover:scale-105`}>
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white/20"></div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-center mb-4">
                      <span className="px-3 py-1 text-xs rounded-full bg-tintto-blue/10 text-tintto-accent">
                        {article.category}
                      </span>
                      <span className="text-white/50 text-xs">{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                    <p className="text-white/70 mb-6 text-sm">{article.excerpt}</p>
                    <a href="#" className="inline-flex items-center text-tintto-accent group-hover:text-tintto-blue-light transition-colors">
                      Read More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Insights;

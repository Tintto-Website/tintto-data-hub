import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
interface ArticleProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  delay?: number;
}
const Article: React.FC<ArticleProps> = ({
  title,
  excerpt,
  author,
  date,
  category,
  delay = 0
}) => {
  return <AnimatedSection delay={delay}>
      <div className="glass-card overflow-hidden group transition-all duration-300 hover:translate-y-[-5px]">
        <div className="h-48 bg-tintto-gray-light/20"></div>
        <div className="p-6">
          <div className="flex items-center mb-4">
            <span className="px-3 py-1 bg-tintto-blue/20 rounded-full text-tintto-blue text-[tintto-blue-light]">
              {category}
            </span>
            <div className="flex items-center text-gray-500 text-sm ml-4">
              <Calendar className="w-4 h-4 mr-1" /> {date}
            </div>
            <div className="flex items-center text-gray-500 text-sm ml-4">
              <User className="w-4 h-4 mr-1" /> {author}
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
          <p className="text-gray-600 mb-4">{excerpt}</p>
          
          <Link to="#" className="flex items-center text-tintto-accent text-sm font-medium group-hover:text-tintto-blue-light transition-colors">
            Read More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </AnimatedSection>;
};
const Insights = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", "AI Strategy", "Machine Learning", "Data Analytics", "Ethics", "Case Studies"];
  const articles = [{
    title: "AI Automation: The Next Step for Efficiency",
    excerpt: "Discover how AI automation is transforming business operations and creating unprecedented efficiency gains across industries.",
    author: "Emma Johnson",
    date: "June 12, 2023",
    category: "AI Strategy",
    delay: 100
  }, {
    title: "Turning Data into Decisions: A Practical Guide",
    excerpt: "Learn the step-by-step process of converting raw data into actionable insights that drive better business decisions.",
    author: "Michael Chen",
    date: "May 28, 2023",
    category: "Data Analytics",
    delay: 200
  }, {
    title: "Ethics in AI: Why It Matters Now",
    excerpt: "Explore the critical importance of ethical considerations in AI development and deployment for sustainable innovation.",
    author: "Leila Patel",
    date: "May 15, 2023",
    category: "Ethics",
    delay: 300
  }, {
    title: "Machine Learning Models: Choosing the Right Approach",
    excerpt: "A comprehensive guide to selecting the optimal machine learning models for different business challenges.",
    author: "Sarah Rodriguez",
    date: "April 30, 2023",
    category: "Machine Learning",
    delay: 400
  }, {
    title: "Healthcare Revolution: AI-Powered Diagnostics",
    excerpt: "How AI is transforming medical diagnostics and creating more accurate, faster patient outcomes.",
    author: "James Wilson",
    date: "April 15, 2023",
    category: "Case Studies",
    delay: 500
  }, {
    title: "Data Strategy for Enterprise: Building Your Roadmap",
    excerpt: "Essential components of a robust enterprise data strategy that delivers long-term value and competitive advantage.",
    author: "David Kim",
    date: "March 28, 2023",
    category: "AI Strategy",
    delay: 600
  }];
  const filteredArticles = activeFilter === "All" ? articles : articles.filter(article => article.category === activeFilter);
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 px-6 bg-tintto-blue-dark/30">
        <div className="container max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-2 rounded-full bg-tintto-blue/10 border border-tintto-blue/20 font-medium mb-4 text-zinc-950 text-[tintto-blue-light]">
              Insights
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Thought Leadership</h1>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Stay informed with Tintto Data Labs' insights on the latest trends and strategies in AI and data. 
              Our articles offer actionable ideas for your business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => <button key={category} className={`bubble-filter ${activeFilter === category ? 'active' : ''}`} onClick={() => setActiveFilter(category)}>
                {category}
              </button>)}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => <Article key={index} title={article.title} excerpt={article.excerpt} author={article.author} date={article.date} category={article.category} delay={article.delay} />)}
          </div>
          
          <div className="mt-16">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-20 px-6 bg-tintto-gray">
        <div className="container max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="glass-card p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Get the latest insights, articles, and updates from Tintto Data Labs delivered directly to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 bg-tintto-gray border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-tintto-accent/50" required />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  <span>Subscribe</span>
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Insights;
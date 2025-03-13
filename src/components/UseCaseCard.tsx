
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Link, useNavigate } from "react-router-dom";

interface UseCaseCardProps {
  title: string;
  description: string;
  tags: string[];
  delay?: number;
  className?: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({
  title,
  description,
  tags,
  delay = 0,
  className,
}) => {
  const navigate = useNavigate();
  
  const handleTagClick = (tag: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/use-cases?filter=${encodeURIComponent(tag)}`);
  };
  
  return (
    <AnimatedSection delay={delay} className={cn("h-full", className)}>
      <div className="glass-card p-6 h-full flex flex-col group transition-all duration-500 hover:translate-y-[-5px]">
        <div className="w-12 h-12 rounded-lg bg-tintto-blue/20 flex items-center justify-center mb-4 group-hover:bg-tintto-blue/30 transition-all duration-300">
          <div className="w-6 h-6 rounded-full bg-tintto-accent"></div>
        </div>
        
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-white/70 text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <button
              key={index}
              onClick={(e) => handleTagClick(tag, e)}
              className="px-2 py-1 text-xs rounded-full bg-tintto-gray border border-white/10 text-white/60 hover:bg-tintto-blue/20 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="mt-auto">
          <Link 
            to="/contact" 
            className="flex items-center text-tintto-accent text-sm font-medium group-hover:text-tintto-blue-light transition-colors"
          >
            Get Started <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default UseCaseCard;

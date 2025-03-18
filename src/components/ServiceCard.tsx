
import React from "react";
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";

interface ServiceCardProps {
  title: string;
  description: string;
  benefits: string[];
  icon: React.ReactNode;
  delay?: number;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  benefits,
  icon,
  delay = 0,
  className,
}) => {
  return (
    <AnimatedSection 
      delay={delay} 
      className={cn("h-full", className)}
    >
      <div className="glass-card p-8 h-full flex flex-col group transition-all duration-500 hover:translate-y-[-5px]">
        <div className="w-16 h-16 rounded-xl bg-tintto-blue/20 flex items-center justify-center mb-6 group-hover:bg-tintto-blue/30 transition-all duration-300">
          <div className="text-tintto-accent">{icon}</div>
        </div>
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-white/70 mb-6">{description}</p>
        
        <div className="mt-auto">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-tintto-accent mb-3">Benefits</h4>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="w-5 h-5 mt-0.5 flex-shrink-0 rounded-full bg-tintto-blue/20 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-tintto-accent"></span>
                </span>
                <span className="text-white/80 text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServiceCard;

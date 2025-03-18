
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
      <div className="border border-tintto-gray/20 p-8 h-full flex flex-col group transition-all duration-300 hover:bg-tintto-offwhite">
        <div className="w-12 h-12 flex items-center justify-center mb-6">
          <div className="text-tintto-dark">{icon}</div>
        </div>
        
        <h3 className="text-xl font-medium mb-3">{title}</h3>
        <p className="text-tintto-muted mb-6">{description}</p>
        
        <div className="mt-auto">
          <h4 className="text-sm uppercase tracking-wider text-tintto-dark font-medium mb-3">Benefits</h4>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="w-4 h-4 mt-0.5 flex-shrink-0 bg-tintto-dark flex items-center justify-center">
                  <span className="w-2 h-0.5 bg-white"></span>
                </span>
                <span className="text-tintto-muted text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServiceCard;

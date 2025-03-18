
import React from "react";
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";

interface ServicePillarProps {
  title: string;
  description: string;
  useCases: string[];
  icon: React.ReactNode;
  delay?: number;
  className?: string;
}

const ServicePillar: React.FC<ServicePillarProps> = ({
  title,
  description,
  useCases,
  icon,
  delay = 0,
  className,
}) => {
  return (
    <AnimatedSection 
      delay={delay} 
      className={cn("h-full", className)}
    >
      <div className="bg-tintto-dark text-white p-8 h-full flex flex-col">
        <div className="w-12 h-12 flex items-center justify-center mb-6">
          <div className="text-white">{icon}</div>
        </div>
        
        <h3 className="text-2xl font-medium mb-4">{title}</h3>
        <p className="text-white/70 mb-6">{description}</p>
        
        <div className="mt-auto">
          <h4 className="text-sm uppercase tracking-wider text-white mb-4 font-medium">Key Use Cases</h4>
          <ul className="space-y-3">
            {useCases.map((useCase, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="w-4 h-4 mt-0.5 flex-shrink-0 bg-white/20 flex items-center justify-center">
                  <span className="w-2 h-0.5 bg-white"></span>
                </span>
                <span className="text-white/80">{useCase}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServicePillar;

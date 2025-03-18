
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
      <div className="glass-card p-8 h-full flex flex-col">
        <div className="w-16 h-16 rounded-xl bg-tintto-blue/10 flex items-center justify-center mb-6 group-hover:bg-tintto-blue/20 transition-all duration-300">
          <div className="text-tintto-blue">{icon}</div>
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="mt-auto">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-tintto-accent mb-4">Key Use Cases</h4>
          <ul className="space-y-3">
            {useCases.map((useCase, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="w-5 h-5 mt-0.5 flex-shrink-0 rounded-full bg-tintto-blue/10 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-tintto-accent"></span>
                </span>
                <span className="text-gray-700">{useCase}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServicePillar;


import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  direction?: "up" | "right" | "left" | "none";
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  threshold = 0.2,
  direction = "up",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-reveal");
              entry.target.classList.add("opacity-100");
              observer.unobserve(entry.target);
            }, delay);
          }
        });
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay, threshold]);

  const directionClass = {
    up: "translate-y-8",
    right: "translate-x-8",
    left: "-translate-x-8",
    none: "",
  };

  return (
    <div
      ref={sectionRef}
      className={cn(
        "opacity-0",
        directionClass[direction],
        "transition-all duration-700 ease-out",
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

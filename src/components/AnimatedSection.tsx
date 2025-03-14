
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
              entry.target.style.transform = "translate(0, 0)";
            }, delay);
          }
        });
      },
      { threshold, rootMargin: "20px" }
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

  const getInitialTransform = () => {
    switch (direction) {
      case "up": return "translate(0, 20px)";
      case "right": return "translate(-20px, 0)";
      case "left": return "translate(20px, 0)";
      default: return "translate(0, 0)";
    }
  };

  return (
    <div
      ref={sectionRef}
      className={cn(
        "opacity-0",
        "transition-all duration-700 ease-out will-change-transform",
        className
      )}
      style={{
        transform: getInitialTransform(),
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

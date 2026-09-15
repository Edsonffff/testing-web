import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  zoom?: boolean;
}

export function AnimatedText({
  children,
  className = "",
  delay = 0,
  as = "div",
  zoom = false,
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const prefersReducedMotion = useReducedMotion();

  const Component = motion[as] as typeof motion.div;

  if (prefersReducedMotion) {
    const StaticComponent = as;
    return <StaticComponent className={className}>{children}</StaticComponent>;
  }

  return (
    <Component
      ref={ref}
      className={className}
      initial={{ 
        opacity: 0, 
        y: 20,
        scale: zoom ? 0.95 : 1 
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        scale: 1 
      } : {}}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </Component>
  );
}

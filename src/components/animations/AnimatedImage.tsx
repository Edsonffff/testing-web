import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  direction?: "left" | "right";
}

export function AnimatedImage({
  src,
  alt,
  className = "",
  delay = 0,
  direction = "left",
}: AnimatedImageProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <img src={src} alt={alt} className={className} />;
  }

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      initial={{ 
        opacity: 0, 
        x: direction === "left" ? -50 : 50,
        scale: 1.05 
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0,
        scale: 1 
      } : {}}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    />
  );
}

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AnimatedListProps {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
  staggerDelay?: number;
}

export function AnimatedList({
  children,
  className = "",
  itemClassName = "",
  staggerDelay = 0.1,
}: AnimatedListProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <ul className={className}>
        {children.map((child, index) => (
          <li key={index} className={itemClassName}>
            {child}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <motion.ul ref={ref} className={className}>
      {children.map((child, index) => (
        <motion.li
          key={index}
          className={itemClassName}
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.4,
            delay: index * staggerDelay,
            ease: "easeOut",
          }}
        >
          {child}
        </motion.li>
      ))}
    </motion.ul>
  );
}

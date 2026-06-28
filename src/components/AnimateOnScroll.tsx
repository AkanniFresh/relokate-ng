import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeIn" | "slideUp" | "slideRight" | "zoomIn" | "staggered";
  duration?: number;
  delay?: number;
  threshold?: number;
  staggerChildren?: number;
}

export default function AnimateOnScroll({
  children,
  className = "",
  animation = "fadeIn",
  duration = 0.5,
  delay = 0,
  threshold = 0.1,
  staggerChildren = 0.1,
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getAnimationVariants = () => {
    switch (animation) {
      case "fadeIn":
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration, delay },
          },
        };
      case "slideUp":
        return {
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration, delay },
          },
        };
      case "slideRight":
        return {
          hidden: { opacity: 0, x: -30 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration, delay },
          },
        };
      case "zoomIn":
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration, delay },
          },
        };
      case "staggered":
        return {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delayChildren: delay,
              staggerChildren,
            },
          },
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration, delay },
          },
        };
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={getAnimationVariants()}
    >
      {animation === "staggered" ? (
        <motion.div
          className="stagger-wrapper"
          variants={getAnimationVariants()}
        >
          {Array.isArray(children)
            ? children.map((child, i) => (
                <motion.div key={i} variants={childVariants}>
                  {child}
                </motion.div>
              ))
            : children}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
}

"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode, CSSProperties } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  className?: string;
  stagger?: boolean;
  style?: CSSProperties;
}

export const FadeIn = ({
  children,
  delay = 0,
  direction = "up",
  duration = 0.8,
  className = "",
  stagger = false,
  style,
}: FadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: { x: 0, y: 0 },
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...directionOffset[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: stagger ? 0.1 : 0,
      } as any,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export const FadeInStagger = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <FadeIn stagger className={className} direction="none">
      {children}
    </FadeIn>
  );
};

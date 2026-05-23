"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { formatNumber } from "@/lib/utils";

interface AnimatedNumberProps {
  value: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export const AnimatedNumber = ({
  value,
  className,
  prefix = "",
  suffix = "",
  decimals = 2,
}: AnimatedNumberProps) => {
  const spring = useSpring(0, { stiffness: 100, damping: 30 });
  const display = useTransform(spring, (latest) => {
    return prefix + latest.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }) + suffix;
  });

  const [displayText, setDisplayText] = useState(prefix + "0" + suffix);

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  useEffect(() => {
    return display.on("change", (latest) => setDisplayText(latest));
  }, [display]);

  return <span className={className}>{displayText}</span>;
};

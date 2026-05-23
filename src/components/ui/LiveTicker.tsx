"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  { label: "USDC APY", value: "12.45%", trend: "up" },
  { label: "SOL Yield", value: "8.12%", trend: "down" },
  { label: "mSOL APY", value: "14.89%", trend: "up" },
  { label: "TVL Growth", value: "+2.4M", trend: "up" },
];

export const LiveTicker = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-6 flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 whitespace-nowrap"
        >
          <span className="text-[10px] font-bold font-mono text-text-muted uppercase tracking-widest">
            {items[index].label}
          </span>
          <span className={`text-[10px] font-mono font-bold ${items[index].trend === 'up' ? 'text-success' : 'text-error'}`}>
            {items[index].value}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

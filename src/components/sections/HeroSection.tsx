"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { AnimatedNumber } from "../ui/AnimatedNumber";
import { GlassCard } from "../ui/GlassCard";
import { FadeIn, FadeInStagger } from "../ui/FadeIn";
import { Magnetic } from "../ui/Magnetic";
import { LottieAccent } from "../ui/LottieAccent";

export const HeroSection = () => {
  return (
    <section className="relative pt-[160px] pb-[96px] overflow-hidden">
      <LottieAccent />
      {/* Background Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[800px] bg-[radial-gradient(circle_at_50%_0%,rgba(0,245,212,0.1)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-accent-solana/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center">
        <FadeInStagger>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.15] tracking-[-0.02em] max-w-[900px] mx-auto mb-6">
              Institutional-Grade <span className="text-primary">Yield Optimization</span> for Solana
            </h1>
            <p className="text-text-secondary text-lg max-w-[600px] mx-auto mb-10 leading-relaxed">
              Unleash capital efficiency with algorithmic clarity. The high-performance liquidity terminal for the modern DeFi ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <Magnetic>
                <Button variant="primary" size="lg" className="min-w-[200px]">
                  Launch App
                </Button>
              </Magnetic>
              <Magnetic>
                <Button variant="outline" size="lg" className="min-w-[200px]">
                  Documentation
                </Button>
              </Magnetic>
            </div>
          </motion.div>
        </FadeInStagger>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Total Value Locked", value: 124567890.42, prefix: "$" },
            { label: "Protocol APY (Avg)", value: 18.24, suffix: "%" },
            { label: "Total Yield Generated", value: 12450321.18, prefix: "$" },
          ].map((metric, i) => (
            <FadeIn key={metric.label} delay={0.2 + i * 0.1}>
              <GlassCard className="p-8 text-left group hover:border-primary/30 transition-colors">
                <span className="text-text-muted text-[10px] font-bold uppercase tracking-[0.2em] block mb-4">
                  {metric.label}
                </span>
                <div className="flex items-baseline gap-2">
                  <AnimatedNumber
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    className="text-3xl lg:text-4xl font-mono font-bold tracking-tight text-text-primary"
                  />
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

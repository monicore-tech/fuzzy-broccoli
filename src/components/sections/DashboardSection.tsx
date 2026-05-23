"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { Tilt } from "../ui/Tilt";
import { DataBadge } from "../ui/DataBadge";
import { Button } from "../ui/Button";
import { ArrowRight, Zap, Shield } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";
import { YieldChart } from "../ui/YieldChart";
import { Skeleton } from "../ui/Skeleton";
import { useState, useEffect } from "react";

const vaults = [
  {
    asset: "USDC",
    protocol: "Solend",
    apy: 12.45,
    tvl: 45200000,
    risk: "Low",
    isRecommended: true,
  },
  {
    asset: "SOL",
    protocol: "Mango",
    apy: 8.12,
    tvl: 89100000,
    risk: "Medium",
    isRecommended: false,
  },
  {
    asset: "mSOL",
    protocol: "Tulip",
    apy: 14.89,
    tvl: 23500000,
    risk: "High",
    isRecommended: false,
  },
];

export const DashboardSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 max-w-[1280px] mx-auto px-6">
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
        <div className="text-left">
          <h2 className="text-3xl font-bold mb-4">Optimized Vaults</h2>
          <p className="text-text-secondary max-w-[500px] text-sm md:text-base">
            Real-time algorithmic routing across top-tier Solana protocols. Maximize yield without compromising on security.
          </p>
        </div>
        <Button variant="ghost" className="gap-2 text-sm font-bold uppercase tracking-wider">
          View All Vaults <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {isLoading ? (
          [1, 2, 3].map((i) => (
            <GlassCard key={i} className="p-6 h-[400px]">
              <div className="flex items-center gap-3 mb-8">
                <Skeleton className="w-10 h-10 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="w-20 h-4" />
                  <Skeleton className="w-12 h-3" />
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between">
                  <Skeleton className="w-16 h-3" />
                  <Skeleton className="w-24 h-8" />
                </div>
                <Skeleton className="w-full h-24" />
                <div className="flex justify-between">
                  <Skeleton className="w-12 h-3" />
                  <Skeleton className="w-20 h-4" />
                </div>
                <Skeleton className="w-full h-10" />
              </div>
            </GlassCard>
          ))
        ) : (
          vaults.map((vault, i) => (
            <FadeIn key={vault.asset} delay={i * 0.1}>
              <Tilt className="h-full">
                <GlassCard
                  variant="card"
                  hasGradientBorder={vault.isRecommended}
                  className="p-6 h-full flex flex-col group cursor-pointer hover:bg-surface-card transition-all"
                >
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-surface-pill border border-hairline flex items-center justify-center font-bold text-primary">
                        {vault.asset[0]}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-text-primary">{vault.asset}</h3>
                        <span className="text-text-muted text-xs uppercase tracking-tight font-mono">{vault.protocol}</span>
                      </div>
                    </div>
                    {vault.isRecommended && (
                      <DataBadge variant="success" className="animate-pulse">
                        Optimized
                      </DataBadge>
                    )}
                  </div>

                  <div className="space-y-6 flex-grow">
                    <div className="flex justify-between items-end">
                      <span className="text-text-muted text-[10px] font-bold font-mono uppercase tracking-widest">Net APY</span>
                      <span className="text-2xl font-mono font-semibold text-primary">
                        {vault.apy}%
                      </span>
                    </div>

                    {vault.isRecommended && <YieldChart />}

                    <div className="flex justify-between items-end">
                      <span className="text-text-muted text-[10px] font-bold font-mono uppercase tracking-widest">TVL</span>
                      <span className="text-sm font-mono font-medium text-text-primary">
                        ${(vault.tvl / 1000000).toFixed(1)}M
                      </span>
                    </div>
                    <div className="pt-6 border-t border-hairline">
                      <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-6">
                        <div className="flex items-center gap-1.5">
                          <Shield className="w-3 h-3 text-success" /> {vault.risk} Risk
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Zap className="w-3 h-3 text-primary" /> Auto-Compounding
                        </div>
                      </div>
                      <Button variant="outline" className="w-full border-hairline-interactive hover:bg-primary hover:text-on-primary">
                        Deposit
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              </Tilt>
            </FadeIn>
          ))
        )}
      </div>
    </section>
  );
};

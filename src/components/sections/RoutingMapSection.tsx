"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { FadeIn } from "../ui/FadeIn";

const nodes = [
  { id: 1, label: "User Capital", type: "input", x: 5, y: 50, mobileX: 50, mobileY: 10 },
  { id: 2, label: "Everlend Router", type: "router", x: 30, y: 50, mobileX: 50, mobileY: 30 },
  { id: 3, label: "Solend", type: "vault", x: 60, y: 20, apy: "12.4%", mobileX: 25, mobileY: 55 },
  { id: 4, label: "Mango", type: "vault", x: 60, y: 50, apy: "8.1%", mobileX: 50, mobileY: 55 },
  { id: 5, label: "Tulip", type: "vault", x: 60, y: 80, apy: "14.9%", mobileX: 75, mobileY: 55 },
  { id: 6, label: "Optimized Yield", type: "output", x: 95, y: 50, mobileX: 50, mobileY: 85 },
];

const connections = [
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 2, to: 4 },
  { from: 2, to: 5 },
  { from: 5, to: 6, active: true },
];

export const RoutingMapSection = () => {
  return (
    <section className="py-24 max-w-[1280px] mx-auto px-6 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Algorithmic Capital Routing</h2>
        <p className="text-text-secondary max-w-[600px] mx-auto text-sm md:text-base">
          Capital is dynamically moved across protocols based on risk-adjusted yield telemetry.
        </p>
      </div>

      <div className="relative h-[600px] md:h-[400px] w-full border border-hairline rounded-xl bg-surface-panel/20 p-4 md:p-8">
        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0, 245, 212, 0)" />
              <stop offset="50%" stopColor="rgba(0, 245, 212, 0.5)" />
              <stop offset="100%" stopColor="rgba(0, 245, 212, 0)" />
            </linearGradient>
          </defs>
          {connections.map((conn, i) => {
            const fromNode = nodes.find((n) => n.id === conn.from)!;
            const toNode = nodes.find((n) => n.id === conn.to)!;
            return (
              <motion.line
                key={i}
                x1={`${fromNode.x}%`}
                y1={`${fromNode.y}%`}
                x2={`${toNode.x}%`}
                y2={`${toNode.y}%`}
                stroke={conn.active ? "#00f5d4" : "#1f2736"}
                strokeWidth={conn.active ? 2 : 1}
                strokeDasharray={conn.active ? "none" : "4 4"}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: i * 0.2 }}
              />
            );
          })}
        </svg>

        <svg className="absolute inset-0 w-full h-full pointer-events-none block md:hidden">
          {connections.map((conn, i) => {
            const fromNode = nodes.find((n) => n.id === conn.from)!;
            const toNode = nodes.find((n) => n.id === conn.to)!;
            return (
              <motion.line
                key={`mobile-${i}`}
                x1={`${fromNode.mobileX}%`}
                y1={`${fromNode.mobileY}%`}
                x2={`${toNode.mobileX}%`}
                y2={`${toNode.mobileY}%`}
                stroke={conn.active ? "#00f5d4" : "#1f2736"}
                strokeWidth={conn.active ? 2 : 1}
                strokeDasharray={conn.active ? "none" : "4 4"}
                initial={{ pathLength: 1, opacity: 1 }}
              />
            );
          })}
        </svg>

        {nodes.map((node) => (
          <FadeIn
            key={node.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
            } as any}
            direction="none"
            delay={node.id * 0.1}
            // Apply mobile positions via custom CSS for responsive positioning without JS window access
            data-mobile-x={node.mobileX}
            data-mobile-y={node.mobileY}
          >
            <style jsx>{`
              @media (max-width: 767px) {
                div {
                  left: ${node.mobileX}% !important;
                  top: ${node.mobileY}% !important;
                }
              }
            `}</style>
            <GlassCard
              variant={node.type === "router" ? "flyout" : "card"}
              className={node.type === "output" ? "border-primary" : ""}
            >
              <div className="px-4 py-2 flex items-center gap-2 whitespace-nowrap">
                <span className="text-[10px] font-bold font-mono uppercase tracking-wider text-text-primary">{node.label}</span>
                {node.apy && (
                  <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                    {node.apy}
                  </span>
                )}
              </div>
            </GlassCard>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

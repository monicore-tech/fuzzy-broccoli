import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "panel" | "card" | "flyout";
  hasGradientBorder?: boolean;
}

export const GlassCard = ({
  children,
  className,
  variant = "panel",
  hasGradientBorder = false,
}: GlassCardProps) => {
  const variants = {
    panel: "bg-surface-panel/80 border-hairline",
    card: "bg-surface-card/60 border-hairline-interactive",
    flyout: "bg-surface-pill/90 border-primary/30",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden backdrop-blur-xl border rounded-lg",
        variants[variant],
        hasGradientBorder && "before:absolute before:inset-0 before:p-[1px] before:bg-brand-gradient before:content-[''] before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude]",
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};

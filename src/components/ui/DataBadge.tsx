import { cn } from "@/lib/utils";

interface DataBadgeProps {
  children: React.ReactNode;
  variant?: "success" | "error" | "warning" | "neutral";
  className?: string;
}

export const DataBadge = ({ children, variant = "neutral", className }: DataBadgeProps) => {
  const variants = {
    success: "bg-success/10 text-success border-success/20",
    error: "bg-error/10 text-error border-error/20",
    warning: "bg-warning/10 text-warning border-warning/20",
    neutral: "bg-surface-pill text-text-muted border-hairline",
  };

  return (
    <span
      className={cn(
        "px-2 py-0.5 rounded text-[10px] font-bold font-mono uppercase tracking-wider border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

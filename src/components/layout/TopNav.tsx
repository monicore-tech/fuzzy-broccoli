import { Button } from "../ui/Button";
import { LiveTicker } from "../ui/LiveTicker";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "#", active: false },
  { label: "Vaults", href: "#", active: true },
  { label: "Liquidator", href: "#", active: false },
  { label: "Governance", href: "#", active: false },
];

export const TopNav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-panel/80 backdrop-blur-md border-b border-hairline h-[72px]">
      <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rotate-45 rounded-sm" />
            <span className="font-bold text-xl tracking-tight uppercase">Everlend</span>
          </div>

          <div className="hidden md:flex items-center gap-6 border-l border-hairline pl-8 h-full">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "text-[12px] font-bold uppercase tracking-widest transition-colors relative h-[72px] flex items-center",
                  item.active ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                )}
              >
                {item.label}
                {item.active && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:block border-r border-hairline pr-6 h-6">
            <LiveTicker />
          </div>
          <div className="hidden lg:flex items-center gap-4 px-4 py-2 bg-surface-pill rounded-md border border-hairline">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-[10px] font-mono text-text-secondary uppercase">Solana Mainnet</span>
            </div>
            <div className="w-px h-3 bg-hairline" />
            <span className="text-[10px] font-mono text-primary uppercase">12ms</span>
          </div>
          <Button variant="primary" size="sm" className="font-bold uppercase tracking-wider">Connect Wallet</Button>
        </div>
      </div>
    </nav>
  );
};

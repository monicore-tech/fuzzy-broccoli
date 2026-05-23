export const Footer = () => {
  return (
    <footer className="bg-canvas pt-24 pb-12 border-t border-hairline mt-24">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-primary rotate-45 rounded-sm" />
            <span className="font-bold text-lg tracking-tight uppercase">Everlend</span>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed">
            Precision yield aggregation for the Solana ecosystem. Powered by algorithmic clarity.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Protocol</h4>
          <ul className="space-y-4">
            {["Dashboard", "Vaults", "Liquidator", "Security"].map((item) => (
              <li key={item}>
                <a href="#" className="text-text-muted hover:text-primary transition-colors text-sm">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Resources</h4>
          <ul className="space-y-4">
            {["Documentation", "API Reference", "Brand Assets", "Governance"].map((item) => (
              <li key={item}>
                <a href="#" className="text-text-muted hover:text-primary transition-colors text-sm">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Community</h4>
          <div className="flex gap-4">
            {[1, 2].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-surface-pill border border-hairline flex items-center justify-center hover:border-primary/50 cursor-pointer transition-colors">
                <div className="w-4 h-4 bg-text-muted" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 pt-12 border-t border-hairline flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-text-muted text-xs font-mono">© 2026 Everlend Finance. All rights reserved.</span>
        <div className="flex gap-8">
          {["Privacy Policy", "Terms of Service", "System Status"].map((item) => (
            <a key={item} href="#" className="text-text-muted hover:text-text-primary text-xs transition-colors">{item}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

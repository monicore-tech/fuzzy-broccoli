# Everlend Finance Rebuild

A high-performance, institutional-grade DeFi yield aggregator frontend built to the official Everlend Finance Design System & Brand Style Guide specs.

## Project Overview
This project replicates the Everlend Finance terminal interface, focusing on algorithmic clarity, data-dense layouts, and premium UI interactions. It demonstrates a "financial cockpit" aesthetic for the Solana ecosystem.

## Design System Compliance
- **Color Tokens**: Obsidian "Deep Void" (#07090e) base with "Everlend Teal" (#00f5d4) primary accents.
- **Typography**: Geometric hierarchy using **Plus Jakarta Sans** for UI and **JetBrains Mono** for all mathematical telemetry.
- **Spacing**: Strict 8px grid system with standardized structural bands (64px/96px).
- **Components**: Glassmorphism cards with 1px hairline borders, high-contrast data badges, and precise interactive triggers.

## UI Effects Showcase
- **GPU-Accelerated Mesh Gradient**: Fluid, high-performance background mesh utilizing canvas and requestAnimationFrame.
- **3D Tilt Interactivity**: Vanilla-tilt inspired card physics using Framer Motion's spring engines.
- **Live Yield Ticker**: Real-time ticker feel for protocol rates (USDC, SOL, mSOL).
- **Animated Number Counters**: Smooth interpolation for large financial metrics (TVL, Yield).
- **Responsive Routing Map**: Custom SVG visualization of capital flow, optimized for mobile stacking.
- **Magnetic Interaction**: Subtle spring-based hover states for primary CTAs.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Variable-mapped tokens)
- **Animation**: Framer Motion
- **Icons**: Lucide React

## Setup & Development
```bash
pnpm install
pnpm dev
```

## Performance & Quality
- **Lighthouse Target**: 95+ Score (Optimized via static generation and GPU acceleration).
- **Responsiveness**: Breakpoints verified for 1440px (Desktop), 1024px (Lg Tablet), 768px (Tablet), and 375px (Mobile).
- **Accessibility**: AA contrast minimums maintained throughout the obsidian interface.

## Credits
Built to Everlend Finance brand specifications.

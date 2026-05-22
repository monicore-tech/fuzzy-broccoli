# Everlend Finance Design System & Brand Style Guide

## Overview

Everlend Finance operates as a high-performance, institutional-grade DeFi yield aggregator and lending optimizer. The visual identity reads as a high-fidelity, hyper-precise financial cockpit that swaps legacy "crypto-neon chaos" for structured, data-dense **algorithmic clarity**. The brand communicates velocity, capital security, and programmatic automation.

The base canvas is an ultra-deep, obsidian slate **Deep Void** (`{colors.canvas}` — `#07090e`), layered with desaturated dark navy panels (`{colors.surface-panel}` — `#0f131c`) to create structural depth. The design layout is energized by a high-voltage dual-engine accent system: **Everlend Teal** (`{colors.primary}` — `#00f5d4`), which commands primary transactional CTAs and liquidity metrics, and **Solana Surge** (`{colors.accent}`) to anchor the underlying ecosystem context. 

Typography anchors on **Plus Jakarta Sans** for crisp, geometric hierarchy in interfaces and editorial headers, while **JetBrains Mono** drives all mathematical expressions, yield percentages, transaction hashes, and real-time interest rates. 

The visual signature relies heavily on **layered transparency, glowing state transitions, and precise hairline data grids**. Rather than deploying heavy drop shadows, Everlend isolates elements using sharp 1px borders with selective linear gradients, mimicking a premium hardware terminal or a futuristic liquidity console.

**Key Visual Characteristics:**
- **Obsidian Dark Floor:** Pure dark tech canvas (#07090e), avoiding muddy greys or pure black.
- **Dual Accent System:** High-visibility Everlend Teal (`#00f5d4`) balanced against deep data-muted scales.
- **Mathematical Dominance:** Numbers and percentages receive explicit typographic weight and dedicated monospace grounding.
- **Glassmorphism & Gradients:** Subtle 1px borders carrying multi-stop transparent-to-neon gradients to simulate illuminated glass sheets.
- **Tight Geometry:** 12px panel radiuses paired with tight 6px metric tags for high data-density cockpit layouts.
- **Visual Rhythm:** Structured 64px structural bands punctuated by 16px and 24px inner module distributions.

---

## Colors

### Primary Brand Accents
- **Everlend Teal** (`{colors.primary}` — `#00f5d4`): Primary system action, active indicators, and optimal yield pathways.
- **Everlend Teal Glow** (`{colors.primary-glow}` — `rgba(0, 245, 212, 0.15)`): Backdrop glow matrix for focus states and priority modules.
- **Everlend Teal Muted** (`{colors.primary-muted}` — `#00b8a1`): Hover states, secondary action glyphs, and secondary active states.

### Secondary System Accents
- **Solana Violet** (`{colors.accent-solana}` — `#9945ff`): Decorative ecosystem anchors, multi-chain route badges.
- **Serum Blue** (`{colors.accent-serum}` — `#0052ff`): Protocol integration nodes (e.g., institutional vault routing indicators).

### Surface & Panel Hierarchy
- **Deep Void Canvas** (`{colors.canvas}` — `#07090e`): The absolute page base floor; unyielding deep obsidian.
- **Surface Panel** (`{colors.surface-panel}` — `#0f131c`): Primary container tier for dashboard modules, asset matrices, and interaction cards.
- **Surface Card** (`{colors.surface-card}` — `#171d2a`): Secondary inner blocks, elevated rows, input background matrices, and dropdown sheets.
- **Surface Pill** (`{colors.surface-pill}` — `#22293a`): High-contrast desaturated interactive badges or unselected state indicators.

### Hairlines & Boundaries
- **Hairline Tech** (`{colors.hairline}` — `#1f2736`): 1px static layout separators and inactive borders.
- **Hairline Interactive** (`{colors.hairline-interactive}` — `#2d394e`): Normal state borders for buttons, fields, and interactive cards.
- **Gradiated Border Alpha** (`{colors.border-gradient-start}` — `rgba(0, 245, 212, 0.4)` to `rgba(153, 69, 255, 0.05)`): Multi-stop border wrapper applied to featured yield vaults.

### Text & Interface Copy
- **Data Crisp White** (`{colors.text-primary}` — `#ffffff`): Primary display titles, numbers, active metrics, and critical telemetry.
- **Slate Text** (`{colors.text-secondary}` — `#94a3b8`): Standard running explanatory text, structural subtitles, and inactive labels.
- **Muted Smoke** (`{colors.text-muted}` — `#64748b`): Table headers, helper labels, breadcrumbs, and contract addresses.
- **On Primary Ink** (`{colors.on-primary}` — `#020617`): Ultra-dark obsidian text for maximum contrast when sitting inside Everlend Teal containers.

### Protocol Analytics & Semantic Tokens
- **Yield Optimizing** (`{colors.success}` — `#10b981`): Positive APR/APY fluctuations, successful transactions, deposits completed.
- **Risk Liquidation** (`{colors.error}` — `#ef4444`): Health factor breaches, liquidation warnings, high slippage alerts.
- **Delta Warning** (`{colors.warning}` — `#f59e0b`): Imbalanced pools, utilization limits approaching, transaction pending statuses.

---

## Typography

### Font Architecture
- **Interface & Editorial Display:** **Plus Jakarta Sans**. Chosen for its modern, clean geometric structure and outstanding legibility at varying scales in dark interfaces. Fallback: `system-ui, -apple-system, sans-serif`.
- **Telemetry & Quantitative Data:** **JetBrains Mono**. Applied to all financial matrices, balances, APY rates, token quantities, and alphanumeric smart contract identifiers. Fallback: `monospace, Courier New`.

### Typographic Hierarchy Matrix

| Token | Font Family | Size | Weight | Line Height | Letter Spacing | Ideal Application |
|---|---|---|---|---|---|---|
| `{typography.hero-headline}` | Plus Jakarta Sans | 64px | 700 | 1.15 | `-0.02em` | Homepage Hero hook, absolute value props |
| `{typography.section-head}` | Plus Jakarta Sans | 32px | 700 | 1.25 | `-0.01em` | Primary Vault Categories, Main Dashboard headers |
| `{typography.module-title}` | Plus Jakarta Sans | 20px | 600 | 1.30 | `0` | Action Card headers, Deposit/Withdraw module titles |
| `{typography.body-lead}` | Plus Jakarta Sans | 16px | 400 | 1.60 | `0` | Introductory paragraphs, value proposition explanations |
| `{typography.body-main}` | Plus Jakarta Sans | 14px | 400 | 1.50 | `0` | General explanatory layout, tooltip descriptions |
| `{typography.table-header}` | Plus Jakarta Sans | 12px | 600 | 1.40 | `0.05em` | Capitalized table attributes (e.g., ASSET, POOL SIZE) |
| `{typography.data-mega}` | JetBrains Mono | 40px | 700 | 1.10 | `-0.01em` | Hero TVL (Total Value Locked) counters |
| `{typography.data-lg}` | JetBrains Mono | 24px | 600 | 1.20 | `0` | Core Asset APY display headlines |
| `{typography.data-md}` | JetBrains Mono | 14px | 500 | 1.40 | `0` | Standard grid row statistics, user wallet balances |
| `{typography.data-sm}` | JetBrains Mono | 12px | 400 | 1.40 | `0` | Secondary micro-telemetry, gas estimations, fees |
| `{typography.interactive-label}`| Plus Jakarta Sans | 14px | 600 | 1.00 | `0.02em` | Main Nav items, button text actions |

### Formatting Principles
1. **Never Bold Mono Fonts unnecessarily:** Let `JetBrains Mono` render at weight 500 or 600 max. Heavy bold weights degrade numeric readability inside dense multi-column arrays.
2. **Strict Mono Enforcement:** Every character representing a digit, symbol (`%`, `$`), crypto ticker (`SOL`, `USDC`), or address must utilize JetBrains Mono. Do not mix text families inside quantitative data elements.
3. **Tracking Rules:** Apply negative tracking exclusively to large display items (`>=32px`). Small caps or secondary structural descriptions use light expansion tracking (`+0.05em`).

---

## Layout & Spatial Grid

### Spacing Token Standard
- **Atomic Unit:** 4px
- **Scale:** - `{spacing.xxs}`: 4px
  - `{spacing.xs}`: 8px
  - `{spacing.sm}`: 12px
  - `{spacing.base}`: 16px
  - `{spacing.md}`: 24px
  - `{spacing.lg}`: 32px
  - `{spacing.xl}`: 48px
  - `{spacing.xxl}`: 64px
  - `{spacing.v-section}`: 96px

### Core Dimensions
- **Max Content Container Boundary:** 1280px.
- **Main Dashboard Layout:** 12-column system, utilizing 24px gutters. Secondary layouts split into an 8-column primary viewport (interactive positions) + 4-column secondary panel (quick actions/global state indicators).
- **Table Row Density:** Vertical cell padding restricts to 16px for comfortable scanning across extensive cross-protocol rows.

### Structural Rhythms
Sections follow a strict 64px (`{spacing.xxl}`) or 96px (`{spacing.v-section}`) block separator matrix. Interior modules use 24px boundaries to preserve structural solidity and dashboard readability without spilling into scattered voids.

---

## Depth, Radii & Surface Treatment

Everlend avoids skeuomorphic shadows or layered atmospheric drops. Elevation is communicated entirely through sharp color transitions, border highlights, and back-lit transparency matrix configurations.

### Elevation Schema

| Level | Background Surface Token | Border Style | Strategic Placement |
|---|---|---|---|
| **Base Zero** | `{colors.canvas}` (`#07090e`) | None | Application backdrop, main page canvas |
| **Level 1 Panel** | `{colors.surface-panel}` (`#0f131c`) | 1px `{colors.hairline}` | Main dashboard modules, data grids, tabular layouts |
| **Level 2 Container** | `{colors.surface-card}` (`#171d2a`) | 1px `{colors.hairline-interactive}` | Inner asset rows, entry forms, active input wrappers |
| **Level 3 Flyout** | `{colors.surface-pill}` (`#22293a`) | 1px `{colors.primary}` (Selective) | Modal prompts, dropdown overlays, active notification states |

### Curvature Matrix

| Token | Precision Spec | Intent & Placement |
|---|---|---|
| `{radius.sharp}` | 0px | Technical code snippets, structural raw edges |
| `{radius.sm}` | 4px | Internal check boxes, mini asset icon borders |
| `{radius.md}` | 8px | Action inputs, small metric tags, protocol badge layers |
| `{radius.lg}` | 12px | Standard dashboard panels, multi-asset data tables, modal popups |
| `{radius.xl}` | 16px | Large marketing content splits, heroic interactive charts |
| `{radius.pill}` | 9999px | Operational state elements, transaction health indicator bars |

---

## Component Engineering Specifications

### 1. Global Navigation Bar (`top-nav`)
- **Structure:** Full viewport width, bounded at 1280px content caps. Fixed height of 72px.
- **Surface:** Solid `{colors.surface-panel}` with a bottom 1px boundary of `{colors.hairline}`.
- **Internal Mapping:** - Left-aligned Everlend geometric logo.
  - Centered navigation linkage (Dashboard, Vaults, Liquidator, Governance) utilizing `{typography.interactive-label}` with a color tier of `{colors.text-secondary}`. Active route switches to `{colors.text-primary}` and exposes a bottom 2px horizontal accent track of `{colors.primary}`.
  - Right-aligned terminal grouping: Network state pulse (Green icon + text "Solana Mainnet"), RPC latency telemetry ("12ms"), and a primary `wallet-connect` CTA block.

### 2. Primary Yield Action Button (`button-primary`)
- **Structure:** High-velocity utility trigger. Height: 48px. 
- **Surface:** Solid `{colors.primary}` (`#00f5d4`), text color is set explicitly to `{colors.on-primary}` (`#020617`), utilizing typography weight `{typography.interactive-label}`.
- **Curvature:** Rounded `{radius.md}` (8px).
- **Interactive State Transitions:** - Focus/Hover: Surface shifts to `{colors.primary-muted}` (`#00b8a1`), paired with an outer 4px soft drop glow matrix using `{colors.primary-glow}`.
  - Disabled/Cap Reached: Surface shifts to `{colors.surface-pill}` (`#22293a`), text drops to `{colors.text-muted}` (`#64748b`), killing all interactive properties.

### 3. Structural Data Row (`vault-list-row`)
- **Structure:** Tabular item for rendering single asset protocols (e.g., USDC Vault).
- **Surface:** Alternating or static container using `{colors.surface-panel}`, transitioning to `{colors.surface-card}` on mouse hover. Inside grid features a 1px bottom divider of `{colors.hairline}`.
- **Internal Configurations:** Left asset block features dual overlapping icon matrices (Token icon + underlying protocol route icon like Tulip or Mango). Yield data cells occupy explicit widths, ensuring numbers align perfectly across columns via `{typography.data-lg}` or `{typography.data-md}`.

### 4. Interactive Numerical Input Block (`numeric-input-field`)
- **Structure:** Multi-layered input console designed to avoid user calculation errors.
- **Surface:** Container utilizing `{colors.surface-card}`, framed by an explicit 1px `{colors.hairline-interactive}` border wrapper.
- **Internal Interface Elements:** - Header line containing localized helper context: "Deposit Amount" on the left, "Available: 450.23 USDC" on the right in `{typography.data-sm}` text color `{colors.text-muted}`.
  - Main interactive input line featuring a naked input text box utilizing `{typography.data-lg}` data crisp white text, flanked on the right by a high-contrast max button tag (`badge-max-utility`) and the token ticker (`USDC`).

### 5. Strategy Route Map (`routing-node-map`)
- **Structure:** Inline visualization demonstrating capital allocation routes to users.
- **Surface:** Interconnected horizontal node bubbles built on `{colors.surface-card}` with 1px `{colors.hairline}` borders.
- **Visualization mechanics:** Capital pathways are mapped out via 1px animated or static dotted wires utilizing `{colors.primary}` when actively optimized, tracking through multi-step intermediary protocols before displaying the final optimized APY payload flag.

---

## Style Execution Rules (Do's & Don'ts)

### Do:
- **Do** wrap every asset value, multiplier, transaction count, percentage value, and currency unit in `JetBrains Mono`.
- **Do** ensure that the canvas floor remains strictly dark and un-illuminated. Content blocks gain clarity through fine border delineations, not structural color shifts to lighter grays.
- **Do** preserve the purity of `Everlend Teal` (`#00f5d4`). It is a high-impact transactional execution indicator. Never implement it as background fills for non-interactive elements or large layout headers.
- **Do** design layout blocks for maximum data density. Users are managing active capital balances; prefer structured, clear informational layouts over sparse web-marketing whitespace models.

### Don't:
- **Don't** use standard box-shadow parameters or diffuse colored drops to simulate card boundaries. It creates visual noise and disrupts the clean, geometric terminal aesthetic.
- **Don't** deploy standard bold sans typography for numeric representations. It distorts cross-column comparison scanning across large tabular modules.
- **Don't** introduce bright warm tones (such as standard red or energetic orange) unless dealing explicitly with portfolio liquidation threats or total pool deficit conditions.
- **Don't** allow multiple accent highlights to fight for user attention within the same view. A single view should highlight exactly one optimal route or primary execution vector.

---

## Responsive Adaptive Layout Strategies

### Viewport Tier Benchmarks

| Device Tier Name | Width Constraints | Architectural Scaling Strategy |
|---|---|---|
| **Mobile Tech Spec** | `< 768px` | Core dashboard collapses to a 1-column stack. Global navigation converts to a full-screen popover layout. Strategy maps hide entirely, substituted by a linear text path label. |
| **Tablet Technical Spec**| `768px – 1024px` | Tabular grids switch to a 2-column layout format. The secondary quick action panel drops from the horizontal split to a bottom-docked dashboard footer element. |
| **Desktop High-Fidelity**| `> 1024px` | Full 12-column terminal arrangement. Simultaneous display of active asset selectors, routing visualizations, and contextual telemetry feeds. |

### Interaction Points & Safety Targets
- **Interactive Triggers:** All CTA blocks, buttons, and close mechanisms support a minimum interactive surface area footprint of 44px × 44px to comply fully with accessible layout guidelines, safely scaling down across native touchscreen panels.
- **Table Scanning:** Horizontally overflowing tabular layouts on mobile viewports utilize localized clipping boundaries with persistent left-column pinning (Asset token ticker remains locked in place while performance metrics slide horizontally).

---

## Evolutionary Engineering Notes

1. **Token Reference Enforcement:** Avoid raw hex overrides within active UI components. Every color, size variance, or border condition must call its designated `{token.refs}` counterpart.
2. **Component Isolation Rules:** When constructing system variations, maintain explicit boundaries. Multi-chain variant blocks must remain completely separated inside code structures from standard core vaults.
3. **Typography Substitutes:** In environments where `Plus Jakarta Sans` cannot be called via web font packages, implement `Inter` with a uniform tracking constraint of `-0.015em` across all interface titles.

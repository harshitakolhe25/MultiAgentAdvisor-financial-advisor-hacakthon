"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  LineChart,
  ShieldAlert,
  Calculator,
  UserCheck,
  Building2,
  Bitcoin,
  Smile,
  Globe2,
  BrainCircuit,
  Compass,
  FileCheck2,
} from "lucide-react";

interface AdvisorNode {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  glowColor: string;
  description: string;
  insight: string;
}

export default function AdvisorNetwork() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [pulseIndex, setPulseIndex] = useState(0);

  // Cycle the pulsing "thinking" advisor node every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % advisors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const advisors: AdvisorNode[] = [
    {
      id: "investment",
      name: "Investment Advisor",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "border-blue-500/30 text-blue-400 bg-[#091129]/95",
      glowColor: "rgba(59, 130, 246, 0.4)",
      description: "Optimizes asset allocations and mutual fund selection.",
      insight: "Targeting 60% equities, 25% debt, 10% Gold, 5% REITs based on mid-term goal timeline."
    },
    {
      id: "stock",
      name: "Stock Market Analyst",
      icon: <LineChart className="w-5 h-5" />,
      color: "border-cyan-500/30 text-cyan-400 bg-[#071329]/95",
      glowColor: "rgba(6, 182, 212, 0.4)",
      description: "Identifies equity growth opportunities & market momentum.",
      insight: "Equity valuations are high; recommend direct indexing & index-ETF dollar-cost averaging."
    },
    {
      id: "risk",
      name: "Risk Assessment Expert",
      icon: <ShieldAlert className="w-5 h-5" />,
      color: "border-rose-500/30 text-rose-400 bg-[#1a0e1b]/95",
      glowColor: "rgba(244, 63, 94, 0.4)",
      description: "Stress tests portfolios and checks draw-down protection.",
      insight: "Moderate risk limit is 12% standard deviation. Debt buffer mitigates volatility."
    },
    {
      id: "tax",
      name: "Tax Optimization Advisor",
      icon: <Calculator className="w-5 h-5" />,
      color: "border-amber-500/30 text-amber-400 bg-[#171311]/95",
      glowColor: "rgba(245, 158, 11, 0.4)",
      description: "Minimizes capital gains and suggests tax-saving instruments.",
      insight: "Utilize Section 80C ELSS & 80D insurance deductions. Harvest ₹1.2L capital gains annually."
    },
    {
      id: "retirement",
      name: "Retirement Planner",
      icon: <UserCheck className="w-5 h-5" />,
      color: "border-indigo-500/30 text-indigo-400 bg-[#0b102c]/95",
      glowColor: "rgba(99, 102, 241, 0.4)",
      description: "Ensures long-term wealth sustainment post-career.",
      insight: "Inflation-adjusted target is ₹5.4 Cr. Required monthly SIP is ₹45,000 at 12% CAGR."
    },
    {
      id: "insurance",
      name: "Insurance Consultant",
      icon: <Building2 className="w-5 h-5" />,
      color: "border-teal-500/30 text-teal-400 bg-[#091522]/95",
      glowColor: "rgba(20, 184, 166, 0.4)",
      description: "Structures term-life & comprehensive health safety nets.",
      insight: "Recommend ₹2 Cr term life policy + ₹10 Lakh family floater health cover."
    },
    {
      id: "crypto",
      name: "Crypto Intelligence",
      icon: <Bitcoin className="w-5 h-5" />,
      color: "border-emerald-500/30 text-emerald-400 bg-[#0b181a]/95",
      glowColor: "rgba(16, 185, 129, 0.4)",
      description: "Analyzes digital assets and decentralized hedge yields.",
      insight: "Maintain maximum 3-5% allocation in highly liquid BTC/ETH. Avoid speculative altcoins."
    },
    {
      id: "behavioral",
      name: "Behavioral Finance Coach",
      icon: <Smile className="w-5 h-5" />,
      color: "border-fuchsia-500/30 text-fuchsia-400 bg-[#160d24]/95",
      glowColor: "rgba(217, 70, 239, 0.4)",
      description: "Prevents panic selling & maintains long-term investing discipline.",
      insight: "Suggest systematic automated SIPs to eliminate timing-the-market impulse."
    },
    {
      id: "macro",
      name: "Macroeconomic Intelligence",
      icon: <Globe2 className="w-5 h-5" />,
      color: "border-blue-400/30 text-blue-300 bg-[#091129]/95",
      glowColor: "rgba(96, 165, 250, 0.4)",
      description: "Tracks interest rates, inflation trends, and global indices.",
      insight: "RBI interest rate pause is constructive for mid-duration debt funds. Accumulate sovereign bonds."
    },
  ];

  // Circle placements math helpers
  const radius = 220; // Radius in pixels for desktop layout
  
  return (
    <div id="architecture" className="relative w-full max-w-6xl mx-auto py-24 px-6 md:px-12 flex flex-col items-center select-none overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute inset-0 bg-glow-radial pointer-events-none opacity-40"></div>
      
      {/* Header section */}
      <div className="text-center max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold mb-4 tracking-wide uppercase">
          <BrainCircuit className="w-3.5 h-3.5" /> Collaborative Intelligence
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-blue-400 bg-clip-text text-transparent">
          Multi-Agent Financial Architecture
        </h2>
        <p className="text-slate-400 mt-4 text-base">
          Our platform triggers 9 autonomous, specialized AI agents that analyze, debate, and stress-test your profile to synthesise optimal outcomes.
        </p>
      </div>

      {/* Main Workflow circular visualization */}
      <div className="relative w-full min-h-[640px] flex items-center justify-center">
        
        {/* Dynamic connection lines linking advisors to Consensus Engine in center */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 hidden md:block" style={{ zIndex: 1 }}>
          {advisors.map((_, index) => {
            const angle = (index * 2 * Math.PI) / advisors.length;
            const startX = 320 + radius * Math.cos(angle);
            const startY = 320 + radius * Math.sin(angle);
            
            return (
              <g key={index}>
                {/* Vector Dotted Line */}
                <line
                  x1="50%"
                  y1="50%"
                  x2={`${50 + (radius / 7.5) * Math.cos(angle)}%`}
                  y2={`${50 + (radius / 6.0) * Math.sin(angle)}%`}
                  className="stroke-blue-500/30"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                />
                
                {/* Moving dot particles along paths */}
                <circle r="3" className="fill-cyan-400 shadow-[0_0_8px_#06b6d4]">
                  <animateMotion
                    dur={`${2.5 + index * 0.3}s`}
                    repeatCount="indefinite"
                    path={`M ${50 + (radius / 7.5) * Math.cos(angle)} ${50 + (radius / 6.0) * Math.sin(angle)} L 50 50`}
                    keyPoints="0;1"
                    keyTimes="0;1"
                    calcMode="linear"
                  />
                </circle>
              </g>
            );
          })}
        </svg>

        {/* Input Phase - Client Profile */}
        <div className="absolute left-6 top-6 z-10 w-52 hidden lg:block">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-xl border border-white/10 bg-slate-950/80 backdrop-blur-md relative"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-3">
              <Compass className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">Step 1</h4>
            <h3 className="text-sm font-bold text-white mt-1">Client Profile</h3>
            <p className="text-[11px] text-slate-400 mt-1">Gathers financial objectives, income details, and capital rules.</p>
            {/* Pulsing indicator */}
            <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500/30 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></span>
            </span>
          </motion.div>
        </div>

        {/* Output Phase - Synthesized Strategy */}
        <div className="absolute right-6 bottom-6 z-10 w-52 hidden lg:block">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-xl border border-emerald-500/20 bg-slate-950/80 backdrop-blur-md relative"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-3">
              <FileCheck2 className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">Step 4</h4>
            <h3 className="text-sm font-bold text-white mt-1">Strategy Report</h3>
            <p className="text-[11px] text-slate-400 mt-1">Synthesizes agent debates into executive wealth steps.</p>
            {/* Glowing signal */}
            <span className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-500/30 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            </span>
          </motion.div>
        </div>

        {/* Center Nodes (Consensus Engine & Synthesizer) */}
        <div className="relative z-20 flex flex-col items-center justify-center gap-4">
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-44 h-44 rounded-full border border-blue-500/50 bg-[#091330]/90 flex flex-col items-center justify-center p-4 text-center shadow-[0_0_50px_rgba(59,130,246,0.25)] relative"
          >
            {/* Scanning line animation */}
            <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
              <div className="w-full h-[2px] bg-cyan-400/40 animate-scanline"></div>
            </div>
            
            <BrainCircuit className="w-10 h-10 text-cyan-400 mb-2 animate-pulse" />
            <h3 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">STEP 2 & 3</h3>
            <h4 className="text-sm font-bold text-white mt-0.5">Consensus Engine</h4>
            <p className="text-[9px] text-slate-400 leading-tight mt-1 max-w-[120px]">
              Reconciles contradictory agent rules in real-time.
            </p>
          </motion.div>
        </div>

        {/* Outer Circular Network (Responsive Grid on Mobile, Circular layout on Desktop) */}
        <div className="absolute inset-0 flex items-center justify-center md:block pointer-events-none">
          {advisors.map((node, index) => {
            const angle = (index * 2 * Math.PI) / advisors.length;
            const xPos = radius * Math.cos(angle);
            const yPos = radius * Math.sin(angle);
            const isPulsing = index === pulseIndex;

            return (
              <div
                key={node.id}
                className="absolute pointer-events-auto transition-transform duration-300 md:block hidden"
                style={{
                  left: `calc(50% + ${xPos}px - 84px)`,
                  top: `calc(50% + ${yPos}px - 42px)`,
                  zIndex: activeNode === node.id ? 40 : 10,
                }}
              >
                <motion.div
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  whileHover={{ scale: 1.05 }}
                  className={`w-44 p-3 rounded-xl border text-left transition-all duration-300 relative cursor-pointer ${
                    activeNode === node.id 
                      ? "border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] bg-[#070b18]" 
                      : isPulsing 
                      ? "border-blue-500 bg-[#091129] shadow-[0_0_12px_rgba(59,130,246,0.2)]" 
                      : node.color
                  }`}
                >
                  {/* Glowing active nodes indicators */}
                  {isPulsing && (
                    <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-500"></span>
                    </span>
                  )}

                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg ${isPulsing ? "bg-cyan-500/25" : "bg-white/5"}`}>
                      {node.icon}
                    </div>
                    <span className="text-xs font-bold text-slate-100 line-clamp-1">{node.name}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-snug mt-1.5 line-clamp-2">
                    {node.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Mobile Advisors Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:hidden py-12">
          {advisors.map((node, index) => {
            const isPulsing = index === pulseIndex;
            return (
              <div
                key={node.id}
                className={`p-4 rounded-xl border text-left flex items-start gap-3.5 bg-[#0a112c]/90 ${
                  isPulsing ? "border-cyan-400 shadow-md shadow-cyan-400/10" : "border-white/10"
                }`}
              >
                <div className="p-2 rounded-lg bg-white/5 text-cyan-400 shrink-0">
                  {node.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">{node.name}</span>
                    {isPulsing && <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-mono animate-pulse">THINKING</span>}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{node.description}</p>
                  <p className="text-[11px] text-cyan-400/90 font-mono mt-2 pt-2 border-t border-white/5">
                    "{node.insight}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Overlay Box when user hovers over node on desktop */}
      <div className="mt-4 h-24 w-full max-w-2xl hidden md:flex items-center justify-center">
        {activeNode ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full glass-panel-glow-cyan p-4 rounded-2xl flex items-start gap-4"
          >
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
              {advisors.find(a => a.id === activeNode)?.icon}
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {advisors.find(a => a.id === activeNode)?.name} State
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                {advisors.find(a => a.id === activeNode)?.description}
              </p>
              <p className="text-xs text-cyan-300 font-mono font-semibold mt-1">
                Recommendation Insight: "{advisors.find(a => a.id === activeNode)?.insight}"
              </p>
            </div>
          </motion.div>
        ) : (
          <div className="text-sm text-slate-500 font-mono italic animate-pulse-slow">
            * Hover over any advisor card to inspect agent recommendations and profiles *
          </div>
        )}
      </div>
    </div>
  );
}

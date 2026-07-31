"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, BrainCircuit, ArrowDown, ShieldCheck, Zap, XOctagon } from "lucide-react";

export default function WhyMultiAgent() {
  const traditionalSteps = [
    { title: "Static Formulas", desc: "Rigid, outdated spreadsheets that ignore inflation and market dynamics." },
    { title: "Single Recommendation", desc: "One-size-fits-all output based on generic age brackets." },
    { title: "Isolated Inputs", desc: "Fails to cross-reference taxes, insurance, and risk profiles simultaneously." },
    { title: "Generic Output", desc: "Simple CSV files or basic numbers with no actionable roadmap." },
  ];

  const agentSteps = [
    { title: "9 Collaborative AI Advisors", desc: "Domain specialists clash, debate allocations, and balance portfolios." },
    { title: "Real-time Debate Engine", desc: "Tax, Risk, and Investment agents debate constraints dynamically." },
    { title: "Active Market Intelligence", desc: "Pulls real-time rates, global indices, and commodity trends." },
    { title: "Multi-horizon Optimization", desc: "Tailors strategies for home buying, retirement, and tax shielding." },
    { title: "Executive Report Summaries", desc: "Produces institutional-grade pacing strategies and action points." },
  ];

  return (
    <div id="why-us" className="w-full max-w-6xl mx-auto py-24 px-6 md:px-12 select-none overflow-hidden relative">
      {/* Background neon elements */}
      <div className="absolute left-0 bottom-1/4 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] pointer-events-none"></div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold mb-4 tracking-wide uppercase">
          <BrainCircuit className="w-3.5 h-3.5" /> Platform Differentiation
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-blue-400 bg-clip-text text-transparent">
          Why Multi-Agent Financial AI?
        </h2>
        <p className="text-slate-400 mt-4 text-base">
          Discover how our collaborative advisor networks outperform archaic, rule-based calculators to protect and compound your net worth.
        </p>
      </div>

      {/* Side-by-Side Flow Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Traditional (Col 5) */}
        <div className="lg:col-span-5 flex flex-col p-6 rounded-2xl border border-rose-500/20 bg-rose-500/5 backdrop-blur-sm relative">
          <div className="flex items-center gap-2.5 mb-6 text-rose-400 font-semibold border-b border-rose-500/10 pb-4">
            <XOctagon className="w-5 h-5 shrink-0" />
            <h3 className="text-lg font-bold">Traditional Calculator</h3>
          </div>

          <div className="space-y-6">
            {traditionalSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-full p-4 rounded-xl border border-white/5 bg-[#070b18]/60 relative text-left">
                  <h4 className="text-sm font-bold text-slate-300 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-[10px] text-rose-400 font-mono font-bold">
                      {idx + 1}
                    </span>
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{step.desc}</p>
                </div>
                {idx < traditionalSteps.length - 1 && (
                  <ArrowDown className="w-4 h-4 text-rose-500/30 my-2.5" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Center Comparison Arrow (Col 1) */}
        <div className="lg:col-span-1 hidden lg:flex items-center justify-center h-full pt-44 text-slate-600">
          <Zap className="w-8 h-8 text-cyan-400 animate-pulse" />
        </div>

        {/* Right Side: FinVerse AI (Col 6) */}
        <div className="lg:col-span-6 flex flex-col p-6 rounded-2xl border border-emerald-500/20 bg-[#091517]/35 backdrop-blur-sm relative shadow-xl shadow-emerald-950/10">
          {/* Neon Glow highlight */}
          <div className="absolute inset-0 border border-cyan-400/20 rounded-2xl pointer-events-none"></div>

          <div className="flex items-center gap-2.5 mb-6 text-emerald-400 font-semibold border-b border-emerald-500/10 pb-4">
            <BrainCircuit className="w-5 h-5 text-cyan-400 shrink-0" />
            <h3 className="text-lg font-bold text-slate-100">
              FinVerse Multi-Agent AI
            </h3>
          </div>

          <div className="space-y-6">
            {agentSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-full p-4 rounded-xl border border-cyan-500/20 bg-slate-950/80 relative text-left">
                  {/* Glowing halo indicator */}
                  <div className="absolute inset-0 rounded-xl bg-cyan-500/2 opacity-0 hover:opacity-100 transition-opacity"></div>
                  
                  <h4 className="text-sm font-bold text-white flex items-center gap-2 relative z-10">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-[10px] text-cyan-400 font-mono font-bold">
                      {idx + 1}
                    </span>
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed relative z-10">{step.desc}</p>
                </div>
                {idx < agentSteps.length - 1 && (
                  <ArrowDown className="w-4 h-4 text-cyan-500/30 my-2.5" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

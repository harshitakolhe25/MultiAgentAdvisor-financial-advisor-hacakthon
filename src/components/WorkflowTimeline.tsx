"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  UserPlus,
  Compass,
  BarChart3,
  MessageSquare,
  ShieldCheck,
  PieChart,
  Award,
  FileText,
  ArrowDown,
} from "lucide-react";

interface TimelineStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  insight: string;
}

export default function WorkflowTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps: TimelineStep[] = [
    {
      number: "01",
      title: "Enter Financial Profile",
      description: "Submit details: age, income, existing assets, goals, and risk limits.",
      icon: <UserPlus className="w-5 h-5" />,
      color: "text-blue-400 border-blue-500/30 bg-blue-500/10",
      insight: "User enters profile data via secure input interfaces, locking in constants.",
    },
    {
      number: "02",
      title: "Goal Parsing",
      description: "AI Natural Language processors translate text inputs into quantitative time horizons.",
      icon: <Compass className="w-5 h-5" />,
      color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
      insight: "Converts 'buy a house in 7 years' into target inflation-adjusted capital requirements.",
    },
    {
      number: "03",
      title: "Market Analysis",
      description: "Agents pull macro indices, real estate rates, equity ratios, and yield trends.",
      icon: <BarChart3 className="w-5 h-5" />,
      color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
      insight: "Applies multi-source intelligence to cross-reference current interest rate regimes.",
    },
    {
      number: "04",
      title: "Advisor Debate",
      description: "9 specialized AI agents clash to advocate for their specific domains.",
      icon: <MessageSquare className="w-5 h-5" />,
      color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      insight: "Tax advisor demands ELSS, while Risk expert demands debt. Consensus handles the logic.",
    },
    {
      number: "05",
      title: "Risk Optimization",
      description: "Stress tests allocations against severe historic draw-downs (e.g., 2008 crash).",
      icon: <ShieldCheck className="w-5 h-5" />,
      color: "text-rose-400 border-rose-500/30 bg-rose-500/10",
      insight: "Computes conditional value-at-risk (CVaR) to match client tolerance parameters.",
    },
    {
      number: "06",
      title: "Portfolio Construction",
      description: "Builds a diversified asset matrix (Equity, Debt, Gold, REITs, International).",
      icon: <PieChart className="w-5 h-5" />,
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      insight: "Applies modern portfolio theory (MPT) frontiers calibrated for real-world transaction charges.",
    },
    {
      number: "07",
      title: "Personalized Strategy",
      description: "Drafts fine-grained, customized investment pacing instructions.",
      icon: <Award className="w-5 h-5" />,
      color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
      insight: "Produces step-by-step SIP allocations and immediate lumpsum redeployment directions.",
    },
    {
      number: "08",
      title: "Executive Report",
      description: "Generates institutional-grade PDF summary representing wealth strategies.",
      icon: <FileText className="w-5 h-5" />,
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      insight: "Compiles summary charts, trade-off matrices, and advisor consensus logs.",
    },
  ];

  return (
    <div id="workflow" className="relative w-full max-w-6xl mx-auto py-24 px-6 md:px-12 select-none overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/3 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[90px] pointer-events-none"></div>

      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-blue-400 bg-clip-text text-transparent">
          AI Advisory Workflow
        </h2>
        <p className="text-slate-400 mt-4 text-base">
          From profile inputs to institutional reports, track the execution pipeline that powers our multi-agent simulator.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Timeline Steps List */}
        <div className="lg:col-span-7 flex flex-col gap-4 relative pl-4 md:pl-8 border-l border-white/10">
          {/* Animated vertical track highlighter */}
          <div
            className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-blue-500 via-cyan-400 to-emerald-400 transition-all duration-500"
            style={{
              height: `${((activeStep + 1) / steps.length) * 100}%`,
            }}
          ></div>

          {steps.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <motion.div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl border transition-all duration-350 cursor-pointer flex gap-4 items-start ${
                  isActive
                    ? "border-cyan-400 bg-[#0c142c] shadow-[0_0_15px_rgba(6,182,212,0.15)] scale-[1.01]"
                    : "border-white/5 bg-[#090d1f]/40 hover:border-white/15 hover:bg-[#090d1f]/85"
                }`}
              >
                {/* Icon wrapper */}
                <div className={`p-2.5 rounded-lg border shrink-0 ${step.color} ${isActive ? "shadow-[0_0_10px_rgba(6,182,212,0.2)] animate-pulse" : ""}`}>
                  {step.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-500">STAGE {step.number}</span>
                    {isActive && (
                      <span className="text-[10px] font-mono bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-full font-bold animate-pulse">
                        ACTIVE ENGINE
                      </span>
                    )}
                  </div>
                  <h3 className={`text-base font-bold mt-1 ${isActive ? "text-white" : "text-slate-300"}`}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Side: Active Step Detail Hud */}
        <div className="lg:col-span-5 lg:sticky lg:top-36">
          <div className="glass-panel-glow-cyan p-6 rounded-2xl relative overflow-hidden">
            {/* Ambient indicator */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-transparent blur-md"></div>
            
            <span className="text-xs font-mono text-cyan-400 font-bold tracking-widest block mb-1">
              SYSTEM CONTEXT DETECTOR
            </span>
            <h3 className="text-xl font-bold text-white mb-4">
              {steps[activeStep].title} Analysis
            </h3>

            <div className="space-y-4 font-mono">
              <div className="p-3 bg-[#03060f] rounded-lg border border-white/5">
                <span className="text-[10px] text-slate-500 block uppercase font-bold mb-1">DATA FLOW ENGINE</span>
                <p className="text-xs text-emerald-400">
                  {steps[activeStep].insight}
                </p>
              </div>

              <div className="p-3 bg-[#03060f] rounded-lg border border-white/5">
                <span className="text-[10px] text-slate-500 block uppercase font-bold mb-1">LOG STATUS</span>
                <p className="text-[11px] text-slate-300 leading-snug">
                  [sys.proc] Agent thread successfully spawned on stage {steps[activeStep].number}. Calibrating vector weights on goal node context.
                </p>
              </div>

              <div className="flex justify-between items-center text-[10px] text-slate-500 pt-2">
                <span>VERIFIED ACCURACY: 99.8%</span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  READY FOR EXECUTION
                </span>
              </div>
            </div>

            {/* Down arrow link helper */}
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Ready to test inputs?</span>
              <button 
                onClick={() => document.getElementById("simulation")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-1.5 text-cyan-400 font-bold hover:underline cursor-pointer group"
              >
                Go to Simulator 
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

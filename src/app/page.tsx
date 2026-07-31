"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HologramCore from "@/components/HologramCore";
import AdvisorNetwork from "@/components/AdvisorNetwork";
import WorkflowTimeline from "@/components/WorkflowTimeline";
import Simulator, { scenarioPresets, Scenario } from "@/components/Simulator";
import DebateRoom from "@/components/DebateRoom";
import ExecutiveDashboard from "@/components/ExecutiveDashboard";
import PortfolioWheel from "@/components/PortfolioWheel";
import TradeOffMatrix from "@/components/TradeOffMatrix";
import PersonalizedReport from "@/components/PersonalizedReport";
import WhyMultiAgent from "@/components/WhyMultiAgent";
import LoadingScreen from "@/components/LoadingScreen";
import { Cpu, ArrowRight, Play, LineChart, Shield, ShieldCheck } from "lucide-react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeScenario, setActiveScenario] = useState<Scenario>(scenarioPresets[0]);
  const [demoActive, setDemoActive] = useState(false);

  const handleLaunchSimulation = () => {
    const simSection = document.getElementById("simulation");
    if (simSection) {
      simSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWatchDemo = () => {
    setDemoActive(true);
    const simSection = document.getElementById("simulation");
    if (simSection) {
      simSection.scrollIntoView({ behavior: "smooth" });
    }
    // Automatically trigger sample preset switch as a 'demo' action
    setTimeout(() => {
      setActiveScenario(scenarioPresets[1]);
      setDemoActive(false);
    }, 1500);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="flex-1 flex flex-col relative w-full bg-[#070B18] overflow-hidden">
      {/* Sticky transparent navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen pt-36 pb-20 flex flex-col justify-center items-center text-center px-6 md:px-12 z-10 overflow-visible"
      >
        {/* Futuristic Background grid & dot overlay */}
        <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none"></div>
        <div className="absolute inset-0 cyber-dots opacity-20 pointer-events-none"></div>

        {/* Dynamic Light Blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[130px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] pointer-events-none"></div>

        {/* Centerpiece 3D Holographic Core */}
        <div className="w-full max-w-4xl mb-6">
          <HologramCore />
        </div>

        {/* Hero Copy */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold mb-6 tracking-wide uppercase">
            <Cpu className="w-3.5 h-3.5" /> Next-Gen Multi-Agent Financial Simulator
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent leading-[1.15] max-w-3xl">
            Multi-Agent Financial Advisory Simulator
          </h1>

          <p className="text-slate-400 text-sm md:text-base max-w-2xl mt-6 leading-relaxed">
            Specialized AI financial advisors collaborate, debate, analyze market conditions, and generate intelligent wealth-building strategies with executive-level confidence.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <button
              onClick={handleLaunchSimulation}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:scale-[1.02] cursor-pointer group"
            >
              <span>Launch Financial Simulation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleWatchDemo}
              className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-sm font-bold rounded-xl transition-all hover:border-slate-400/30 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current text-cyan-400" />
              <span>{demoActive ? "Running Demo..." : "Watch Live Demo"}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: Multi-Agent Architecture */}
      <section className="relative border-t border-white/5 bg-[#050914]/40">
        <AdvisorNetwork />
      </section>

      {/* Section 3: AI Advisory Workflow */}
      <section className="relative border-t border-white/5">
        <WorkflowTimeline />
      </section>

      {/* Section 4: Live Simulation */}
      <section className="relative border-t border-white/5 bg-[#050914]/40">
        <Simulator
          activeScenario={activeScenario}
          onScenarioChange={(preset) => setActiveScenario(preset)}
        />
      </section>

      {/* Section 5: Multi-Agent Debate */}
      <section className="relative border-t border-white/5">
        <DebateRoom activeScenario={activeScenario} />
      </section>

      {/* Section 6: Executive Dashboard */}
      <section className="relative border-t border-white/5 bg-[#050914]/40">
        <ExecutiveDashboard activeScenario={activeScenario} />
      </section>

      {/* Section 7: Portfolio Allocation Wheel */}
      <section className="relative border-t border-white/5">
        <PortfolioWheel />
      </section>

      {/* Section 8: Trade-off Matrix */}
      <section className="relative border-t border-white/5 bg-[#050914]/40">
        <TradeOffMatrix />
      </section>

      {/* Section 9: Personalized Report */}
      <section className="relative border-t border-white/5">
        <PersonalizedReport activeScenario={activeScenario} />
      </section>

      {/* Section 10: Why Multi-Agent */}
      <section className="relative border-t border-white/5 bg-[#050914]/40">
        <WhyMultiAgent />
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-[#03060e] py-12 px-6 md:px-12 z-10 relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-blue-500/10">
              FV
            </div>
            <span className="text-sm font-bold text-white tracking-tight">FinVerse AI</span>
          </div>

          <div className="text-xs text-slate-500 font-mono text-center md:text-right">
            COMPLIANCE GUARANTEE: COMPLIANT WITH IN-MATRIX PROTOCOLS. SIMULATIONS ARE FOR DEMONSTRATION ONLY.
          </div>

          <div className="text-xs text-slate-400 font-medium">
            © 2026 FinVerse Inc. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareCode, Play, Pause, ChevronRight, Cpu } from "lucide-react";
import { Scenario } from "./Simulator";

interface DebateEntry {
  agentName: string;
  role: string;
  avatar: string;
  message: string;
  glow: string;
  textColor: string;
}

const debateScripts: Record<string, DebateEntry[]> = {
  "software-engineer": [
    {
      agentName: "Investment Advisor",
      role: "Asset Allocation",
      avatar: "📈",
      message: "A 60% equity allocation maximizes wealth compounding over the 7-year horizon, matching the target goal index.",
      glow: "border-blue-500/40 shadow-blue-500/10 text-blue-400",
      textColor: "text-blue-300",
    },
    {
      agentName: "Risk Assessment Expert",
      role: "Capital Protection",
      avatar: "🛡️",
      message: "Volatilities are elevated. I demand a 20% debt buffer to mitigate drawdown and safeguard the primary savings base.",
      glow: "border-rose-500/40 shadow-rose-500/10 text-rose-400",
      textColor: "text-rose-300",
    },
    {
      agentName: "Tax Optimization Advisor",
      role: "Tax Reduction",
      avatar: "💼",
      message: "Agreed. Channeling ₹1.5L of the debt quota into ELSS and NPS will yield immediate tax savings under active schedules.",
      glow: "border-amber-500/40 shadow-amber-500/10 text-amber-400",
      textColor: "text-amber-300",
    },
    {
      agentName: "Behavioral Finance Coach",
      role: "Discipline Guard",
      avatar: "🧠",
      message: "The client indicates moderate risk tolerance. Automated monthly SIP schedules are required to bypass active timing biases.",
      glow: "border-fuchsia-500/40 shadow-fuchsia-500/10 text-fuchsia-400",
      textColor: "text-fuchsia-300",
    },
    {
      agentName: "Crypto Intelligence",
      role: "Alternative Alpha",
      avatar: "🪙",
      message: "Crypto exposure must be strictly capped at 3% in liquid BTC/ETH. This adds uncorrelated alpha without destabilizing the core.",
      glow: "border-emerald-500/40 shadow-emerald-500/10 text-emerald-400",
      textColor: "text-emerald-300",
    },
    {
      agentName: "Macroeconomic Intelligence",
      role: "Macro Analysis",
      avatar: "🌐",
      message: "Central bank interest rate stabilization reinforces our allocation to mid-duration debt funds. Ready to lock in yields.",
      glow: "border-cyan-500/40 shadow-cyan-500/10 text-cyan-400",
      textColor: "text-cyan-300",
    },
    {
      agentName: "Consensus Agent",
      role: "Synthesizer Core",
      avatar: "🤖",
      message: "Debate concluded. Reconciled matrix: 60% Equity / 20% Debt / 10% Mutual Funds / 5% Gold / 3% Crypto / 2% Cash. Strategy approved.",
      glow: "border-purple-500/50 shadow-purple-500/20 text-purple-400 bg-purple-500/5",
      textColor: "text-purple-300",
    },
  ],
  "young-entrepreneur": [
    {
      agentName: "Investment Advisor",
      role: "Asset Allocation",
      avatar: "📈",
      message: "With a 10-year horizon and no near-term liabilities, we should establish a 75% equity base to compound capital aggressively.",
      glow: "border-blue-500/40 shadow-blue-500/10 text-blue-400",
      textColor: "text-blue-300",
    },
    {
      agentName: "Risk Assessment Expert",
      role: "Capital Protection",
      avatar: "🛡️",
      message: "Aggressive, yes, but we must protect liquidity. Ensure 2% remains in instant-redemption cash assets for emergency runway.",
      glow: "border-rose-500/40 shadow-rose-500/10 text-rose-400",
      textColor: "text-rose-300",
    },
    {
      agentName: "Crypto Intelligence",
      role: "Alternative Alpha",
      avatar: "🪙",
      message: "I advocate for a higher 8% allocation split between BTC and ETH. The client's profile can easily absorb standard crypto volatility.",
      glow: "border-emerald-500/40 shadow-emerald-500/10 text-emerald-400",
      textColor: "text-emerald-300",
    },
    {
      agentName: "Macroeconomic Intelligence",
      role: "Macro Analysis",
      avatar: "🌐",
      message: "Given strong global technology growth vectors, we should add 7% exposure in US indices for geographic diversification.",
      glow: "border-cyan-500/40 shadow-cyan-500/10 text-cyan-400",
      textColor: "text-cyan-300",
    },
    {
      agentName: "Consensus Agent",
      role: "Synthesizer Core",
      avatar: "🤖",
      message: "Reconciled high-growth matrix: 75% Equity / 8% Crypto / 7% International / 5% MF / 3% REITs / 2% Cash. Compounding locked.",
      glow: "border-purple-500/50 shadow-purple-500/20 text-purple-400 bg-purple-500/5",
      textColor: "text-purple-300",
    },
  ],
  "pre-retiree": [
    {
      agentName: "Risk Assessment Expert",
      role: "Capital Protection",
      avatar: "🛡️",
      message: "Immediate wealth protection is paramount. I mandate a minimum 50% allocation to highly rated debt and sovereign bonds.",
      glow: "border-rose-500/40 shadow-rose-500/10 text-rose-400",
      textColor: "text-rose-300",
    },
    {
      agentName: "Tax Optimization Advisor",
      role: "Tax Reduction",
      avatar: "💼",
      message: "Agree. Structuring debt investments through systematic transfer plans (STP) will minimize capital gains tax significantly.",
      glow: "border-amber-500/40 shadow-amber-500/10 text-amber-400",
      textColor: "text-amber-300",
    },
    {
      agentName: "Investment Advisor",
      role: "Asset Allocation",
      avatar: "📈",
      message: "We need inflation protection. Recommend keeping a 20% large-cap equity buffer and 10% gold allocation to hedge purchasing power.",
      glow: "border-blue-500/40 shadow-blue-500/10 text-blue-400",
      textColor: "text-blue-300",
    },
    {
      agentName: "Crypto Intelligence",
      role: "Alternative Alpha",
      avatar: "🪙",
      message: "The risk profile allows zero crypto allocation. Standard digital assets represent unnecessary drawdown vulnerability here.",
      glow: "border-emerald-500/40 shadow-emerald-500/10 text-emerald-400",
      textColor: "text-emerald-300",
    },
    {
      agentName: "Consensus Agent",
      role: "Synthesizer Core",
      avatar: "🤖",
      message: "Reconciled conservative matrix: 50% Debt / 20% Equity / 15% MF / 10% Gold / 5% Cash reserves. Capital preservation certified.",
      glow: "border-purple-500/50 shadow-purple-500/20 text-purple-400 bg-purple-500/5",
      textColor: "text-purple-300",
    },
  ],
};

interface DebateRoomProps {
  activeScenario: Scenario;
}

export default function DebateRoom({ activeScenario }: DebateRoomProps) {
  const script = debateScripts[activeScenario.id] || debateScripts["software-engineer"];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-progress debate
  useEffect(() => {
    setCurrentIdx(0);
  }, [activeScenario]);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIdx((prev) => {
        if (prev >= script.length - 1) {
          return 0; // Loop debate
        }
        return prev + 1;
      });
    }, 4500);

    return () => clearInterval(timer);
  }, [isPlaying, script.length]);

  return (
    <div className="w-full max-w-6xl mx-auto py-20 px-6 md:px-12 select-none overflow-hidden relative">
      {/* Background neon grid lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-500/5 blur-[120px] pointer-events-none"></div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-4 tracking-wide uppercase">
          <MessageSquareCode className="w-3.5 h-3.5" /> Neural Consensus Debate
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-blue-400 bg-clip-text text-transparent">
          Multi-Agent Advisor Debate
        </h2>
        <p className="text-slate-400 mt-4 text-base">
          Watch AI advisors advocate, debate constraints, and reach mathematical consensus to build your portfolio.
        </p>
      </div>

      {/* Main Debate Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Advisor Profiles and Active Speaker Highlights */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
          {script.map((speaker, idx) => {
            const isSpeaking = idx === currentIdx;
            return (
              <div
                key={idx}
                onClick={() => {
                  setCurrentIdx(idx);
                  setIsPlaying(false); // Pause on manual select
                }}
                className={`p-3 rounded-xl border text-left cursor-pointer transition-all duration-300 ${
                  isSpeaking
                    ? `${speaker.glow} bg-slate-900 border-opacity-100 scale-[1.03] shadow-md`
                    : "border-white/5 bg-slate-950/40 opacity-50 hover:opacity-85"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{speaker.avatar}</span>
                  <div>
                    <h4 className="text-[11px] font-bold text-white leading-tight">
                      {speaker.agentName}
                    </h4>
                    <span className="text-[9px] font-mono text-slate-500">{speaker.role}</span>
                  </div>
                </div>
                {isSpeaking && (
                  <div className="mt-2 text-[10px] font-mono text-emerald-400 animate-pulse">
                    ● ACTIVE SPEAKER
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Side: Dialogue Bubble Output */}
        <div className="lg:col-span-7 flex flex-col justify-between p-6 min-h-[300px] rounded-2xl border border-white/10 bg-[#090d1f]/60 backdrop-blur-md relative overflow-hidden">
          {/* Animated connections graphic overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-20 cyber-dots"></div>

          <div className="flex-1 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-white/15 flex items-center justify-center text-xl shadow-inner">
                    {script[currentIdx].avatar}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {script[currentIdx].agentName}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      Thread ID: agent_{script[currentIdx].agentName.toLowerCase().replace(" ", "_")}
                    </span>
                  </div>
                </div>

                {/* Speech Bubble */}
                <div className={`p-4 rounded-2xl border bg-slate-950/80 text-sm leading-relaxed ${script[currentIdx].textColor}`}>
                  "{script[currentIdx].message}"
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Player controls */}
          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              </button>
              <button
                onClick={() => {
                  setCurrentIdx((prev) => (prev + 1) % script.length);
                  setIsPlaying(false);
                }}
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-white/10 transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>CONSENSUS SOLVER: RUNNING</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

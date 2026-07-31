"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw, FileText, CheckCircle2, ChevronRight, HelpCircle } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

// Scenario Presets
export interface Scenario {
  id: string;
  name: string;
  age: number;
  income: string;
  savings: string;
  goal: string;
  risk: "Aggressive" | "Moderate" | "Conservative";
  promptText: string;
  cagr: number;
  confidence: number;
  chartData: { year: string; wealth: number; traditional: number }[];
  allocations: { name: string; value: number; color: string }[];
}

export const scenarioPresets: Scenario[] = [
  {
    id: "software-engineer",
    name: "Software Engineer (Moderate)",
    age: 28,
    income: "₹18 LPA",
    savings: "₹10 Lakh",
    goal: "Buy a house in 7 years & save for retirement.",
    risk: "Moderate",
    promptText: "I am a 28-year-old software engineer earning ₹18 LPA with ₹10 lakh savings. I want to buy a house in 7 years while investing for retirement and maintaining moderate risk. Recommend the best financial strategy.",
    cagr: 12.8,
    confidence: 94,
    allocations: [
      { name: "Equity", value: 60, color: "#3b82f6" },
      { name: "Debt", value: 20, color: "#6366f1" },
      { name: "Mutual Funds", value: 10, color: "#06b6d4" },
      { name: "Gold", value: 5, color: "#f59e0b" },
      { name: "Crypto", value: 3, color: "#10b981" },
      { name: "Cash", value: 2, color: "#94a3b8" },
    ],
    chartData: [
      { year: "Year 0", wealth: 10.0, traditional: 10.0 },
      { year: "Year 1", wealth: 13.5, traditional: 11.5 },
      { year: "Year 2", wealth: 17.8, traditional: 13.2 },
      { year: "Year 3", wealth: 23.2, traditional: 15.1 },
      { year: "Year 4", wealth: 30.1, traditional: 17.3 },
      { year: "Year 5", wealth: 38.6, traditional: 19.8 },
      { year: "Year 6", wealth: 49.0, traditional: 22.7 },
      { year: "Year 7", wealth: 61.2, traditional: 26.0 },
    ],
  },
  {
    id: "young-entrepreneur",
    name: "Tech Founder (Aggressive)",
    age: 24,
    income: "₹36 LPA",
    savings: "₹15 Lakh",
    goal: "Aggressive wealth growth, early financial freedom in 10 years.",
    risk: "Aggressive",
    promptText: "I am a 24-year-old tech entrepreneur earning ₹36 LPA with ₹15 lakh savings. I am comfortable with high volatility and want to maximize long-term wealth over a 10-year horizon. Design an aggressive growth strategy.",
    cagr: 16.4,
    confidence: 89,
    allocations: [
      { name: "Equity", value: 75, color: "#3b82f6" },
      { name: "Crypto", value: 8, color: "#10b981" },
      { name: "International", value: 7, color: "#ec4899" },
      { name: "Mutual Funds", value: 5, color: "#06b6d4" },
      { name: "REITs", value: 3, color: "#8b5cf6" },
      { name: "Cash", value: 2, color: "#94a3b8" },
    ],
    chartData: [
      { year: "Year 0", wealth: 15.0, traditional: 15.0 },
      { year: "Year 1", wealth: 21.8, traditional: 17.2 },
      { year: "Year 2", wealth: 30.4, traditional: 19.8 },
      { year: "Year 3", wealth: 41.5, traditional: 22.8 },
      { year: "Year 4", wealth: 56.2, traditional: 26.2 },
      { year: "Year 5", wealth: 75.3, traditional: 30.1 },
      { year: "Year 6", wealth: 99.8, traditional: 34.6 },
      { year: "Year 7", wealth: 130.6, traditional: 39.8 },
    ],
  },
  {
    id: "pre-retiree",
    name: "Senior Manager (Conservative)",
    age: 54,
    income: "₹45 LPA",
    savings: "₹1.5 Crore",
    goal: "Preserve principal capital, generate stable post-retirement income.",
    risk: "Conservative",
    promptText: "I am a 54-year-old Senior Manager with ₹1.5 crore savings. I plan to retire in 4 years. I want to preserve my wealth, optimize tax savings, and generate stable passive income. Design a low-risk conservative plan.",
    cagr: 8.5,
    confidence: 97,
    allocations: [
      { name: "Debt & Bonds", value: 50, color: "#6366f1" },
      { name: "Equity", value: 20, color: "#3b82f6" },
      { name: "Mutual Funds", value: 15, color: "#06b6d4" },
      { name: "Gold", value: 10, color: "#f59e0b" },
      { name: "Cash Reserves", value: 5, color: "#94a3b8" },
    ],
    chartData: [
      { year: "Year 0", wealth: 150.0, traditional: 150.0 },
      { year: "Year 1", wealth: 168.2, traditional: 160.5 },
      { year: "Year 2", wealth: 188.1, traditional: 171.7 },
      { year: "Year 3", wealth: 210.0, traditional: 183.7 },
      { year: "Year 4", wealth: 234.0, traditional: 196.6 },
      { year: "Year 5", wealth: 260.3, traditional: 210.4 },
      { year: "Year 6", wealth: 289.1, traditional: 225.1 },
      { year: "Year 7", wealth: 320.6, traditional: 240.8 },
    ],
  },
];

interface SimulatorProps {
  onScenarioChange: (scenario: Scenario) => void;
  activeScenario: Scenario;
}

export default function Simulator({ onScenarioChange, activeScenario }: SimulatorProps) {
  const [inputText, setInputText] = useState(activeScenario.promptText);
  const [isSimulating, setIsSimulating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [simulationLogs, setSimulationLogs] = useState<string[]>([]);
  const [completedSimulation, setCompletedSimulation] = useState(true);

  // Synchronize input text if activeScenario changes from parent
  useEffect(() => {
    setInputText(activeScenario.promptText);
  }, [activeScenario]);

  const handleLoadSample = (preset: Scenario) => {
    onScenarioChange(preset);
    setInputText(preset.promptText);
    setSimulationLogs([]);
    setCompletedSimulation(true);
    setProgress(0);
  };

  const handleReset = () => {
    setInputText("");
    setSimulationLogs([]);
    setProgress(0);
    setCompletedSimulation(false);
  };

  const startSimulation = () => {
    if (!inputText.trim()) return;
    setIsSimulating(true);
    setCompletedSimulation(false);
    setProgress(0);
    setSimulationLogs([]);

    const logsList = [
      "✓ Parsing financial profile structure and horizon constants...",
      "✓ Investment Advisor evaluating risk limits and allocation ratios...",
      "✓ Tax Optimization Advisor calculating asset location tax efficiencies...",
      "✓ Risk Assessment Expert executing Monte Carlo portfolio stress tests...",
      "✓ Macroeconomic Intelligence Agent mapping interest rate cycles...",
      "✓ Crypto Advisor auditing digital currency token liquidity buffers...",
      "✓ Retirement Planner scaling corpus targets for future inflation...",
      "✓ Consensus Engine reconciling advisor rules and debate parameters...",
      "✓ Advisory Report Synthesizer compiled. Executive Dashboard Updated.",
    ];

    let currentLogIndex = 0;
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 4;
      if (currentProgress >= 100) {
        setProgress(100);
        setIsSimulating(false);
        setCompletedSimulation(true);
        clearInterval(interval);
      } else {
        setProgress(currentProgress);
      }

      // Add log lines matching progress milestone percentages
      const logTriggerPercent = Math.floor((100 / logsList.length) * currentLogIndex);
      if (currentProgress >= logTriggerPercent && currentLogIndex < logsList.length) {
        const nextLog = logsList[currentLogIndex];
        if (nextLog) {
          setSimulationLogs((logs) => [...logs, nextLog]);
          currentLogIndex++;
        }
      }
    }, 120);
  };

  return (
    <div id="simulation" className="relative w-full max-w-6xl mx-auto py-24 px-6 md:px-12 select-none overflow-hidden">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-blue-400 bg-clip-text text-transparent">
          Live Financial Simulator
        </h2>
        <p className="text-slate-400 mt-4 text-base">
          Input your specific financial coordinates below or choose one of our verified institutional investor profiles to verify agent behaviors.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Parameters Input */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl border border-white/10 bg-[#090d1f]/60 backdrop-blur-md relative overflow-hidden">
          
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
                FINANCIAL MATRIX INPUT
              </span>
              <div className="flex gap-2">
                {scenarioPresets.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => handleLoadSample(preset)}
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors ${
                      activeScenario.id === preset.id
                        ? "border-cyan-400/50 bg-cyan-500/10 text-cyan-400"
                        : "border-white/5 bg-white/5 text-slate-400 hover:text-white"
                    }`}
                  >
                    {preset.id.split("-")[0].toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              disabled={isSimulating}
              className="w-full h-44 p-4 rounded-xl border border-white/10 bg-[#040713] text-sm text-slate-200 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-500/20 font-sans resize-none placeholder-slate-500 leading-relaxed"
              placeholder="e.g. I am a 30-year-old designer earning ₹12 LPA with ₹5 lakh savings. Recommend a stable medium-term wealth portfolio..."
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3 items-center justify-between">
            <div className="flex gap-2.5">
              <button
                onClick={startSimulation}
                disabled={isSimulating || !inputText.trim()}
                className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-lg text-xs font-bold transition-all shadow-md shadow-blue-500/20 hover:scale-[1.02] disabled:opacity-50 disabled:pointer-events-none"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                Generate Advisory
              </button>
              <button
                onClick={handleReset}
                disabled={isSimulating}
                className="flex items-center gap-1.5 px-3 py-2 bg-white/5 hover:bg-white/10 text-slate-300 rounded-lg text-xs font-semibold border border-white/5 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
            </div>
            <div className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              AES-256 Encrypted
            </div>
          </div>
        </div>

        {/* Right Side: Simulation Activity & Charts */}
        <div className="lg:col-span-7 flex flex-col p-6 rounded-2xl border border-white/10 bg-[#090d1f]/60 backdrop-blur-md relative overflow-hidden justify-between min-h-[420px]">
          
          {/* Active Simulating Interface */}
          {isSimulating || !completedSimulation ? (
            <div className="flex-1 flex flex-col justify-between h-full font-mono">
              <div>
                <div className="flex justify-between items-center text-xs text-slate-400 pb-3 border-b border-white/5 mb-4">
                  <span>RUNNING QUANTUM AGENT SIMULATION...</span>
                  <span className="text-cyan-400 font-bold">{progress}%</span>
                </div>
                
                {/* Progress bar */}
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mb-6">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 rounded-full transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>

                {/* Animated agent thread execution list */}
                <div className="space-y-2 max-h-56 overflow-y-auto no-scrollbar pr-2">
                  <AnimatePresence>
                    {simulationLogs.map((log, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs text-slate-300 flex items-start gap-2 py-0.5"
                      >
                        <span className="text-emerald-400 font-bold shrink-0">
                          {log ? log.split(" ")[0] : ""}
                        </span>
                        <span>{log ? log.substring(2) : ""}</span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Loader placeholder info */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                <span>SIMULATOR CPU CORES: ACTIVE (24 THREADS)</span>
                <span className="animate-pulse">SPAWNING CONFLICT SOLVER...</span>
              </div>
            </div>
          ) : (
            // Completed Simulation: Display Projections Chart & Allocation Overview
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex justify-between items-center pb-3 border-b border-white/5 mb-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase">PROJECTION PROFILE</span>
                    <h3 className="text-base font-bold text-white mt-0.5">{activeScenario.name}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase">EXPECTED CAGR</span>
                    <p className="text-base font-bold text-emerald-400 mt-0.5">{activeScenario.cagr}%</p>
                  </div>
                </div>

                {/* Area Projection Chart */}
                <div className="w-full h-[220px] mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={activeScenario.chartData}
                      margin={{ top: 10, right: 5, left: -25, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorWealth" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorTraditional" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.15} />
                          <stop offset="95%" stopColor="#94a3b8" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
                      <XAxis
                        dataKey="year"
                        stroke="#94a3b8"
                        fontSize={10}
                        tickLine={false}
                      />
                      <YAxis
                        stroke="#94a3b8"
                        fontSize={10}
                        tickLine={false}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#070B18",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: "10px",
                          fontSize: "11px",
                          fontFamily: "monospace",
                        }}
                        labelClassName="text-slate-400 font-bold"
                      />
                      <Area
                        name="FinVerse AI Core"
                        type="monotone"
                        dataKey="wealth"
                        stroke="#0ea5e9"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorWealth)"
                      />
                      <Area
                        name="Traditional Planner"
                        type="monotone"
                        dataKey="traditional"
                        stroke="#475569"
                        strokeWidth={1.5}
                        strokeDasharray="4 4"
                        fillOpacity={1}
                        fill="url(#colorTraditional)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Lower Section Action Buttons linking to the detailed dashboard */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-mono text-[10px]">
                  <HelpCircle className="w-3.5 h-3.5 text-blue-400" /> Confidence Score: {activeScenario.confidence}%
                </span>
                <button
                  onClick={() => document.getElementById("dashboard")?.scrollIntoView({ behavior: "smooth" })}
                  className="flex items-center gap-1 text-cyan-400 font-bold hover:underline cursor-pointer group"
                >
                  Inspect Full Report
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </div>
  );
}

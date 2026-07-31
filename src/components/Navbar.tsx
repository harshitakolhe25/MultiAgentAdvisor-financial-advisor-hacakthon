"use client";

import React from "react";
import { Cpu, ChevronRight, Activity } from "lucide-react";

export default function Navbar() {
  const tickerItems = [
    { symbol: "AAPL", price: "$182.63", change: "+1.42%", positive: true },
    { symbol: "BTC", price: "$68,421.50", change: "+4.85%", positive: true },
    { symbol: "NIFTY 50", price: "24,310.20", change: "+0.68%", positive: true },
    { symbol: "GOLD", price: "$2,410.80", change: "-0.15%", positive: false },
    { symbol: "TSLA", price: "$179.24", change: "-2.10%", positive: false },
    { symbol: "ETH", price: "$3,492.15", change: "+3.12%", positive: true },
    { symbol: "S&P 500", price: "5,432.12", change: "+0.84%", positive: true },
    { symbol: "MSFT", price: "$415.60", change: "+1.10%", positive: true },
    { symbol: "AMZN", price: "$181.25", change: "-0.45%", positive: false },
    { symbol: "REIT Index", price: "284.50", change: "+0.52%", positive: true },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col">
      {/* Live Market Ticker */}
      <div className="w-full bg-[#03060f] border-b border-white/5 py-1.5 overflow-hidden text-xs font-mono ticker-container relative select-none">
        {/* Glow indicator */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-[#0a122c]/80 border border-blue-500/20 px-2 py-0.5 rounded text-[10px] text-blue-400 font-semibold z-10 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          LIVE FEED
        </div>

        <div className="flex animate-ticker whitespace-nowrap pl-[100px]">
          {/* Double list for seamless wrapping */}
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 mx-6 hover:text-white cursor-default transition-colors"
            >
              <span className="text-slate-400 font-semibold">{item.symbol}</span>
              <span className="text-slate-200">{item.price}</span>
              <span
                className={`font-semibold ${
                  item.positive ? "text-emerald-400" : "text-rose-400"
                }`}
              >
                {item.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full border-b border-white/10 bg-[#070B18]/70 backdrop-blur-md py-4 px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/25">
            <Cpu className="w-5 h-5 text-white group-hover:rotate-45 transition-transform duration-500" />
            <div className="absolute inset-0 rounded-lg bg-blue-400 animate-pulse opacity-20 group-hover:opacity-40"></div>
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-blue-400 bg-clip-text text-transparent">
              FinVerse
            </span>
            <span className="ml-1 text-xs font-mono font-bold text-cyan-400">AI</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button
            onClick={() => handleScroll("hero")}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("architecture")}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            AI Advisors
          </button>
          <button
            onClick={() => handleScroll("workflow")}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Workflow
          </button>
          <button
            onClick={() => handleScroll("simulation")}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Live Simulation
          </button>
          <button
            onClick={() => handleScroll("dashboard")}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Report & Metrics
          </button>
          <button
            onClick={() => handleScroll("why-us")}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Why FinVerse
          </button>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleScroll("simulation")}
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold text-white rounded-full group bg-gradient-to-br from-blue-600 to-cyan-500 group-hover:from-blue-600 group-hover:to-cyan-500 hover:text-white focus:ring-2 focus:outline-none focus:ring-cyan-800 transition-all duration-300 shadow-md shadow-cyan-500/20 hover:shadow-cyan-400/40"
          >
            <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-[#070b18] rounded-full group-hover:bg-opacity-0 flex items-center gap-1.5">
              <span>Launch Simulator</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}

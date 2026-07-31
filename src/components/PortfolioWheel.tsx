"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PieChart, Pie, Cell, Sector, ResponsiveContainer } from "recharts";
import { Scale, Activity, Droplets, Hourglass, HelpCircle } from "lucide-react";

const RechartsPie = Pie as any;

interface AssetClassInfo {
  name: string;
  expectedReturn: string;
  riskLevel: string;
  liquidity: string;
  holdingPeriod: string;
  color: string;
  details: string;
}

const assetInfoList: Record<string, AssetClassInfo> = {
  Equity: {
    name: "Equity",
    expectedReturn: "12% - 15% CAGR",
    riskLevel: "High",
    liquidity: "High (T+2)",
    holdingPeriod: "5+ Years",
    color: "#3b82f6",
    details: "Represents ownership shares in publicly traded companies. Drives long-term wealth compounding and inflation protection.",
  },
  Debt: {
    name: "Debt & Bonds",
    expectedReturn: "6% - 8% Yield",
    riskLevel: "Low",
    liquidity: "High (T+1)",
    holdingPeriod: "1 - 3 Years",
    color: "#6366f1",
    details: "Fixed-income securities like sovereign bonds and corporate debentures. Provides portfolio stability and steady returns.",
  },
  Gold: {
    name: "Gold",
    expectedReturn: "7% - 9% CAGR",
    riskLevel: "Moderate",
    liquidity: "High",
    holdingPeriod: "3+ Years",
    color: "#f59e0b",
    details: "Physical bullion or digital gold ETFs. Acts as a hedge against inflation and protection during global geopolitical volatility.",
  },
  "Mutual Funds": {
    name: "Mutual Funds",
    expectedReturn: "10% - 13% CAGR",
    riskLevel: "Moderate",
    liquidity: "High (T+3)",
    holdingPeriod: "3+ Years",
    color: "#06b6d4",
    details: "Diversified pools of stocks/bonds managed by professionals. Perfect for broad market indices and sector exposure.",
  },
  REITs: {
    name: "REITs",
    expectedReturn: "8% - 11% CAGR",
    riskLevel: "Moderate",
    liquidity: "Moderate",
    holdingPeriod: "5+ Years",
    color: "#8b5cf6",
    details: "Real Estate Investment Trusts that hold yield-producing properties. Generates regular rental dividends + capital growth.",
  },
  International: {
    name: "International Funds",
    expectedReturn: "11% - 13% CAGR",
    riskLevel: "High",
    liquidity: "High",
    holdingPeriod: "5+ Years",
    color: "#ec4899",
    details: "Offshore equity index funds tracking overseas markets (e.g. S&P 500). Safeguards against domestic currency depreciation.",
  },
  Crypto: {
    name: "Crypto Assets",
    expectedReturn: "20%+ Volatile",
    riskLevel: "Very High",
    liquidity: "Instant (24/7)",
    holdingPeriod: "1 - 2 Years",
    color: "#10b981",
    details: "Highly liquid digital currencies (BTC/ETH). Best restricted to minor satellite allocations for opportunistic alpha yields.",
  },
  Cash: {
    name: "Cash Reserves",
    expectedReturn: "3% - 4% yield",
    riskLevel: "Low",
    liquidity: "Instant",
    holdingPeriod: "< 1 Year",
    color: "#94a3b8",
    details: "Liquid accounts and emergency liquid funds. Keeps powder dry for opportunistic buying or immediate liabilities.",
  },
};

export default function PortfolioWheel() {
  const [hoveredCategory, setHoveredCategory] = useState<string>("Equity");

  // Recharts data mapper
  const chartData = Object.keys(assetInfoList).map((key) => ({
    name: key,
    value: 12.5, // Even split for visual wheel segment layout
    color: assetInfoList[key].color,
  }));

  const activeAsset = assetInfoList[hoveredCategory] || assetInfoList["Equity"];

  // Custom active sector render for recharts
  const renderActiveShape = (props: any) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 8}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius - 4}
          outerRadius={innerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill="#fff"
          opacity={0.1}
        />
      </g>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-20 px-6 md:px-12 select-none overflow-hidden relative">
      {/* Background glowing sphere */}
      <div className="absolute right-10 bottom-10 w-[350px] h-[350px] bg-blue-500/5 blur-[100px] pointer-events-none"></div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-blue-400 bg-clip-text text-transparent">
          Interactive Portfolio Wheel
        </h2>
        <p className="text-slate-400 mt-4 text-base">
          Hover over the sectors of the asset wheel to inspect detailed volatility targets, timelines, and liquidity metrics for each asset.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Side: Dynamic SVG/Pie wheel */}
        <div className="md:col-span-6 flex items-center justify-center relative min-h-[320px]">
          <div className="w-80 h-80 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <RechartsPie
                  activeIndex={chartData.findIndex((c) => c.name === hoveredCategory)}
                  activeShape={renderActiveShape}
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={105}
                  dataKey="value"
                  onMouseEnter={(_: any, index: number) => {
                    if (chartData[index]) {
                      setHoveredCategory(chartData[index].name);
                    }
                  }}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} className="cursor-pointer" />
                  ))}
                </RechartsPie>
              </PieChart>
            </ResponsiveContainer>

            {/* Core Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">WHEEL KEY</span>
              <span className="text-sm font-bold text-white mt-0.5">{hoveredCategory}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Detailed metrics display card */}
        <div className="md:col-span-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={hoveredCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="p-6 rounded-2xl border border-white/10 bg-[#090d1f]/60 backdrop-blur-md relative"
              style={{ borderLeftColor: activeAsset.color, borderLeftWidth: "4px" }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-white">{activeAsset.name}</h3>
                <span
                  className="text-xs font-mono font-bold px-2 py-0.5 rounded border uppercase"
                  style={{ color: activeAsset.color, borderColor: `${activeAsset.color}40`, backgroundColor: `${activeAsset.color}15` }}
                >
                  ASSET COMPONENT
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {activeAsset.details}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/5 text-emerald-400">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block">EXPECTED RETURN</span>
                    <span className="text-sm font-bold text-slate-200">{activeAsset.expectedReturn}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/5 text-rose-400">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block">RISK PROFILE</span>
                    <span className="text-sm font-bold text-slate-200">{activeAsset.riskLevel}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/5 text-cyan-400">
                    <Droplets className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block">ASSET LIQUIDITY</span>
                    <span className="text-sm font-bold text-slate-200">{activeAsset.liquidity}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/5 text-amber-400">
                    <Hourglass className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block">MIN HOLDING TIMELINE</span>
                    <span className="text-sm font-bold text-slate-200">{activeAsset.holdingPeriod}</span>
                  </div>
                </div>
              </div>

              {/* Footnote tips */}
              <div className="mt-6 pt-4 border-t border-white/5 text-[10px] text-slate-500 font-mono flex items-center gap-1">
                <HelpCircle className="w-3.5 h-3.5 text-blue-500" /> Hover over different segments in the radial wheel to examine other asset class parameters.
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

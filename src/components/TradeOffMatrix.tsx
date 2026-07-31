"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Flame, Landmark, Activity, Compass, ShieldCheck, Sparkles } from "lucide-react";

interface MatrixItem {
  id: string;
  frontTitle: string;
  frontSubtitle: string;
  icon: React.ReactNode;
  color: string;
  glow: string;
  backTitle: string;
  backInsight: string;
  statCompare: string;
}

export default function TradeOffMatrix() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const matrixData: MatrixItem[] = [
    {
      id: "risk",
      frontTitle: "High Risk vs Low Risk",
      frontSubtitle: "Calibrating capital preservation against aggressive growth potential.",
      icon: <Flame className="w-6 h-6 text-rose-400" />,
      color: "border-rose-500/20 bg-rose-500/5",
      glow: "glass-panel-glow-red",
      backTitle: "AI Advisor Consensus",
      backInsight: "High risk equity compounds capital at 14%+ but brings 20% drawdown potential. Mitigated by combining active risk triggers and core short-duration high-grade bonds.",
      statCompare: "14% CAGR / 20% drawdown vs 7% yield / 2% drawdown",
    },
    {
      id: "growth",
      frontTitle: "Growth vs Stability",
      frontSubtitle: "Targeting valuation expansion against predictable cash flows.",
      icon: <Activity className="w-6 h-6 text-blue-400" />,
      color: "border-blue-500/20 bg-blue-500/5",
      glow: "glass-panel-glow-blue",
      backTitle: "AI Advisor Consensus",
      backInsight: "Growth drives index compounding (Mid-cap/US funds). Stability secures near-term liabilities. Recommend dynamic hedging where growth assets dominate early, fading to yield later.",
      statCompare: "80/20 Equity-to-Debt scaling dynamically over target horizon",
    },
    {
      id: "wealth",
      frontTitle: "Short-term vs Long-term",
      frontSubtitle: "Balancing liquidity needs against long-term compounding.",
      icon: <Compass className="w-6 h-6 text-cyan-400" />,
      color: "border-cyan-500/20 bg-cyan-500/5",
      glow: "glass-panel-glow-cyan",
      backTitle: "AI Advisor Consensus",
      backInsight: "Short-term focus triggers tax costs and timing risks. Long-term (5y+) unlocks compounding yields and minimizes capital gains through tax harvesting strategies.",
      statCompare: "Long-term investing beats active short-term trading in 92% of simulations",
    },
    {
      id: "investing",
      frontTitle: "Active vs Passive",
      frontSubtitle: "Evaluating direct stock picking against low-cost market ETFs.",
      icon: <Sparkles className="w-6 h-6 text-amber-400" />,
      color: "border-amber-500/20 bg-amber-500/5",
      glow: "glass-panel-glow-gold",
      backTitle: "AI Advisor Consensus",
      backInsight: "Recommend Core-Satellite strategy. Allocate 75% to low-cost passive index trackers (Core), and 25% to high-conviction factor/active strategies (Satellite).",
      statCompare: "Passive index core protects downside; active satellites capture alpha",
    },
    {
      id: "equity",
      frontTitle: "Equity vs Debt",
      frontSubtitle: "Allocating between business ownership and fixed-yield lending.",
      icon: <Landmark className="w-6 h-6 text-indigo-400" />,
      color: "border-indigo-500/20 bg-indigo-500/5",
      glow: "glass-panel-glow-cyan",
      backTitle: "AI Advisor Consensus",
      backInsight: "Equity generates wealth beats inflation. Debt provides liquidity and buy-the-dip power. Rebalance automatically when asset deviation exceeds 5% bounds.",
      statCompare: "Historical equity premium: 5.5% average spread above fixed income",
    },
    {
      id: "domestic",
      frontTitle: "Domestic vs International",
      frontSubtitle: "Structuring local growth against foreign currency diversification.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      color: "border-emerald-500/20 bg-emerald-500/5",
      glow: "glass-panel-glow-green",
      backTitle: "AI Advisor Consensus",
      backInsight: "Domestic markets capture local GDP growth. US/Global equities hedge local currency depreciation. Maintain 10-15% in international funds to control local country risk.",
      statCompare: "Uncorrelated international assets reduce overall portfolio variance by 14%",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-20 px-6 md:px-12 select-none overflow-hidden relative">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-blue-400 bg-clip-text text-transparent">
          Financial Trade-off Matrix
        </h2>
        <p className="text-slate-400 mt-4 text-base">
          Investing is about managing choices. Click on the comparison cards to reveal AI consensus perspectives and statistical guidelines.
        </p>
      </div>

      {/* Grid of flipping cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
        {matrixData.map((item) => {
          const isFlipped = !!flippedCards[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleFlip(item.id)}
              className="w-full h-64 cursor-pointer relative"
            >
              {/* Animated 3D Card Inner */}
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full h-full transform-style-3d relative"
              >
                
                {/* Front Side */}
                <div className={`absolute inset-0 p-6 rounded-2xl border flex flex-col justify-between backface-hidden ${item.color} border-white/10 hover:border-cyan-500/40 hover:bg-[#0b122c]/50 transition-all`}>
                  <div className="flex justify-between items-start">
                    <div className="p-3 rounded-xl bg-white/5">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">
                      CLICK TO FLIP
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.frontTitle}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.frontSubtitle}</p>
                  </div>
                </div>

                {/* Back Side (Rotated) */}
                <div className={`absolute inset-0 p-6 rounded-2xl border flex flex-col justify-between backface-hidden rotate-y-180 bg-[#090d1f] border-cyan-500/40 shadow-lg shadow-cyan-500/5`}>
                  <div>
                    <div className="flex justify-between items-center pb-2 border-b border-white/5 mb-3">
                      <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                        {item.backTitle}
                      </span>
                      <span className="text-[9px] font-mono text-slate-500">RESOLVED</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {item.backInsight}
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-white/5">
                    <span className="text-[9px] text-slate-500 font-mono block uppercase">SIMULATED STATISTICS</span>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">{item.statCompare}</span>
                  </div>
                </div>

              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Download, Share2, Calendar, ShieldCheck, CheckCircle2, TrendingUp } from "lucide-react";
import { Scenario } from "./Simulator";

interface ReportProps {
  activeScenario: Scenario;
}

export default function PersonalizedReport({ activeScenario }: ReportProps) {
  const [downloading, setDownloading] = useState(false);
  const [sharing, setSharing] = useState(false);
  const [scheduled, setScheduled] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      alert("Executive report PDF generated successfully. Downloading to your system...");
    }, 1500);
  };

  const handleShare = () => {
    setSharing(true);
    setTimeout(() => {
      setSharing(false);
      alert("Secure report hash generated. Shareable link copied to clipboard.");
    }, 1000);
  };

  const handleSchedule = () => {
    setScheduled(true);
    setTimeout(() => {
      setScheduled(false);
      alert("A private meeting invite with a human wealth manager has been dispatched to your verified email.");
    }, 1200);
  };

  // Get custom strategy summaries based on scenario
  const getStrategyInsights = () => {
    switch (activeScenario.id) {
      case "young-entrepreneur":
        return {
          healthScore: 88,
          summary: "Aggressive technology-weighted compounding strategy designed for ultra-high asset growth. Deploys satellite digital assets and global tech indexes to maximize alpha over a 10-year lock-in framework.",
          allocationText: "75% Domestic Growth Equity, 8% Digital Crypto, 7% US Tech Indices, 5% Mid-Cap Mutual Funds, 3% REITs, 2% Liquid Cash Buffer.",
          taxTips: "Leverage long-term capital gains tax structures by utilizing harvesting bounds. Hold index funds for 12+ months to qualify for lower tax slabs.",
          milestones: ["Initialize automated ₹1,20,000 monthly SIP into core indexes", "Establish digital ledger cold wallet for crypto allocation", "Audit global diversification ratios semi-annually"],
        };
      case "pre-retiree":
        return {
          healthScore: 94,
          summary: "Low-volatility asset preservation layout engineered for immediate wealth protection and income. Allocates 50% to corporate and sovereign debt vehicles to maximize yield safety prior to the retirement milestone.",
          allocationText: "50% Mid-Duration Debt Funds, 20% Dividend Equities, 15% Large-Cap Mutual Funds, 10% Sovereign Gold Bonds, 5% Ultra-Short Term Cash.",
          taxTips: "Utilize Systematic Withdrawal Plans (SWP) post-retirement to structure tax-free income streams. Maximize tax deductions under senior schedules.",
          milestones: ["Lock in Sovereign Gold Bonds for guaranteed hedges", "Initiate systematic transfer plan (STP) from equity to debt", "Execute family medical term-policy review"],
        };
      case "software-engineer":
      default:
        return {
          healthScore: 84,
          summary: "Balanced growth-and-stability matrix optimized for a 7-year house purchase objective while securing retirement corpus. Utilizes systematic equity SIPs matched with safe short-term debt instruments.",
          allocationText: "60% Diversified Core Equity, 20% Sovereign Debt, 10% Index Mutual Funds, 5% Gold ETFs, 3% Crypto satellite, 2% Liquid Savings.",
          taxTips: "Maximize Section 80C deductions (ELSS mutual funds) and Section 80CCD NPS limits to reduce net taxable income by ₹2 Lakh annually.",
          milestones: ["Automate ₹45,000 monthly SIP split between index and debt", "Review home loan down-payment corpus goals annually", "Setup term life coverage of ₹2 Crore immediately"],
        };
    }
  };

  const insights = getStrategyInsights();

  return (
    <div id="report" className="w-full max-w-5xl mx-auto py-24 px-6 select-none overflow-hidden">
      
      {/* Background glow decoration */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 blur-[120px] pointer-events-none"></div>

      {/* Main Glass Report Container */}
      <div className="rounded-3xl border border-white/10 bg-[#090e22]/70 backdrop-blur-md p-6 md:p-10 shadow-2xl relative">
        
        {/* Report Header Logo/Metadata */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-white/10 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">FinVerse Advisory Report</h2>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mt-0.5">
                Institutional ID: FV-{activeScenario.id.substring(0,6).toUpperCase()}-2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-bold text-slate-200 transition-all cursor-pointer disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              {downloading ? "Compiling..." : "Download PDF"}
            </button>
            <button
              onClick={handleShare}
              disabled={sharing}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-bold text-slate-200 transition-all cursor-pointer disabled:opacity-50"
            >
              <Share2 className="w-3.5 h-3.5" />
              {sharing ? "Encrypting..." : "Share Link"}
            </button>
            <button
              onClick={handleSchedule}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 rounded-lg text-xs font-bold text-white transition-all cursor-pointer shadow-md shadow-blue-500/10"
            >
              <Calendar className="w-3.5 h-3.5" />
              Schedule Advisor
            </button>
          </div>
        </div>

        {/* Report Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 items-start">
          
          {/* Left Column: Summary, Recommendations, Strategies (Col 8) */}
          <div className="md:col-span-8 space-y-8 font-sans">
            
            {/* Section 1: Executive Summary */}
            <div>
              <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-3">
                01. Executive Summary
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {insights.summary}
              </p>
            </div>

            {/* Section 2: Portfolio Strategy */}
            <div>
              <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-3">
                02. Consolidated Portfolio Strategy
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                The Consensus Engine resolved the advisor debate by constructing a risk-adjusted allocation matching your parameters:
              </p>
              <div className="p-3 bg-[#03060f] border border-white/5 rounded-xl text-xs font-mono text-emerald-400 mt-3 font-semibold">
                {insights.allocationText}
              </div>
            </div>

            {/* Section 3: Tax Saving Suggestions */}
            <div>
              <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-3">
                03. Tax Optimization Roadmap
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {insights.taxTips}
              </p>
            </div>

            {/* Section 4: Emergency Fund Advice */}
            <div>
              <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-3">
                04. Liquid Buffer & Protection
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Maintain a liquid contingency buffer containing 6 months of absolute basic expenses in instant-redemption liquid debt assets. Do not lock these funds into long-horizon equity projects.
              </p>
            </div>

          </div>

          {/* Right Column: Health Score, Milestones, Certifications (Col 4) */}
          <div className="md:col-span-4 space-y-6">
            
            {/* Health Score Box */}
            <div className="p-5 rounded-2xl border border-white/5 bg-[#03060f] text-center">
              <span className="text-[10px] font-mono text-slate-500 uppercase font-bold tracking-widest">
                Financial Health Rating
              </span>
              <div className="text-4xl font-extrabold text-white mt-2 font-mono">{insights.healthScore} <span className="text-sm font-semibold text-slate-500">/ 100</span></div>
              
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${insights.healthScore}%` }}></div>
              </div>
              <span className="text-[10px] text-slate-400 mt-2 block leading-tight font-sans">
                Highly optimized index matching client conditions.
              </span>
            </div>

            {/* Next Steps / Milestones */}
            <div className="p-5 rounded-2xl border border-white/5 bg-[#03060f]">
              <span className="text-[10px] font-mono text-slate-500 uppercase font-bold tracking-widest block mb-4">
                Target Action Milestones
              </span>
              
              <div className="space-y-3.5 text-xs font-sans text-slate-300">
                {insights.milestones.map((milestone, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{milestone}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certification Footer Card */}
            <div className="p-5 rounded-2xl border border-emerald-500/10 bg-[#09151c]/40 flex gap-3.5 items-start">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white">Compliance Guarantee</h4>
                <p className="text-[10px] text-slate-400 leading-snug mt-1">
                  Report verified by regulatory rules. Capital projections represent simulations and do not guarantee future yields.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Print Disclaimer */}
        <div className="border-t border-white/10 pt-4 flex items-center justify-between text-[10px] font-mono text-slate-500">
          <span>COMPILED SECURELY BY FINVERSE CORE ENGINE</span>
          <span>© 2026 FINVERSE AI</span>
        </div>

      </div>
    </div>
  );
}

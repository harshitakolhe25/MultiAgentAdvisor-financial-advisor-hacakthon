"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, ShieldAlert, LineChart, ShieldCheck } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const statusTexts = [
    "Establishing secure connection to market streams...",
    "Booting quantum portfolio synthesis algorithms...",
    "Deploying 9 independent advisory agents...",
    "Calibrating risk profiles and behavioral coefficients...",
    "Synchronizing Consensus Engine and strategy validators...",
    "FinVerse AI System Active. Launching Platform...",
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 800);
          return 100;
        }
        const remaining = 100 - prev;
        const increment = Math.max(1, Math.floor(Math.random() * 12));
        return Math.min(prev + increment, 100);
      });
    }, 180);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  useEffect(() => {
    // Sync status updates with progress percentage roughly
    const nextIdx = Math.min(
      Math.floor((progress / 100) * statusTexts.length),
      statusTexts.length - 1
    );
    if (nextIdx !== statusIndex) {
      setStatusIndex(nextIdx);
    }
  }, [progress, statusIndex, statusTexts.length]);

  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#050814] overflow-hidden select-none">
      {/* Background neon ambient glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none"></div>

      {/* Cyber Grid background */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none"></div>

      <div className="relative flex flex-col items-center max-w-lg px-6 text-center">
        {/* Glowing holographic core illustration in loading state */}
        <div className="relative w-36 h-36 mb-12 flex items-center justify-center">
          {/* Rotating Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30"
          ></motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="absolute inset-2 rounded-full border border-double border-cyan-400/20"
          ></motion.div>
          <motion.div
            animate={{ rotate: 180 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="absolute inset-6 rounded-full border border-dashed border-amber-500/30"
          ></motion.div>

          {/* Central Logo Symbol */}
          <motion.div
            animate={{ scale: [0.9, 1.1, 0.9] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="relative flex items-center justify-center w-20 h-20 rounded-full bg-[#0a1330] border border-blue-500/50 shadow-2xl shadow-blue-500/30"
          >
            <Cpu className="w-10 h-10 text-cyan-400" />
          </motion.div>

          {/* Small orbital nodes */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 text-xs text-blue-400 font-mono flex items-center gap-1 bg-[#050814] px-1.5 py-0.5 rounded border border-blue-500/20">
            <LineChart className="w-3 h-3 text-emerald-400" /> SECURE
          </div>
        </div>

        {/* Brand Text */}
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-blue-400 bg-clip-text text-transparent mb-2">
          FINVERSE <span className="text-cyan-400">AI</span>
        </h1>
        <p className="text-xs text-slate-400 font-mono uppercase tracking-widest mb-8">
          Multi-Agent Intelligence System v2.0
        </p>

        {/* Progress Bar Container */}
        <div className="w-64 h-1 bg-white/5 border border-white/10 rounded-full overflow-hidden mb-4 relative">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-400 rounded-full"
            style={{ width: `${progress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Percentage text */}
        <div className="text-sm font-mono font-bold text-cyan-400 mb-6">
          {progress}%
        </div>

        {/* Current status log */}
        <div className="h-8 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={statusIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-xs font-mono text-slate-400 max-w-[280px]"
            >
              {statusTexts[statusIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

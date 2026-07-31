"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  TrendingUp,
  Coins,
  Gem,
  Bitcoin,
  Building,
  Shield,
  FileSpreadsheet,
  Wallet,
  PiggyBank,
  Globe,
} from "lucide-react";

export default function HologramCore() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax variables
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring motion
  const springConfig = { damping: 40, stiffness: 200, mass: 1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      // Calculate offset from center (-0.5 to 0.5)
      const relativeX = (e.clientX - rect.left) / width - 0.5;
      const relativeY = (e.clientY - rect.top) / height - 0.5;

      // Map to moving range
      x.set(relativeX * 35);
      y.set(relativeY * 35);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  // Floating assets definitions
  const floatingAssets = [
    { name: "Stocks", icon: <TrendingUp className="w-4 h-4 text-blue-400" />, color: "border-blue-500/30 text-blue-400", x: -140, y: -90, delay: 0 },
    { name: "Crypto", icon: <Bitcoin className="w-4 h-4 text-emerald-400" />, color: "border-emerald-500/30 text-emerald-400", x: 130, y: -110, delay: 0.5 },
    { name: "Mutual Funds", icon: <Wallet className="w-4 h-4 text-cyan-400" />, color: "border-cyan-500/30 text-cyan-400", x: -160, y: 70, delay: 1 },
    { name: "Gold", icon: <Coins className="w-4 h-4 text-amber-400" />, color: "border-amber-500/30 text-amber-400", x: 150, y: 80, delay: 1.5 },
    { name: "Bonds", icon: <FileSpreadsheet className="w-4 h-4 text-indigo-400" />, color: "border-indigo-500/30 text-indigo-400", x: 0, y: -160, delay: 2 },
    { name: "Real Estate", icon: <Building className="w-4 h-4 text-purple-400" />, color: "border-purple-500/30 text-purple-400", x: 10, y: 150, delay: 2.5 },
    { name: "SIP", icon: <PiggyBank className="w-4 h-4 text-emerald-400" />, color: "border-emerald-400/30 text-emerald-300", x: -90, y: -180, delay: 3 },
    { name: "Insurance", icon: <Shield className="w-4 h-4 text-cyan-400" />, color: "border-cyan-400/30 text-cyan-300", x: 180, y: -20, delay: 3.5 },
    { name: "Tax Planning", icon: <Gem className="w-4 h-4 text-yellow-400" />, color: "border-yellow-400/30 text-yellow-300", x: -220, y: -10, delay: 4 },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] flex items-center justify-center overflow-visible select-none"
    >
      {/* Background Glow */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none"></div>
      <div className="absolute w-[350px] h-[350px] rounded-full bg-cyan-400/5 blur-[80px] pointer-events-none"></div>

      {/* Holographic orbital wireframes */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Ring 1 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-blue-500/10 flex items-center justify-center"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]"></div>
        </motion.div>

        {/* Ring 2 */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-[240px] h-[240px] rounded-full border border-dotted border-cyan-400/20 flex items-center justify-center"
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#06b6d4]"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_10px_#f59e0b]"></div>
        </motion.div>

        {/* Ring 3 (angled) */}
        <motion.div
          animate={{ rotateY: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute w-[280px] h-[100px] rounded-full border border-blue-500/15"
          style={{ transform: "rotateX(75deg) rotateY(15deg)" }}
        ></motion.div>
        <motion.div
          animate={{ rotateX: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-[120px] h-[280px] rounded-full border border-cyan-500/15"
          style={{ transform: "rotateY(75deg) rotateX(15deg)" }}
        ></motion.div>
      </div>

      {/* Main Holographic Centerpiece (parallaxes with mouse movements) */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="relative z-10 w-48 h-48 flex items-center justify-center"
      >
        {/* Glowing Neural Center Sphere */}
        <div className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-blue-900/60 to-cyan-800/60 border border-blue-400/40 flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.3)] backdrop-blur-md animate-pulse-slow">
          <Globe className="w-16 h-16 text-cyan-400 opacity-80 animate-spin" style={{ animationDuration: "20s" }} />

          {/* Interactive core HUD */}
          <div className="absolute inset-4 rounded-full border border-dashed border-cyan-400/30 flex items-center justify-center">
            <span className="text-[10px] font-mono text-blue-300 font-bold bg-[#070B18]/80 px-2 py-0.5 rounded border border-blue-500/20">
              FIN-INTEL
            </span>
          </div>

          {/* Floating inner nodes */}
          <div className="absolute top-4 left-6 text-emerald-400 text-xs font-mono font-bold">₹</div>
          <div className="absolute bottom-6 right-6 text-blue-400 text-xs font-mono font-bold">$</div>
          <div className="absolute top-8 right-6 text-amber-500 text-xs font-mono font-bold">€</div>
          <div className="absolute bottom-6 left-8 text-indigo-400 text-[10px] font-mono font-bold">₿</div>
        </div>

        {/* Floating Stock Chart Silhouette inside Core */}
        <div className="absolute w-24 h-8 bottom-12 pointer-events-none opacity-40">
          <svg viewBox="0 0 100 30" className="w-full h-full stroke-cyan-400 stroke-2 fill-none">
            <path d="M0,25 Q15,10 30,20 T60,5 T90,22 T100,10" />
            <path d="M0,25 Q15,10 30,20 T60,5 T90,22 T100,10 L100,30 L0,30 Z" className="fill-cyan-500/10 stroke-none" />
          </svg>
        </div>

        {/* Small floating particles around centerpiece */}
        {[...Array(6)].map((_, idx) => (
          <motion.div
            key={idx}
            animate={{
              y: [0, -12, 0],
              x: [0, Math.sin(idx) * 15, 0],
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{
              duration: 3 + idx * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.4,
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]"
            style={{
              top: `${20 + idx * 10}%`,
              left: `${15 + Math.cos(idx) * 20}%`,
            }}
          ></motion.div>
        ))}
      </motion.div>

      {/* Floating Holographic Asset Cards (Parallaxes opposite or in different spring rates) */}
      {floatingAssets.map((asset, idx) => (
        <motion.div
          key={idx}
          className="absolute z-20 pointer-events-auto"
          style={{
            x: useSpring(useMotionValue(asset.x), springConfig),
            y: useSpring(useMotionValue(asset.y), springConfig),
          }}
        >
          {/* Card Wrapper with dynamic float translation */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4.5 + idx * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: asset.delay,
            }}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl border bg-slate-900/60 backdrop-blur-md shadow-lg ${asset.color} hover:border-cyan-400 hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer`}
          >
            {asset.icon}
            <span className="text-xs font-semibold tracking-wide whitespace-nowrap">
              {asset.name}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

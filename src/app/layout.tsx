import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "FinVerse AI – Multi-Agent Financial Advisory Simulator",
  description: "Specialized AI financial advisors collaborate, debate, analyze market conditions, and generate wealth-building strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#070B18] text-slate-100 font-sans selection:bg-blue-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}

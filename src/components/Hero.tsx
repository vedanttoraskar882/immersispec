import React from 'react';
import { ArrowRight, ChevronDown, Clock, ShieldCheck, Box, UserCheck } from 'lucide-react';

interface HeroProps {
  onRequestPilot: () => void;
  onExplorePlatform: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestPilot, onExplorePlatform }) => {
  return (
    <section
      id="home"
      className="relative bg-[#102748] text-white pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden blueprint-grid-dark"
    >
      {/* Decorative architectural background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C5A044]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Category / Intro Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#0F1C32] text-[#E8D5A5] border border-[#C5A044]/40 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#C5A044] animate-pulse" />
              BIM-LINKED DECISION GOVERNANCE
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Manrope'] tracking-tight leading-[1.12]">
              Every Design Decision.{' '}
              <span className="text-[#C5A044] block sm:inline">Connected. Approved. Traceable.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#E2E8F0]/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              ImmersiSpec Twin is a BIM-linked immersive approval, specification and change-governance platform being developed for UK interior fit-out and refurbishment projects. Connect design reviews, specifications, costs, authorised approvals and procurement within one structured decision workflow.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onRequestPilot}
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider bg-[#C5A044] text-[#102748] hover:bg-[#E8D5A5] hover:shadow-xl transition-all duration-200 shadow-lg flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#C5A044]"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExplorePlatform}
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#0F1C32]/80 hover:bg-[#0F1C32] hover:text-[#E8D5A5] transition-all duration-200 border border-[#E2E8F0]/20 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#C5A044]"
              >
                <span>Explore the Platform</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Development Stage Statement */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-center lg:justify-start gap-2 text-xs text-[#E8D5A5]/80 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A044]" />
              Currently in pre-MVP development and market validation. Expressions of interest are welcome.
            </div>
          </div>

          {/* Right Column: Hero Visual Concept Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Architectural Frame */}
              <div className="relative bg-[#0F1C32] rounded-2xl p-3 sm:p-4 border border-[#C5A044]/30 shadow-2xl overflow-hidden group">
                
                {/* Header bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    <span className="ml-2 text-[#E2E8F0]/70 text-[11px]">3D Viewport // Spatial Review</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#102748] text-[#E8D5A5] border border-[#C5A044]/30 text-[10px] uppercase font-semibold">
                    Illustrative Platform Concept
                  </span>
                </div>

                {/* Conceptual Viewport with Architectural Space & BIM Wireframe Overlay */}
                <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#102748] via-[#0F1C32] to-[#172033] border border-white/10 flex items-center justify-center">
                  
                  {/* Stylized Architectural Perspective Grid & Geometry */}
                  <svg
                    className="absolute inset-0 w-full h-full text-white/10"
                    viewBox="0 0 400 300"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    {/* Perspective Room Linework */}
                    <path d="M 0,0 L 120,70 L 280,70 L 400,0" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                    <path d="M 0,300 L 120,230 L 280,230 L 400,300" stroke="currentColor" strokeWidth="1" />
                    <path d="M 120,70 L 120,230" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M 280,70 L 280,230" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="120" y1="70" x2="280" y2="70" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="120" y1="230" x2="280" y2="230" stroke="currentColor" strokeWidth="1.5" />
                    
                    {/* Architectural Feature Wall Area (Highlighted in Gold) */}
                    <polygon points="120,70 180,70 180,230 120,230" fill="rgba(197, 160, 68, 0.08)" stroke="#C5A044" strokeWidth="1.5" />
                    
                    {/* Ceiling Grid */}
                    <line x1="40" y1="23" x2="160" y2="70" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="80" y1="46" x2="200" y2="70" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="320" y1="46" x2="200" y2="70" stroke="currentColor" strokeWidth="0.5" />

                    {/* Floor Tiling Blueprint Lines */}
                    <line x1="120" y1="230" x2="80" y2="300" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="160" y1="230" x2="140" y2="300" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="200" y1="230" x2="200" y2="300" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="240" y1="230" x2="260" y2="300" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="280" y1="230" x2="320" y2="300" stroke="currentColor" strokeWidth="0.5" />
                  </svg>

                  {/* Wireframe Furniture / Joinery Silhouette */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 h-24 border border-[#C5A044]/40 bg-[#102748]/60 backdrop-blur-xs rounded-sm flex flex-col items-center justify-center p-2 text-center">
                    <span className="text-[10px] font-mono text-[#E8D5A5] uppercase tracking-wider">Spatial Element</span>
                    <span className="text-xs font-semibold text-white">Reception Desk Joinery</span>
                    <span className="text-[10px] text-[#64748B]">BIM ID: BIM-J401</span>
                  </div>

                  {/* Connected Decision Node Target */}
                  <div className="absolute top-24 left-[35%] -translate-x-1/2">
                    <div className="relative">
                      <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-[#C5A044] opacity-75" />
                      <div className="relative w-4 h-4 rounded-full bg-[#C5A044] border-2 border-[#102748] flex items-center justify-center cursor-pointer shadow-lg" />
                    </div>
                  </div>

                  {/* Primary Floating Structured Decision Card */}
                  <div className="absolute top-4 sm:top-6 right-3 sm:right-6 w-64 sm:w-72 bg-[#102748]/95 backdrop-blur-md rounded-xl p-3.5 border border-[#C5A044]/50 shadow-2xl text-left space-y-2.5 animate-in fade-in duration-500">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                        <Box className="w-3.5 h-3.5 text-[#C5A044]" />
                        <span className="text-xs font-mono font-bold text-[#E8D5A5]">BIM-W102</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" /> Pending Review
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between items-center text-[#E2E8F0]/80">
                        <span className="text-[11px] text-[#64748B]">Element:</span>
                        <span className="font-semibold text-white">Reception Wall Finish</span>
                      </div>
                      <div className="flex justify-between items-center text-[#E2E8F0]/80">
                        <span className="text-[11px] text-[#64748B]">Specification:</span>
                        <span className="font-medium text-[#E8D5A5]">Timber Veneer (Oak Crown)</span>
                      </div>
                      <div className="flex justify-between items-center text-[#E2E8F0]/80">
                        <span className="text-[11px] text-[#64748B]">Model Revision:</span>
                        <span className="font-mono bg-[#0F1C32] px-1.5 py-0.5 rounded text-white text-[11px] border border-white/10">R03</span>
                      </div>
                      <div className="flex justify-between items-center text-[#E2E8F0]/80">
                        <span className="text-[11px] text-[#64748B]">Cost Delta:</span>
                        <span className="font-semibold text-emerald-400 font-mono">+£250</span>
                      </div>
                      <div className="flex justify-between items-center text-[#E2E8F0]/80">
                        <span className="text-[11px] text-[#64748B]">Decision Owner:</span>
                        <span className="font-medium text-white flex items-center gap-1">
                          <UserCheck className="w-3 h-3 text-[#C5A044]" /> Lead Architect
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Secondary Floating Mini Pill */}
                  <div className="absolute bottom-3 left-3 sm:left-4 bg-[#0F1C32]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-lg text-[11px] flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[#E2E8F0]">Revision-Drift Guard: <strong className="text-white">Active</strong></span>
                  </div>

                </div>

                {/* Visual Label Disclaimer Footer */}
                <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-[#64748B]">
                  <span>Workplace Interior Demonstration Model</span>
                  <span className="font-mono text-[#E8D5A5]/80">Simulated Project Data</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

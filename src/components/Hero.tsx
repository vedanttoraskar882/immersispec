import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Clock, ShieldCheck, Box, UserCheck, Layers, Eye, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onRequestPilot: () => void;
  onExplorePlatform: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestPilot, onExplorePlatform }) => {
  const [activeTab, setActiveTab] = useState<'decision' | 'metadata' | 'drift'>('decision');

  return (
    <section
      id="home"
      className="relative bg-[#0B172A] text-white pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden blueprint-grid-dark"
    >
      {/* Decorative architectural ambient glow & gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-[#C5A044]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Category / Intro Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#0F1C32]/90 text-[#E8D5A5] border border-[#C5A044]/40 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#C5A044] animate-pulse" />
              BIM-LINKED DECISION GOVERNANCE
            </div>

            {/* Main Hero Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Manrope'] tracking-tight leading-[1.12]">
              Every Design Decision.{' '}
              <span className="text-[#C5A044] block sm:inline">Connected. Approved. Traceable.</span>
            </h1>

            {/* Hero Description */}
            <p className="text-base sm:text-lg text-[#E2E8F0]/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              ImmersiSpec Twin is a BIM-linked immersive approval, specification and change-governance platform being developed for UK interior fit-out and refurbishment projects. Connect design reviews, specifications, costs, authorised approvals and procurement within one structured decision workflow.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onRequestPilot}
                className="w-full sm:w-auto px-8 py-4 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#C5A044] text-[#102748] hover:bg-[#E8D5A5] hover:shadow-[0_0_25px_rgba(197,160,68,0.4)] transition-all duration-200 shadow-lg flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#C5A044] active:scale-[0.98]"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExplorePlatform}
                className="w-full sm:w-auto px-7 py-4 rounded-lg text-xs font-semibold text-white bg-[#0F1C32]/80 hover:bg-[#102748] hover:text-[#E8D5A5] transition-all duration-200 border border-[#E2E8F0]/20 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#C5A044]"
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

          {/* Right Column: Hero Visual Concept Viewport Interface */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Architectural Glassmorphism Container */}
              <div className="relative bg-[#0F1C32]/95 backdrop-blur-xl rounded-2xl p-3.5 sm:p-5 border border-[#C5A044]/35 shadow-2xl overflow-hidden group">
                
                {/* Viewport Top Control Bar */}
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    <span className="ml-2 text-[#E2E8F0]/80 text-[11px] font-medium hidden sm:inline">Spatial Review Engine</span>
                  </div>

                  {/* Interactive Viewport Mode Switches */}
                  <div className="flex items-center bg-[#070E1A] p-1 rounded-lg border border-white/10">
                    <button
                      onClick={() => setActiveTab('decision')}
                      className={`px-2.5 py-1 rounded text-[10px] font-semibold transition-colors ${
                        activeTab === 'decision'
                          ? 'bg-[#C5A044] text-[#102748]'
                          : 'text-[#E2E8F0]/70 hover:text-white'
                      }`}
                    >
                      Decision Card
                    </button>
                    <button
                      onClick={() => setActiveTab('metadata')}
                      className={`px-2.5 py-1 rounded text-[10px] font-semibold transition-colors ${
                        activeTab === 'metadata'
                          ? 'bg-[#C5A044] text-[#102748]'
                          : 'text-[#E2E8F0]/70 hover:text-white'
                      }`}
                    >
                      BIM Parameters
                    </button>
                    <button
                      onClick={() => setActiveTab('drift')}
                      className={`px-2.5 py-1 rounded text-[10px] font-semibold transition-colors ${
                        activeTab === 'drift'
                          ? 'bg-[#C5A044] text-[#102748]'
                          : 'text-[#E2E8F0]/70 hover:text-white'
                      }`}
                    >
                      Drift Guard
                    </button>
                  </div>
                </div>

                {/* Conceptual Viewport with Architectural Space & BIM Wireframe Overlay */}
                <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#102748] via-[#0F1C32] to-[#070E1A] border border-white/10 flex items-center justify-center">
                  
                  {/* Perspective Architectural Wireframe Linework */}
                  <svg
                    className="absolute inset-0 w-full h-full text-white/15"
                    viewBox="0 0 400 300"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <path d="M 0,0 L 120,70 L 280,70 L 400,0" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                    <path d="M 0,300 L 120,230 L 280,230 L 400,300" stroke="currentColor" strokeWidth="1" />
                    <path d="M 120,70 L 120,230" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M 280,70 L 280,230" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="120" y1="70" x2="280" y2="70" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="120" y1="230" x2="280" y2="230" stroke="currentColor" strokeWidth="1.5" />
                    
                    {/* Active Target Feature Wall (Highlighted in Gold) */}
                    <polygon points="120,70 180,70 180,230 120,230" fill="rgba(197, 160, 68, 0.12)" stroke="#C5A044" strokeWidth="1.5" />
                    
                    {/* Perspective grid lines */}
                    <line x1="40" y1="23" x2="160" y2="70" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="80" y1="46" x2="200" y2="70" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="320" y1="46" x2="200" y2="70" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="120" y1="230" x2="80" y2="300" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="160" y1="230" x2="140" y2="300" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="200" y1="230" x2="200" y2="300" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="240" y1="230" x2="260" y2="300" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="280" y1="230" x2="320" y2="300" stroke="currentColor" strokeWidth="0.5" />
                  </svg>

                  {/* Wireframe Joinery Silhouette */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-52 h-24 border border-[#C5A044]/40 bg-[#102748]/75 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center p-2 text-center shadow-lg">
                    <span className="text-[10px] font-mono text-[#E8D5A5] uppercase tracking-wider">Spatial Coordinate</span>
                    <span className="text-xs font-semibold text-white">Reception Desk Joinery Unit</span>
                    <span className="text-[10px] text-[#64748B] font-mono">BIM-J401 // Zone 01</span>
                  </div>

                  {/* Pulsing Object Target Pin */}
                  <div className="absolute top-24 left-[36%] -translate-x-1/2">
                    <div className="relative cursor-pointer">
                      <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-[#C5A044] opacity-75" />
                      <div className="relative w-5 h-5 rounded-full bg-[#C5A044] border-2 border-[#102748] flex items-center justify-center shadow-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#102748]" />
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Interactive Card Content */}
                  {activeTab === 'decision' && (
                    <div className="absolute top-4 sm:top-6 right-3 sm:right-6 w-64 sm:w-72 bg-[#0F1C32]/95 backdrop-blur-md rounded-xl p-3.5 border border-[#C5A044]/60 shadow-2xl text-left space-y-2.5 animate-in fade-in duration-300">
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
                          <span className="font-mono bg-[#102748] px-1.5 py-0.5 rounded text-white text-[11px] border border-white/10">R03</span>
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
                  )}

                  {activeTab === 'metadata' && (
                    <div className="absolute top-4 sm:top-6 right-3 sm:right-6 w-64 sm:w-72 bg-[#0F1C32]/95 backdrop-blur-md rounded-xl p-3.5 border border-blue-400/50 shadow-2xl text-left space-y-2 animate-in fade-in duration-300 text-xs">
                      <div className="flex items-center justify-between pb-2 border-b border-white/10">
                        <div className="flex items-center gap-1.5 text-blue-300 font-mono font-bold">
                          <Layers className="w-3.5 h-3.5" />
                          <span>IFC Object Attributes</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#E8D5A5]">IfcCovering</span>
                      </div>
                      <div className="space-y-1 text-[11px] text-[#E2E8F0]/80">
                        <div className="flex justify-between">
                          <span className="text-[#64748B]">Global ID:</span>
                          <span className="font-mono text-white">2Y$mN49d10</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#64748B]">NBS Ref:</span>
                          <span className="font-mono text-white">M60/110A</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#64748B]">Fire Rating:</span>
                          <span className="text-emerald-400">Class 0 / B-s1,d0</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#64748B]">Lead Time:</span>
                          <span className="text-[#E8D5A5]">6 Weeks</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'drift' && (
                    <div className="absolute top-4 sm:top-6 right-3 sm:right-6 w-64 sm:w-72 bg-[#0F1C32]/95 backdrop-blur-md rounded-xl p-3.5 border border-rose-400/50 shadow-2xl text-left space-y-2 animate-in fade-in duration-300 text-xs">
                      <div className="flex items-center justify-between pb-2 border-b border-white/10">
                        <div className="flex items-center gap-1.5 text-rose-300 font-bold">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Drift Detection</span>
                        </div>
                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-rose-500/20 text-rose-300 font-mono">
                          Active Sentinel
                        </span>
                      </div>
                      <p className="text-[11px] text-[#E2E8F0]/90">
                        Monitors downstream geometry shifts. Any geometry clash in revision R04 instantly re-evaluates signed approval receipts.
                      </p>
                      <div className="p-2 rounded bg-black/30 border border-white/5 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>Baseline Synchronized</span>
                      </div>
                    </div>
                  )}

                  {/* Secondary Floating Mini Pill */}
                  <div className="absolute bottom-3 left-3 sm:left-4 bg-[#070E1A]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-lg text-[11px] flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[#E2E8F0]">Revision-Drift Guard: <strong className="text-white">Active</strong></span>
                  </div>

                </div>

                {/* Viewport Status Footer */}
                <div className="mt-3.5 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-[#64748B]">
                  <span>Workplace Interior BIM Coordination Model</span>
                  <span className="font-mono text-[#E8D5A5]/90 flex items-center gap-1">
                    <Eye className="w-3 h-3 text-[#C5A044]" />
                    Interactive Spatial Viewport
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

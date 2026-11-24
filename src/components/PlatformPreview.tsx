import React, { useState } from 'react';
import { 
  Building2, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  FileSpreadsheet, 
  TrendingUp,
  Filter
} from 'lucide-react';

export const PlatformPreview: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<'All' | 'Approved' | 'Pending' | 'Reopened'>('All');

  const decisions = [
    {
      decision: 'Reception Wall Finish',
      bimObject: 'BIM-W102',
      specification: 'Timber Veneer (Oak Crown)',
      cost: '+£250',
      revision: 'R03',
      status: 'Approved',
      approver: 'Lead Architect',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      decision: 'Meeting Room Furniture',
      bimObject: 'BIM-F208',
      specification: 'Acoustic Pod & Task Seating',
      cost: 'Baseline',
      revision: 'R03',
      status: 'Pending',
      approver: 'Client PM',
      statusColor: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      decision: 'Flooring Specification',
      bimObject: 'BIM-FL034',
      specification: 'Acoustic Mineral Vinyl Tile',
      cost: '+£840',
      revision: 'R04',
      status: 'Reopened',
      approver: 'Revision Guard Alert',
      statusColor: 'bg-rose-50 text-rose-700 border-rose-200'
    }
  ];

  const filteredDecisions = statusFilter === 'All' 
    ? decisions 
    : decisions.filter(d => d.status === statusFilter);

  return (
    <div className="mt-20 pt-16 border-t border-[#E2E8F0]">
      
      {/* Subsection Title */}
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#C5A044]/15 text-[#102748] border border-[#C5A044]/30">
          <span>Interface Architecture</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold font-['Manrope'] text-[#102748]">
          Platform Interface Preview
        </h3>
        <p className="text-xs sm:text-sm text-[#64748B]">
          Conceptual visualization of how design decisions, room completeness and revision drift are governed in a unified project workspace.
        </p>
      </div>

      {/* Main Dashboard Container */}
      <div className="bg-[#0F1C32] rounded-2xl border border-[#C5A044]/30 p-4 sm:p-7 shadow-2xl text-white overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#102748] border border-[#C5A044]/40 flex items-center justify-center text-[#E8D5A5]">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-[#E8D5A5] uppercase tracking-wider">
                Active Project View
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white font-['Manrope']">
                Workplace Fit-Out Project
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#102748] text-[#E8D5A5] border border-[#C5A044]/30 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Model Active: Revit R04.1
            </span>
            <span className="px-2.5 py-1 rounded text-[11px] font-semibold bg-[#C5A044] text-[#102748]">
              Platform Interface Preview
            </span>
          </div>
        </div>

        {/* Key Metrics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 my-6">
          
          <div className="bg-[#102748] rounded-xl p-3.5 border border-white/10">
            <span className="text-[11px] text-[#64748B] block mb-1">Total Decisions</span>
            <span className="text-2xl font-bold font-mono text-white">24</span>
            <span className="text-[10px] text-[#E8D5A5] block mt-1">Across 4 fit-out zones</span>
          </div>

          <div className="bg-[#102748] rounded-xl p-3.5 border border-emerald-500/30">
            <span className="text-[11px] text-emerald-400/80 block mb-1">Approved Decisions</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold font-mono text-emerald-400">17</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <span className="text-[10px] text-emerald-300/70 block mt-1">Ready for package export</span>
          </div>

          <div className="bg-[#102748] rounded-xl p-3.5 border border-amber-500/30">
            <span className="text-[11px] text-amber-400/80 block mb-1">Pending Decisions</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold font-mono text-amber-400">5</span>
              <Clock className="w-4 h-4 text-amber-400" />
            </div>
            <span className="text-[10px] text-amber-300/70 block mt-1">Awaiting sign-off</span>
          </div>

          <div className="bg-[#102748] rounded-xl p-3.5 border border-rose-500/30">
            <span className="text-[11px] text-rose-400/80 block mb-1">Reopened Decisions</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold font-mono text-rose-400">2</span>
              <AlertTriangle className="w-4 h-4 text-rose-400" />
            </div>
            <span className="text-[10px] text-rose-300/70 block mt-1">Triggered by R04 shift</span>
          </div>

          <div className="bg-[#102748] rounded-xl p-3.5 border border-[#C5A044]/40 col-span-2 sm:col-span-1">
            <span className="text-[11px] text-[#E8D5A5] block mb-1">Room Completeness</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-bold font-mono text-[#E8D5A5]">71%</span>
              <TrendingUp className="w-4 h-4 text-[#C5A044]" />
            </div>
            {/* Progress bar */}
            <div className="w-full bg-[#070E1A] h-2 rounded-full overflow-hidden mt-2 border border-white/10">
              <div className="bg-gradient-to-r from-[#C5A044] to-emerald-400 h-full rounded-full" style={{ width: '71%' }} />
            </div>
          </div>

        </div>

        {/* Two-Column Conceptual Work Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Room Spatial Floor Plan / Render Concept */}
          <div className="lg:col-span-5 bg-[#102748] rounded-xl p-4 border border-white/10 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs font-mono font-semibold text-[#E8D5A5]">
                Spatial Room View // Zone A-04
              </span>
              <span className="text-[10px] font-mono text-[#64748B]">IFC SPATIAL ID: #4092</span>
            </div>

            {/* Architectural Floor Plan Graphic */}
            <div className="relative h-56 rounded-lg bg-[#070E1A] border border-white/10 p-3 flex flex-col justify-between blueprint-grid-gold overflow-hidden">
              <div className="text-[10px] font-mono text-white/50">LEVEL 03 - EXECUTIVE RECEPTION &amp; BOARDROOM</div>
              
              {/* Floor Plan Linework Graphic */}
              <svg className="w-full h-36" viewBox="0 0 300 140" fill="none">
                <rect x="10" y="10" width="280" height="120" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="4 2" />
                <line x1="110" y1="10" x2="110" y2="130" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                <line x1="110" y1="70" x2="290" y2="70" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                
                {/* Reception Wall Element - Approved */}
                <rect x="12" y="12" width="96" height="10" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                <text x="18" y="20" fill="#10b981" fontSize="7" fontFamily="monospace">BIM-W102 [Approved]</text>

                {/* Meeting Room Furniture - Pending */}
                <circle cx="200" cy="40" r="18" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" fill="rgba(245, 158, 11, 0.15)" />
                <text x="175" y="42" fill="#f59e0b" fontSize="7" fontFamily="monospace">BIM-F208 [Pending]</text>

                {/* Flooring Element - Reopened */}
                <rect x="115" y="75" width="170" height="50" fill="rgba(244, 63, 94, 0.15)" stroke="#f43f5e" strokeWidth="1.5" />
                <text x="145" y="102" fill="#f43f5e" fontSize="7" fontFamily="monospace">BIM-FL034 [Reopened by Drift]</text>
              </svg>

              <div className="flex items-center justify-between text-[10px] text-[#E8D5A5]/80 font-mono">
                <span>Coordinates: X:14.2m Y:8.7m</span>
                <span>Camera Height: 1.65m Eye-Level</span>
              </div>
            </div>

            <div className="text-[11px] text-[#64748B] leading-relaxed">
              Objects update in real time when BIM metadata revisions are synced from authoring environments.
            </div>
          </div>

          {/* Right Column: Decision Register Table */}
          <div className="lg:col-span-7 bg-[#102748] rounded-xl p-4 border border-white/10 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs font-mono font-semibold text-[#E8D5A5]">
                Project Decision Register
              </span>
              
              {/* Filter controls */}
              <div className="flex items-center gap-1 bg-[#070E1A] p-1 rounded-md border border-white/10 text-[10px]">
                <Filter className="w-3 h-3 text-[#C5A044] ml-1 mr-0.5" />
                {(['All', 'Approved', 'Pending', 'Reopened'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setStatusFilter(tab)}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      statusFilter === tab
                        ? 'bg-[#C5A044] text-[#102748] font-bold'
                        : 'text-[#64748B] hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Decisions List */}
            <div className="space-y-3">
              {filteredDecisions.map((dec, idx) => (
                <div
                  key={idx}
                  className="bg-[#070E1A] rounded-lg p-3.5 border border-white/10 space-y-2 hover:border-[#C5A044]/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#E8D5A5]">{dec.bimObject}</span>
                        <span className="text-xs font-bold text-white">{dec.decision}</span>
                      </div>
                      <p className="text-[11px] text-[#64748B] mt-0.5">{dec.specification}</p>
                    </div>

                    <span
                      className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${
                        dec.status === 'Approved'
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                          : dec.status === 'Pending'
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                      }`}
                    >
                      {dec.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] text-[#64748B] pt-2 border-t border-white/5 font-mono">
                    <span>Model Revision: <strong className="text-white">{dec.revision}</strong></span>
                    <span>Cost Delta: <strong className="text-emerald-400">{dec.cost}</strong></span>
                    <span>Approver: <strong className="text-white">{dec.approver}</strong></span>
                  </div>
                </div>
              ))}
            </div>

            {/* Procurement Readiness Overview */}
            <div className="p-3 bg-[#070E1A] rounded-lg border border-[#C5A044]/25 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-[#C5A044]" />
                <span className="text-[#E2E8F0]">Procurement Readiness:</span>
                <span className="text-[#E8D5A5] font-semibold">17 Approved Items Ready for CDE / CSV Export</span>
              </div>
              <span className="text-[10px] font-mono text-[#64748B]">Schedule Spec 01</span>
            </div>
          </div>

        </div>

        {/* Section 11 Visual Explanation: Revision Drift Feedback Flow */}
        <div className="mt-6 pt-5 border-t border-white/10">
          <div className="text-[11px] font-mono uppercase text-[#E8D5A5] mb-3 text-center sm:text-left">
            Revision Drift Governance Mechanism Workflow:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="bg-[#102748] rounded-lg p-3 border border-white/10 text-center">
              <span className="text-[10px] font-mono text-[#64748B] block mb-1">State 01</span>
              <span className="text-xs font-bold text-white">Model Revision R03</span>
              <p className="text-[11px] text-[#64748B] mt-1">Floor specification approved against R03 bounds</p>
            </div>

            <div className="bg-[#102748] rounded-lg p-3 border border-amber-400/30 text-center">
              <span className="text-[10px] font-mono text-amber-400 block mb-1">State 02</span>
              <span className="text-xs font-bold text-amber-300">Model Updated to R04</span>
              <p className="text-[11px] text-[#64748B] mt-1">Architect alters room boundary &amp; subfloor datum</p>
            </div>

            <div className="bg-[#102748] rounded-lg p-3 border border-[#C5A044]/40 text-center">
              <span className="text-[10px] font-mono text-[#E8D5A5] block mb-1">State 03</span>
              <span className="text-xs font-bold text-[#E8D5A5]">Affected Approved Object Identified</span>
              <p className="text-[11px] text-[#64748B] mt-1">Revision-Drift Guard detects geometry clash with BIM-FL034</p>
            </div>

            <div className="bg-[#102748] rounded-lg p-3 border border-rose-400/30 text-center">
              <span className="text-[10px] font-mono text-rose-400 block mb-1">State 04</span>
              <span className="text-xs font-bold text-rose-300">Approval Reopened for Review</span>
              <p className="text-[11px] text-[#64748B] mt-1">Stakeholder notified to re-validate cost and material</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

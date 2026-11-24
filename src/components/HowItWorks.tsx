import React from 'react';
import { 
  FileCode, 
  Glasses, 
  CheckSquare, 
  FileCheck2, 
  FileOutput, 
  RefreshCw, 
  ArrowRight, 
  RotateCcw
} from 'lucide-react';
import { workflowSteps, WORKFLOW_CLOSING } from '../data/workflow';

export const HowItWorks: React.FC = () => {
  const stepIcons = [FileCode, Glasses, CheckSquare, FileCheck2, FileOutput, RefreshCw];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#C5A044]/15 text-[#102748] border border-[#C5A044]/30">
            The Decision Integrity Loop
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Manrope'] text-[#102748] tracking-tight">
            From Design Review to Procurement-Ready Decisions
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            The proposed ImmersiSpec Twin workflow connects every design decision with its underlying BIM element, from the first immersive walkthrough through approval, procurement and subsequent model revisions.
          </p>
        </div>

        {/* Closed-Loop Workflow Flowchart */}
        <div className="relative">
          
          {/* Main 6 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {workflowSteps.map((step, index) => {
              const StepIcon = stepIcons[index];
              const isRevisionDrift = step.code === 'PROTECT';

              return (
                <div
                  key={step.stepNumber}
                  className={`rounded-2xl p-6 sm:p-7 border transition-all duration-300 relative flex flex-col justify-between ${
                    isRevisionDrift
                      ? 'bg-[#102748] text-white border-[#C5A044] shadow-xl md:col-span-2 lg:col-span-1'
                      : 'bg-[#F8F9FC] text-[#172033] border-[#E2E8F0] hover:border-[#C5A044]/50 shadow-sm'
                  }`}
                >
                  {/* Step Header */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${
                          isRevisionDrift
                            ? 'bg-[#C5A044] text-[#102748]'
                            : 'bg-white text-[#102748] border border-[#E2E8F0]'
                        }`}
                      >
                        <StepIcon className="w-6 h-6" />
                      </div>

                      <div className="text-right">
                        <span
                          className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                            isRevisionDrift
                              ? 'bg-[#0F1C32] text-[#E8D5A5] border border-[#C5A044]/40'
                              : 'bg-white text-[#102748] border border-[#E2E8F0]'
                          }`}
                        >
                          STEP {step.stepNumber} // {step.code}
                        </span>
                      </div>
                    </div>

                    <h3
                      className={`text-lg font-bold font-['Manrope'] mb-2.5 ${
                        isRevisionDrift ? 'text-white' : 'text-[#102748]'
                      }`}
                    >
                      {step.heading}
                    </h3>

                    <p
                      className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                        isRevisionDrift ? 'text-[#E2E8F0]/90' : 'text-[#64748B]'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Visual Elements Pills */}
                  <div>
                    <div
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider mb-2 ${
                        isRevisionDrift ? 'text-[#E8D5A5]' : 'text-[#64748B]'
                      }`}
                    >
                      Key Workflow Elements:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {step.visualElements.map((el, i) => (
                        <span
                          key={i}
                          className={`px-2 py-1 rounded text-[11px] font-mono ${
                            isRevisionDrift
                              ? 'bg-[#0F1C32] text-[#E2E8F0] border border-white/10'
                              : 'bg-white text-[#102748] border border-[#E2E8F0]'
                          }`}
                        >
                          {el}
                        </span>
                      ))}
                    </div>

                    {/* Reconnect notice for step 6 */}
                    {isRevisionDrift && (
                      <div className="mt-4 pt-3 border-t border-white/15 flex items-center gap-2 text-xs text-[#E8D5A5] font-semibold">
                        <RotateCcw className="w-4 h-4 animate-spin text-[#C5A044]" style={{ animationDuration: '6s' }} />
                        <span>Reopens affected approvals back in Step 03 &amp; 04</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dedicated Flow Diagram Banner showing closed feedback loop */}
          <div className="mt-10 bg-[#0F1C32] rounded-2xl p-6 sm:p-8 border border-[#C5A044]/30 shadow-xl text-white">
            <div className="text-center mb-6">
              <span className="text-xs font-mono font-bold text-[#E8D5A5] uppercase tracking-wider">
                The Closed-Loop Decision Integrity Architecture
              </span>
            </div>

            {/* Desktop Visual Closed Loop Diagram */}
            <div className="hidden lg:block">
              <div className="flex items-center justify-between text-center relative px-4">
                {/* Step 1 */}
                <div className="flex-1 bg-[#102748] p-3 rounded-lg border border-white/10">
                  <span className="text-[10px] font-mono text-[#E8D5A5] block">01. INGEST</span>
                  <span className="text-xs font-bold text-white">Revit / IFC</span>
                </div>

                <ArrowRight className="w-5 h-5 text-[#C5A044] mx-2 flex-shrink-0" />

                {/* Step 2 */}
                <div className="flex-1 bg-[#102748] p-3 rounded-lg border border-white/10">
                  <span className="text-[10px] font-mono text-[#E8D5A5] block">02. REVIEW</span>
                  <span className="text-xs font-bold text-white">Web 3D / VR</span>
                </div>

                <ArrowRight className="w-5 h-5 text-[#C5A044] mx-2 flex-shrink-0" />

                {/* Step 3 (Decide - target of feedback loop) */}
                <div className="flex-1 bg-[#102748] p-3 rounded-lg border-2 border-[#C5A044] relative">
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#C5A044] text-[#102748] text-[9px] font-bold px-1.5 rounded">
                    LOOP TARGET
                  </div>
                  <span className="text-[10px] font-mono text-[#E8D5A5] block">03. DECIDE</span>
                  <span className="text-xs font-bold text-white">Decision Object</span>
                </div>

                <ArrowRight className="w-5 h-5 text-[#C5A044] mx-2 flex-shrink-0" />

                {/* Step 4 */}
                <div className="flex-1 bg-[#102748] p-3 rounded-lg border-2 border-[#C5A044] relative">
                  <span className="text-[10px] font-mono text-[#E8D5A5] block">04. APPROVE</span>
                  <span className="text-xs font-bold text-white">Sign-Off Receipt</span>
                </div>

                <ArrowRight className="w-5 h-5 text-[#C5A044] mx-2 flex-shrink-0" />

                {/* Step 5 */}
                <div className="flex-1 bg-[#102748] p-3 rounded-lg border border-white/10">
                  <span className="text-[10px] font-mono text-[#E8D5A5] block">05. EXPORT</span>
                  <span className="text-xs font-bold text-white">Procurement &amp; CDE</span>
                </div>
              </div>

              {/* Loop Back Line Graphic */}
              <div className="relative mt-4 pt-4 border-t border-dashed border-[#C5A044]/40 flex items-center justify-between text-xs text-[#E8D5A5] px-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C5A044] animate-ping" />
                  <span className="font-mono font-bold uppercase text-white">
                    06. Revision-Drift Guard:
                  </span>
                  <span>Detects geometric, type, or schedule changes in subsequent BIM models (e.g. R03 → R04)</span>
                </div>
                <div className="flex items-center gap-2 bg-[#102748] px-3 py-1.5 rounded-lg border border-[#C5A044]">
                  <RotateCcw className="w-4 h-4 text-[#C5A044]" />
                  <span className="text-xs font-bold text-white">Re-flags Affected Decisions for Authorised Re-approval</span>
                </div>
              </div>
            </div>

            {/* Mobile / Tablet summary */}
            <div className="lg:hidden space-y-3 text-xs">
              <div className="flex items-center justify-between p-2.5 bg-[#102748] rounded border border-white/10 font-mono">
                <span>INGEST → REVIEW → DECIDE → APPROVE → EXPORT</span>
              </div>
              <div className="p-3 bg-[#102748] rounded border border-[#C5A044] flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-[#C5A044] flex-shrink-0" />
                <span className="text-[#E8D5A5]">
                  Revision-Drift Guard automatically loops subsequent BIM model revisions back to the Decision and Approval stages.
                </span>
              </div>
            </div>

          </div>

          {/* Mandated Closing Statement */}
          <div className="mt-8 text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-[#102748] italic">
              &ldquo;{WORKFLOW_CLOSING}&rdquo;
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

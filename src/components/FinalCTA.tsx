import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

interface FinalCTAProps {
  onRequestPilot: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onRequestPilot }) => {
  return (
    <section className="bg-[#102748] text-white py-20 lg:py-28 relative overflow-hidden blueprint-grid-dark border-b border-[#0F1C32]">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C5A044]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Sub-label */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#0F1C32] text-[#E8D5A5] border border-[#C5A044]/40">
          <Compass className="w-3.5 h-3.5 text-[#C5A044]" />
          <span>UK Pilot Programme Openings</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Manrope'] text-white tracking-tight max-w-3xl mx-auto leading-tight">
          Help Shape the Future of Design Decision Governance
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-[#E2E8F0]/90 leading-relaxed max-w-2xl mx-auto font-light">
          ImmersiSpec Twin is being developed for interior design and fit-out organisations seeking clearer approvals, connected specifications and more traceable project decisions. Register your interest in the proposed pilot programme and explore the potential application of ImmersiSpec Twin within your organisation.
        </p>

        {/* CTA Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onRequestPilot}
            className="w-full sm:w-auto px-8 py-4 rounded-lg text-sm font-bold uppercase tracking-wider bg-[#C5A044] text-[#102748] hover:bg-[#E8D5A5] hover:shadow-2xl transition-all duration-200 shadow-xl flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#C5A044]"
          >
            <span>Request a Pilot</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Note */}
        <p className="text-xs font-mono text-[#E8D5A5]/70 pt-2">
          Currently in pre-MVP development.
        </p>

      </div>
    </section>
  );
};

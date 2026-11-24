import React from 'react';
import { ShieldCheck, RefreshCw, FileText, PackageCheck, CheckCircle2 } from 'lucide-react';

export const Innovation: React.FC = () => {
  const pillars = [
    {
      title: 'Model-Linked Decision Governance',
      description: 'Every design decision is intended to remain connected to its BIM object, specification, cost allowance and authorised approver.',
      icon: ShieldCheck,
      number: '01'
    },
    {
      title: 'Revision-Aware Approvals',
      description: 'Model changes that undermine earlier decisions will trigger affected approvals to be flagged and reopened.',
      icon: RefreshCw,
      number: '02'
    },
    {
      title: 'Commercial Decision Traceability',
      description: 'Structured decision receipts and approval records will help teams understand what was agreed and against which specification and revision.',
      icon: FileText,
      number: '03'
    },
    {
      title: 'Procurement Readiness',
      description: 'Approved decisions will be structured into procurement-ready schedules and export packages.',
      icon: PackageCheck,
      number: '04'
    }
  ];

  const intendedBenefits = [
    'Clearer approval responsibilities',
    'Improved decision traceability',
    'Better visibility of cost changes',
    'Earlier identification of outstanding decisions',
    'Reduced exposure to outdated approvals',
    'Improved procurement readiness'
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0F1C32] text-white relative blueprint-grid-dark border-b border-[#102748]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#C5A044]/20 text-[#E8D5A5] border border-[#C5A044]/30">
            Differentiated Approach
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Manrope'] text-white tracking-tight">
            Beyond Visualisation.{' '}
            <span className="text-[#C5A044]">Built for Decision Integrity.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#E2E8F0]/80 leading-relaxed font-light">
            Immersive BIM and VR visualisations already exist within the market. The proposed innovation of ImmersiSpec Twin is the decision-governance layer that connects immersive reviews with structured, model-linked commercial approvals.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar) => {
            const PillarIcon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="bg-[#102748]/90 rounded-xl p-6 border border-[#C5A044]/25 hover:border-[#C5A044] transition-all duration-300 group flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-[#0F1C32] text-[#C5A044] border border-[#C5A044]/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <PillarIcon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#E8D5A5]/60">{pillar.number}</span>
                  </div>

                  <h3 className="text-base font-bold font-['Manrope'] text-white mb-2 group-hover:text-[#E8D5A5] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#E2E8F0]/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 text-[10px] uppercase font-mono text-[#E8D5A5]/60">
                  Core Innovation Pillar
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Quote Box */}
        <div className="bg-[#102748] rounded-xl p-6 sm:p-8 border-l-4 border-[#C5A044] mb-16 shadow-xl max-w-4xl mx-auto text-center sm:text-left">
          <p className="text-base sm:text-lg font-medium text-white italic leading-relaxed">
            &ldquo;The innovation is not VR viewing itself. It is the proposed connection between spatial design review, commercial decisions and auditable project records.&rdquo;
          </p>
        </div>

        {/* 8.4 Expected Customer Benefits Strip */}
        <div className="bg-[#102748]/60 rounded-2xl p-6 sm:p-8 border border-white/10 backdrop-blur-sm">
          <div className="text-center mb-6">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#E8D5A5]">
              Intended Customer Benefits
            </h3>
            <p className="text-xs text-[#E2E8F0]/70 mt-1">
              Anticipated workflow improvements designed for fit-out and refurbishment teams (subject to pilot validation)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {intendedBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#0F1C32] rounded-lg p-3.5 border border-[#C5A044]/20 flex items-center gap-3 hover:border-[#C5A044]/60 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-[#C5A044] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-white">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

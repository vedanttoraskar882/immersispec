import React from 'react';
import { TargetAudience } from './TargetAudience';
import { MarketPositioning } from './MarketPositioning';
import { Pricing } from './Pricing';

interface MarketPricingProps {
  onRequestPilot: (planContext?: string) => void;
}

export const MarketPricing: React.FC<MarketPricingProps> = ({ onRequestPilot }) => {
  return (
    <section id="market-pricing" className="py-20 lg:py-28 bg-[#F8F9FC] border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#102748]/5 text-[#102748] border border-[#102748]/15">
            Commercial Alignment
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Manrope'] text-[#102748] tracking-tight">
            Designed for the UK Interior Fit-Out Industry
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            ImmersiSpec Twin is being developed for organisations that manage complex design decisions, multiple stakeholders and structured project information across interior fit-out and refurbishment projects.
          </p>
        </div>

        {/* 13.1 & 13.2 Customer Segments & Primary Buyers */}
        <TargetAudience />

        {/* 13.3 Market Positioning & Comparison Table */}
        <MarketPositioning />

        {/* 14. Exact Pricing Plans */}
        <Pricing onSelectPlan={(planName) => onRequestPilot(`${planName} Plan`)} />

      </div>
    </section>
  );
};

import React from 'react';
import { Check, ArrowRight, Info } from 'lucide-react';
import { pricingPlans, PRICING_DISCLAIMER } from '../data/pricingPlans';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <div className="mt-20 pt-16 border-t border-[#E2E8F0]">
      
      {/* Section Subheading */}
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#C5A044]/15 text-[#102748] border border-[#C5A044]/30">
          Commercial Model
        </div>
        <h3 className="text-3xl sm:text-4xl font-extrabold font-['Manrope'] text-[#102748] tracking-tight">
          Proposed Pricing Plans
        </h3>
        <p className="text-base text-[#64748B] leading-relaxed">
          Flexible commercial options for project pilots, design studios, growing practices and enterprise organisations.
        </p>
      </div>

      {/* 4 Pricing Cards: 1 row on large desktop (lg:grid-cols-4), 2 col on tablet (md:grid-cols-2), 1 col on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
              plan.highlighted
                ? 'bg-white border-2 border-[#C5A044] shadow-xl hover:-translate-y-1'
                : 'bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md hover:-translate-y-1'
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C5A044] text-[#102748] text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
                Studio Edition
              </div>
            )}

            <div>
              {/* Plan Name */}
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold font-['Manrope'] text-[#102748]">
                  {plan.name}
                </h4>
                <span className="text-xs font-mono text-[#64748B]">Plan</span>
              </div>

              {/* Price Display */}
              <div className="mb-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-3xl xl:text-4xl font-extrabold font-['Manrope'] text-[#102748] tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs font-medium text-[#64748B]">
                    {plan.billingPeriod}
                  </span>
                </div>

                {/* Additional charge displayed directly below monthly price for Studio and Pro */}
                {plan.additionalCharge ? (
                  <div className="mt-1 text-xs font-semibold text-[#C5A044] flex items-center gap-1">
                    <span>{plan.additionalCharge}</span>
                  </div>
                ) : (
                  <div className="mt-1 text-xs text-transparent select-none">
                    &nbsp;
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-xs text-[#64748B] leading-relaxed mb-6 pt-2 border-t border-[#F8F9FC]">
                {plan.description}
              </p>

              {/* Features List */}
              <div className="space-y-2.5 mb-8">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#102748] block">
                  Included Capabilities:
                </span>
                <ul className="space-y-2">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#172033]">
                      <Check className="w-4 h-4 text-[#C5A044] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t border-[#F8F9FC]">
              <button
                type="button"
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#C5A044] ${
                  plan.highlighted
                    ? 'bg-[#C5A044] text-[#102748] hover:bg-[#b08e38] shadow-md'
                    : 'bg-[#102748] text-white hover:bg-[#0F1C32] shadow-sm'
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Prominent Mandatory Pricing Disclaimer */}
      <div className="mt-10 p-5 bg-white rounded-xl border border-[#E2E8F0] shadow-sm max-w-4xl mx-auto flex items-start gap-3">
        <Info className="w-5 h-5 text-[#C5A044] flex-shrink-0 mt-0.5" />
        <div className="text-xs text-[#64748B] leading-relaxed">
          <strong className="text-[#102748] block mb-0.5 font-semibold">Indicative Commercial Terms:</strong>
          {PRICING_DISCLAIMER}
        </div>
      </div>

    </div>
  );
};

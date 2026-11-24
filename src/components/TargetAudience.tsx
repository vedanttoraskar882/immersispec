import React from 'react';
import { Palette, HardHat, Building2, Briefcase, CheckCircle2, Users } from 'lucide-react';
import { customerSegments, primaryBuyers } from '../data/targetAudience';

export const TargetAudience: React.FC = () => {
  const iconMap = {
    Palette,
    HardHat,
    Building2,
    Briefcase
  };

  return (
    <div className="space-y-16">
      
      {/* 13.1 Target Customer Segments */}
      <div>
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#C5A044]/15 text-[#102748] border border-[#C5A044]/30 mb-2">
            Target Segments
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-['Manrope'] text-[#102748]">
            Customer Segments &amp; Industry Alignment
          </h3>
          <p className="text-sm text-[#64748B] mt-1">
            Tailored value propositions addressing the real-world friction of UK fit-out workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customerSegments.map((segment) => {
            const IconComponent = iconMap[segment.iconName];
            return (
              <div
                key={segment.id}
                className="bg-white rounded-xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-[#C5A044]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-[#F8F9FC] text-[#102748] border border-[#E2E8F0] flex items-center justify-center group-hover:bg-[#102748] group-hover:text-[#E8D5A5] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {segment.badge && (
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#C5A044]/15 text-[#102748] border border-[#C5A044]/30">
                        {segment.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="text-base font-bold font-['Manrope'] text-[#102748] mb-3 group-hover:text-[#C5A044] transition-colors">
                    {segment.name}
                  </h4>

                  <div className="mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#64748B] block mb-1.5">
                      Core Challenges:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#64748B]">
                      {segment.coreChallenges.map((c, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F8F9FC] bg-[#F8F9FC]/70 rounded-lg p-2.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#102748] block mb-1">
                    Proposed Value:
                  </span>
                  <p className="text-xs text-[#172033] leading-normal font-medium">
                    {segment.proposedValue}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 13.2 Primary Buyers */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
        <div className="max-w-3xl mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-[#C5A044]" />
            <h3 className="text-xl font-bold font-['Manrope'] text-[#102748]">
              {primaryBuyers.title}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            {primaryBuyers.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {primaryBuyers.roles.map((buyer, idx) => (
            <div key={idx} className="bg-[#F8F9FC] p-4 rounded-xl border border-[#E2E8F0] space-y-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A044]" />
                <span className="font-bold text-sm text-[#102748]">{buyer.title}</span>
              </div>
              <p className="text-xs text-[#64748B] pl-6 leading-relaxed">
                {buyer.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

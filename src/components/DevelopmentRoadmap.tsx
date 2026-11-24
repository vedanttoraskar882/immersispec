import React from 'react';
import { Calendar, CheckCircle2, AlertCircle } from 'lucide-react';
import { roadmapData, ROADMAP_DISCLAIMER } from '../data/roadmap';

export const DevelopmentRoadmap: React.FC = () => {
  return (
    <div>
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#C5A044]/15 text-[#102748] border border-[#C5A044]/30 mb-2">
          Future Outlook
        </div>
        <h3 className="text-2xl font-bold font-['Manrope'] text-[#102748]">
          Planned Development Roadmap
        </h3>
        <p className="text-sm text-[#64748B] mt-1">
          A phased trajectory from pre-MVP discovery to international market expansion.
        </p>
      </div>

      {/* Roadmap Grid (Horizontal on desktop, vertical on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {roadmapData.map((item, index) => (
          <div
            key={item.phase}
            className="bg-white rounded-xl p-6 border border-[#E2E8F0] shadow-sm relative flex flex-col justify-between group hover:border-[#C5A044] transition-colors"
          >
            {/* Top Connector Line for desktop */}
            <div className="hidden lg:block absolute -top-3 left-6 right-6 h-0.5 bg-gradient-to-r from-[#102748] to-[#C5A044] opacity-20" />

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#102748] text-[#E8D5A5]">
                  {item.phase}
                </span>
                <span className="text-xs font-medium text-[#64748B] flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A044]" />
                  {item.period}
                </span>
              </div>

              <h4 className="text-base font-bold text-[#102748] mb-4 group-hover:text-[#C5A044] transition-colors">
                {item.title}
              </h4>

              <ul className="space-y-2 text-xs text-[#64748B]">
                {item.items.map((milestone, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A044] flex-shrink-0 mt-0.5" />
                    <span>{milestone}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-3 border-t border-[#F8F9FC] text-[10px] font-mono text-[#64748B] uppercase">
              Target Phase 0{index + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Mandatory Disclaimer */}
      <div className="mt-8 p-4 bg-[#F8F9FC] rounded-xl border border-[#E2E8F0] flex items-start gap-3 text-xs text-[#64748B] max-w-3xl">
        <AlertCircle className="w-4 h-4 text-[#C5A044] flex-shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-[#102748]">Roadmap Notice:</strong> {ROADMAP_DISCLAIMER}
        </p>
      </div>
    </div>
  );
};

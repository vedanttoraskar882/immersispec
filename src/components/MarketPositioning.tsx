import React from 'react';
import { Check } from 'lucide-react';
import { comparisonData } from '../data/targetAudience';

export const MarketPositioning: React.FC = () => {
  return (
    <div className="mt-16">
      
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#C5A044]/15 text-[#102748] border border-[#C5A044]/30 mb-2">
          Ecosystem Fit
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold font-['Manrope'] text-[#102748]">
          Complementing Existing Design and BIM Tools
        </h3>
        <p className="text-sm text-[#64748B] mt-2 leading-relaxed">
          ImmersiSpec Twin is not intended to replace Revit, Autodesk Construction Cloud or existing design and project management tools. It is being developed to connect existing workflows with a structured, spatial and traceable decision-governance layer.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#102748] text-white">
                <th scope="col" className="py-4 px-6 text-xs font-mono font-bold uppercase tracking-wider w-1/4">
                  Capability Category
                </th>
                <th scope="col" className="py-4 px-6 text-xs font-mono font-bold uppercase tracking-wider w-3/8 text-[#64748B] bg-[#0F1C32]">
                  Traditional Approach
                </th>
                <th scope="col" className="py-4 px-6 text-xs font-mono font-bold uppercase tracking-wider w-3/8 text-[#E8D5A5] bg-[#102748] border-l-2 border-[#C5A044]">
                  ImmersiSpec Twin Proposed Approach
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] text-xs sm:text-sm">
              {comparisonData.map((row, index) => (
                <tr key={index} className="hover:bg-[#F8F9FC]/80 transition-colors">
                  <td className="py-4 px-6 font-bold text-[#102748]">
                    {row.capability}
                  </td>
                  <td className="py-4 px-6 text-[#64748B] bg-slate-50/50">
                    {row.traditional}
                  </td>
                  <td className="py-4 px-6 font-semibold text-[#102748] bg-amber-50/30 border-l-2 border-[#C5A044] flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A044] flex-shrink-0" />
                    <span>{row.proposed}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-[#F8F9FC] border-t border-[#E2E8F0] text-center text-xs text-[#64748B]">
          This table illustrates a comparison of workflow approaches, not a verified feature-by-feature competitor audit.
        </div>
      </div>

    </div>
  );
};

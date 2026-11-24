import React from 'react';
import { Cpu, Users, CheckSquare } from 'lucide-react';

export const DevelopmentApproach: React.FC = () => {
  const mvpComponents = [
    'Rule-based workflow checks',
    'BIM object matching',
    'Structured decision records',
    'Role-based approval logic',
    'Revision tracking',
    'Procurement export workflows'
  ];

  const plannedHires = [
    { role: 'Technical Co-founder / CTO', focus: 'BIM data pipelines & scalable cloud architecture' },
    { role: 'Full-Stack / 3D Engineer', focus: 'Web3D/three.js spatial interface & UI workflows' },
    { role: 'Part-Time XR Specialist', focus: 'Extended reality device integration & human-scale viewing' },
    { role: 'Specialist Industry Advisers', focus: 'Construction contracts, ISO 19650 & procurement governance' }
  ];

  return (
    <div className="bg-[#F8F9FC] rounded-2xl p-6 sm:p-10 border border-[#E2E8F0] mb-16">
      
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#102748]/5 text-[#102748] border border-[#102748]/15 mb-2">
          Engineering Strategy
        </div>
        <h3 className="text-2xl font-bold font-['Manrope'] text-[#102748]">
          Developing a Practical Decision-Governance Solution
        </h3>
        <p className="text-sm text-[#64748B] mt-2 leading-relaxed">
          The proposed MVP prioritises deterministic, rule-based workflow logic and robust BIM object matching rather than overcomplicating initial development. Advanced AI is not required for the initial MVP; AI-assisted review summaries and issue ranking may be considered during later development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* MVP Architecture Scope */}
        <div className="bg-white rounded-xl p-6 border border-[#E2E8F0] shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#102748] text-[#E8D5A5] flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#102748]">Initial MVP Foundation</h4>
              <p className="text-xs text-[#64748B]">Deterministic, reliable decision mechanics</p>
            </div>
          </div>

          <p className="text-xs text-[#64748B] mb-4">
            The initial release focuses on core integrity without experimental AI overhead:
          </p>

          <ul className="space-y-2 text-xs text-[#172033]">
            {mvpComponents.map((comp, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-[#C5A044] flex-shrink-0" />
                <span>{comp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Planned Team Expansion */}
        <div className="bg-white rounded-xl p-6 border border-[#E2E8F0] shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#C5A044]/15 text-[#C5A044] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#102748]">Planned Future Team Expansion</h4>
              <p className="text-xs text-[#64748B]">Planned hires to support technical scaling</p>
            </div>
          </div>

          <p className="text-xs text-[#64748B] mb-4">
            Future roles planned as development milestones and funding progress (not currently active team members):
          </p>

          <div className="space-y-2.5">
            {plannedHires.map((hire, idx) => (
              <div key={idx} className="p-2.5 rounded-lg bg-[#F8F9FC] border border-[#E2E8F0] text-xs">
                <span className="font-semibold text-[#102748] block">{hire.role}</span>
                <span className="text-[11px] text-[#64748B]">{hire.focus}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

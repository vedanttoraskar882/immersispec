import React from 'react';
import { 
  Split, 
  GitPullRequestDraft, 
  FileSpreadsheet, 
  AlertTriangle, 
  Hourglass, 
  UserX 
} from 'lucide-react';

export const IndustryProblems: React.FC = () => {
  const problems = [
    {
      id: 'p1',
      title: 'Fragmented Approvals',
      description: 'Client decisions are recorded across emails, meetings and separate documents.',
      icon: Split,
      accent: 'border-amber-200 group-hover:border-[#C5A044]'
    },
    {
      id: 'p2',
      title: 'Outdated Design Revisions',
      description: 'Previously approved selections may no longer match the latest BIM model.',
      icon: GitPullRequestDraft,
      accent: 'border-red-200 group-hover:border-red-400'
    },
    {
      id: 'p3',
      title: 'Disconnected Specifications',
      description: 'Design choices, material specifications and cost information are maintained separately.',
      icon: FileSpreadsheet,
      accent: 'border-blue-200 group-hover:border-blue-400'
    },
    {
      id: 'p4',
      title: 'Late Project Changes',
      description: 'Delayed approvals and substitutions can create construction variations and additional work.',
      icon: AlertTriangle,
      accent: 'border-orange-200 group-hover:border-orange-400'
    },
    {
      id: 'p5',
      title: 'Procurement Delays',
      description: 'Outstanding decisions and supplier lead times can affect project delivery schedules.',
      icon: Hourglass,
      accent: 'border-purple-200 group-hover:border-purple-400'
    },
    {
      id: 'p6',
      title: 'Limited Accountability',
      description: 'Project teams may struggle to establish who authorised a particular decision.',
      icon: UserX,
      accent: 'border-slate-200 group-hover:border-[#102748]'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8F9FC] border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#102748]/5 text-[#102748] border border-[#102748]/15">
            The Industry Challenge
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Manrope'] text-[#102748] tracking-tight">
            The Gap Between Design Approval and Project Delivery
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Interior fit-out projects involve hundreds of decisions concerning finishes, joinery, lighting, furniture and layouts. When these decisions are managed through disconnected emails, spreadsheets, renders and PDF documents, project teams can lose visibility of what has been approved, by whom, against which revision and at what cost.
          </p>
        </div>

        {/* 6 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl p-6 sm:p-7 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#F8F9FC] border border-[#E2E8F0] flex items-center justify-center text-[#102748] group-hover:bg-[#102748] group-hover:text-[#E8D5A5] transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#64748B]/60">0{index + 1}</span>
                  </div>

                  <h3 className="text-lg font-bold font-['Manrope'] text-[#102748] mb-2.5 group-hover:text-[#C5A044] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F8F9FC] flex items-center text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">
                  <span>Downstream Project Risk</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

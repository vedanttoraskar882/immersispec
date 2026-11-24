import React from 'react';
import { GraduationCap, Award, Compass, Building, Briefcase, CheckCircle2 } from 'lucide-react';

export const FounderProfile: React.FC = () => {
  const qualifications = [
    'MSc BIM in Design, Construction & Operations (Merit)',
    'University of the West of England, UK',
    "Bachelor's in Architecture, University of Mumbai",
    'UK BIM placement at VINCI Construction',
    'Revit and multidisciplinary BIM coordination',
    'ISO 19650 information management experience',
    'Interior fit-out and FF&E experience',
    'VR research and simulation development'
  ];

  const responsibilities = [
    'Customer discovery',
    'Product requirements',
    'BIM workflow design',
    'Market validation',
    'Pilot delivery',
    'Early sales and commercial development'
  ];

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 border border-[#E2E8F0] shadow-sm mb-16 relative overflow-hidden">
      
      {/* Subtle architectural gold accent at top edge */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#102748] via-[#C5A044] to-[#102748]" />

      {/* Leadership Header (NO founder photo or avatar placeholder) */}
      <div className="border-b border-[#E2E8F0] pb-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-[#102748]/5 text-[#102748] border border-[#102748]/15 mb-2 font-semibold">
              Venture Leadership
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold font-['Manrope'] text-[#102748] tracking-tight">
              Hetvi Mehta
            </h3>
            <p className="text-base font-semibold text-[#C5A044] mt-1">
              Founder, ImmersiSpec Twin
            </p>
            <p className="text-xs text-[#64748B] mt-0.5 font-mono">
              BIM &amp; Architectural Technology Professional
            </p>
          </div>

          {/* Quick Academic & Industry Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F8F9FC] border border-[#E2E8F0] text-xs font-medium text-[#172033]">
              <GraduationCap className="w-4 h-4 text-[#C5A044] flex-shrink-0" />
              <span>MSc BIM (Merit), UWE Bristol</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F8F9FC] border border-[#E2E8F0] text-xs font-medium text-[#172033]">
              <Compass className="w-4 h-4 text-[#C5A044] flex-shrink-0" />
              <span>B.Arch, University of Mumbai</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F8F9FC] border border-[#E2E8F0] text-xs font-medium text-[#172033]">
              <Building className="w-4 h-4 text-[#C5A044] flex-shrink-0" />
              <span>UK Placement, VINCI Construction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Founder Background & Track Record */}
      <div className="space-y-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative (lg:col-span-12) */}
          <div className="space-y-4 text-sm sm:text-base text-[#64748B] leading-relaxed">
            <p>
              Hetvi Mehta is an architecture and Building Information Modelling professional with experience in digital design coordination, interior fit-out, technical documentation, specification management and immersive technology.
            </p>
            <p>
              She holds an MSc in BIM in Design, Construction and Operations with Merit from the University of the West of England and a Bachelor&apos;s degree in Architecture from the University of Mumbai.
            </p>
            <p>
              Her UK BIM placement at VINCI Construction provided practical experience in Revit modelling, multidisciplinary coordination, ISO 19650 information management and Autodesk Construction Cloud workflows. During her placement, she developed a VR-based construction safety simulation aligned with CDM 2015, which was used to brief 20 site personnel. Her Master&apos;s dissertation explored the implementation of virtual reality technology in the real estate marketplace.
            </p>
            <p>
              Her wider architectural experience includes residential, workplace, commercial and hospitality projects, including FF&amp;E schedules, bespoke joinery, material specifications, supplier coordination and site inspections.
            </p>
          </div>

        </div>

        {/* Qualifications & Planned Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#E2E8F0]">
          
          {/* Qualifications Bento Box */}
          <div className="bg-[#F8F9FC] rounded-xl p-5 sm:p-6 border border-[#E2E8F0] shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#102748] text-[#E8D5A5] flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#102748]">
                  Founder Qualifications
                </h4>
                <p className="text-[11px] text-[#64748B]">Professional credentials &amp; technical proficiencies</p>
              </div>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#172033]">
              {qualifications.map((q, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A044] mt-2 flex-shrink-0" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Founder Responsibilities Bento Box */}
          <div className="bg-[#F8F9FC] rounded-xl p-5 sm:p-6 border border-[#E2E8F0] shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#C5A044]/20 text-[#102748] flex items-center justify-center border border-[#C5A044]/30">
                <Briefcase className="w-4 h-4 text-[#C5A044]" />
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#102748]">
                  Founder Responsibilities
                </h4>
                <p className="text-[11px] text-[#64748B]">Hetvi leads strategic execution across:</p>
              </div>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#172033]">
              {responsibilities.map((r, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="font-medium">{r}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

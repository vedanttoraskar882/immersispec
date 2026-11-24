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
    <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Avatar & Designation */}
        <div className="lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left space-y-4">
          
          {/* Neutral initials avatar placeholder (HM) */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-[#102748] to-[#0F1C32] p-[2px] shadow-lg">
            <div className="w-full h-full bg-[#102748] rounded-[14px] flex items-center justify-center border border-[#C5A044]/40">
              <span className="text-3xl sm:text-4xl font-extrabold font-['Manrope'] text-[#E8D5A5] tracking-wider">
                HM
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold font-['Manrope'] text-[#102748]">
              Hetvi Mehta
            </h3>
            <p className="text-sm font-semibold text-[#C5A044] mt-0.5">
              Founder, ImmersiSpec Twin
            </p>
            <p className="text-xs text-[#64748B] mt-1 font-mono">
              BIM &amp; Architectural Technology Professional
            </p>
          </div>

          <div className="w-full pt-4 border-t border-[#E2E8F0] space-y-2">
            <div className="flex items-center gap-2 text-xs text-[#172033]">
              <GraduationCap className="w-4 h-4 text-[#C5A044] flex-shrink-0" />
              <span>MSc BIM (Merit), UWE Bristol</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#172033]">
              <Compass className="w-4 h-4 text-[#C5A044] flex-shrink-0" />
              <span>B.Arch, University of Mumbai</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#172033]">
              <Building className="w-4 h-4 text-[#C5A044] flex-shrink-0" />
              <span>UK Placement, VINCI Construction</span>
            </div>
          </div>
        </div>

        {/* Right Column: Founder Background, Experience & Responsibilities */}
        <div className="lg:col-span-8 space-y-6">
          
          <div className="space-y-4 text-sm text-[#64748B] leading-relaxed">
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

          {/* Qualifications & Planned Leadership */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#E2E8F0]">
            
            {/* Qualifications */}
            <div className="bg-[#F8F9FC] rounded-xl p-4 border border-[#E2E8F0]">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-[#C5A044]" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#102748]">
                  Founder Qualifications
                </h4>
              </div>
              <ul className="space-y-1.5 text-xs text-[#172033]">
                {qualifications.map((q, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A044] mt-1.5 flex-shrink-0" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Founder Responsibilities */}
            <div className="bg-[#F8F9FC] rounded-xl p-4 border border-[#E2E8F0]">
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="w-4 h-4 text-[#C5A044]" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#102748]">
                  Founder Responsibilities
                </h4>
              </div>
              <p className="text-[11px] text-[#64748B] mb-2">Hetvi will lead:</p>
              <ul className="space-y-1.5 text-xs text-[#172033]">
                {responsibilities.map((r, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

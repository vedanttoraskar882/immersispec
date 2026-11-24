import React from 'react';
import { 
  Boxes, 
  ShieldCheck, 
  Layers3, 
  GitCompare, 
  FileCheck, 
  Clock, 
  LayoutDashboard, 
  Gauge, 
  FileOutput
} from 'lucide-react';
import { platformModules } from '../data/platformModules';
import type { PlatformModule } from '../data/platformModules';
import { PlatformPreview } from './PlatformPreview';

interface PlatformProps {
  onRequestPilot: () => void;
}

export const Platform: React.FC<PlatformProps> = ({ onRequestPilot: _onRequestPilot }) => {
  const iconMap = {
    Boxes,
    ShieldCheck,
    Layers3,
    GitCompare,
    FileCheck,
    Clock,
    LayoutDashboard,
    Gauge,
    FileOutput
  };

  return (
    <section id="platform" className="py-20 lg:py-28 bg-[#F8F9FC] border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#102748]/5 text-[#102748] border border-[#102748]/15">
            Planned Platform Modules
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Manrope'] text-[#102748] tracking-tight">
            Nine Capabilities.{' '}
            <span className="text-[#C5A044]">One Connected Decision Workflow.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            ImmersiSpec Twin is being designed around nine complementary platform capabilities that connect immersive design reviews with structured approvals, commercial information, revision management and procurement readiness.
          </p>
        </div>

        {/* 9 Modules Grid: 3 columns desktop, 2 columns tablet, 1 column mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {platformModules.map((module: PlatformModule) => {
            const IconComponent = iconMap[module.iconName];
            return (
              <div
                key={module.id}
                className="bg-white rounded-xl p-6 sm:p-7 border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between hover:border-[#C5A044]/60"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-lg bg-[#F8F9FC] text-[#102748] border border-[#E2E8F0] flex items-center justify-center group-hover:bg-[#102748] group-hover:text-[#E8D5A5] transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#C5A044] bg-[#C5A044]/10 px-2 py-0.5 rounded border border-[#C5A044]/20">
                      MODULE {module.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-['Manrope'] text-[#102748] mb-2.5 group-hover:text-[#C5A044] transition-colors">
                    {module.name}
                  </h3>

                  <p className="text-sm text-[#64748B] leading-relaxed mb-4">
                    {module.description}
                  </p>
                </div>

                {/* Intended Benefit Box */}
                <div className="pt-4 border-t border-[#F8F9FC] bg-[#F8F9FC]/60 rounded-lg p-3 -mx-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#102748] block mb-1">
                    Intended Benefit:
                  </span>
                  <p className="text-xs text-[#172033] font-medium leading-normal">
                    {module.intendedBenefit}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section 11: Conceptual Dashboard Mockup */}
        <PlatformPreview />

      </div>
    </section>
  );
};

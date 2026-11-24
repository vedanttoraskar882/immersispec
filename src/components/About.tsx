import React from 'react';
import { FounderProfile } from './FounderProfile';
import { DevelopmentApproach } from './DevelopmentApproach';
import { DevelopmentRoadmap } from './DevelopmentRoadmap';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Intro */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#102748]/5 text-[#102748] border border-[#102748]/15">
            About the Venture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Manrope'] text-[#102748] tracking-tight">
            Bridging the Gap Between Design Intent and Project Delivery
          </h2>
          <div className="space-y-3 text-base sm:text-lg text-[#64748B] leading-relaxed text-left sm:text-center">
            <p>
              ImmersiSpec Twin is a UK-focused construction technology business being developed to improve how interior fit-out and refurbishment decisions are reviewed, approved and transferred into project delivery workflows.
            </p>
            <p className="text-sm sm:text-base">
              The platform is intended to complement existing Building Information Modelling systems by introducing a structured decision layer that connects stakeholders, design objects, specifications, costs and procurement information. The business addresses the disconnect between client-facing design reviews and the formal project information maintained by designers, contractors and project delivery teams.
            </p>
          </div>
        </div>

        {/* 9.1 Founder Profile */}
        <FounderProfile />

        {/* 9.2 Development Approach */}
        <DevelopmentApproach />

        {/* 9.3 Development Roadmap */}
        <DevelopmentRoadmap />

      </div>
    </section>
  );
};

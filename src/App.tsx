import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IndustryProblems } from './components/IndustryProblems';
import { ProposedSolution } from './components/ProposedSolution';
import { Innovation } from './components/Innovation';
import { About } from './components/About';
import { Platform } from './components/Platform';
import { HowItWorks } from './components/HowItWorks';
import { MarketPricing } from './components/MarketPricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { PilotRequestModal } from './components/PilotRequestModal';
import { PrivacyModal } from './components/PrivacyModal';
import { DevelopmentStageModal } from './components/DevelopmentStageModal';

export const App: React.FC = () => {
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);
  const [pilotPlanContext, setPilotPlanContext] = useState<string | undefined>(undefined);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isDevStageModalOpen, setIsDevStageModalOpen] = useState(false);

  const handleOpenPilotModal = (planContext?: string) => {
    setPilotPlanContext(planContext);
    setIsPilotModalOpen(true);
  };

  const handleScrollToPlatform = () => {
    const el = document.getElementById('platform');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC] text-[#172033] flex flex-col font-sans selection:bg-[#C5A044]/20 selection:text-[#102748]">
      {/* Sticky Header Navigation */}
      <Header onRequestPilot={() => handleOpenPilotModal()} />

      <main className="flex-grow">
        {/* SECTION 1: HOME (Hero + Industry Problems + Proposed Solution + Innovation Pillars + Expected Benefits) */}
        <Hero
          onRequestPilot={() => handleOpenPilotModal()}
          onExplorePlatform={handleScrollToPlatform}
        />
        <IndustryProblems />
        <ProposedSolution />
        <Innovation />

        {/* SECTION 2: ABOUT (Venture Introduction + Founder Profile + Development Approach + Planned Roadmap) */}
        <About />

        {/* SECTION 3: PLATFORM (9 Platform Capabilities Grid + Conceptual Dashboard Preview Mockup) */}
        <Platform onRequestPilot={() => handleOpenPilotModal()} />

        {/* SECTION 4: HOW IT WORKS (Decision Integrity Loop + Closed Loop Flowchart) */}
        <HowItWorks />

        {/* SECTION 5: MARKET & PRICING (Customer Segments + Primary Buyers + Ecosystem Positioning + Exact 4 Pricing Plans) */}
        <MarketPricing onRequestPilot={(context) => handleOpenPilotModal(context)} />

        {/* SECTION 6: FAQ (12 Questions Accordion) */}
        <FAQ />

        {/* FINAL CLOSING CTA BANNER */}
        <FinalCTA onRequestPilot={() => handleOpenPilotModal()} />
      </main>

      {/* SECTION 7: FOOTER */}
      <Footer
        onRequestPilot={() => handleOpenPilotModal()}
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
        onOpenDevStage={() => setIsDevStageModalOpen(true)}
      />

      {/* Reusable Modals */}
      <PilotRequestModal
        isOpen={isPilotModalOpen}
        onClose={() => setIsPilotModalOpen(false)}
        initialPlanContext={pilotPlanContext}
      />

      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      <DevelopmentStageModal
        isOpen={isDevStageModalOpen}
        onClose={() => setIsDevStageModalOpen(false)}
      />
    </div>
  );
};

export default App;

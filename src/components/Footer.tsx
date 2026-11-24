import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

interface FooterProps {
  onRequestPilot: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onRequestPilot,
  onOpenPrivacy
}) => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-[#070E1A] text-white pt-16 pb-12 border-t border-[#102748]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Content Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 01: Brand (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center">
              <span className="text-xl sm:text-2xl font-extrabold font-['Manrope'] text-white tracking-tight">
                ImmersiSpec <span className="text-[#C5A044]">Twin</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#E2E8F0]/70 leading-relaxed max-w-sm">
              A proposed BIM-linked immersive approval, specification and change-governance platform for UK interior fit-out and refurbishment.
            </p>
          </div>

          {/* Column 02: Quick Links (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#E8D5A5]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#E2E8F0]/80">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleScrollTo(e, 'home')}
                  className="hover:text-[#C5A044] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleScrollTo(e, 'about')}
                  className="hover:text-[#C5A044] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#platform"
                  onClick={(e) => handleScrollTo(e, 'platform')}
                  className="hover:text-[#C5A044] transition-colors"
                >
                  Platform
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => handleScrollTo(e, 'how-it-works')}
                  className="hover:text-[#C5A044] transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#market-pricing"
                  onClick={(e) => handleScrollTo(e, 'market-pricing')}
                  className="hover:text-[#C5A044] transition-colors"
                >
                  Market &amp; Pricing
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleScrollTo(e, 'faq')}
                  className="hover:text-[#C5A044] transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 03: Platform Capabilities (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#E8D5A5]">
              Platform Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-[#E2E8F0]/80">
              <li>
                <a
                  href="#platform"
                  onClick={(e) => handleScrollTo(e, 'platform')}
                  className="hover:text-[#C5A044] transition-colors"
                >
                  BIM-Linked Decision Objects
                </a>
              </li>
              <li>
                <a
                  href="#platform"
                  onClick={(e) => handleScrollTo(e, 'platform')}
                  className="hover:text-[#C5A044] transition-colors"
                >
                  Role-Based Approval Matrix
                </a>
              </li>
              <li>
                <a
                  href="#platform"
                  onClick={(e) => handleScrollTo(e, 'platform')}
                  className="hover:text-[#C5A044] transition-colors"
                >
                  Revision-Drift Guard
                </a>
              </li>
              <li>
                <a
                  href="#platform"
                  onClick={(e) => handleScrollTo(e, 'platform')}
                  className="hover:text-[#C5A044] transition-colors"
                >
                  Decision Integrity Index
                </a>
              </li>
              <li>
                <a
                  href="#platform"
                  onClick={(e) => handleScrollTo(e, 'platform')}
                  className="hover:text-[#C5A044] transition-colors"
                >
                  Procurement-Ready Export
                </a>
              </li>
            </ul>
          </div>

          {/* Column 04: Business Enquiries (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#E8D5A5]">
              Business Enquiries
            </h4>
            <div className="flex items-center gap-1.5 text-xs text-[#E2E8F0]/80">
              <MapPin className="w-3.5 h-3.5 text-[#C5A044]" />
              <span>United Kingdom</span>
            </div>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Interested in the proposed pilot programme?
            </p>
            <button
              type="button"
              onClick={onRequestPilot}
              className="mt-2 w-full py-2.5 px-3 bg-[#C5A044] hover:bg-[#E8D5A5] text-[#102748] font-bold text-xs rounded transition-colors flex items-center justify-center gap-1.5 shadow"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© {currentYear} ImmersiSpec Twin. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-[#E8D5A5] transition-colors underline-offset-4 hover:underline"
            >
              Privacy Information
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onRequestPilot: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestPilot }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Platform', href: '#platform', id: 'platform' },
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'Market & Pricing', href: '#market-pricing', id: 'market-pricing' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect current visible section
      const sectionIds = ['home', 'about', 'platform', 'how-it-works', 'market-pricing', 'faq'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#102748]/95 backdrop-blur-md shadow-lg border-b border-[#C5A044]/20 py-3'
          : 'bg-[#102748] border-b border-[#0F1C32] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C5A044] rounded-lg p-1"
          >
            {/* Architectural Interconnected Building Element Symbol */}
            <div className="w-8 h-8 rounded bg-gradient-to-br from-[#C5A044] to-[#0F1C32] p-[1.5px] shadow-sm group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#102748] rounded-[3px] flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#C5A044]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {/* Isometric Architectural Cube with Node connection */}
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                  <circle cx="12" cy="12" r="1.5" fill="#E8D5A5" />
                </svg>
              </div>
            </div>
            <span className="text-xl sm:text-2xl font-bold font-['Manrope'] tracking-tight text-white">
              ImmersiSpec <span className="text-[#C5A044]">Twin</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors relative ${
                    isActive
                      ? 'text-[#E8D5A5]'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C5A044] rounded-full transition-all" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Primary CTA (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onRequestPilot}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#C5A044] text-[#102748] hover:bg-[#E8D5A5] transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#C5A044] focus:ring-offset-2 focus:ring-offset-[#102748]"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onRequestPilot}
              className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-[#C5A044] text-[#102748] rounded hover:bg-[#E8D5A5] transition-colors"
            >
              Pilot
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:text-[#C5A044] hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#C5A044]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F1C32] border-b border-[#C5A044]/30 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#102748] text-[#E8D5A5] border-l-4 border-[#C5A044]'
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestPilot();
              }}
              className="w-full py-3 px-4 bg-[#C5A044] text-[#102748] font-bold text-sm rounded-lg flex items-center justify-center gap-2 hover:bg-[#E8D5A5] transition-colors shadow"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

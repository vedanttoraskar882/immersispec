import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqData } from '../data/faqData';
import type { FAQItem } from '../data/faqData';

export const FAQ: React.FC = () => {
  // Store open state as a set or single ID. Allowing multiple open is great for reading.
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-01': true // First question open by default for immediate context
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-b border-[#E2E8F0] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#102748]/5 text-[#102748] border border-[#102748]/15">
            Knowledge Base
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Manrope'] text-[#102748] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#64748B] max-w-2xl mx-auto">
            Clear information regarding the proposed ImmersiSpec Twin platform, BIM integration strategy, and upcoming pilot participation.
          </p>
        </div>

        {/* Accessible Accordion Component */}
        <div className="space-y-3.5">
          {faqData.map((item: FAQItem, index: number) => {
            const isOpen = Boolean(openItems[item.id]);
            return (
              <div
                key={item.id}
                className="bg-[#F8F9FC] rounded-xl border border-[#E2E8F0] transition-colors duration-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#C5A044] focus:ring-offset-1 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#C5A044] bg-[#C5A044]/10 px-2 py-0.5 rounded border border-[#C5A044]/20 flex-shrink-0">
                      Q{index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#102748] font-['Manrope']">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#64748B] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#C5A044]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#64748B] leading-relaxed border-t border-[#E2E8F0]/60 animate-in fade-in duration-200"
                  >
                    <p className="max-w-3xl">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

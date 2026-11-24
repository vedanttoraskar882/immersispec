import React, { useEffect, useRef } from 'react';
import { X, Layers, Target, Compass } from 'lucide-react';

interface DevelopmentStageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DevelopmentStageModal: React.FC<DevelopmentStageModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
      triggerRef.current?.focus();
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F1C32]/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dev-stage-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-[#E2E8F0] overflow-hidden my-auto"
      >
        <div className="bg-[#102748] text-white px-6 py-5 flex items-center justify-between border-b border-[#0F1C32]">
          <div className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-[#C5A044]" />
            <h2 id="dev-stage-title" className="text-lg font-bold font-['Manrope'] text-white">
              Current Development Stage
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-sm text-[#172033] leading-relaxed">
          <div className="p-3.5 bg-[#C5A044]/10 rounded-lg border border-[#C5A044]/30 flex items-start gap-3">
            <Target className="w-5 h-5 text-[#C5A044] flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#102748] text-xs uppercase tracking-wider block mb-0.5">
                Pre-MVP Concept &amp; Market Validation
              </span>
              <p className="text-xs text-[#172033]">
                ImmersiSpec Twin is currently in active pre-MVP concept development. We are conducting customer discovery interviews and identifying prospective design partners for our upcoming pilot programme.
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-[#F8F9FC] rounded-lg border border-[#E2E8F0] flex items-start gap-3">
            <Compass className="w-5 h-5 text-[#C5A044] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-[#102748] mb-1">Indicative Capabilities &amp; Pricing</h3>
              <p className="text-xs text-[#64748B]">
                All nine planned capabilities, workflow diagrams, dashboard mockups, and pricing tiers showcased on this site represent proposed architectural specifications and commercial planning assumptions. They are being refined through hands-on industry feedback.
              </p>
            </div>
          </div>

          <p className="text-xs text-[#64748B] italic">
            This landing page serves strictly as an informational platform to gather expressions of interest from UK interior fit-out practices, contractors, and project leaders.
          </p>

          <div className="pt-2 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold text-white bg-[#102748] hover:bg-[#0F1C32] rounded-lg transition-colors border border-[#C5A044]/40"
            >
              Understand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

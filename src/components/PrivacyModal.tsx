import React, { useEffect, useRef } from 'react';
import { X, ShieldCheck, Database, HardDrive, Info } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070E1A]/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden my-auto"
      >
        <div className="bg-[#102748] text-white px-6 py-5 flex items-center justify-between border-b border-[#0F1C32]">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#C5A044]" />
            <h2 id="privacy-modal-title" className="text-lg font-bold font-['Manrope'] text-white">
              Privacy Information
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
          <div className="flex items-start gap-3 p-3.5 bg-[#F8F9FC] rounded-lg border border-[#E2E8F0]">
            <HardDrive className="w-5 h-5 text-[#C5A044] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-[#102748] mb-1">Inquiry Data Management</h3>
              <p className="text-xs text-[#64748B]">
                Expressions of interest submitted through the Request a Pilot form are securely recorded and maintained for pilot candidate evaluation and project qualification.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 bg-[#F8F9FC] rounded-lg border border-[#E2E8F0]">
            <Database className="w-5 h-5 text-[#C5A044] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-[#102748] mb-1">Confidentiality</h3>
              <p className="text-xs text-[#64748B]">
                Submitted contact and organisation information is treated with strict professional confidentiality and will not be shared with unauthorised third parties.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 bg-[#F8F9FC] rounded-lg border border-[#E2E8F0]">
            <Info className="w-5 h-5 text-[#C5A044] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-[#102748] mb-1">Data Retention</h3>
              <p className="text-xs text-[#64748B]">
                Your information remains preserved to coordinate upcoming pilot onboarding schedules, product requirement workshops, and commercial terms agreement.
              </p>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#102748] hover:bg-[#0F1C32] rounded-lg transition-colors border border-[#C5A044]/40"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, AlertCircle, Building2, User, Mail, Phone, ArrowRight } from 'lucide-react';
import type { PilotFormData } from '../types/pilot';
import { savePilotRequest } from '../utils/localStorage';
import { validateField } from '../utils/validation';
import type { FormErrors } from '../utils/validation';

interface PilotRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlanContext?: string;
}

export const PilotRequestModal: React.FC<PilotRequestModalProps> = ({
  isOpen,
  onClose,
  initialPlanContext
}) => {
  // Ensure form starts completely empty with no pre-entered data
  const [formData, setFormData] = useState<PilotFormData>({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    organisationName: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const triggerElementRef = useRef<HTMLElement | null>(null);

  // Store trigger element and manage focus
  useEffect(() => {
    if (isOpen) {
      triggerElementRef.current = document.activeElement as HTMLElement;
      setIsSubmitted(false);
      setSubmissionError(null);
      
      const timer = setTimeout(() => {
        firstInputRef.current?.focus();
      }, 50);

      document.body.style.overflow = 'hidden';

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
      if (triggerElementRef.current) {
        triggerElementRef.current.focus();
      }
    }
  }, [isOpen]);

  // Handle ESC key and focus trapping
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      }

      // Trap focus inside modal
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmissionError(null);

    if (touched[name]) {
      const err = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Validate all fields
    const newErrors: FormErrors = {
      fullName: validateField('fullName', formData.fullName),
      phoneNumber: validateField('phoneNumber', formData.phoneNumber),
      emailAddress: validateField('emailAddress', formData.emailAddress),
      organisationName: validateField('organisationName', formData.organisationName)
    };

    setTouched({
      fullName: true,
      phoneNumber: true,
      emailAddress: true,
      organisationName: true
    });

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => Boolean(err));
    if (hasErrors) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      // Store record reliably in localStorage
      savePilotRequest(formData);

      setIsSubmitted(true);
      setFormData({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        organisationName: ''
      });
      setTouched({});
      setErrors({});
    } catch {
      setSubmissionError(
        'Your request could not be processed at this time. Please check your network or browser settings and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#070E1A]/80 backdrop-blur-md transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden my-auto max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="bg-[#102748] text-white px-6 sm:px-8 py-6 flex items-start justify-between border-b border-[#0F1C32] relative">
          <div className="pr-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-semibold tracking-wider uppercase bg-[#C5A044]/20 text-[#E8D5A5] mb-2 border border-[#C5A044]/30">
              Pilot Programme Registration
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold font-['Manrope'] text-white">
              Request a Pilot
            </h2>
            <p id="modal-description" className="text-xs sm:text-sm text-[#E2E8F0]/80 mt-1 leading-relaxed">
              Interested in exploring a more structured approach to design approvals? Register your interest in the proposed ImmersiSpec Twin pilot programme.
            </p>
            {initialPlanContext && (
              <div className="mt-2.5 text-xs text-[#E8D5A5] font-medium flex items-center gap-1.5">
                <span className="text-[#E2E8F0]/70">Selected Package:</span>
                <span className="bg-[#0F1C32] px-2 py-0.5 rounded border border-[#C5A044]/40 font-semibold">{initialPlanContext}</span>
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A044]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {isSubmitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 border border-emerald-200 shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#102748] font-['Manrope']">
                  Your pilot request has been sent successfully.
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed max-w-sm mx-auto">
                  Thank you for your interest in ImmersiSpec Twin. Our team will review your project requirements and reach out regarding upcoming pilot openings.
                </p>
              </div>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2.5 text-xs font-semibold text-[#102748] bg-[#F8F9FC] hover:bg-[#E2E8F0] rounded-lg transition-colors border border-[#E2E8F0]"
                >
                  Submit Another Request
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#102748] hover:bg-[#0F1C32] rounded-lg transition-colors border border-[#C5A044]/40 shadow-sm"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate autoComplete="off" className="space-y-4">
              {submissionError && (
                <div className="p-3.5 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700 flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
                  <span>{submissionError}</span>
                </div>
              )}

              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-semibold text-[#172033] uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    ref={firstInputRef}
                    type="text"
                    id="fullName"
                    name="fullName"
                    autoComplete="off"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your full name"
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-lg border bg-[#F8F9FC] text-[#172033] focus:bg-white focus:outline-none transition-colors ${
                      errors.fullName
                        ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                        : 'border-[#E2E8F0] focus:border-[#C5A044] focus:ring-2 focus:ring-[#C5A044]/20'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p id="fullName-error" className="mt-1 text-xs text-red-600 font-medium">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Work Email */}
              <div>
                <label htmlFor="emailAddress" className="block text-xs font-semibold text-[#172033] uppercase tracking-wider mb-1.5">
                  Work Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    autoComplete="off"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your work email address"
                    aria-invalid={Boolean(errors.emailAddress)}
                    aria-describedby={errors.emailAddress ? 'emailAddress-error' : undefined}
                    className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-lg border bg-[#F8F9FC] text-[#172033] focus:bg-white focus:outline-none transition-colors ${
                      errors.emailAddress
                        ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                        : 'border-[#E2E8F0] focus:border-[#C5A044] focus:ring-2 focus:ring-[#C5A044]/20'
                    }`}
                  />
                </div>
                {errors.emailAddress && (
                  <p id="emailAddress-error" className="mt-1 text-xs text-red-600 font-medium">
                    {errors.emailAddress}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-xs font-semibold text-[#172033] uppercase tracking-wider mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    autoComplete="off"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your phone number (e.g. +44 20 7946 0912)"
                    aria-invalid={Boolean(errors.phoneNumber)}
                    aria-describedby={errors.phoneNumber ? 'phoneNumber-error' : undefined}
                    className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-lg border bg-[#F8F9FC] text-[#172033] focus:bg-white focus:outline-none transition-colors ${
                      errors.phoneNumber
                        ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                        : 'border-[#E2E8F0] focus:border-[#C5A044] focus:ring-2 focus:ring-[#C5A044]/20'
                    }`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p id="phoneNumber-error" className="mt-1 text-xs text-red-600 font-medium">
                    {errors.phoneNumber}
                  </p>
                )}
                <p className="mt-1 text-[11px] text-[#64748B]">Supports UK and international phone number formats.</p>
              </div>

              {/* Organisation Name */}
              <div>
                <label htmlFor="organisationName" className="block text-xs font-semibold text-[#172033] uppercase tracking-wider mb-1.5">
                  Organisation Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="organisationName"
                    name="organisationName"
                    autoComplete="off"
                    value={formData.organisationName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your organisation name"
                    aria-invalid={Boolean(errors.organisationName)}
                    aria-describedby={errors.organisationName ? 'organisationName-error' : undefined}
                    className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-lg border bg-[#F8F9FC] text-[#172033] focus:bg-white focus:outline-none transition-colors ${
                      errors.organisationName
                        ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                        : 'border-[#E2E8F0] focus:border-[#C5A044] focus:ring-2 focus:ring-[#C5A044]/20'
                    }`}
                  />
                </div>
                {errors.organisationName && (
                  <p id="organisationName-error" className="mt-1 text-xs text-red-600 font-medium">
                    {errors.organisationName}
                  </p>
                )}
              </div>

              {/* Submit Button - Renamed to 'Send a Pilot Request' as requested */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-5 bg-[#C5A044] hover:bg-[#b08e38] text-[#102748] font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#102748] focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wider"
                >
                  {isSubmitting ? (
                    <span>Sending Pilot Request...</span>
                  ) : (
                    <>
                      <span>Send a Pilot Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, AlertCircle, Building2, User, Mail, Phone, Lock } from 'lucide-react';
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
  const [formData, setFormData] = useState<PilotFormData>({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    organisationName: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [storageError, setStorageError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const triggerElementRef = useRef<HTMLElement | null>(null);

  // Store trigger element and manage focus
  useEffect(() => {
    if (isOpen) {
      triggerElementRef.current = document.activeElement as HTMLElement;
      setIsSubmitted(false);
      setStorageError(null);
      
      const timer = setTimeout(() => {
        firstInputRef.current?.focus();
      }, 50);

      // Prevent body scrolling
      document.body.style.overflow = 'hidden';

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
      // Return focus to trigger
      if (triggerElementRef.current) {
        triggerElementRef.current.focus();
      }
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      }

      // Trap focus
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
    setStorageError(null);

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
    setStorageError(null);

    try {
      // Save strictly to localStorage using the mandated reference implementation
      savePilotRequest(formData);

      // Verify write succeeded
      setIsSubmitted(true);
      // Reset only visible form inputs
      setFormData({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        organisationName: ''
      });
      setTouched({});
      setErrors({});
    } catch {
      setStorageError(
        'Your submission could not be saved in this browser. Please check your browser storage settings and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0F1C32]/80 backdrop-blur-sm transition-opacity"
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
        className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-[#E2E8F0] overflow-hidden my-auto max-h-[95vh] flex flex-col"
      >
        {/* Modal Header */}
        <div className="bg-[#102748] text-white px-6 py-5 flex items-start justify-between border-b border-[#0F1C32]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-semibold tracking-wider uppercase bg-[#C5A044]/20 text-[#E8D5A5] mb-2 border border-[#C5A044]/30">
              Pre-MVP Market Validation
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold font-['Manrope'] text-white">
              Request a Pilot
            </h2>
            <p id="modal-description" className="text-sm text-[#E2E8F0]/80 mt-1">
              Interested in exploring a more structured approach to design approvals? Register your interest in the proposed ImmersiSpec Twin pilot programme.
            </p>
            {initialPlanContext && (
              <div className="mt-2 text-xs text-[#E8D5A5] font-medium flex items-center gap-1">
                <span>Selected Focus:</span>
                <span className="bg-[#0F1C32] px-2 py-0.5 rounded border border-[#C5A044]/40">{initialPlanContext}</span>
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A044]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#102748]">
                  Your pilot interest has been saved successfully in this browser.
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed max-w-sm mx-auto">
                  Thank you for your interest in ImmersiSpec Twin. This demonstration website stores your submission locally and does not send it to a server.
                </p>
              </div>

              <div className="p-4 bg-[#F8F9FC] rounded-lg border border-[#E2E8F0] text-left text-xs text-[#64748B] space-y-1">
                <div className="font-semibold text-[#102748] flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#C5A044]" />
                  Storage Verification
                </div>
                <p>Record preserved in browser localStorage under key: <code className="bg-white px-1.5 py-0.5 rounded border border-[#E2E8F0] text-[#102748] font-mono">immersispec_pilot_requests</code></p>
                <p className="text-[11px] text-[#64748B]">Submissions will persist across page refreshes and browser sessions.</p>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 text-xs font-semibold text-[#102748] bg-[#F8F9FC] hover:bg-[#E2E8F0] rounded-lg transition-colors border border-[#E2E8F0]"
                >
                  Submit Another Expression
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#102748] hover:bg-[#0F1C32] rounded-lg transition-colors border border-[#C5A044]/40"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {storageError && (
                <div className="p-3.5 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700 flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
                  <span>{storageError}</span>
                </div>
              )}

              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-semibold text-[#172033] uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#64748B]">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    ref={firstInputRef}
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your full name"
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border bg-[#F8F9FC] text-[#172033] focus:bg-white focus:outline-none transition-colors ${
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
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#64748B]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your work email address"
                    aria-invalid={Boolean(errors.emailAddress)}
                    aria-describedby={errors.emailAddress ? 'emailAddress-error' : undefined}
                    className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border bg-[#F8F9FC] text-[#172033] focus:bg-white focus:outline-none transition-colors ${
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
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#64748B]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your phone number (e.g. +44 20 7946 0912)"
                    aria-invalid={Boolean(errors.phoneNumber)}
                    aria-describedby={errors.phoneNumber ? 'phoneNumber-error' : undefined}
                    className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border bg-[#F8F9FC] text-[#172033] focus:bg-white focus:outline-none transition-colors ${
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
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#64748B]">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="organisationName"
                    name="organisationName"
                    value={formData.organisationName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your organisation name"
                    aria-invalid={Boolean(errors.organisationName)}
                    aria-describedby={errors.organisationName ? 'organisationName-error' : undefined}
                    className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border bg-[#F8F9FC] text-[#172033] focus:bg-white focus:outline-none transition-colors ${
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

              {/* Mandated Privacy Notice */}
              <div className="pt-2">
                <div className="bg-[#F8F9FC] border border-[#E2E8F0] rounded-lg p-3 text-xs text-[#64748B] flex items-start gap-2">
                  <Lock className="w-4 h-4 text-[#C5A044] flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    Your information will be saved locally in this browser for this demonstration website. It will not be sent to a server or external organisation.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-5 bg-[#C5A044] hover:bg-[#b08e38] text-[#102748] font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#102748] focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Saving to Browser...</span>
                  ) : (
                    <span>Submit Pilot Interest</span>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-[#64748B]">
                Submission timestamp is generated automatically upon submission.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

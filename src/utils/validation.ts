export interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  emailAddress?: string;
  organisationName?: string;
}

export function validateField(name: string, value: string): string | undefined {
  const trimmed = value.trim();

  switch (name) {
    case 'fullName':
      if (!trimmed) return 'Full Name is required.';
      if (trimmed.length < 2) return 'Please enter your full name.';
      return undefined;

    case 'emailAddress': {
      if (!trimmed) return 'Work email address is required.';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) return 'Please enter a valid email address.';
      return undefined;
    }

    case 'phoneNumber': {
      if (!trimmed) return 'Phone number is required.';
      const phoneDigits = trimmed.replace(/\D/g, '');
      if (!/^[+\d\s().-]+$/.test(trimmed) || phoneDigits.length < 7 || phoneDigits.length > 15) {
        return 'Please enter a valid phone number (7–15 digits).';
      }
      return undefined;
    }

    case 'organisationName':
      if (!trimmed) return 'Organisation name is required.';
      if (trimmed.length < 2) return 'Please enter your organisation name.';
      return undefined;

    default:
      return undefined;
  }
}

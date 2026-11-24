import type { PilotFormData, PilotRequest } from '../types/pilot';

export const STORAGE_KEY = "immersispec_pilot_requests";

export function savePilotRequest(
  formData: PilotFormData
): PilotRequest {

  const cleanedData = {
    fullName: formData.fullName.trim(),
    phoneNumber: formData.phoneNumber.trim(),
    emailAddress: formData.emailAddress.trim(),
    organisationName: formData.organisationName.trim()
  };

  if (
    !cleanedData.fullName ||
    !cleanedData.phoneNumber ||
    !cleanedData.emailAddress ||
    !cleanedData.organisationName
  ) {
    throw new Error(
      "Please complete all required fields."
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(cleanedData.emailAddress)) {
    throw new Error(
      "Please enter a valid email address."
    );
  }

  const phoneDigits = cleanedData.phoneNumber
    .replace(/\D/g, "");

  if (
    !/^[+\d\s().-]+$/.test(cleanedData.phoneNumber) ||
    phoneDigits.length < 7 ||
    phoneDigits.length > 15
  ) {
    throw new Error(
      "Please enter a valid phone number."
    );
  }

  const newSubmission: PilotRequest = {
    ...cleanedData,
    submissionDateTime: new Date().toISOString()
  };

  const storedData = localStorage.getItem(STORAGE_KEY);

  let existingSubmissions: PilotRequest[] = [];

  if (storedData !== null) {
    let parsedData;

    try {
      parsedData = JSON.parse(storedData);
    } catch {
      throw new Error(
        "Existing pilot records could not be read. " +
        "No previous records have been changed."
      );
    }

    if (!Array.isArray(parsedData)) {
      throw new Error(
        "Existing pilot records are in an invalid format. " +
        "No previous records have been changed."
      );
    }

    existingSubmissions = parsedData;
  }

  const updatedSubmissions = [
    ...existingSubmissions,
    newSubmission
  ];

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedSubmissions)
  );

  return newSubmission;
}

export function getStoredPilotRequests(): PilotRequest[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

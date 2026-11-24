export interface PilotFormData {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  organisationName: string;
}

export interface PilotRequest extends PilotFormData {
  submissionDateTime: string;
}

export interface StoredPilotRequest extends PilotRequest {
  id?: string;
}

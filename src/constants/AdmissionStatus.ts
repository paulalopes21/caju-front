export const ADMISSION_STATUS = {
  REVIEW: "REVIEW",
  APPROVED: "APPROVED",
  REPROVED: "REPROVED",
} as const;

export type AdmissionStatus =
  (typeof ADMISSION_STATUS)[keyof typeof ADMISSION_STATUS];

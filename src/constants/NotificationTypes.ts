export const NOTIFICATION_TYPES = {
  SUCCESS: "success",
  ERROR: "error",
} as const;

export type NotificationType =
  (typeof NOTIFICATION_TYPES)[keyof typeof NOTIFICATION_TYPES];

export const TARGET_DATE = new Date("2025-01-08T12:31:00");

export const TIMER_STATES = {
  COUNTING: "counting",
  COMPLETED: "completed",
} as const;

export type TimerState = (typeof TIMER_STATES)[keyof typeof TIMER_STATES];

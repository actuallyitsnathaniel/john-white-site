import { memoize } from './performance';

// Memoized date formatters to avoid repeated calculations
const PST_TIMEZONE = "America/Los_Angeles";
const PST_OPTIONS: Intl.DateTimeFormatOptions = {
  timeZone: PST_TIMEZONE,
};

// Cache the current date to avoid repeated Date creation
const getCurrentPSTDate = memoize(() => {
  const localizedToday = new Date().toLocaleString("en-US", PST_OPTIONS);
  return new Date(localizedToday);
});

export const localizedToday = getCurrentPSTDate().toLocaleString("en-US", PST_OPTIONS);
export const todayPST = getCurrentPSTDate().toISOString();

// Optimized date parser with memoization
export const dateParser = memoize((date: string): string => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  
  return `${year}-${month}-${day}`;
});

// Additional utility functions for performance
export const formatDate = memoize((date: Date, options: Intl.DateTimeFormatOptions = {}): string => {
  return date.toLocaleDateString("en-US", options);
});

export const isDateInRange = memoize((date: string, startDate: string, endDate: string): boolean => {
  const target = new Date(date).getTime();
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  
  return target >= start && target <= end;
});

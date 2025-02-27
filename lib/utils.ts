import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Convert prisma object to a regular js object
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

// Format number with decimal places
export function formatNumber(num: number): string {
  const [integer, decimal] = num.toString().split('.');
  return decimal ? `${integer}.${decimal.padEnd(2, '0')}` : `${integer}.00`;
}

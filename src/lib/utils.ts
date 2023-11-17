import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge classes with tailwind-merge with clsx full feature */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomElements<T>(arr: T[], count: number): T[] {
  return arr.sort(() => 0.5 - Math.random()).slice(0, count);
}

export function isMobile(): boolean {
  return window.innerWidth < 1024;
}

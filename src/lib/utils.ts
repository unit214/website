import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge classes with tailwind-merge with clsx full feature */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomElements<T>(arr: T[], count: number): T[] {
  const shuffled = arr.slice();
  let i = arr.length;
  let temp: T, index: number;

  // Fisher-Yates shuffle algorithm
  while (i--) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[i];
    shuffled[i] = shuffled[index];
    shuffled[index] = temp;
  }

  return shuffled.slice(0, count);
}

export function isMobile(): boolean {
  return window.innerWidth < 1024;
}

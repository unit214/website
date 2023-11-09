import clsx, { ClassValue } from 'clsx';
import { MutableRefObject, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

/** Merge classes with tailwind-merge with clsx full feature */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useDetectSticky(ref: MutableRefObject<Element | null>) {
  const [isSticky, setIsSticky] = useState(false);

  // mount
  useEffect(() => {
    if (ref.current) {
      const cachedRef = ref.current,
        observer = new IntersectionObserver(
          ([e]) => {
            // Only set isSticky when the top part gets invisible and not the bottom part
            setIsSticky(
              e.intersectionRatio < 1 && e.intersectionRect.top === 0
            );
          },
          { threshold: [1] }
        );

      observer.observe(cachedRef);

      // unmount
      return () => {
        observer.unobserve(cachedRef);
      };
    }
  }, [ref]);

  return [isSticky];
}

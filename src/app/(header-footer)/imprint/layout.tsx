import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Imprint',
  description: 'Unit 214',
};

export default function ImprintLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

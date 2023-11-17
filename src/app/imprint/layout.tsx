import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Imprint',
  description: 'Unit 214',
};

export default function ImprintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

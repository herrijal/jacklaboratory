import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Herrijal Jaka Utama -- Investment Analyst & Strategic Advisor',
  description:
    'Herrijal Jaka Utama (Jaka) — Investment Analyst and Strategic Advisor at BPKH, BPKH Limited, Bank Muamalat Indonesia, and APIF, focused on Islamic finance and the Hajj-Umrah ecosystem.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0C0C0C',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: '#0C0C0C' }}>{children}</body>
    </html>
  );
}

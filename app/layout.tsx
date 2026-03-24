import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';
import 'fumadocs-ui/style.css';
import './global.css';

export const metadata = {
  title: 'Sportuno API Documentation',
  description: 'Operator integration guide for the Sportuno platform',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

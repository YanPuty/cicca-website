import './globals.css';

import { Header } from '@layouts';

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "CICCA Donation Website",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="container mx-auto">{children}</div>
      </body>
    </html>
  );
}

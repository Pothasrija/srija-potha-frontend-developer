import type { Metadata } from "next";

import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({
  weight: ["300", "500"],
  subsets: ["latin"],
});
import "./globals.css";

export const metadata: Metadata = {
  title: "EthAi - When Innovation Meets Investment",
  description: "Empowering Trading Through Advanced Technology ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${space.className} antialiased`}>{children}</body>
    </html>
  );
}

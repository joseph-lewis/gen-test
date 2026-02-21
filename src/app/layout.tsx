import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Genesis Electrical — Powering Townsville. Precisely.",
  description:
    "Premium electrical solutions for residential and commercial spaces in Townsville. Book in seconds, track your sparky in real-time, and manage everything from the Genesis App.",
  keywords: [
    "electrician Townsville",
    "electrical services",
    "Genesis Electrical",
    "smart home",
    "commercial electrician",
  ],
  openGraph: {
    title: "Genesis Electrical — Powering Townsville. Precisely.",
    description:
      "Premium electrical solutions for residential and commercial spaces. Book in seconds, track your sparky in real-time.",
    type: "website",
    locale: "en_AU",
    siteName: "Genesis Electrical",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

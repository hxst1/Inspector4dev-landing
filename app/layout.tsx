import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inspector4dev - Inspect any website like a pro",
  description:
    "A powerful Chrome extension for developers and designers to inspect any element on any website. Get colors, typography, spacing, and more with a single click.",
  keywords: [
    "inspector",
    "chrome extension",
    "web development",
    "CSS inspector",
    "design tools",
    "developer tools",
  ],
  authors: [{ name: "Inspector4dev" }],
  openGraph: {
    title: "Inspector4dev - Inspect any website like a pro",
    description: "A powerful Chrome extension for developers and designers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

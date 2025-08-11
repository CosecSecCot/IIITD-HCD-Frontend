import type { Metadata } from "next";
import { Anybody } from "next/font/google";
import "./globals.css";
import ReactLenis from "lenis/react";
import AnimationInitializer from "@/features/animation/AnimationInitializer";

const geistSans = Anybody({
  variable: "--font-anybody",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HCD IIIT Delhi",
  description:
    "We at HCD@IIITD, focus on finding innovative solutions to challenges one faces every time a new technology is adopted by the masses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <ReactLenis root />
        <AnimationInitializer />
        <div className="texture-overlay" />
        {children}
      </body>
    </html>
  );
}

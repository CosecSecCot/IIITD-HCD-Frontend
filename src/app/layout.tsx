import { Anybody } from "next/font/google";
import "./globals.css";
import ReactLenis from "lenis/react";
import AnimationInitializer from "@/features/animation/AnimationInitializer";
import Script from "next/script";
import { Metadata } from "next";

const anybody = Anybody({
  variable: "--font-anybody",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Human Centred Design • IIIT Delhi",
  description:
    "Explore the Department of Human Centred Design at IIIT Delhi — research labs, projects, faculty, programmes and publications driving inclusive, user-centered innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anybody.variable} antialiased`}>
        <ReactLenis root />
        <AnimationInitializer />
        <div className="texture-overlay" />
        {children}
        <Script id="microsoft-clarity">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "svupvq6vwh");
          `}
        </Script>
      </body>
    </html>
  );
}

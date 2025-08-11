import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study - HCD IIIT Delhi",
  description: "Study at IIIT Delhi's Human Centered Design Department.",
  openGraph: {
    type: "website",
    url: "",
    title: "",
    description: "",
    siteName: "HCD IIITD",
    images: [{ url: "" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "",
    description: "",
    images: [{ url: "" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="relative z-10 background-element bg-white font-anybody pb-8 shadow-xl">
        <Navbar type="solid" />
        {children}
      </div>
      <Footer />
    </>
  );
}

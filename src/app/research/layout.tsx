import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research - HCD IIIT Delhi",
  description:
    "Explore IIITD's research and teaching labs, projects and publications in human-centered design department.",
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
      <div className="relative z-10 bg-white font-anybody pb-[78px] shadow-xl">
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
}

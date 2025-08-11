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
      <div className="font-anybody">
        <Navbar type="solid" />
        {children}
      </div>
    </>
  );
}

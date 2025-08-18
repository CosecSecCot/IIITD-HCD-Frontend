import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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

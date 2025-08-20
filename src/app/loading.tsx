import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <>
      <div className="relative z-10 background-element bg-white font-anybody pb-8 shadow-xl">
        <Navbar type="solid" />
        <main className="min-h-[90vh] flex justify-center items-center">
          <LoaderCircle
            size={128}
            className="text-brand-accent2 animate-spin"
          />
        </main>
      </div>
      <Footer />
    </>
  );
}

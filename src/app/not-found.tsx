import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TextReveal from "@/features/animation/TextReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 • Human Centred Design • IIIT Delhi",
  description: "We couldn't find the page you were looking for.",
};

export default function NotFound() {
  return (
    <>
      <div className="relative z-10 background-element bg-white font-anybody pb-8 shadow-xl">
        <Navbar type="solid" />
        <main className="min-h-[90vh] flex flex-col justify-center items-center">
          <TextReveal>
            <h1 className="text-[5vw] text-brand-accent2 leading-tight">404</h1>
          </TextReveal>
          <TextReveal>
            <p className="font-light text-[14px] lg:text-[20px]">
              We couldn't find the page you were looking for
            </p>
          </TextReveal>
        </main>
      </div>
      <Footer />
    </>
  );
}

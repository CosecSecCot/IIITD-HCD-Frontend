import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <>
      <div className="relative z-10 bg-white font-anybody pb-8 shadow-xl">
        <Navbar type="solid" />
        <main>
          <article className="min-h-screen">
            <h1>Our Work</h1>
          </article>
        </main>
      </div>
      <Footer />
    </>
  );
}

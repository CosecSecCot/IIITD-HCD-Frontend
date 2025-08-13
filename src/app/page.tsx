import PixelTrail from "@/components/fancy/background/pixel-trail";
import GooeySvgFilter from "@/components/fancy/filter/gooey-svg-filter";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageReveal from "@/features/animation/PageReveal";

export default function Home() {
  return (
    <>
      <PageReveal />
      <div className="relative z-10 bg-white font-anybody pb-[78px] shadow-xl">
        <Navbar type="solid" />
        <main className="">
          <section className="relative h-[100vh] bg-brand-accent1/30 overflow-hidden">
            <div
              className="absolute inset-0 z-0"
              style={{
                filter: "url(#gooey-filter-pixel-trail)",
              }}
            >
              <GooeySvgFilter id="gooey-filter-pixel-trail" strength={10} />
              <PixelTrail
                pixelSize={96}
                delay={1000}
                fadeDuration={0}
                pixelClassName="bg-brand-accent2"
              />
            </div>

            <p className="text-2xl mx-auto">HELLO</p>
          </section>
          <section className="h-[100vh]"></section>
        </main>
      </div>
      <Footer />
    </>
  );
}

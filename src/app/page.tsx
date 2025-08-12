import PixelTrail from "@/components/fancy/background/pixel-trail";
import GooeySvgFilter from "@/components/fancy/filter/gooey-svg-filter";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="font-anybody">
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
              pixelSize={128}
              delay={300}
              fadeDuration={0}
              pixelClassName="bg-black mix-blend-difference"
            />
          </div>

          <p className="text-2xl mx-auto">HELLO</p>
        </section>
        <section className="h-[100vh]"></section>
      </main>
    </div>
  );
}

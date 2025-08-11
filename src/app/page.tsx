import PixelTrail from "@/components/fancy/background/pixel-trail";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="font-anybody">
      <Navbar type="solid" />
      <main className="">
        <section className="h-[100vh] bg-brand-accent1/30">
          <div
            className="absolute inset-0 z-0"
            style={{
              filter: "url(#gooey-filter-pixel-trail)",
            }}
          >
            <PixelTrail
              pixelSize={24}
              fadeDuration={250}
              pixelClassName="bg-brand-accent2"
            />
          </div>
        </section>
        <section className="h-[100vh]"></section>
      </main>
    </div>
  );
}

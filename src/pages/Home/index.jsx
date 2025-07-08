import Navbar from "../../components/Navbar";
import background from "../../assets/testing.svg";
import PageReveal from "../../components/PageReveal";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

function App() {
  const [revealAnimationComplete, setRevealAnimationComplete] = useState(false);

  useGSAP(() => {
    const timeline = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 2 },
    });

    if (!revealAnimationComplete) {
      timeline.to("#page-reveal-container", {
        y: "-100%",
        delay: 3,
        onComplete: () => setRevealAnimationComplete(true),
      });
    }
  });

  return (
    <>
      {revealAnimationComplete ? "" : <PageReveal />}
      <div className="min-h-screen bg-white font-sans">
        <Navbar />
        <main className="relative w-full min-h-[calc(100vh-176px)] mt-[176px]">
          <img
            src={background}
            alt="Background Illustration"
            className="w-full h-auto object-contain"
          />
        </main>
      </div>
    </>
  );
}

export default App;

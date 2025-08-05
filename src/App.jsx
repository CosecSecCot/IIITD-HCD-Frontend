import { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import { BrowserRouter } from "react-router";
import Router from "./pages/router";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const lenisRef = useRef();

  useEffect(() => {
    lenisRef.current?.lenis?.on("scroll", ScrollTrigger.update);

    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

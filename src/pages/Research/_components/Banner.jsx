import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

export default function Banner({ text }) {
  const bannerRef = useRef();
  useGSAP(
    () => {
      gsap.fromTo(
        ".reveal-animation-text",
        {
          y: "10%",
          opacity: 0,
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          y: 0,
          opacity: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          stagger: 0.1,
          duration: 1.5,
          ease: "expo.out",
        },
      );
    },
    { scope: bannerRef, dependencies: [text] }, // this will rerun on tab switch
  );

  return (
    <section
      ref={bannerRef}
      role="banner"
      className="relative min-h-[45vh] bg-brand-accent2"
    >
      <p className="absolute top-[84px] lg:top-[146px] xl:top-[176px] mt-[2em] right-[12.5vw] text-[12px] lg:text-[20px] text-white">
        <span className="opacity-50">RESEARCH /</span>
        <span> LABS</span>
      </p>
      <h1 className="reveal-animation-text absolute bottom-4 left-[12.5vw] text-[28px] lg:text-[72px] text-white">
        {text}
      </h1>
      <img
        src="/main-banner-back.png"
        alt="banner"
        className="w-full min-h-[45vh] object-cover"
      />
    </section>
  );
}

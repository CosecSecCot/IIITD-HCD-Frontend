"use client";

import { useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

export default function PageReveal() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useGSAP(() => {
    const digit1 = document.querySelector(".digit-1");
    const digit2 = document.querySelector(".digit-2");
    const digit3 = document.querySelector(".digit-3");

    for (let digit = 0; digit <= 20; digit++) {
      const div = document.createElement("div");
      div.className = "num";
      div.textContent = (digit % 10).toString();
      digit3?.appendChild(div);
    }

    function animate(
      digit: Element | null,
      duration: number,
      delay: number = 0
    ) {
      if (!digit) return;

      const numHeight = digit.querySelector(".num")?.clientHeight;
      if (!numHeight) return;

      const totalDistance =
        (digit.querySelectorAll(".num").length - 1) * numHeight;

      gsap.to(digit, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: "power2.inOut",
      });
    }

    animate(digit3, 3);
    animate(digit2, 3.5);
    animate(digit1, 1, 2);

    gsap.to(".page-reveal-hero-main-img", {
      y: 0,
      opacity: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      stagger: 0.1,
      duration: 0.6,
      ease: "circ.out",
    });

    gsap.to(".progress-bar", {
      width: "30%",
      duration: 2,
      ease: "power4.inOut",
      delay: 3,
    });

    gsap.to(".progress-bar", {
      width: "100%",
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      delay: 4.5,
    });

    gsap.to(".page-reveal-hero-imgs > img", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "power4.inOut",
      stagger: 0.25,
      delay: 5,
    });

    gsap.to(".page-reveal-hero", {
      scale: 1.25,
      duration: 3,
      ease: "power3.inOut",
      delay: 5,
    });

    gsap.to(".page-reveal-hero", {
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      duration: 1,
      ease: "power4.inOut",
      delay: 6.75,
      onComplete: () => setAnimationComplete(true),
    });
  });

  if (animationComplete) return;

  return (
    <div
      className="page-reveal-hero fixed inset-0 z-[10000] w-screen h-screen p-[3em] bg-brand-accent2 text-white overflow-hidden font-anybody"
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      }}
    >
      <div className="absolute w-full h-full inset-0 flex justify-center items-center">
        <Image
          src="/logo-with-text-large-solid.svg"
          alt="Human Centred Design Department IIITD"
          width={452}
          height={149}
          priority
          className="page-reveal-hero-main-img px-8"
          style={{
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            opacity: 0,
          }}
        />
      </div>
      <div className="pre-loader w-[200%] h-full p-[1em] lg:p-[2em] fixed top-0 right-0 flex justify-end items-end gap-[0.5em] overflow-hidden">
        <p className="w-max uppercase text-[40px] lg:text-[60px] leading-[64px] lg:leading-[60px] opacity-60 font-light">
          Loading
        </p>
        <div
          className="counter h-[100px] flex text-[70px] lg:text-[100px] leading-[150px]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100px, 0 100px)",
          }}
        >
          <div className="digit-1 relative top-[-15px]">
            <div className="num">0</div>
            <div className="num">1</div>
          </div>
          <div className="digit-2 relative top-[-15px]">
            <div className="num">0</div>
            <div className="num">1</div>
            <div className="num">2</div>
            <div className="num">3</div>
            <div className="num">4</div>
            <div className="num">5</div>
            <div className="num">6</div>
            <div className="num">7</div>
            <div className="num">8</div>
            <div className="num">9</div>
            <div className="num">0</div>
          </div>
          <div className="digit-3 relative top-[-15px]">
            <div className="num">0</div>
            <div className="num">1</div>
            <div className="num">2</div>
            <div className="num">3</div>
            <div className="num">4</div>
            <div className="num">5</div>
            <div className="num">6</div>
            <div className="num">7</div>
            <div className="num">8</div>
            <div className="num">9</div>
          </div>
          <div className="digit-4 relative top-[-15px]">%</div>
        </div>
        <div className="progress-bar relative top-[-15px] w-0 h-1 bg-white"></div>
      </div>
      <div className="page-reveal-hero-imgs relative w-full h-full overflow-hidden">
        {new Array(7).fill(0).map((_, index) => (
          <Image
            key={index}
            src={`/page-reveal/img0${index + 1}.png`}
            alt=""
            width={1280}
            height={720}
            className="absolute w-full h-full object-cover"
            style={{
              clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

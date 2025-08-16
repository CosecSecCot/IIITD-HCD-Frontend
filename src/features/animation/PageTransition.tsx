"use client";

import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  // const logoOverlayRef = useRef();
  // const logoRef = useRef();
  const blocksRef = useRef<HTMLDivElement[]>([]);
  const isTransitioning = useRef(false);

  useEffect(() => {
    function createBlocks() {
      if (!overlayRef.current) return;
      overlayRef.current.innerHTML = "";
      blocksRef.current = [];

      for (let i = 0; i < 20; i++) {
        const block = document.createElement("div");
        block.className =
          "page-transition-block flex-[1] h-full bg-brand-accent2 scale-x-0 origin-left";
        overlayRef.current.appendChild(block);
        blocksRef.current.push(block);
      }
    }

    createBlocks();

    gsap.set(blocksRef.current, { scaleX: 1, transformOrigin: "right" });
    gsap.to(blocksRef.current, {
      scaleX: 0,
      duration: 0.4,
      stagger: 0.02,
      ease: "power2.out",
      transformOrigin: "right",
      onComplete: () => {
        isTransitioning.current = false;
      },
    });

    function coverPage(url: string) {
      gsap.set(blocksRef.current, { scaleX: 0, transformOrigin: "left" });
      const tl = gsap.timeline({
        onComplete: () => router.push(url),
      });

      tl.to(blocksRef.current, {
        scaleX: 1,
        duration: 0.4,
        stagger: 0.02,
        ease: "power2.out",
        transformOrigin: "left",
      });
    }

    function handleRouteChange(url: string) {
      if (isTransitioning.current) return;
      isTransitioning.current = true;
      coverPage(url);
    }

    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="/"]');

    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.href;
      const url = new URL(href).pathname;
      if (url !== pathname) {
        handleRouteChange(url);
      }
    };

    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, [router, pathname]);

  return (
    <>
      <div
        ref={overlayRef}
        className="transition-overlay fixed top-0 left-0 w-screen h-screen flex pointer-events-none z-[10000]"
      ></div>
      <div className="logo-overlay"></div>
      {children}
    </>
  );
}

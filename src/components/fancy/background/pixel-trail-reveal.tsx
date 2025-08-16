"use client";

import React, { useCallback, useRef, useMemo } from "react";
import { motion, useAnimationControls } from "motion/react";
import { v4 as uuidv4 } from "uuid";
import { cn } from "@/lib/utils";
import { useDimensions } from "@/hooks/use-dimensions";

type PixelTrailRevealProps = {
  pixelSize?: number; // px
  fadeDuration?: number; // ms
  delay?: number; // ms
  className?: string; // wrapper classes
  children: React.ReactNode; // content to be revealed
};

export default function PixelTrailReveal({
  pixelSize = 96,
  fadeDuration = 500,
  delay = 0,
  className,
  children,
}: PixelTrailRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dims = useDimensions(containerRef);
  const maskIdRef = useRef(`mask-${uuidv4()}`);

  const cols = useMemo(
    () => (dims.width ? Math.ceil(dims.width / pixelSize) : 0),
    [dims.width, pixelSize],
  );
  const rows = useMemo(
    () => (dims.height ? Math.ceil(dims.height / pixelSize) : 0),
    [dims.height, pixelSize],
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const host = containerRef.current;
      if (!host) return;
      const rect = host.getBoundingClientRect();
      const x = Math.floor((e.clientX - rect.left) / pixelSize);
      const y = Math.floor((e.clientY - rect.top) / pixelSize);
      const cell = document.getElementById(
        `${maskIdRef.current}-px-${x}-${y}`,
      ) as any;
      if (cell?.__animatePixel) cell.__animatePixel();
    },
    [pixelSize],
  );

  // Avoid rendering until we know size (prevents zero-size SVG)
  if (!dims.width || !dims.height) {
    return (
      <div ref={containerRef} className={cn("absolute inset-0", className)} />
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 pointer-events-auto", className)}
      onMouseMove={handleMouseMove}
    >
      <svg
        width={dims.width}
        height={dims.height}
        className="absolute inset-0 block"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Black hides, white reveals */}
          <mask id={maskIdRef.current}>
            <rect
              x="0"
              y="0"
              width={dims.width}
              height={dims.height}
              fill="black"
            />
            <g>
              {Array.from({ length: rows }).map((_, row) =>
                Array.from({ length: cols }).map((_, col) => (
                  <PixelMaskRect
                    key={`${col}-${row}`}
                    id={`${maskIdRef.current}-px-${col}-${row}`}
                    x={col * pixelSize}
                    y={row * pixelSize}
                    size={pixelSize}
                    fadeDuration={fadeDuration}
                    delay={delay}
                  />
                )),
              )}
            </g>
          </mask>
        </defs>

        {/* Apply the mask to your content via foreignObject */}
        <foreignObject
          x="0"
          y="0"
          width={dims.width}
          height={dims.height}
          mask={`url(#${maskIdRef.current})`}
          xmlns="http://www.w3.org/1999/xhtml"
        >
          {/* IMPORTANT: include XHTML namespace for HTML inside SVG */}
          <div className="w-full h-full">{children}</div>
        </foreignObject>
      </svg>
    </div>
  );
}

function PixelMaskRect({
  id,
  x,
  y,
  size,
  fadeDuration,
  delay,
}: {
  id: string;
  x: number;
  y: number;
  size: number;
  fadeDuration: number;
  delay: number;
}) {
  const controls = useAnimationControls();

  const animatePixel = useCallback(() => {
    controls.start({
      opacity: [1, 0],
      transition: { duration: fadeDuration / 1000, delay: delay / 1000 },
    });
  }, [controls, fadeDuration, delay]);

  const refCb = useCallback(
    (node: SVGRectElement | null) => {
      if (node) (node as any).__animatePixel = animatePixel;
    },
    [animatePixel],
  );

  return (
    <motion.rect
      id={id}
      ref={refCb}
      x={x}
      y={y}
      width={size}
      height={size}
      fill="white" // white = reveal
      initial={{ opacity: 0 }} // hidden until triggered
      animate={controls}
      pointerEvents="none"
    />
  );
}

"use client";

import { useEffect, useState } from "react";
import Gravity, {
  MatterBody,
} from "@/components/fancy/physics/cursor-attractor-and-gravity";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function GravitySection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isSmallScreen = useMediaQuery("(max-width: 1024px)");

  if (!mounted) return;
  return (
    <div className="absolute inset-0 z-0 opacity-10">
      <Gravity
        attractorStrength={0.0005}
        cursorStrength={-0.004}
        cursorFieldRadius={200}
        className="w-full h-full z-0 absolute"
      >
        {[...Array(50)].map((_, i) => {
          // Adjust max size based on screen size
          const maxSize = isSmallScreen ? 50 : 100;
          const size = Math.max(
            isSmallScreen ? 20 : 50,
            Math.random() * maxSize,
          );
          return (
            <MatterBody
              key={i}
              matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
              x={`${Math.random() * 100}%`}
              y={`${Math.random() * 100}%`}
            >
              <div
                className="rounded-full bg-brand-accent2 backdrop-blur-2xl"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                }}
              />
            </MatterBody>
          );
        })}
      </Gravity>
    </div>
  );
}

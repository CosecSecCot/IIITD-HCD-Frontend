"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";

type Options = {
  label?: string;
  className?: string;
  size?: "sm" | "md";
};

/**
 * Returns true if the user has either the OS-level prefers-reduced-motion
 * set, or has toggled the accessibility panel's "Reduce motion" option
 * (which adds `a11y-reduce-motion` to the <html> element).
 */
function useMotionDisabled() {
  const prefersReduced = useReducedMotion();
  const [classFlag, setClassFlag] = useState(false);
  useEffect(() => {
    const check = () =>
      setClassFlag(
        document.documentElement.classList.contains("a11y-reduce-motion"),
      );
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);
  return Boolean(prefersReduced) || classFlag;
}

export function useHoverGoPill({
  label = "VIEW",
  className = "",
  size = "md",
}: Options = {}) {
  const motionDisabled = useMotionDisabled();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.4 });

  const [visible, setVisible] = useState(false);

  const updateFromEvent = (
    e: React.MouseEvent<HTMLElement>,
    snap = false
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = e.clientX - rect.left;
    const ny = e.clientY - rect.top;
    if (snap) {
      x.jump(nx);
      y.jump(ny);
    } else {
      x.set(nx);
      y.set(ny);
    }
  };

  const handlers = {
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      updateFromEvent(e, true);
      setVisible(true);
    },
    onMouseMove: (e: React.MouseEvent<HTMLElement>) => updateFromEvent(e),
    onMouseLeave: () => setVisible(false),
  };

  const sizing =
    size === "sm"
      ? "px-3.5 py-1.5 text-[11px] lg:text-[12px] gap-1"
      : "px-4 py-2 text-[12px] lg:text-[14px] gap-1.5";

  // When reduced motion is active, skip rendering the cursor-follow pill
  // entirely. The content underneath (cards etc.) is still clickable and
  // the motion layer is purely decorative.
  if (motionDisabled) {
    return { pill: null, handlers: {} };
  }

  const pill = (
    <motion.div
      aria-hidden
      style={{ x: springX, y: springY }}
      className="pointer-events-none absolute top-0 left-0 z-30 will-change-transform"
    >
      <div className="-translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={false}
          animate={{
            opacity: visible ? 1 : 0,
            scale: visible ? 1 : 0.4,
            rotate: visible ? 0 : -12,
            y: visible ? 0 : 8,
          }}
          transition={{
            opacity: { duration: 0.16, ease: "easeOut" },
            scale: { type: "spring", stiffness: 420, damping: 26, mass: 0.5 },
            rotate: { type: "spring", stiffness: 380, damping: 22 },
            y: { type: "spring", stiffness: 380, damping: 24 },
          }}
          className={`flex items-center rounded-full bg-brand-accent2 text-white font-medium uppercase tracking-[0.14em] shadow-[0_8px_24px_-8px_rgba(36,95,120,0.55)] ring-1 ring-white/15 backdrop-blur-sm ${sizing} ${className}`}
        >
          {label}
          <ArrowUpRight
            className={size === "sm" ? "w-[12px] h-auto" : "w-[14px] h-auto"}
            strokeWidth={2.25}
          />
        </motion.div>
      </div>
    </motion.div>
  );

  return { pill, handlers };
}

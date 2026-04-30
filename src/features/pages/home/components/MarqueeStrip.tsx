"use client";

const tokens = [
  "Design",
  "Compute",
  "Research",
  "Prototype",
  "Teach",
  "Make",
];

// A continuous marquee — the band loops on its own so every token reliably
// makes it on-screen without depending on how far the user scrolls. Sized so
// the words read like a banner rather than a wall of text.
export default function MarqueeStrip() {
  // Two copies of the sequence chained, then translated by exactly -50% so
  // the loop is seamless (the second copy lands where the first started).
  const sequence = (
    <span className="flex items-center gap-10 lg:gap-20 px-5 lg:px-10 shrink-0">
      {tokens.map((t) => (
        <span key={t} className="inline-flex items-center gap-10 lg:gap-20 shrink-0">
          <span className="text-[32px] md:text-[44px] lg:text-[64px] font-light leading-none tracking-tight">
            {t}
          </span>
          <span
            aria-hidden
            className="marquee-dot block w-[8px] h-[8px] lg:w-[12px] lg:h-[12px] rounded-full bg-terracotta shrink-0"
          />
        </span>
      ))}
    </span>
  );

  return (
    <section
      aria-label="What we do"
      data-a11y-bg="dark"
      className="relative w-full py-[6vh] lg:py-[8vh] bg-brand-accent2 text-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-white/15" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/15" />

      <div className="marquee-track flex items-center whitespace-nowrap will-change-transform">
        {sequence}
        {sequence}
      </div>

      <style>{`
        .marquee-track {
          animation: hcd-marquee 8s linear infinite;
        }
        @media (min-width: 1024px) {
          .marquee-track {
            animation-duration: 14s;
          }
        }
        @keyframes hcd-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
}

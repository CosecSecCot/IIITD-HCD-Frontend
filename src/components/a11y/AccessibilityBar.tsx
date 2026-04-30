"use client";

import {
  Eye,
  Link2,
  RotateCcw,
  Type,
  Waves,
  X,
} from "lucide-react";
import { PiWheelchair } from "react-icons/pi";
import { useLenis } from "lenis/react";
import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "hcd-a11y-prefs";

type Prefs = {
  textScale: number; // 1, 1.15, 1.3
  highContrast: boolean;
  underlineLinks: boolean;
  reduceMotion: boolean;
};

const DEFAULT_PREFS: Prefs = {
  textScale: 1,
  highContrast: false,
  underlineLinks: false,
  reduceMotion: false,
};

const TEXT_SIZES = [
  { label: "A", size: 1, title: "Default text size" },
  { label: "A", size: 1.15, title: "Larger text" },
  { label: "A", size: 1.3, title: "Largest text" },
];

function applyPrefs(p: Prefs) {
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  html.style.setProperty("--a11y-zoom", String(p.textScale));
  html.classList.toggle("a11y-high-contrast", p.highContrast);
  html.classList.toggle("a11y-underline-links", p.underlineLinks);
  html.classList.toggle("a11y-reduce-motion", p.reduceMotion);
}

export default function AccessibilityBar() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT_PREFS);
  const [hydrated, setHydrated] = useState(false);
  // Tracks whether the trigger overlaps a section marked as dark so we
  // can flip its colors for visibility (white pill, blue icon).
  const [onDark, setOnDark] = useState(false);
  // Gates rendering until the page-reveal loader is gone. Without this
  // the yellow-or-blue a11y button peeks through the top-right corner
  // of the loader on first load.
  const [loaderReady, setLoaderReady] = useState(false);

  // Wait for the landing-page loader (`PageReveal`) to finish before
  // rendering. We can't just check "is .page-reveal-hero in the DOM right
  // now" because the layout (this component) can hydrate before children
  // (PageReveal) under streaming SSR -- in prod this caused the trigger
  // to flash on top of the loader. So we check three signals:
  //   1. PageReveal's session flag (set when its animation completes)
  //   2. Loader appeared then disappeared from the DOM
  //   3. Grace timeout (covers non-home pages with no PageReveal at all)
  useEffect(() => {
    const PAGE_REVEAL_KEY = "hcd:page-reveal-seen";

    try {
      if (sessionStorage.getItem(PAGE_REVEAL_KEY) === "1") {
        setLoaderReady(true);
        return;
      }
    } catch {
      // sessionStorage unavailable -- fall through to observer/timeout.
    }

    let sawLoader = !!document.querySelector(".page-reveal-hero");
    let timeoutId: number | null = null;

    const ready = () => {
      setLoaderReady(true);
      observer.disconnect();
      if (timeoutId !== null) window.clearTimeout(timeoutId);
    };

    const observer = new MutationObserver(() => {
      const present = !!document.querySelector(".page-reveal-hero");
      if (present) {
        sawLoader = true;
      } else if (sawLoader) {
        ready();
        return;
      }
      try {
        if (sessionStorage.getItem(PAGE_REVEAL_KEY) === "1") ready();
      } catch {
        // ignore
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    timeoutId = window.setTimeout(() => {
      if (!sawLoader && !document.querySelector(".page-reveal-hero")) {
        ready();
      }
    }, 1500);

    return () => {
      observer.disconnect();
      if (timeoutId !== null) window.clearTimeout(timeoutId);
    };
  }, []);

  // Load stored preferences on mount and apply them
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = { ...DEFAULT_PREFS, ...JSON.parse(raw) } as Prefs;
        setPrefs(parsed);
        applyPrefs(parsed);
      }
    } catch {
      // localStorage might be unavailable (SSR, privacy mode). Fall back to defaults.
    }
    setHydrated(true);
  }, []);

  // Persist and apply whenever prefs change (after hydration)
  useEffect(() => {
    if (!hydrated) return;
    applyPrefs(prefs);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      // no-op
    }
  }, [prefs, hydrated]);

  // Flip button colors when the trigger sits over a dark-bg section.
  // Sections opt in via `data-a11y-bg="dark"`. We use `elementsFromPoint`
  // (not bare rect overlap) because the footer is `sticky bottom-0` -- its
  // rect is always at the viewport bottom even while a higher z-index
  // wrapper covers it visually. `elementsFromPoint` respects stacking.
  // We also skip pointer-events:none elements -- the global
  // `.texture-overlay` is fixed full-screen at z-99999 (just under the
  // trigger) and would otherwise always come back as the topmost match,
  // making the check report "not dark" everywhere.
  // The page uses Lenis smooth scroll (which suppresses native scroll
  // events), so we subscribe via `useLenis` instead of `window.scroll`.
  const checkDark = useCallback(() => {
    const btn = document.getElementById("a11y-trigger");
    if (!btn) return;
    const r = btn.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const stack = document.elementsFromPoint(cx, cy);
    let topVisible: Element | null = null;
    for (const el of stack) {
      if (el.id === "a11y-trigger" || el.id === "a11y-panel") continue;
      if (el.closest("#a11y-trigger") || el.closest("#a11y-panel")) continue;
      if (window.getComputedStyle(el).pointerEvents === "none") continue;
      topVisible = el;
      break;
    }
    const dark = !!topVisible?.closest('[data-a11y-bg="dark"]');
    setOnDark((prev) => (prev === dark ? prev : dark));
  }, []);

  useLenis(checkDark);

  useEffect(() => {
    if (!loaderReady) return;
    checkDark();
    window.addEventListener("resize", checkDark);
    return () => window.removeEventListener("resize", checkDark);
  }, [loaderReady, checkDark]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const update = (patch: Partial<Prefs>) =>
    setPrefs((prev) => ({ ...prev, ...patch }));

  const reset = () => setPrefs(DEFAULT_PREFS);

  // Don't render anything until the loader is done. The prefs effect
  // above still ran so stored settings are applied to <html> even when
  // the UI isn't visible yet.
  if (!loaderReady) return null;

  return (
    <>
      <button
        id="a11y-trigger"
        type="button"
        aria-label={open ? "Close accessibility options" : "Open accessibility options"}
        aria-expanded={open}
        aria-controls="a11y-panel"
        onClick={() => setOpen((o) => !o)}
        className={`fixed right-4 bottom-4 z-[9000] p-3.5 rounded-full shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-accent1 transition-colors cursor-pointer ${
          onDark && !prefs.highContrast
            ? "bg-white text-brand-accent2 hover:bg-white/90"
            : "bg-brand-accent2 text-white hover:bg-brand-accent2-130"
        }`}
      >
        <PiWheelchair className="w-6 h-6" aria-hidden="true" />
      </button>

      <div
        id="a11y-panel"
        role="dialog"
        aria-label="Accessibility options"
        aria-modal="false"
        aria-hidden={!open}
        className={`fixed right-4 bottom-20 z-[100000] w-[320px] max-w-[calc(100vw-2rem)] bg-white text-black border border-brand-accent2 shadow-2xl font-anybody origin-bottom-right transition-all duration-200 ease-out ${
          open
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-3 scale-95 pointer-events-none"
        }`}
      >
          <header className="flex items-center justify-between px-4 py-3 bg-brand-accent2 text-white">
            <h2 className="font-semibold text-[13px] uppercase tracking-wide">
              Accessibility
            </h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close accessibility options"
              className="p-1 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </header>

          <div className="p-4 space-y-5">
            {/* Text size */}
            <section>
              <div className="flex items-center gap-2 text-[11px] font-medium mb-2 uppercase tracking-wide text-brand-gray4">
                <Type className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Text size</span>
              </div>
              <div
                role="radiogroup"
                aria-label="Text size"
                className="flex gap-1"
              >
                {TEXT_SIZES.map((opt, i) => {
                  const selected = prefs.textScale === opt.size;
                  return (
                    <button
                      key={i}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      title={opt.title}
                      onClick={() => update({ textScale: opt.size })}
                      className={`flex-1 py-2 border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent1 cursor-pointer ${
                        selected
                          ? "bg-brand-accent2 text-white border-brand-accent2"
                          : "bg-white text-black border-brand-accent2/30 hover:border-brand-accent2"
                      }`}
                      style={{ fontSize: `${14 + i * 3}px` }}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </section>

            <Toggle
              icon={<Eye className="w-3.5 h-3.5" aria-hidden="true" />}
              label="High contrast"
              checked={prefs.highContrast}
              onChange={(v) => update({ highContrast: v })}
            />
            <Toggle
              icon={<Link2 className="w-3.5 h-3.5" aria-hidden="true" />}
              label="Underline links"
              checked={prefs.underlineLinks}
              onChange={(v) => update({ underlineLinks: v })}
            />
            <Toggle
              icon={<Waves className="w-3.5 h-3.5" aria-hidden="true" />}
              label="Reduce motion"
              checked={prefs.reduceMotion}
              onChange={(v) => update({ reduceMotion: v })}
            />

            <button
              type="button"
              onClick={reset}
              className="w-full flex items-center justify-center gap-2 py-2 border border-brand-gray3 text-brand-gray3 hover:bg-brand-gray3 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" aria-hidden="true" />
              <span className="text-[11px] uppercase tracking-wide font-medium">
                Reset to defaults
              </span>
            </button>
          </div>
      </div>
    </>
  );
}

function Toggle({
  icon,
  label,
  checked,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-2 text-[13px] text-black">
        {icon}
        {label}
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-brand-accent1 ${
          checked ? "bg-brand-accent2" : "bg-brand-gray2/40"
        }`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-[22px]" : "translate-x-[2px]"
          }`}
        />
      </button>
    </div>
  );
}

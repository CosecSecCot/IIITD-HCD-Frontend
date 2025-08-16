"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook to listen to a CSS media query.
 *
 * @param {string} query - The media query string (e.g., "(max-width: 768px)").
 * @returns {boolean} Whether the media query currently matches.
 */
export function useMediaQuery(query: string): boolean {
  const getMatches = (q: string) => {
    if (typeof window !== "undefined") {
      return window.matchMedia(q).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState(() => getMatches(query));

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQueryList.addEventListener("change", handleChange);

    // Ensure it matches on mount (for hydration mismatch safety)
    setMatches(mediaQueryList.matches);

    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}

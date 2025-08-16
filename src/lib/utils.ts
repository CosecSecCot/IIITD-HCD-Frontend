import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getContrastingTextColor(hex: string): string {
  // Remove the '#' if present
  hex = hex.replace(/^#/, "");

  // Expand shorthand (#abc → #aabbcc)
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((ch) => ch + ch)
      .join("");
  }

  if (hex.length !== 6) {
    throw new Error("Invalid hex color");
  }

  // Convert to RGB
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;

  // Apply sRGB gamma correction
  const [R, G, B] = [r, g, b].map((v) => {
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });

  // Calculate relative luminance
  const luminance = 0.2126 * R + 0.7152 * G + 0.0722 * B;

  // Return black or white
  return luminance > 0.179 ? "#000000" : "#FFFFFF";
}

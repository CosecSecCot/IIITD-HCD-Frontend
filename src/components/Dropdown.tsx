"use client";

import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Dropdown({
  label,
  options,
  selected,
  onClickAction,
}: {
  label: string;
  options: string[];
  selected: string;
  onClickAction: (option: string) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-full">
      <button
        type="button"
        className="relative w-full px-[2em] py-[0.5em] border border-brand-gray1 flex items-center justify-center text-[12px] lg:text-[18px] uppercase cursor-pointer"
        onClick={() => setOpen((o) => !o)}
      >
        <LetterSwapForward label={selected || label} staggerDuration={0.005} />

        <ChevronDown
          className={`absolute top-[calc(50%-9px)] lg:top-[calc(50%-12px)] right-[1em] w-[18px] h-[18px] lg:w-[24px] lg:h-[24px] ml-2 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <ul className="absolute z-[9995] left-0 w-full bg-white border border-black/30 shadow-md">
          {options.map((opt) => (
            <li
              key={opt}
              className={`px-[2em] py-[0.5em] hover:bg-brand-gray1/30 cursor-pointer text-[12px] lg:text-[18px] uppercase ${selected === opt ? "bg-brand-gray1/50" : ""}`}
              onClick={() => {
                onClickAction(opt);
                setOpen(false);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

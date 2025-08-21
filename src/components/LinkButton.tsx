import Link from "next/link";
import LetterSwapForward from "./fancy/text/letter-swap-forward-anim";
import { ArrowRight } from "lucide-react";
import { HTMLAttributeAnchorTarget } from "react";
import { cn } from "@/lib/utils";

export default function LinkButton({
  text,
  href,
  target,
  className,
  type = "default",
}: {
  text: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
  type?: "default" | "solid";
}) {
  return (
    <Link
      target={target}
      href={href}
      className={cn(
        className,
        type === "default"
          ? "font-normal w-max flex justify-center items-center gap-[24px] px-[4em] py-[0.75em] text-[14px] xl:text-[18px] bg-brand-accent2-130/5 hover:bg-brand-accent2 border border-brand-accent2-130 text-brand-accent2-130 hover:text-white backdrop-blur-lg transition-all duration-300"
          : "font-normal w-max flex justify-center items-center gap-[24px] px-[4em] py-[0.75em] text-[14px] xl:text-[18px] bg-brand-accent2 text-white border border-brand-accent2 hover:bg-brand-accent2-130 hover:text-white backdrop-blur-lg transition-all duration-300"
      )}
    >
      <LetterSwapForward
        label={text}
        staggerDuration={0.005}
        className="w-max"
      />
      <ArrowRight className="w-[18px] h-auto" />
    </Link>
  );
}

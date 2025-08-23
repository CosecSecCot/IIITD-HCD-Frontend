import Link from "next/link";
import LetterSwapForward from "./fancy/text/letter-swap-forward-anim";
import { ArrowRight } from "lucide-react";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function LinkButton({
  text,
  href,
  target,
  className,
  type = "default",
  icon = <ArrowRight className="w-[18px] h-auto" />,
  iconPosition = "right",
  rounded = false,
}: {
  text: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
  type?: "default" | "solid" | "transparent";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  rounded?: boolean;
}) {
  const base =
    "font-normal w-max flex justify-center items-center gap-[1em] px-[2em] lg:px-[4em] py-[0.75em] text-[14px] lg:text-[18px] border transition-all duration-300";
  const typeClass =
    type === "default"
      ? "bg-brand-accent2-130/5 hover:bg-brand-accent2 border-brand-accent2-130 text-brand-accent2-130 hover:text-white backdrop-blur-lg"
      : type === "solid"
      ? "bg-brand-accent2 text-white border-brand-accent2 hover:bg-brand-accent2-130 backdrop-blur-lg"
      : "bg-transparent text-white border border-white backdrop-blur-lg hover:backdrop-blur-2xl";
  const roundedClass = rounded ? "rounded-full" : "";

  return (
    <Link
      target={target}
      href={href}
      className={cn(cn(base, typeClass, roundedClass), className)}
    >
      {iconPosition === "left" && icon}
      <LetterSwapForward
        label={text}
        staggerDuration={0.005}
        className="w-max"
      />
      {iconPosition === "right" && icon}
    </Link>
  );
}

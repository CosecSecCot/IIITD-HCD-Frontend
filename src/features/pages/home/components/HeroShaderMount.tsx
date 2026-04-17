"use client";

import dynamic from "next/dynamic";

const HeroShader = dynamic(() => import("./HeroShader"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-brand-accent2-130" />,
});

export default function HeroShaderMount() {
  return <HeroShader />;
}

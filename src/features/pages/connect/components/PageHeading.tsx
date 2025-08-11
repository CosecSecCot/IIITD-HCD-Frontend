import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";

export default function PageHeading({
  title,
  subtitle,
  description,
}: {
  title: string | React.ReactNode;
  subtitle: string;
  description: string;
}) {
  return (
    <div className="w-full flex justify-between">
      <div className="w-8 lg:w-[calc(12.5vw-2em)] bg-brand-accent2" />
      <div className="w-[75vw] lg:w-[50vw] px-[1em]">
        <p className="uppercase text-[20px] lg:text-[28px] leading-tight font-semibold text-brand-accent2">
          <LetterSwapForward
            label={subtitle}
            staggerDuration={0.005}
            className="w-max cursor-default"
          />
        </p>
        <h1 className="text-[40px] lg:text-[64px] leading-tight">{title}</h1>
        <p className="text-[18px] lg:text-[24px] w-3/4">{description}</p>
      </div>
      <div className="w-[12.5vw] lg:w-[calc(37.5vw-1em)] bg-brand-accent2" />
    </div>
  );
}

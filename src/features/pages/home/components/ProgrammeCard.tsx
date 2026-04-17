export default function ProgrammeCard({
  text,
  number,
}: {
  text: string;
  number: number | string;
}) {
  return (
    <div className="flex flex-col justify-between gap-[1em] py-[28px] px-[18px] lg:py-[40px] lg:px-[30px] bg-brand-gray1/5 border border-brand-accent2-130 backdrop-blur-lg hover:backdrop-blur-2xl hover:bg-brand-accent2 hover:text-white transition-all duration-200 group">
      <p className="text-[14px] lg:text-[20px] font-light break-words">
        {text}
      </p>
      <p className="text-[64px] lg:text-[96px] leading-none text-brand-accent2-130 group-hover:text-terracotta-light font-extralight opacity-40 group-hover:opacity-100 transition-[color,opacity] duration-200 self-end">
        {number}
      </p>
    </div>
  );
}

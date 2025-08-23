import CenterUnderline from "@/components/fancy/text/underline-center";
import Link from "next/link";

export default function ContactCard({
  title,
  subtitle,
  linkText,
  linkHref,
  icon,
}: {
  title: string | React.ReactNode;
  subtitle: string | React.ReactNode;
  linkText: string;
  linkHref: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="pr-[1em]">
      <h3 className="text-[18px] lg:text-[24px] font-semibold">{title}</h3>
      <p className="text-[16px] lg:text-[20px]">{subtitle}</p>
      <Link
        href={linkHref}
        className="mt-[1em] flex items-center gap-[0.5em] text-[18px] lg:text-[24px] font-medium hover:text-brand-accent2"
      >
        <CustomLinkText label={linkText} />
        {icon}
      </Link>
    </div>
  );
}

function CustomLinkText({ label }: { label: string }) {
  return (
    <CenterUnderline underlineHeightRatio={0.075}>
      {label}
      {/* <LetterSwapForward
        label={label}
        staggerDuration={0.001}
        className="leading-tight"
      /> */}
    </CenterUnderline>
  );
}

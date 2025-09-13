import CenterUnderline from "@/components/fancy/text/underline-center";
import Link from "next/link";

export default function ContactCard({
  title,
  subtitle,
  linkText,
  linkHref,
  external = false,
  icon,
}: {
  title: string | React.ReactNode;
  subtitle: string | React.ReactNode;
  linkText: string;
  linkHref: string;
  external?: boolean;
  icon: React.ReactNode;
}) {
  return (
    <div className="pr-[1em] flex flex-col gap-[1em] justify-between">
      <div>
        <h3 className="text-[18px] lg:text-[24px] font-semibold">{title}</h3>
        <p className="text-[16px] lg:text-[20px]">{subtitle}</p>
      </div>
      <Link
        href={linkHref}
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener noreferrer" : undefined}
        className="flex items-center gap-[0.5em] text-[18px] lg:text-[24px] font-medium hover:text-brand-accent2"
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
    </CenterUnderline>
  );
}

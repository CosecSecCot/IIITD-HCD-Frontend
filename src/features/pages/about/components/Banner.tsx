import Image from "next/image";

export default function Banner({
  title,
  subtitle,
  imageSrc,
  breadcrumbs,
}: {
  title: string;
  subtitle: string;
  imageSrc: string;
  breadcrumbs: string[];
}) {
  return (
    <>
      <p className="reveal-animation-clip font-normal text-[12px] lg:text-[20px] text-brand-accent2">
        {breadcrumbs.map((breadcrumb, index) => {
          if (index < breadcrumbs.length - 1) {
            return (
              <span key={index}>
                <span
                  // href={"/" + breadcrumbs.slice(0, index + 1).join("/")}
                  className="uppercase"
                  style={{
                    //   color: `rgb(255, 255, 255, ${
                    //     (index + 1) / breadcrumbs.length
                    //   })`,
                    color: `color-mix(in oklab, var(--color-brand-accent2) ${
                      ((index + 1) / breadcrumbs.length) * 100
                    }%, transparent)`,
                  }}
                >
                  {breadcrumb}
                  {index == breadcrumbs.length - 1 ? "" : " / "}
                </span>
              </span>
            );
          }

          return (
            <span key={index} className="uppercase">
              {breadcrumb}
            </span>
          );
        })}
      </p>
      <section
        role="banner"
        className="relative mt-2 lg:mt-5 w-full h-auto lg:aspect-video rounded-xl lg:rounded-[30px] overflow-hidden"
      >
        <div className="relative z-20 w-full h-full px-5 py-6 lg:px-10 lg:py-12 flex flex-col justify-end gap-3 text-white">
          <div className="lg:w-[70%]">
            <h1 className="font-semibold text-[28px] lg:text-[48px] leading-none">
              {title}
            </h1>
            <p className="mt-[0.5em] font-normal text-[14px] lg:text-[20px] leading-tight">
              {subtitle}
            </p>
          </div>
          <div>View More Options</div>
        </div>
        <div className="absolute inset-0 z-10 w-full h-full bg-gradient-to-b from-black/0 to-black/50" />
        <Image
          src={imageSrc}
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          width={1280}
          height={720}
        />
      </section>
    </>
  );
}

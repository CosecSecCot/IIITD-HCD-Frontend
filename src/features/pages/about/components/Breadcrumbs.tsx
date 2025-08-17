export default function Breadcrumbs({ data }: { data: string[] }) {
  return (
    <p className="reveal-animation-clip font-normal text-[12px] lg:text-[20px] text-brand-accent2">
      {data.map((breadcrumb, index) => {
        if (index < data.length - 1) {
          return (
            <span key={index}>
              <span
                // href={"/" + data.slice(0, index + 1).join("/")}
                className="uppercase"
                style={{
                  //   color: `rgb(255, 255, 255, ${
                  //     (index + 1) / data.length
                  //   })`,
                  color: `color-mix(in oklab, var(--color-brand-accent2) ${
                    ((index + 1) / data.length) * 100
                  }%, transparent)`,
                }}
              >
                {breadcrumb}
                {index == data.length - 1 ? "" : " / "}
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
  );
}

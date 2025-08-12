/**
 * A stylized heading component with decorative gradient lines on either side.
 *
 * @component
 * @param {Object} props - Component props
 * @param {'left' | 'right' | 'middle'} props.align - Alignment of the heading.
 * @param {React.ReactNode} props.children - The content to be displayed as the heading text.
 */
export default function Heading({
  align = "left",
  children,
}: {
  align: "left" | "right" | "middle";
  children: React.ReactNode;
}) {
  let leftBlock, rightBlock;
  switch (align) {
    case "left":
      leftBlock = (
        <div className="h-2 lg:h-4 w-8 xl:w-[calc(50vw-600px)] bg-gradient-to-r from-brand-accent2/30 to-transparent flex-shrink-0" />
      );
      rightBlock = (
        <div className="h-2 lg:h-4 w-full bg-gradient-to-l from-brand-accent2/30 sm:from-brand-accent2/60 to-transparent" />
      );
      break;

    case "middle":
      leftBlock = (
        <div className="h-2 lg:h-4 w-full bg-gradient-to-r from-brand-accent2/30 to-transparent" />
      );
      rightBlock = (
        <div className="h-2 lg:h-4 w-full bg-gradient-to-l from-brand-accent2/30 sm:from-brand-accent2/60 to-transparent" />
      );
      break;

    case "right":
      leftBlock = (
        <div className="h-2 lg:h-4 w-full bg-gradient-to-r from-brand-accent2/30 to-transparent" />
      );
      rightBlock = (
        <div className="h-2 lg:h-4 w-8 xl:w-[calc(50vw-600px)] bg-gradient-to-l from-brand-accent2/30 sm:from-brand-accent2/60 to-transparent flex-shrink-0" />
      );
      break;

    default:
      break;
  }

  return (
    <div
      role="heading"
      aria-level={2}
      aria-describedby="study-phd-heading"
      className="flex items-center"
    >
      {leftBlock}
      <h2
        id="study-phd-heading"
        className="text-[26px] lg:text-[64px] font-light text-center flex-shrink-0"
      >
        {children}
      </h2>
      {rightBlock}
    </div>
  );
}

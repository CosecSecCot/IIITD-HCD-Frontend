import TextReveal from "../../../components/TextReveal";

/**
 * Page heading component for /about pages.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title
 * @param {string} props.subtitle
 * @param {string} props.description
 *
 * @returns {JSX.Element}
 */
const Heading = ({ title, subtitle, description }) => {
  return (
    <section
      role="heading"
      aria-describedby="page-heading"
      className="xl:mr-[48px]"
    >
      <p className="text-[18px] lg:text-[24px] text-brand-accent2-130">
        {subtitle}
      </p>
      <h1 id="page-heading" className="font-light text-[38px] lg:text-[52px]">
        {title}
      </h1>
      <div className="w-[75vw] xl:w-[50vw] h-[0.5em] bg-brand-accent2" />
      <TextReveal>
        <p className="font-light text-[14px] lg:text-[18px] mt-[40px]">
          {description}
        </p>
      </TextReveal>
    </section>
  );
};
export default Heading;

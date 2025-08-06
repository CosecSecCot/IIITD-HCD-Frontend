import TextReveal from "../../components/TextReveal";

const StatsBlock = ({ stats }) => {
  return (
    <section className="flex flex-wrap gap-[2em] lg:gap-[5em] px-[2em] py-[1em] bg-brand-accent2-130/5 border border-brand-accent2 max-xl:border-r-brand-accent2">
      {stats.map((stat, idx) => (
        <div key={idx} className="leading-tight">
          <TextReveal delay={0.3}>
            <p className="text-[14px] lg:text-[20px] uppercase opacity-60">
              {stat.label}
            </p>
          </TextReveal>
          <TextReveal delay={0.3}>
            <h2 className="text-[37px] lg:text-[54px] font-medium text-brand-accent2">
              {stat.value}
            </h2>
          </TextReveal>
        </div>
      ))}
    </section>
  );
};
export default StatsBlock;

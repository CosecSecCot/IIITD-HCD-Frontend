import Navbar from "../../../components/Navbar";
import GridLines from "../../../components/GridLines";
import Footer from "../../../components/Footer";
import Heading from "../_components/Heading";
import Sidebar from "../_components/Sidebar";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import mainEventImage from "../../../assets/main-event.jpg";

const newsData = [
  {
    date: "January 2024",
    title: "1Pixel Design Conference '24 at IIIT-Delhi Shaping the Future",
    description:
      "Admission to this program will be through two channels - approximately half of the. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quis ullam cumque enim molestiae sapiente! Ipsa a voluptatem eligendi repudiandae voluptates maxime, quam quisquam possimus maiores veniam reprehenderit minus voluptatum.",
    image: "",
  },
  {
    date: "January 2024",
    title: "1Pixel Design Conference '24 at IIIT-Delhi Shaping the Future",
    description:
      "Admission to this program will be through two channels - approximately half of the.",
    image: "",
  },
];

const NewsAndEventsPage = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1280px)");

  return (
    <div className="relative w-full font-anybody">
      <Navbar type="solid" />
      <GridLines count={isSmallScreen ? 3 : 4} />
      <div className="texture-overlay" />
      <main className="w-[75vw] xl:w-[50vw] pt-[216px] ml-[12.5vw]">
        <Heading
          title="News & Events"
          subtitle="Human Centred Design"
          description="
        Admission to this program will be through two channels – approximately
        half of the seats will be through the Joint Admission Counselling (JAC)
        of Delhi.
          "
        />
        <section className="xl:mr-[48px] mt-[40px]">
          <div className="relative flex flex-col justify-end aspect-square md:aspect-video rounded-lg overflow-hidden">
            <div className="relative z-20 p-[40px] text-white">
              <p className="text-[16px] lg:text-[18px] opacity-80">
                JANUARY 2024
              </p>
              <h3 className="font-medium text-[18px] lg:text-[20px]">
                1Pixel Design Conference '24 at IIIT-Delhi Shaping the Future
              </h3>
              <p className="font-light text-[16px] lg:text-[18px] opacity-80 mt-[0.5em]">
                Admission to this program will be through two channels –
                approximately half of the.
              </p>
            </div>
            <div className="absolute z-10 inset-0 bg-gradient-to-b from-black/0 to-black/75" />
            <img
              src={mainEventImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </section>
        <section className="my-[40px] space-y-[40px]">
          <NewsSection heading="Genre Definition" content={newsData} />
        </section>
      </main>
      <Sidebar />
      <Footer type="second" />
    </div>
  );
};
export default NewsAndEventsPage;

/**
 * @component
 * @param {Object} props - Component props
 * @param {string} props.heading - The main heading text of the section.
 * @param {unknown[]} props.content - The content of the section.
 *
 * @returns {JSX.Element}
 */
function NewsSection({ heading, content }) {
  return (
    <section className="xl:mr-[48px]">
      <h2 className="text-[18px] lg:text-[24px] text-brand-accent2-130">
        {heading}
      </h2>
      <div className="mt-[1em] space-y-[2em]">
        {content.map((news, idx) => {
          return <NewsCard key={idx} content={news} />;
        })}
      </div>
    </section>
  );
}

function NewsCard({ content }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-[1em]">
      <div className="w-full md:w-1/3 h-auto aspect-video md:aspect-[4/3] flex-shrink-0 bg-brand-gray1/25 rounded-lg overflow-hidden" />
      <div>
        <p className="text-[16px] lg:text-[18px] text-brand-accent2-130 opacity-80">
          {content.date}
        </p>
        <h3 className="font-medium text-[18px] lg:text-[20px] text-brand-accent2-130">
          {content.title}
        </h3>
        <p className="font-light text-[16px] lg:text-[18px] opacity-60 mt-[0.5em]">
          {content.description}
        </p>
      </div>
    </div>
  );
}

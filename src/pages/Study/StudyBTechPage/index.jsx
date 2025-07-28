import Navbar from "../../../components/Navbar";
import GridLines from "../../../components/GridLines";
import Banner from "../components/Banner";
import Footer from "../../../components/Footer";
import Heading from "../components/Heading";
import ViewCoursesCard from "../components/ViewCourseCard";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

const programmeItems = [
  {
    number: "01",
    text: "Ability to function effectively in teams to accomplish a common goal.",
  },
  {
    number: "02",
    text: "Ability to design and implement efficient software solutions using suitable algorithms, data structures, and other computing techniques.",
  },
  {
    number: "03",
    text: "Understanding of design principles and techniques and ability to apply these for developing solutions to human/societal problems.",
  },
  {
    number: "04",
    text: "Ability to independently investigate a problem which can be solved by an Human Computer Interaction (HCI).",
  },
  {
    number: "05",
    text: "Ability to effectively use suitable tools and platforms, as well as enhance them, to develop applications/products.",
  },
];

const StudyBTech = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1280px)");

  return (
    <div className="relative font-anybody">
      <div className="texture-overlay" />
      <div className="background-element z-10" />
      <Navbar type="solid" />
      <GridLines count={isSmallScreen ? 3 : 4} />
      <Banner
        title={"Computer Science Design"}
        subtitle={"Bachelor’s Degree  |  B.Tech"}
        sideText={
          "Design tomorrow's information technology products, services and systems which combine emerging technologies"
        }
      />

      <section className="mt-[64px] lg:mt-[100px]">
        <Heading align="left">
          Study <span className="text-brand-accent2 font-semibold">CSD</span>{" "}
          @IIITD
        </Heading>
        <p className="ml-[12.5vw] xl:ml-[37.5vw] mt-[32px] lg:mt-[80px] w-[75vw] xl:w-[50vw] text-[16px] lg:text-[24px] font-light">
          The program will prepare students to work in the IT industry as well
          as digital media industry like gaming, animation, virtual/augmented
          reality, etc. The program will also allow students, who want to pursue
          higher studies, to take up higher studies in CS/IT or in Design.
          <br />
          <br />
          <br />
          The program will prepare students to work in the IT industry as well
          as digital media industry like gaming, animation, virtual/augmented
          reality, etc. The program will also allow students, who want to pursue
          higher studies, to take up higher studies in CS/IT or in Design.
        </p>
      </section>

      <section className="mt-[64px] lg:mt-[100px]">
        <Heading align="right">
          <span className="text-brand-accent2 font-semibold">Admissions</span>{" "}
          Process
        </Heading>
        <p className="ml-[12.5vw] xl:ml-[37.5vw] mt-[32px] lg:mt-[80px] w-[75vw] xl:w-[50vw] text-[16px] lg:text-[24px] font-light">
          Admission to this program will be through two channels – approximately
          half of the seats will be through the Joint Admission Counselling
          (JAC) of Delhi, which takes students through JEE (Main), and
          approximately half the seats will be filled through UCEED conducted by
          IIT Bombay. More information about the admission to all the B.Tech.
          programs at IIIT-Delhi will be made available on the admissions pages
          from time to time. More details regarding admissions are available
          here.
        </p>
      </section>

      <section className="mt-[64px] lg:mt-[100px]">
        <Heading align="middle">
          <span className="text-brand-accent2 font-semibold">Programme</span>{" "}
          Structure
        </Heading>
        <div className="mt-[32px] lg:mt-[80px]">
          <div
            className={`ml-[12.5vw] w-[75vw] grid gap-[1em]`}
            style={{
              gridTemplateColumns: isSmallScreen
                ? "repeat(1, minmax(0, 1fr))"
                : `repeat(${programmeItems.length}, minmax(0, 1fr))`,
            }}
          >
            {programmeItems.map((item) => (
              <ProgrammeCard
                key={item.number}
                text={item.text}
                number={item.number}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-[75vw] ml-[12.5vw] mt-[64px] lg:mt-[128px] grid grid-cols-1 lg:grid-cols-2 gap-[1em]">
        <ViewCoursesCard />
        <ViewCoursesCard />
      </section>
      <Footer />
    </div>
  );
};
export default StudyBTech;

function ProgrammeCard({ text, number }) {
  return (
    <div className="flex flex-col justify-between gap-[1em] py-[28px] px-[18px] lg:py-[40px] lg:px-[30px] bg-brand-gray1/5 border border-brand-accent2-130 backdrop-blur-lg">
      <p className="text-[16px] lg:text-[20px] font-light break-words">
        {text}
      </p>
      <p className="text-[96px] leading-none text-brand-accent2-130 font-extralight opacity-40 self-end">
        {number}
      </p>
    </div>
  );
}

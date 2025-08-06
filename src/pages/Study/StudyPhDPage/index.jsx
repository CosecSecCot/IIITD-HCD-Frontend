import Navbar from "../../../components/Navbar";
import GridLines from "../../../components/GridLines";
import Footer from "../../../components/Footer";
import Banner from "../_components/Banner";
import Heading from "../_components/Heading";
import ViewCoursesCard from "../_components/ViewCourseCard";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import TextReveal from "../../../components/TextReveal";

const StudyPhD = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1280px)");

  return (
    <div className="relative font-anybody">
      <div className="texture-overlay" />
      <div className="background-element z-10" />
      <Navbar type="solid" />
      <GridLines count={isSmallScreen ? 3 : 4} />
      <Banner
        title={"Human Centered Design"}
        subtitle={"Doctor of Philosophy  |  PhD"}
        sideText={
          "Design tomorrow's information technology products, services and systems which combine emerging technologies"
        }
      />

      <main className="mt-[64px] lg:mt-[100px] mb-[10vh]">
        <section>
          <Heading align="left">
            Study <span className="text-brand-accent2 font-semibold">PhD</span>{" "}
            @IIITD
          </Heading>

          <TextReveal start={80}>
            <p className="ml-[12.5vw] xl:ml-[37.5vw] mt-[32px] lg:mt-[80px] w-[75vw] xl:w-[50vw] text-[16px] lg:text-[24px] font-light">
              The PhD program at IIIT-Delhi is focused towards research like any
              other PhD program – limited coursework to enhance the breadth and
              depth of a student, followed by focused research. Admissions are
              made through regular admission process as well as rolling mode.
              Regular admissions for all disciplines are made in March-April and
              Nov-Dec every year. For rolling admission, the interested
              candidates are expected to interact with the concerned faculty
              member(s) in IIIT-Delhi and get their consent for working with
              him/her. However, such candidates will undergo a full selection
              process before being admitted to the PhD program.
            </p>
          </TextReveal>
        </section>

        <section className="w-[75vw] ml-[12.5vw] mt-[64px] lg:mt-[128px] grid grid-cols-1 xl:grid-cols-2 gap-[1em]">
          <ViewCoursesCard />
          <ViewCoursesCard />
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default StudyPhD;

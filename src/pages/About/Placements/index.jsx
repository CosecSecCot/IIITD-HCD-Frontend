import Navbar from "../../../components/Navbar";
import GridLines from "../../../components/GridLines";
import Footer from "../../../components/Footer";
import Heading from "../_components/Heading";
import TextReveal from "../../../components/TextReveal";
import Sidebar from "../_components/Sidebar";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

const PlacementsPage = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1280px)");

  return (
    <div className="relative w-full font-anybody">
      <Navbar type="solid" />
      <GridLines count={isSmallScreen ? 3 : 4} />
      <div className="texture-overlay" />
      <main className="w-[75vw] xl:w-[50vw] pt-[216px] ml-[12.5vw]">
        <Heading
          title="Placements"
          subtitle="Human Centred Design"
          description="
        Admission to this program will be through two channels – approximately
        half of the seats will be through the Joint Admission Counselling (JAC)
        of Delhi.
          "
        />
        <section className="my-[40px] xl:mr-[48px] space-y-[1em]">
          <TextReveal>
            <p className="font-light text-[14px] lg:text-[18px] mt-[40px]">
              Our Graduates are a combination of rigorous thinking, hard work
              and fundamentals. The campus promotes a host of student activities
              to improve their soft skills, which are imperative for one to
              excel in his/ her work space. Besides, campus is abuzz with
              activities of various student clubs and organizations.
            </p>
          </TextReveal>
          <TextReveal>
            <p className="font-light text-[14px] lg:text-[18px] mt-[40px]">
              We highly value our partnership with recruiters &amp; remain
              committed to making your recruiting experience productive and
              positive. On behalf of the campus the placement team extends a
              warm welcome to all the recruiters to visit the campus and test
              our budding talents. We hope that firms and our students will
              create synergies &amp; find the best match between their needs and
              capabilities.
            </p>
          </TextReveal>
        </section>
      </main>
      <Sidebar />
      <Footer />
    </div>
  );
};
export default PlacementsPage;

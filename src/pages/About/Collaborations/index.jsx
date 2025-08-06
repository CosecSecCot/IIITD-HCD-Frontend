import Navbar from "../../../components/Navbar";
import GridLines from "../../../components/GridLines";
import Footer from "../../../components/Footer";
import Heading from "../_components/Heading";
import Sidebar from "../_components/Sidebar";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import logo1 from "../../../assets/collab-logo-1.png"; // University of Oulu
import logo2 from "../../../assets/collab-logo-2.png"; // Monash University
import logo3 from "../../../assets/collab-logo-3.png"; // University of Maryland
import logo4 from "../../../assets/collab-logo-4.png"; // URV
import logo5 from "../../../assets/collab-logo-5.png"; // Universiteit Leiden
import { ArrowRight } from "lucide-react";
import TextReveal from "../../../components/TextReveal";
import OpacityReveal from "../../../components/OpacityReveal";

const _collab = [logo1, logo2, logo3, logo4, logo5];
const collaborators = [..._collab, ..._collab, ..._collab];

const CollaborationsPage = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1280px)");

  return (
    <div className="relative w-full font-anybody">
      <Navbar type="solid" />
      <GridLines count={isSmallScreen ? 3 : 4} />
      <div className="texture-overlay" />
      <main className="w-[75vw] xl:w-[50vw] pt-[216px] ml-[12.5vw]">
        <Heading
          title="Collaborations"
          subtitle="Human Centred Design"
          description="
        Admission to this program will be through two channels – approximately
        half of the seats will be through the Joint Admission Counselling (JAC)
        of Delhi.
          "
        />
        <section className="mt-[40px] xl:mr-[48px]">
          <div className="relative font-light p-[40px] border border-brand-accent2 bg-brand-accent2/5 backdrop-blur-lg hover:backdrop-blur-2xl">
            <TextReveal>
              <h2 className="font-medium text-[20px] lg:text-[28px] text-brand-accent2-130">
                Reach out for Collaboration
              </h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="mt-[0.5em] text-[16px] lg:text-[18px]">
                Admission to this program will be through two channels –
                approximately half of the seats will be through the Joint
                Admission Counselling (JAC) of Delhi.
              </p>
            </TextReveal>
            <OpacityReveal delay={0.4}>
              <button className="font-normal w-full xl:w-[25vw] mt-[2em] flex justify-center items-center gap-[24px] py-[0.75em] text-[12px] xl:text-[18px] bg-brand-accent2-130/5 border border-brand-accent2-130 text-brand-accent2-130">
                <span>UCEED PORTAL</span>
                <ArrowRight className="w-[12px] lg:w-[18px] h-auto" />
              </button>
            </OpacityReveal>
          </div>
        </section>
        <section className="my-[60px] space-y-[32px] xl:mr-[48px]">
          <TextReveal>
            <h2 className="text-[18px] lg:text-[24px] font-medium text-brand-accent2-130">
              Current Collaboration
            </h2>
          </TextReveal>
          <TextReveal delay={0.3}>
            <p className="text-[16px] lg:text-[18px] font-light">
              Admission to this program will be through two channels –
              approximately half of the seats will be through the Joint
              Admission Counselling (JAC) of Delhi.
            </p>
          </TextReveal>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-[2em] p-[2em]">
            {collaborators.map((collaborator, idx) => (
              <OpacityReveal start={80} duration={2}>
                <img
                  key={idx}
                  src={collaborator}
                  alt=""
                  className="w-[25vw] lg:w-[5vw] h-auto aspect-square object-contain"
                />
              </OpacityReveal>
            ))}
          </div>
        </section>
      </main>
      <Sidebar />
      <Footer />
    </div>
  );
};
export default CollaborationsPage;

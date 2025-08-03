import Navbar from "../../../components/Navbar";
import GridLines from "../../../components/GridLines";
import Footer from "../../../components/Footer";
import Heading from "../_components/Heading";
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
      </main>
      <Sidebar />
      <Footer type="second" />
    </div>
  );
};
export default PlacementsPage;

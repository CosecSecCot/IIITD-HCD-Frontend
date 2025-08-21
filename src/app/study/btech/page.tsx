import LinkButton from "@/components/LinkButton";
import Banner from "@/features/pages/study/components/Banner";
import Heading from "@/features/pages/study/components/Heading";
import ProgrammeCard from "@/features/pages/study/components/ProgrammeCard";
import ViewCoursesCard from "@/features/pages/study/components/ViewCoursesCard";

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

export default function Page() {
  return (
    <>
      <Banner
        title={"Computer Science Design"}
        subtitle={"Bachelor’s Degree  |  B.Tech"}
        sideText={
          "Design tomorrow's information technology products, services and systems which combine emerging technologies"
        }
      />
      <main className="min-h-screen mt-[30px] mb-[10vh]">
        <article>
          <section>
            <Heading align="left">
              Study{" "}
              <span className="text-brand-accent2 font-semibold">CSD</span>{" "}
              @IIITD
            </Heading>
            <div className="mx-auto mt-[12px] lg:mt-[80px] xl:w-[1280px] px-8 flex flex-col items-end">
              <p className="xl:w-2/3 text-[14px] lg:text-[24px] font-light">
                The internet now underpins how organizations operate and engage
                with stakeholders, elevating the need for effective interaction
                design, rich media, and rigorous user experience practices. As
                industries expand their digital presence, Interaction Design and
                Design Methods have become essential to building intuitive,
                high-impact IT products and services across sectors.
              </p>
              <p className="xl:w-2/3 mt-[32px] lg:mt-[80px] text-[14px] lg:text-[24px] font-light">
                The B.Tech. in Computer Science and Design blends strong
                computing foundations with design thinking and new media
                fluency. A compact core in CS and Design is complemented by
                flexible electives across CS, Design, and Digital Media,
                enabling tailored pathways. Graduates are prepared for IT and
                digital media roles, or advanced study in CS/IT or Design.
              </p>
            </div>
          </section>

          <section className="mt-[64px] lg:mt-[100px]">
            <Heading align="right">
              <span className="text-brand-accent2 font-semibold">
                Admissions
              </span>{" "}
              Process
            </Heading>
            <div className="mx-auto mt-[12px] lg:mt-[80px] xl:w-[1280px] px-8">
              <p className="xl:w-2/3 text-[14px] lg:text-[24px] font-light">
                Admission to this program will be through two channels –
                approximately half of the seats will be through the Joint
                Admission Counselling (JAC) of Delhi, which takes students
                through JEE (Main), and approximately half the seats will be
                filled through UCEED conducted by IIT Bombay. More information
                about the admission to all the B.Tech. programs at IIIT-Delhi
                will be made available on the admissions pages from time to
                time. More details regarding admissions are available here.
              </p>
              <LinkButton
                target="_blank"
                href="https://iiitd.ac.in/admissions/btech/2025/"
                text="FOR MORE DETAILS"
                className="mt-8"
              />
            </div>
          </section>

          <section className="mt-[64px] lg:mt-[100px]">
            <Heading align="middle">
              <span className="text-brand-accent2 font-semibold">
                Programme
              </span>{" "}
              Structure
            </Heading>
            <div className="mt-[32px] lg:mt-[80px]">
              <div className={`mx-auto xl:w-[1280px] px-8 `}>
                TABLE AYEGA YAHA
              </div>
            </div>
          </section>

          <section className="xl:w-[1280px] mx-auto mt-[64px] lg:mt-[128px] px-8 grid grid-cols-1 lg:grid-cols-2 gap-[1em]">
            <ViewCoursesCard />
          </section>
        </article>
      </main>
    </>
  );
}

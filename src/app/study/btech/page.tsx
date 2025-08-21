import LinkButton from "@/components/LinkButton";
import Banner from "@/features/pages/study/components/Banner";
import Heading from "@/features/pages/study/components/Heading";
import ViewCoursesCard from "@/features/pages/study/components/ViewCoursesCard";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "B.Tech in CSD at IIIT-Delhi | Computer Science & Design",
  description:
    "Study Computer Science & Design (CSD) at IIIT-Delhi—solid CS foundations + design, HCI, and creative tech. Explore curriculum, electives, and admissions.",
  keywords: [],
  authors: [{ name: "IIIT Delhi HCD" }],
  creator: "IIIT Delhi HCD",
  publisher: "IIIT Delhi",
  alternates: {
    canonical: "/study/btech",
  },

  openGraph: {
    // url: "https://hcd.iiitd.ac.in/",
    siteName: "HCD IIITD",
    locale: "en-IN",
  },

  twitter: {
    card: "summary_large_image",
    creator: "@hcdiiitd",
  },
};

const programmeTable: string[][] = [
  [
    "Introduction to Programming",
    "Data structures and Algorithms",
    "Operating Systems",
    "Algorithm Design and Analysis / Algorithm Design and Analysis (B)*",
    "Computer Networks",
  ],
  [
    "Digital Circuits",
    "Design Drawing & Visualization",
    "Research Methods in Social Science and Design",
    "Prototyping Interactive Systems",
    "",
  ],
  [
    "Maths I (Linear Algebra)",
    "Maths II (Probability & Statistics)",
    "Advanced Programming",
    "Design of Interactive systems",
    "Technical communication + Environmental Sciences",
  ],
  [
    "Introduction to HCI",
    "Computer Organization",
    "Design Processes & Perspectives",
    "Fundamentals of Database Management Systems",
    "[Elective]",
  ],
  [
    "Communication Skills",
    "Visual Design & Communication",
    "[Maths III (Multivariate Calculus) / Discrete Mathematics]",
    "[SSH / Maths IV (ODE/PDE/Theory of Computation)]",
    "",
  ],
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
      <main className="min-h-screen mt-[30px] lg:mt-[128px] mb-[10vh]">
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
                className="mt-8 w-max"
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
              <div className="mx-auto xl:w-[1280px] px-8">
                {/* ===== MOBILE: stacked semester cards ===== */}
                <div className="lg:hidden space-y-4">
                  {getSemestersFromTable(programmeTable).map(
                    (semesterCourses, sIdx) => (
                      <section
                        key={sIdx}
                        aria-labelledby={`sem-${sIdx + 1}-title`}
                        className="p-[1em] bg-brand-gray1/5 border border-brand-accent2-130 backdrop-blur-lg"
                      >
                        <h3
                          id={`sem-${sIdx + 1}-title`}
                          className="font-semibold text-[20px] text-brand-accent2"
                        >
                          Semester {sIdx + 1}
                        </h3>

                        <ul className="mt-[1em] list-none space-y-[0.5em]">
                          {semesterCourses.map((course, idx) => (
                            <li key={idx} className="font-light text-[14px]">
                              {course}
                            </li>
                          ))}
                        </ul>
                      </section>
                    )
                  )}
                </div>

                {/* ===== DESKTOP: original table, horizontal on lg+ ===== */}
                <div className="hidden lg:block overflow-x-auto">
                  <table className="table-fixed w-full border-collapse">
                    <thead>
                      <tr>
                        <TableCell header>Semester 1</TableCell>
                        <TableCell header>Semester 2</TableCell>
                        <TableCell header>Semester 3</TableCell>
                        <TableCell header>Semester 4</TableCell>
                        <TableCell header>Semester 5</TableCell>
                      </tr>
                    </thead>
                    <tbody>
                      {programmeTable.map((row, ridx) => (
                        <tr key={ridx}>
                          {row.map((cell, cidx) => (
                            <TableCell key={cidx}>
                              {/* allow multi-line content by replacing `\n` with <br/> where needed */}
                              {typeof cell === "string" ? (
                                <>
                                  {cell.split("\n").map((line, i) => (
                                    <div key={i}>{line}</div>
                                  ))}
                                </>
                              ) : (
                                cell
                              )}
                            </TableCell>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
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

function TableCell({
  children,
  header = false,
  className = "",
}: {
  children: React.ReactNode;
  header?: boolean;
  className?: string;
}) {
  return header ? (
    <th
      className={cn(
        className,
        "px-[1em] py-[0.5em] text-left text-[14px] lg:text-[20px] text-white bg-brand-accent2 border border-brand-accent2-130 backdrop-blur-lg"
      )}
    >
      {children}
    </th>
  ) : (
    <td
      className={cn(
        className,
        "font-light px-[1em] py-[0.5em] text-[14px] lg:text-[20px] border border-brand-accent2-130 backdrop-blur-lg"
      )}
    >
      {children}
    </td>
  );
}

/* helper: convert programmeTable (rows x cols) -> semesters: array of columns */
function getSemestersFromTable(table: string[][]) {
  const cols = table[0]?.length || 0;
  const semesters: string[][] = Array.from({ length: cols }, () => []);

  for (let r = 0; r < table.length; r++) {
    for (let c = 0; c < cols; c++) {
      const val = (table[r] && table[r][c]) || "";
      if (val && val.trim() !== "") {
        semesters[c].push(val);
      }
    }
  }
  return semesters;
}

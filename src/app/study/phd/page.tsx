import LinkButton from "@/components/LinkButton";
import Banner from "@/features/pages/study/components/Banner";
import Heading from "@/features/pages/study/components/Heading";
import ViewCoursesCard from "@/features/pages/study/components/ViewCoursesCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PhD in Human-Centered Design | IIIT-Delhi",
  description:
    "Advance HCI, UX, XR, and creative tech research with a PhD in HCD at IIIT-Delhi. Work in leading labs with expert faculty and strong publication culture.",
  keywords: [],
  authors: [{ name: "IIIT Delhi HCD" }],
  creator: "IIIT Delhi HCD",
  publisher: "IIIT Delhi",
  alternates: {
    canonical: "/study/phd",
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

export default function Page() {
  return (
    <>
      <Banner
        title={"Human Centered Design"}
        subtitle={"Doctor of Philosophy  |  PhD"}
        sideText={
          "Design tomorrow's information technology products, services and systems which combine emerging technologies"
        }
      />
      <main className="mt-[30px] lg:mt-[128px] mb-[10vh]">
        <article>
          <section>
            <Heading align="left">
              Study{" "}
              <span className="text-brand-accent2 font-semibold">PhD</span>{" "}
              @IIITD
            </Heading>

            <div className="mx-auto mt-[32px] lg:mt-[80px] xl:w-[1280px] px-8">
              <p className="ml-auto xl:w-2/3 text-[14px] lg:text-[24px] font-light">
                The PhD program at IIIT-Delhi is focused towards research like
                any other PhD program – limited coursework to enhance the
                breadth and depth of a student, followed by focused research.
                Admissions are made through regular admission process as well as
                rolling mode. Regular admissions for all disciplines are made in
                March-April and Nov-Dec every year. For rolling admission, the
                interested candidates are expected to interact with the
                concerned faculty member(s) in IIIT-Delhi and get their consent
                for working with him/her. However, such candidates will undergo
                a full selection process before being admitted to the PhD
                program.
              </p>
              <LinkButton
                target="_blank"
                href="https://iiitd.ac.in/academics/phd"
                text="FOR MORE DETAILS"
                className="lg:ml-[33.33%] mt-8 w-max"
              />
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

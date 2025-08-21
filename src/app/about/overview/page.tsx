import LinkButton from "@/components/LinkButton";
import Banner from "@/features/pages/about/components/Banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Human-Centered Design at IIIT-Delhi | Department Overview",
  description:
    "Discover HCD at IIIT-Delhi—our vision, people, studios, and labs at the intersection of design and computing to build inclusive, impactful technology.",
  keywords: [],
  authors: [{ name: "IIIT Delhi HCD" }],
  creator: "IIIT Delhi HCD",
  publisher: "IIIT Delhi",
  alternates: {
    canonical: "/about/overview",
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

const stats = [
  { label: "ALUMNI", value: "2000+" },
  { label: "STUDENTS", value: "2000+" },
  { label: "PAPERS", value: "20+" },
  { label: "FACULTY", value: "200+" },
];

export default function Page() {
  return (
    <main>
      <article className="mx-auto mt-12 px-8 xl:w-[1280px] font-light">
        <Banner
          title="Human-Centered Design at IIIT-Delhi — Design Technology with People at the Centre"
          subtitle="We combine rigorous computer-science training with design thinking and studio practice to build products, systems and experiences that solve real human and societal problems."
          imageSrc={"/rnd-building.png"}
          breadcrumbs={["about", "overview"]}
          links={[
            { title: "View Study Options", href: "/study/btech" },
            { title: "News & Events", href: "/about/news-events" },
          ]}
        />

        <section className="mt-5 lg:mt-12">
          <p className="text-[14px] lg:text-[20px]">
            Human-Centered Design (HCD) at IIIT-Delhi trains technically
            rigorous designers — engineers who think like designers, and
            designers who code. Our B.Tech. in Computer Science & Design (CSD)
            blends algorithms and systems with design methods, prototyping and
            user research so graduates can create usable, inclusive and scalable
            technology. The program, faculty research, and student studio work
            are closely integrated with CSE, ECE, Mathematics and Social
            Sciences, enabling interdisciplinary projects spanning HCI, wearable
            computing, AR/VR, game & media design, and intelligent interactive
            systems.
          </p>

          <div className="mt-5 lg:mt-12 relative p-6 lg:p-[40px] border border-brand-accent2 bg-brand-accent2/5 backdrop-blur-lg hover:backdrop-blur-2xl transition-all duration-300">
            <h2 className="font-medium text-[18px] lg:text-[28px] text-brand-accent2">
              Department Specialization Areas
            </h2>
            <p className="mt-[0.5em] text-[14px] lg:text-[18px]">
              Our department brings together diverse expertise across design,
              technology, and human-centered innovation through the following
              specialization areas:
            </p>
            <ul className="mt-2 text-[14px] lg:text-[18px] list-disc list-inside">
              <li>Human-Computer Interaction</li>
              <li>Design Research</li>
              <li>Animation, Digital Film-making and Game Design</li>
              <li>Human-Centered Robotics & Artificial Intelligence</li>
              <li>Mobile Systems & Applications</li>
              <li>Machine Learning, Deep Learning</li>
              <li>Inclusive Design & Accessibility</li>
              <li>Augmented & Virtual Reality</li>
            </ul>
          </div>

          {/* <div className="w-full box-border flex justify-around mt-[16px] px-4 lg:px-[2em] py-[1em] bg-brand-accent2-130/[.02] border lg:border-2 border-brand-accent2/50 backdrop-blur-lg">
            {stats.map((stat, idx) => (
              <div key={idx} className="leading-tight">
                <p className="text-[10px] lg:text-[20px] uppercase opacity-60">
                  {stat.label}
                </p>
                <h2 className="text-[24px] lg:text-[54px] font-medium text-brand-accent2">
                  {stat.value}
                </h2>
              </div>
            ))}
          </div> */}
        </section>

        <section className="mt-5 lg:mt-12">
          <h2 className="font-medium text-[18px] lg:text-[24px] text-brand-accent2">
            B.Tech (Computer Science & Design) — Program snapshot
          </h2>
          <p className="mt-2 text-[14px] lg:text-[20px]">
            The CSD program integrates core computer science with design and
            digital media. Students complete foundational CS courses
            (programming, data structures, algorithms, operating systems,
            networks) alongside design studio courses (visual design,
            interaction design, prototyping, research methods). The curriculum
            emphasizes real projects and interdisciplinary collaborations,
            preparing students for design-focused engineering roles and academic
            research.
          </p>

          <LinkButton
            href="/study/btech"
            text="VIEW FULL CURRICULUM"
            className="mt-4"
          />
        </section>

        <section className="my-5 lg:my-12">
          <h2 className="font-medium text-[18px] lg:text-[24px] text-brand-accent2">
            Minor in Human-Centered Design
          </h2>
          <p className="mt-2 text-[14px] lg:text-[20px]">
            The Minor in HCD allows B.Tech students (CSE, ECE, CSAM, CSB, CSSS)
            to complement their degree with design thinking and interaction
            design skills. Open to all B.Tech students except CSD. Courses can
            be taken after 2nd year; BTP in 3rd/4th year. The program equips
            students with a foundation in human-centered methods, prototyping,
            and emerging interaction technologies.
          </p>

          <LinkButton
            target="_blank"
            href="https://iiitd.ac.in/sites/default/files/docs/education/2025/2025-January-Minor%20in%20Human%20Centered%20Design.pdf"
            text="FOR MORE DETAILS"
            className="mt-4"
          />
        </section>

        <div className="my-8 lg:my-16 relative p-6 lg:p-[40px] border border-brand-accent2 bg-brand-accent2/5 backdrop-blur-lg hover:backdrop-blur-2xl transition-all duration-300">
          <h2 className="font-medium text-[18px] lg:text-[28px] text-brand-accent2">
            Student-Led Clubs and Chapters
          </h2>
          <p className="mt-[0.5em] text-[14px] lg:text-[18px]">
            Our student-led clubs and professional chapters organize talks,
            reading groups, design critiques, hackathons, and skill-building
            workshops that cultivate a culture of inquiry and collaboration.
          </p>
          <LinkButton
            href="/student-led/clubs-chapters"
            className="mt-[2em]"
            text="Learn More"
            type="solid"
          />
        </div>
      </article>
    </main>
  );
}

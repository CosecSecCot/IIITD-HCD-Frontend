import { Search } from "lucide-react";
import Banner from "@/features/pages/research/components/Banner";
import LabsSection, {
  Lab,
} from "@/features/pages/research/labs/components/LabsSection";
import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import Link from "next/link";

export const dynamic = "force-dynamic";

const dummyLabs: Lab[] = [
  {
    id: 1,
    title: "Accessibility and Inclusive Design Lab",
    short:
      "We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful.",
    lead: "Dr. Richa Gupta, A - 418",
    logo: "/aid-lab-logo.svg",
    full: "Accessibility and Inclusive Design Lab aims at enabling independent living and empowering persons with special needs by making the world more inclusive and accessible. It attempts to address the challenges that hamper independent and easy access to educational resources as well as information that facilitates navigation (both indoor and outdoor). This lab leverage the principles of human-centred design to create convenient and pleasant day-to-day experiences while solving problems particularly for persons with special needs.",
    type: "research",
    website: "#",
    foreground: "#FFFFFF",
    background: "#47638A",
    backgroundDim: "#47638A80",
  },
  {
    id: 2,
    title: "Creative Interfaces Lab",
    short:
      "We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful.",
    lead: "Dr. Anmol Srivastava, A – 416",
    logo: "/aid-lab-logo.svg",
    full: "Creative Interfaces Lab aims at making technology interaction fun and intuitive for all. The lab investigates new interaction paradigms, prototyping methods, and novel interface technologies for a diverse range of users.",
    type: "research",
    website: "#",
    foreground: "#000000",
    background: "#A4DAC3",
    backgroundDim: "#A4DAC380",
  },
  {
    id: 3,
    title: "Design for Social Innovation Lab",
    short:
      "Fostering innovation for social good using design thinking approaches and participatory research.",
    lead: "Dr. Priya Sharma, A – 417",
    logo: "/aid-lab-logo.svg",
    full: "Design for Social Innovation Lab focuses on leveraging design thinking for social impact projects, working with NGOs, governments, and grassroots innovators.",
    type: "research",
    website: "#",
    foreground: "#000000",
    background: "#89C4ED",
    backgroundDim: "#89C4ED80",
  },
  {
    id: 4,
    title: "Human Factors and Ergonomics Lab",
    short:
      "Optimizing environments, products, and systems to suit human abilities and limitations.",
    lead: "Dr. S. Iyer, A – 420",
    logo: "/aid-lab-logo.svg",
    full: "The Human Factors and Ergonomics Lab explores how design can reduce risk and enhance usability, comfort, and safety across domains from healthcare to transport.",
    type: "research",
    website: "#",
    foreground: "#000000",
    background: "#F18800",
    backgroundDim: "#F1880080",
  },
  {
    id: 5,
    title: "Emotional AI Lab",
    short:
      "Bridging affective computing and user-centered design for empathetic technology.",
    lead: "Dr. Sunil Reddy, A – 422",
    logo: "/aid-lab-logo.svg",
    full: "The Emotional AI Lab pioneers work at the intersection of affective computing, psychology, and design, developing technologies that respond to emotional needs.",
    type: "research",
    website: "#",
    foreground: "#FFFFFF",
    background: "#111827",
    backgroundDim: "#11182780",
  },
  {
    id: 6,
    title: "Playful Learning Lab",
    short:
      "Rethinking education and learning environments through play, creativity, and new media.",
    lead: "Dr. Vandana Singh, A – 424",
    logo: "/aid-lab-logo.svg",
    full: "The Playful Learning Lab invents playful, interactive learning environments and experiences, blending pedagogy, digital media, and fun.",
    type: "research",
    website: "#",
    foreground: "#FFFFFF",
    background: "#430055",
    backgroundDim: "#43005580",
  },
  {
    id: 7,
    title: "Digital Humanities Lab",
    short:
      "Integrating technology and humanities for richer, more inclusive research and learning.",
    lead: "Dr. Kiran Pandey, A – 426",
    logo: "/aid-lab-logo.svg",
    full: "Digital Humanities Lab investigates digital methods for the study and dissemination of culture, history, and literature, focusing on inclusivity and accessibility.",
    type: "research",
    website: "#",
    foreground: "#FFFFFF",
    background: "#D833C2",
    backgroundDim: "#D833C280",
  },
  {
    id: 8,
    title: "AI and Ethics Research Group",
    short:
      "Exploring the societal impacts of artificial intelligence through interdisciplinary approaches.",
    lead: "Prof. Meera Sinha, B – 312",
    logo: "/aid-lab-logo.svg",
    full: "AI and Ethics Research Group examines how artificial intelligence influences human behavior, decision-making, and societal norms, with an emphasis on fairness, accountability, and transparency.",
    type: "teaching",
    website: "#",
    foreground: "#000000",
    background: "#F8C381",
    backgroundDim: "#F8C38180",
  },
  {
    id: 9,
    title: "Virtual Heritage Lab",
    short:
      "Digitally preserving cultural heritage using VR, AR, and 3D modeling technologies.",
    lead: "Dr. Raghav Nair, C – 205",
    logo: "/aid-lab-logo.svg",
    full: "Virtual Heritage Lab focuses on the digital reconstruction of historical sites and artifacts to create immersive educational experiences and support heritage conservation.",
    type: "teaching",
    website: "#",
    foreground: "#FFFFFF",
    background: "#898A93",
    backgroundDim: "#898A9380",
  },
  {
    id: 10,
    title: "Computational Linguistics Studio",
    short:
      "Bridging linguistics and computer science to analyze and process human language.",
    lead: "Dr. Nandini Rao, D – 118",
    logo: "/aid-lab-logo.svg",
    full: "Computational Linguistics Studio develops tools and models for analyzing language data, contributing to natural language processing, machine translation, and language preservation efforts.",
    type: "teaching",
    website: "#",
    foreground: "#000000",
    background: "#D1BED5",
    backgroundDim: "#D1BED580",
  },
];

export default async function Page(pageProps: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const searchParams = await pageProps.searchParams;
  return (
    <>
      <Banner
        text={
          searchParams.filter === "teaching" ? "Teaching Labs" : "Research Labs"
        }
        breadcrumbs={["research", "labs"]}
      />
      <main>
        <article className="mx-auto px-8 xl:w-[1280px]">
          <div
            className="grid grid-cols-2 xl:grid-cols-3 grid-rows-1 text-[12px] lg:text-[18px] my-8"
            role="tablist"
          >
            <Button
              href="/research/labs?filter=research"
              text="RESEARCH LABS"
              active={searchParams.filter !== "teaching"}
            />
            <Button
              href="/research/labs?filter=teaching"
              text="TEACHING LABS"
              active={searchParams.filter === "teaching"}
            />
          </div>
          <LabsSection
            labs={dummyLabs.filter((lab) => {
              if (searchParams.filter === "teaching") {
                return lab.type === searchParams.filter;
              }
              return lab.type === "research";
            })}
          />
        </article>
      </main>
    </>
  );
}

function Button({
  href,
  text,
  active,
}: {
  href: string;
  text: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex gap-[12px] lg:gap-[24px] items-center justify-center py-[0.5em] border border-black/30 ${
        active ? "bg-brand-accent2 text-white" : ""
      }`}
      scroll={false}
    >
      <Search className="w-[12px] lg:w-[16px] aspect-square h-auto" />
      <LetterSwapForward label={text} staggerDuration={0.005} />
    </Link>
  );
}

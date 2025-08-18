import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import CenterUnderline from "@/components/fancy/text/underline-center";
import {
  ArrowRight,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="sticky z-0 bottom-0 left-0 w-full py-8 xl:py-20 bg-gradient-to-r from-[#21928C] to-brand-accent2 text-white font-anybody">
      <div className="xl:w-[1280px] px-8 mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-3">
          <section className="flex flex-col gap-[40px] xl:gap-[80px]">
            <Image
              src="/logo-with-text-large-solid.svg"
              alt="Human Centred Design Department"
              width={452}
              height={149}
              priority
            />
            <div className="w-full">
              <p className="text-[16px] lg:text-[20px]">
                Add your Portfolio to the IIITD Database.
              </p>
              <button className="relative w-full flex justify-center py-[0.75em] mt-[0.5em] text-[14px] lg:text-[18px] bg-white/20 cursor-pointer">
                <LetterSwapForward
                  label="STUDENT PORTFOLIO"
                  staggerDuration={0.005}
                />
                <ArrowRight className="absolute right-[1em] w-[18px] xl:w-[24px] h-auto" />
              </button>
            </div>
          </section>
          <section className="max-xl:mt-8 xl:col-span-2 flex justify-start xl:justify-end gap-y-8 gap-x-16 xl:gap-x-24 flex-wrap max-lg:leading-tight">
            <nav aria-labelledby="useful-links-heading">
              <h2
                id="useful-links-heading"
                className="font-medium text-[16px] lg:text-[24px] opacity-60"
              >
                USEFUL LINKS
              </h2>
              <ul className="max-lg:mt-2 text-[16px] lg:text-[24px] space-y-1">
                <li>
                  <Link href="/study/btech">
                    <CustomLinkText label="Study @IIITD" />
                  </Link>
                </li>
                <li>
                  <Link href="/study/courses">
                    <CustomLinkText label="Courses" />
                  </Link>
                </li>
                <li>
                  <Link href="/our-work">
                    <CustomLinkText label="Our Work" />
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <CustomLinkText label="Faculty" />
                  </Link>
                </li>
              </ul>
            </nav>
            <nav aria-labelledby="initiatives-heading">
              <h2
                id="initiatives-heading"
                className="font-medium text-[16px] lg:text-[24px] opacity-60"
              >
                INITIATIVES
              </h2>
              <ul className="max-lg:mt-2 text-[16px] lg:text-[24px] space-y-1">
                <li>
                  <Link href="">
                    <CustomLinkText label="Workshops" />
                  </Link>
                </li>
                <li>
                  <Link href="/about/placements">
                    <CustomLinkText label="Placements" />
                  </Link>
                </li>
                <li>
                  <Link href="/about/news-events">
                    <CustomLinkText label="Events" />
                  </Link>
                </li>
              </ul>
            </nav>
            <section aria-labelledby="contact-heading">
              <h2
                id="contact-heading"
                className="font-medium text-[16px] lg:text-[24px] opacity-60"
              >
                CONTACT US
              </h2>
              <div className="grid grid-cols-3 gap-y-4 mt-2">
                <Link href="mailto:hcd@iiitd.ac.in" aria-label="Email">
                  <MailIcon className="w-[20px] lg:w-[24px] h-auto aspect-square" />
                </Link>
                <Link
                  href="https://in.linkedin.com/company/hcdiiitd"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-[20px] lg:w-[24px] h-auto aspect-square" />
                </Link>
                <Link
                  href="https://www.instagram.com/hcdiiitd"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-[20px] lg:w-[24px] h-auto aspect-square" />
                </Link>
                <Link
                  href="https://twitter.com/hcdiiitd"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-[20px] lg:w-[24px] h-auto aspect-square" />
                </Link>
                <Link
                  href="https://www.facebook.com/hcdiiitd"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-[20px] lg:w-[24px] h-auto aspect-square" />
                </Link>
              </div>
            </section>
          </section>
        </div>
        <section className="flex justify-between items-center flex-wrap gap-x-4 gap-y-2 mt-8 xl:mt-12 text-[13px] lg:text-[20px] opacity-60">
          <div className="flex justify-between gap-[3em] max-xl:w-full">
            <span>Copyright &copy; 2024 IIITD</span>
            <span className="text-right">Last Updated 12/05/2024</span>
          </div>
          <div className="flex justify-between gap-[3em] max-xl:w-full">
            <span>Terms &amp; Conditions</span>
            <span className="text-right">Privacy Policy</span>
          </div>
        </section>
      </div>
    </footer>
  );
}

function CustomLinkText({ label }: { label: string }) {
  return (
    <CenterUnderline underlineHeightRatio={0.075} underlinePaddingRatio={-0.25}>
      {label}
      {/* <LetterSwapForward
        label={label}
        staggerDuration={0.001}
        className="leading-tight"
      /> */}
    </CenterUnderline>
  );
}

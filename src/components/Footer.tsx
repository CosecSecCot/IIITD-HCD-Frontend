import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
} from "lucide-react";
import XIcon from "@/components/icons/XIcon";
import Image from "next/image";
import Link from "next/link";

const usefulLinks = [
  { label: "Research", href: "/research/labs" },
  { label: "Study @ IIITD", href: "/study/btech" },
  { label: "Courses", href: "/study/courses" },
  { label: "Faculty", href: "/people/faculty" },
];

const initiatives = [
  {
    label: "1Pixel Design Conf.",
    href: "https://1pxdesignconf.iiitd.edu.in/",
    external: true,
  },
  { label: "News & Events", href: "/about/news-events" },
  { label: "Placements", href: "/about/placements" },
];

const socials = [
  { icon: MailIcon, href: "mailto:admin-hcd@iiitd.ac.in", label: "Email" },
  {
    icon: LinkedinIcon,
    href: "https://in.linkedin.com/company/hcdiiitd",
    label: "LinkedIn",
    external: true,
  },
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/hcdiiitd",
    label: "Instagram",
    external: true,
  },
  {
    icon: XIcon,
    href: "https://twitter.com/hcdiiitd",
    label: "X (Twitter)",
    external: true,
  },
  {
    icon: FacebookIcon,
    href: "https://www.facebook.com/hcdiiitd",
    label: "Facebook",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer
      data-a11y-bg="dark"
      className="sticky z-0 bottom-0 left-0 w-full bg-brand-accent2 text-white font-anybody"
    >
      <div className="mx-auto xl:w-[1280px] px-8 py-14 lg:py-20">
        {/* top: brand left, nav columns right */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-14 lg:gap-24">
          {/* brand */}
          <div className="flex flex-col gap-6 lg:max-w-[420px]">
            <Image
              src="/logo-with-text-large-solid.png"
              alt="Human-Centered Design, IIIT-Delhi"
              width={452}
              height={149}
              priority
              className="w-auto h-[84px] lg:h-[96px] object-contain object-left"
            />
            <p className="font-light text-[14px] lg:text-[16px] text-white/80 leading-snug">
              Department of Human-Centered Design at IIIT-Delhi — where
              computing becomes a{" "}
              <span className="text-terracotta-light font-medium">
                creative medium
              </span>
              .
            </p>
          </div>

          {/* nav columns — right-aligned, equal gaps */}
          <div className="flex flex-wrap gap-12 lg:gap-16">
            <nav
              aria-label="Useful links"
              className="flex flex-col gap-3 lg:gap-4 min-w-[160px]"
            >
              <h2 className="text-[12px] lg:text-[13px] tracking-[0.25em] uppercase text-white/50">
                Explore
              </h2>
              <ul className="flex flex-col gap-2 lg:gap-3 text-[15px] lg:text-[17px] font-light">
                {usefulLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="inline-block w-fit text-white/90 hover:text-terracotta-light transition-colors duration-200"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav
              aria-label="Initiatives"
              className="flex flex-col gap-3 lg:gap-4 min-w-[160px]"
            >
              <h2 className="text-[12px] lg:text-[13px] tracking-[0.25em] uppercase text-white/50">
                Initiatives
              </h2>
              <ul className="flex flex-col gap-2 lg:gap-3 text-[15px] lg:text-[17px] font-light">
                {initiatives.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      target={l.external ? "_blank" : undefined}
                      rel={l.external ? "noopener noreferrer" : undefined}
                      className="inline-block w-fit text-white/90 hover:text-terracotta-light transition-colors duration-200"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <section
              aria-label="Get in touch"
              className="flex flex-col gap-3 lg:gap-4 min-w-[220px]"
            >
              <h2 className="text-[12px] lg:text-[13px] tracking-[0.25em] uppercase text-white/50">
                Get in touch
              </h2>
              <Link
                href="mailto:admin-hcd@iiitd.ac.in"
                className="text-[15px] lg:text-[17px] font-light text-white hover:text-terracotta-light transition-colors duration-200 break-all"
              >
                admin-hcd@iiitd.ac.in
              </Link>
              <div className="flex items-center gap-4 mt-2">
                {socials.map(({ icon: Icon, href, label, external }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="text-white/80 hover:text-terracotta-light transition-colors duration-200"
                  >
                    <Icon className="w-[20px] h-[20px]" />
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* divider */}
        <div className="mt-14 lg:mt-20 h-px w-full bg-white/15" />

        {/* bottom bar */}
        <div className="mt-6 lg:mt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 text-[12px] lg:text-[13px] text-white/55 font-light">
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <span>&copy; {new Date().getFullYear()} IIIT-Delhi</span>
            <span>Last updated 19 Jan 2026</span>
          </div>
          <div className="flex gap-6">
            <Link
              href="/connect"
              className="hover:text-terracotta-light transition-colors duration-200"
            >
              Connect
            </Link>
            <Link
              href="/about/overview"
              className="hover:text-terracotta-light transition-colors duration-200"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

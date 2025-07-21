import {
  ArrowRight,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-[10vh] py-[80px] bg-brand-accent2 text-white font-anybody">
      <div className="w-[75vw] mx-[12.5vw]">
        <div className="grid grid-cols-1 xl:grid-cols-3">
          <section className="flex flex-col gap-[80px]">
            <img
              src="/hcd-logo-large-plain.svg"
              alt="Human Centred Design Department"
            />
            <div className="flex flex-col gap-[1em]">
              <p className="text-[16px] xl:text-[20px]">
                Add your Portfolio to the IIITD Database.
              </p>
              <button className="relative w-full flex justify-center py-[1em] text-[14px] xl:text-[18px] bg-white/20">
                <span>STUDENT PORTFOLIO</span>
                <ArrowRight className="absolute right-[1em] w-[18px] xl:w-[24px] h-auto" />
              </button>
            </div>
          </section>
          <section className="max-xl:hidden xl:col-span-2 flex justify-end gap-[100px]">
            <nav aria-labelledby="useful-links-heading">
              <h2
                id="useful-links-heading"
                className="font-medium text-[24px] opacity-60"
              >
                Useful Links
              </h2>
              <ul className="text-[26px]">
                <li>
                  <a href="/study">Study @IIITD</a>
                </li>
                <li>
                  <a href="/courses">Courses</a>
                </li>
                <li>
                  <a href="/work">Our Work</a>
                </li>
                <li>
                  <a href="/faculty">Faculty</a>
                </li>
              </ul>
            </nav>
            <nav aria-labelledby="initiatives-heading">
              <h2
                id="initiatives-heading"
                className="font-medium text-[24px] opacity-60"
              >
                Initiatives
              </h2>
              <ul className="text-[26px]">
                <li>
                  <a href="/workshops">Workshops</a>
                </li>
                <li>
                  <a href="/placements">Placements</a>
                </li>
                <li>
                  <a href="/events">Events</a>
                </li>
              </ul>
            </nav>
            <section aria-labelledby="contact-heading">
              <h2
                id="contact-heading"
                className="font-medium text-[24px] opacity-60"
              >
                Contact Us
              </h2>
              <div className="flex gap-3 mt-2">
                <a href="mailto:hcd@iiitd.ac.in" aria-label="Email">
                  <MailIcon size={26} />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <LinkedinIcon size={26} />
                </a>
                <a href="#" aria-label="Instagram">
                  <InstagramIcon size={26} />
                </a>
                <a href="#" aria-label="Twitter">
                  <TwitterIcon size={26} />
                </a>
                <a href="#" aria-label="Facebook">
                  <FacebookIcon size={26} />
                </a>
              </div>
            </section>
          </section>
        </div>
        <section className="flex justify-between items-center flex-shrink-0 gap-x-[4em] gap-y-[1em] mt-[48px] text-[16px] xl:text-[20px] opacity-60">
          <span>&copy; 2024 IIITD</span>
          <span className="text-right">Last Updated 12/05/2024</span>
        </section>
      </div>
    </footer>
  );
};
export default Footer;

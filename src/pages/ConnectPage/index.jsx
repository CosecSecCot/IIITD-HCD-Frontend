import { useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GridLines from "../../components/GridLines";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Mail } from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const ConnectPage = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1280px)");
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        containerRef.current.querySelectorAll(".reveal-text"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power4.out" }
      );
    },
    { scope: containerRef, dependencies: [] }
  );

  return (
    <div className="w-full font-anybody">
      <Navbar type="solid" />
      <GridLines count={isSmallScreen ? 3 : 4} />
      <div className="texture-overlay" />
      <div className="background-element" />
      <main ref={containerRef} className="pt-[32vh]">
        <ContactHeading
          title={
            <span>
              Get <b>in touch</b> with us
            </span>
          }
          subtitle="Get in touch"
          description="We'd like to think our website has covered it all. But just in case, here are some other ways to help."
        />
        <div className="mt-[6em] grid grid-cols-1 md:grid-cols-2 gap-y-12 reveal-text ml-[12.5vw] xl:ml-[37.5vw] w-[75vw] xl:w-[50vw]">
          <ContactCard
            title="General Contact"
            subtitle="Get in touch with us by email at hcd@iiitd.ac.in"
            linkText="Get in Touch"
            linkHref="mailto:hcd.iiitd.ac.in"
            icon={<Mail className="w-[28px] h-auto" />}
          />
          <ContactCard
            title="Social Media"
            subtitle="Get in touch with us by email at hcd@iiitd.ac.in"
            linkText="Stay Updated"
            linkHref="mailto:hcd.iiitd.ac.in"
            icon={<Mail className="w-[28px] h-auto" />}
          />
          <ContactCard
            title="Frequently Asked"
            subtitle="Get in touch with us by email at hcd@iiitd.ac.in"
            linkText="View our FAQs"
            linkHref="mailto:hcd.iiitd.ac.in"
            icon={<Mail className="w-[28px] h-auto" />}
          />
          <ContactCard
            title="Business Contact"
            subtitle="Get in touch with us by email at hcd@iiitd.ac.in"
            linkText="Connect with Us"
            linkHref="mailto:hcd.iiitd.ac.in"
            icon={<Mail className="w-[28px] h-auto" />}
          />
        </div>

        <div className="mt-[80px] lg:mt-[180px]">
          <ContactHeading
            title={
              <span>
                Find us on the <b>map</b>
              </span>
            }
            subtitle="Directions"
            description="Is it a bit tricky to find our building? Yes. Did we design it that way? No."
          />
        </div>
        <div className="mt-[6em] grid grid-cols-1 md:grid-cols-2 gap-y-12 reveal-text ml-[12.5vw] xl:ml-[37.5vw] w-[75vw] xl:w-[50vw]">
          <ContactCard
            title="General Contact"
            subtitle="Get in touch with us by email at hcd@iiitd.ac.in"
            linkText="Get in Touch"
            linkHref="mailto:hcd.iiitd.ac.in"
            icon={<Mail className="w-[28px] h-auto" />}
          />
          <ContactCard
            title="Social Media"
            subtitle="Get in touch with us by email at hcd@iiitd.ac.in"
            linkText="Stay Updated"
            linkHref="mailto:hcd.iiitd.ac.in"
            icon={<Mail className="w-[28px] h-auto" />}
          />
        </div>
        <div className="border border-brand-accent2 mt-[6em] ml-[12.5vw] xl:ml-[37.5vw] w-[75vw] xl:w-[50vw]">
          <iframe
            title="IIITD Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.795892320593!2d77.2706012752857!3d28.545854075712214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e564daac1d%3A0x2c582e340e7bc556!2sIndraprastha%20Institute%20of%20Information%20Technology%20Delhi!5e0!3m2!1sen!2sin!4v1753296700147!5m2!1sen!2sin"
            className="w-full h-56"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default ConnectPage;

function ContactHeading({ title, subtitle, description }) {
  return (
    <div className="w-full flex justify-between">
      <div className="w-[12.5vw] lg:w-[calc(12.5vw-2em)] bg-brand-accent2" />
      <div className="w-[75vw] lg:w-[50vw] px-[1em]">
        <p className="uppercase text-[20px] lg:text-[28px] leading-tight font-semibold text-brand-accent2">
          {subtitle}
        </p>
        <h1 className="text-[40px] lg:text-[64px] reveal-text">{title}</h1>
        <p className="text-[18px] lg:text-[24px] w-3/4 reveal-text">
          {description}
        </p>
      </div>
      <div className="w-[12.5vw] lg:w-[calc(37.5vw-1em)] bg-brand-accent2" />
    </div>
  );
}

function ContactCard({ title, subtitle, linkText, linkHref, icon }) {
  return (
    <div className="pr-[1em]">
      <h3 className="text-[18px] lg:text-[24px] font-semibold">{title}</h3>
      <p className="text-[16px] lg:text-[20px]">{subtitle}</p>
      <a
        href={linkHref}
        className="mt-[1em] flex items-center gap-[0.5em] text-[18px] lg:text-[24px] font-medium underline hover:text-brand-accent2"
      >
        <span>{linkText}</span>
        {icon}
      </a>
    </div>
  );
}

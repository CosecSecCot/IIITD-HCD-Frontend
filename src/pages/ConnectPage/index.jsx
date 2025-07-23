import React, { useRef } from "react";
import Navbar from "../../components/Navbar";
import GridLines from "../../components/GridLines";
import vectorBg from "../../assets/vectorBgConnectPage.png";
import messageicon from "../../assets/message.svg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ConnectPage = () => {
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
    <div className="relative w-full font-anybody bg-brand-dark">
      <Navbar type="solid" />
      <GridLines count={4} color="rgba(255,255,255,0.05)" />
      <div className="texture-overlay" />

      <main
        ref={containerRef}
        className="text-black w-[50vw] pt-[32vh] ml-[12.5vw] pr-16 pb-32"
      >

        <img
          src={vectorBg}
          className="absolute top-[1vh] right-[7vw] w-full h-full m-0 p-0" />


        {/* Get in Touch Section */}
        <b><p className="uppercase text-[1.4em] text-brand-accent2">
            Get in Touch
          </p></b>
        <h1 className="text-[4em] font-light reveal-text">
          Get in touch with us
        </h1>

        {/* Accent panels */}
        <aside className="absolute top-[32vh] right-0 w-[36.5vw] h-[19vh] bg-brand-accent2" />
        <aside className="absolute top-[32vh] left-0 w-[11vw] h-[19vh] bg-brand-accent2" />

        <p className="text-[1.2em] mt-[-0.4em] reveal-text w-[38vw]">
          We'd like to think our website has covered it all. But just in case, here are some other ways to help.
        </p>

        <div className="mt-[6em] grid grid-cols-2 gap-x-[2vw] gap-y-12 reveal-text ml-[25vw] w-[48vw]">
          {/* General Contact */}
          <div>
            <h3 className="text-[24px] font-medium mb-2 text-brand-accent2">
              General Contact
            </h3>
            <p className="mb-2">
              Get in touch with us by email at{' '}
              <a href="mailto:hcd@iiitd.ac.in" className="underline">
                hcd@iiitd.ac.in
              </a>
            </p>
            <a href="mailto:hcd@iiitd.ac.in" className="flex items-center font-medium underline">
              Get in Touch&nbsp;
              <img src={messageicon} alt="message icon" className="h-5 w-5 ml-4" />
            </a>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-[24px] font-medium mb-2 text-brand-accent2">
              Social Media
            </h3>
            <p className="mb-2">
              Get in touch with us by email at{' '}
              <a href="mailto:info@dschool.stanford.edu" className="underline">
                info@dschool.stanford.edu
              </a>
            </p>
            <a href="mailto:info@dschool.stanford.edu" className="flex items-center font-medium underline">
              Stay Updated&nbsp;
              <img src={messageicon} alt="message icon" className="h-5 w-5 ml-4" />
            </a>
          </div>

          {/* Frequently Asked */}
          <div>
            <h3 className="text-[24px] font-medium mb-2 text-brand-accent2">
              Frequently Asked
            </h3>
            <p className="mb-2">
              Get in touch with us by email at{' '}
              <a href="mailto:info@dschool.stanford.edu" className="underline">
                info@dschool.stanford.edu
              </a>
            </p>
            <a href="mailto:info@dschool.stanford.edu" className="flex items-center font-medium underline">
              View our FAQs&nbsp;
              <img src={messageicon} alt="message icon" className="h-5 w-5 ml-4" />
            </a>
          </div>

          {/* Business Contact */}
          <div>
            <h3 className="text-[24px] font-medium mb-2 text-brand-accent2">
              Business Contact
            </h3>
            <p className="mb-2">
              Get in touch with us by email at{' '}
              <a href="mailto:info@dschool.stanford.edu" className="underline">
                info@dschool.stanford.edu
              </a>
            </p>
            <a href="mailto:info@dschool.stanford.edu" className="flex items-center font-medium underline">
              Connect with Us&nbsp;
              <img src={messageicon} alt="message icon" className="h-5 w-5 ml-4" />
            </a>
          </div>
        </div>

        {/* Bottom accent panels */}
        <aside className="absolute top-[110vh] right-0 w-[36.5vw] h-[19vh] bg-brand-accent2" />
        <aside className="absolute top-[110vh] left-0 w-[11vw] h-[19vh] bg-brand-accent2" />

        {/* Directions Section */}
        <div className="mt-[8.4em] reveal-text">
          <b><p className="uppercase text-[1.4em] text-brand-accent2">
            Directions
          </p></b>
          <h2 className="text-[4em] font-light reveal-text">
            Find us on the map
          </h2>

          <p className="text-[1.2em] mt-[-0.4em] reveal-text w-[28vw]">
            Is it a bit tricky to find our building? Yes. Did we design it that way? No.
          </p>
          <div className="mt-[6em] grid grid-cols-2 gap-x-[2vw] gap-y-12 reveal-text ml-[25vw] w-[48vw]">
            <div>
              <h3 className="text-[24px] font-medium mb-2 text-brand-accent2">
                General Contact
              </h3>
              <p className="mb-2">
                Get in touch with us by email at{' '}
                <a href="mailto:hcd@iiitd.ac.in" className="underline">
                  hcd@iiitd.ac.in
                </a>
              </p>
              <a href="mailto:hcd@iiitd.ac.in" className="flex items-center font-medium underline">
                Get in Touch&nbsp;
                <img src={messageicon} alt="message icon" className="h-5 w-5 ml-4" />
              </a>
            </div>
            <div>
              <h3 className="text-[24px] font-medium mb-2 text-brand-accent2">
                Social Media
              </h3>
              <p className="mb-2">
                Get in touch with us by email at{' '}
                <a href="mailto:info@dschool.stanford.edu" className="underline">
                  info@dschool.stanford.edu
                </a>
              </p>
              <a href="mailto:info@dschool.stanford.edu" className="flex items-center font-medium underline">
                Stay Updated&nbsp;
                <img src={messageicon} alt="message icon" className="h-5 w-5 ml-4" />
              </a>
            </div>
          </div>
          <div className="border border-brand-accent2 p-1 mt-8 ml-[25vw] w-[50vw]">
            <iframe
              title="IIITD Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.795892320593!2d77.2706012752857!3d28.545854075712214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e564daac1d%3A0x2c582e340e7bc556!2sIndraprastha%20Institute%20of%20Information%20Technology%20Delhi!5e0!3m2!1sen!2sin!4v1753296700147!5m2!1sen!2sin"
              className="w-full h-56"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConnectPage;

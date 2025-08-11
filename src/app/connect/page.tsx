import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactCard from "@/features/pages/connect/components/ContactCard";
import PageHeading from "@/features/pages/connect/components/PageHeading";
import { Mail } from "lucide-react";

export default function Page() {
  return (
    <>
      <div className="relative z-10 background-element bg-white font-anybody pb-8 shadow-xl">
        <Navbar type="solid" />
        <main className="pt-24 mb-[10vh]">
          <PageHeading
            title={
              <span>
                Get <b>in touch</b> with us
              </span>
            }
            subtitle="Get in touch"
            description="We'd like to think our website has covered it all. But just in case, here are some other ways to help."
          />
          <div className="mt-[6em] grid grid-cols-1 md:grid-cols-2 gap-y-12 ml-[12.5vw] xl:ml-[37.5vw] w-[75vw] xl:w-[50vw]">
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
            <PageHeading
              title={
                <span>
                  Find us on the <b>map</b>
                </span>
              }
              subtitle="Directions"
              description="Is it a bit tricky to find our building? Yes. Did we design it that way? No."
            />
          </div>
          <div className="mt-[6em] grid grid-cols-1 md:grid-cols-2 gap-y-12 ml-[12.5vw] xl:ml-[37.5vw] w-[75vw] xl:w-[50vw]">
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
      </div>
      <Footer />
    </>
  );
}

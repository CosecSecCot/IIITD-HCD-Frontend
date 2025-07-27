import React, { useRef } from 'react';
import Navbar from '../../components/Navbar';
import GridLines from '../../components/GridLines';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import sagarImage from '../../assets/sagar.svg';
import linkedinIcon from '../../assets/linkedin.svg';

const portfolio2 = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        containerRef.current.querySelectorAll('.reveal-text'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power4.out' }
      );
    },
    { scope: containerRef, dependencies: [] }
  );

  return (
    <div className="relative w-full font-anybody bg-white text-[#003B3F]">
      <Navbar type="solidblue" />
      <GridLines count={4} color="rgba(0,0,0,0.05)" />
      <div className="texture-overlay" />
      <main ref={containerRef} className="pt-[210px] px-[12.5vw] pb-10">

        <div className="flex justify-between items-center mb-6 text-base text-brand-blue reveal-text">
          <button className="flex items-center text-[16px] hover:underline">
            <span className="mr-2">←</span> Go Back
          </button>
          <p className="text-sm text-gray-500">
            OUR WORK / PORTFOLIOS / <span className="text-black font-semibold">SAGAR GUPTA</span>
          </p>
        </div>

        <div className="border border-brand-blue rounded-sm p-8 flex flex-wrap justify-between items-center gap-8 bg-[#F9FDFD] reveal-text">
          <div className="flex flex-col gap-8 flex-1 min-w-[250px]">
            <div className="flex flex-wrap gap-20">
              <div>
                <p className="text-[#005c5c80] uppercase text-sm tracking-wide">Name</p>
                <p className="text-[18px] font-regular text-brand-blue">Sagar Gupta</p>
              </div>
              <div>
                <p className="text-[#005c5c80] uppercase text-sm tracking-wide">Graduating Year</p>
                <p className="text-[17px] text-brand-blue font-regular">2027</p>
              </div>
              <div>
                <p className="text-[#005c5c80] uppercase text-sm tracking-wide">Course</p>
                <p className="text-[17px] text-brand-blue font-regular">CS & Design</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-20">
              <div>
                <p className="text-[#005c5c80] uppercase text-sm tracking-wide">Email</p>
                <p className="text-[17px] text-brand-blue font-regular">sagar23458@iiitd.ac.in</p>
              </div>
              <div>
                <p className="text-[#005c5c80] uppercase text-sm tracking-wide">Phone</p>
                <p className="text-[17px] text-brand-blue font-regular">+91 9310121033</p>
              </div>
            </div>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center bg-brand-blue text-white px-6 py-3 rounded text-base w-[250px] font-semibold justify-center reveal-text"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5 mr-3" />
              LINKEDIN
            </a>
          </div>
          <div className="w-[200px] h-[200px] shrink-0 reveal-text">
            <img
              src={sagarImage}
              alt="Sagar Gupta"
              className="w-full h-full object-cover border"
            />
          </div>
        </div>

        <div className="mt-8 reveal-text">
          <h2 className="text-lg font-semibold mb-4 text-brand-blue">Skills & Softwares</h2>
          <div className="border border-brand-blue rounded-sm p-6 bg-[#F9FDFD]">
            <div className="flex flex-wrap gap-6">
              {[
                'FIGMA','ADOBE ILLUSTRATOR','ADOBE PHOTOSHOP',
                'UNITY 3D','UNREAL ENGINE','FUSION 360',
                'Python','C++','Java'
              ].map(skill => (
                <span key={skill} className="bg-brand-blue text-white px-4 py-2 text-sm font-medium reveal-text">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex reveal-text">
          <div className="w-1/2 pr-12">
            <h2 className="text-lg font-semibold mb-4 text-brand-blue">Education</h2>
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <p className="text-[#005c5c80] uppercase text-xs tracking-wide mb-1">UNDERGRADUATE</p>
                  <p className="text-brand-blue font-medium text-base">
                    Indraprastha Institute of <br /> Information Technology, Delhi
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-[280px] h-px bg-[#096964] mx-4 mt-8"></div>
                  <div className="text-right mt-4">
                    <p className="text-brand-blue uppercase text-xs tracking-wide">CGPA</p>
                    <p className="text-brand-blue font-medium text-base mb-3">8.65</p>
                  </div>
                </div>
              </div>
              <p className="text-brand-blue text-sm">2023-2027</p>
            </div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <p className="text-[#005c5c80] uppercase text-xs tracking-wide mb-1">HIGH SCHOOL</p>
                  <p className="text-brand-blue font-medium text-base">
                    The Mother's International<br />School, Delhi
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-[220px] h-px bg-[#096964] mx-4 mt-8"></div>
                  <div className="text-right mt-4">
                    <p className="text-brand-blue uppercase text-xs tracking-wide">PERCENTAGE</p>
                    <p className="text-brand-blue font-medium text-base mb-5">92.8%</p>
                  </div>
                </div>
              </div>
              <p className="text-brand-blue text-sm">2023-2027</p>
            </div>
          </div>
          <div className="w-1/2 flex justify-end">
            <div className="w-full max-w-[400px]">
              <h2 className="text-lg font-semibold mb-4 text-brand-blue">Awards & Achievements</h2>
              <div className="mb-6">
                <p className="text-[#005c5c80] uppercase text-xs tracking-wide mb-1">IIIT DELHI</p>
                <p className="text-brand-blue font-semibold text-base">
                  Dean's List Communication Award in Design
                </p>
                <p className="text-brand-blue text-sm">August 2024</p>
              </div>
              <div>
                <p className="text-[#005c5c80] uppercase text-xs tracking-wide mb-1">IIIT DELHI</p>
                <p className="text-brand-blue font-semibold text-base">
                  Dean's List Communication Award in Design
                </p>
                <p className="text-brand-blue text-sm">August 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#096964] mt-12 reveal-text" />

        <div className="mt-8 reveal-text">
          <h2 className="text-lg font-semibold mb-4 text-brand-blue">Experience</h2>
          {[1,2].map((_,idx)=>(
            <div key={idx} className="mb-8">
              <div className="mb-2">
                <p className="text-brand-blue uppercase text-xs tracking-wide mb-1">HEALTHKART</p>
                <div className="flex justify-between items-center">
                  <p className="text-brand-blue font-semibold text-[17px]">
                    User Experience Design Intern
                  </p>
                  <div className="flex items-center">
                    <div className="w-[700px] h-px bg-[#096964] mx-4"></div>
                    <p className="text-brand-blue text-[17px]">May, 2025 - July, 2025</p>
                  </div>
                </div>
              </div>
              <div className="ml-0 mt-3 w-2/3">
                <div className="flex items-start mb-2">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <p className="text-gray-600 text-[17px] leading-relaxed">
                    <span className="font-medium">Post Purchase UX Research:</span> Conducting post-purchase research and creating a design framework for scalable and multidisciplinary use
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <p className="text-gray-600 text-[17px] leading-relaxed">
                    <span className="font-medium">Modularize UX Design Feature Prototype:</span> Analysed the current design system and designed hi-fi prototypes of new features
                  </p>
                </div>
              </div>
            </div>))}
        </div>

        <div className="border-t border-[#096964] mt-6 reveal-text" />

        <div className="mt-8 reveal-text">
          <h2 className="text-lg font-semibold mb-4 text-brand-blue">Projects</h2>
          <div className="flex gap-8">
            <div className="w-1/3 reveal-text">
              <p className="text-brand-blue uppercase text-xs tracking-wide mb-1">HEALTHKART</p>
              <h3 className="text-brand-blue font-semibold text-[17px] mb-3">
                Post Purchase E-Commerce UX Research
              </h3>
              <div className="mb-4">
                <div className="flex items-start mb-2">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <p className="text-gray-600 text-[17px] leading-relaxed">
                    Leading in-depth UX research on the post-purchase journey to identify user needs, emotional pain points, and behavior patterns.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <p className="text-gray-600 text-[17px] leading-relaxed">
                    Designed a 13-phase experience framework to optimize loyalty, habit formation, and retention.
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-brand-blue uppercase text-xs tracking-wide mb-2">TECH STACK</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-brand-blue text-white px-3 py-1 text-xs font-medium">FIGMA</span>
                  <span className="bg-brand-blue text-white px-3 py-1 text-xs font-medium">ILLUSTRATOR</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-brand-blue text-white px-3 py-1 text-xs font-medium">FIGJAM</span>
                  <span className="bg-brand-blue text-white px-3 py-1 text-xs font-medium">RESEARCH</span>
                </div>
              </div>
              <p className="text-brand-blue text-[17px] font-medium mb-4">Duration: May, 25 - Jul, 25</p>
              <button className="w-full border border-brand-blue text-brand-blue px-6 py-2 text-[17px] font-medium hover:bg-brand-blue hover:text-white transition reveal-text">
                View Project Details →
              </button>
            </div>
            <div className="w-2/3 flex gap-4 reveal-text">
              <div className="w-[48%] h-[450px] bg-gray-300 rounded"></div>
              <div className="w-[48%] flex flex-col gap-4">
                <div className="w-full h-[220px] bg-gray-300 rounded"></div>
                <div className="w-full h-[220px] bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>

          <div className="flex gap-8 mt-12 reveal-text">
            <div className="w-2/3 flex gap-4 reveal-text">
              <div className="w-[48%] h-[450px] bg-gray-300 rounded"></div>
              <div className="w-[48%] flex flex-col gap-4">
                <div className="w-full h-[220px] bg-gray-300 rounded"></div>
                <div className="w-full h-[220px] bg-gray-300 rounded"></div>
              </div>
            </div>
            <div className="w-1/3 reveal-text">
              <div className="text-right">
                <p className="text-brand-blue uppercase text-xs tracking-wide mb-1">HEALTHKART</p>
                <h3 className="text-brand-blue font-semibold text-[17px] mb-3">
                  Post Purchase E-Commerce UX Research
                </h3>
                <div className="mb-4">
                  <div className="flex items-start mb-2 justify-end">
                    <span className="text-gray-400 mr-3 mt-1">•</span>
                    <p className="text-gray-600 text-[17px] leading-relaxed text-right">
                      Leading in-depth UX research on the post-purchase journey to identify user needs, emotional pain points, and behavior patterns.
                    </p>
                  </div>
                  <div className="flex items-start justify-end">
                    <span className="text-gray-400 mr-3 mt-1">•</span>
                    <p className="text-gray-600 text-[17px] leading-relaxed text-right">
                      Designed a 13-phase experience framework to optimize loyalty, habit formation, and retention.
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-brand-blue uppercase text-xs tracking-wide mb-2">TECH STACK</p>
                  <div className="flex flex-wrap gap-2 justify-end">
                    <span className="bg-brand-blue text-white px-3 py-1 text-xs font-medium">FIGMA</span>
                    <span className="bg-brand-blue text-white px-3 py-1 text-xs font-medium">ILLUSTRATOR</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2 justify-end">
                    <span className="bg-brand-blue text-white px-3 py-1 text-xs font-medium">FIGJAM</span>
                    <span className="bg-brand-blue text-white px-3 py-1 text-xs font-medium">RESEARCH</span>
                  </div>
                </div>
                <p className="text-brand-blue text-[17px] font-medium mb-4">Duration: May, 25 - Jul, 25</p>
                <button className="w-full border border-brand-blue text-brand-blue px-6 py-2 text-[17px] font-medium hover:bg-brand-blue hover:text-white transition reveal-text">
                  View Project Details →
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default portfolio2;

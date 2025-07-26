import React, { useRef } from 'react';
import Navbar from '../../components/Navbar';
import GridLines from '../../components/GridLines';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import sagarImage from '../../assets/sagar.svg';

const Portfolio4 = () => {
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
    <div className="font-anybody bg-white text-brand-green">
      <Navbar type="solidgreen" />
      <GridLines count={4} color="rgba(0,0,0,0.03)" />
      <main ref={containerRef} className="pt-[210px] px-[12.5vw] pb-10">

        <div className="flex justify-between items-center mb-4 text-sm text-brand-green reveal-text">
          <div className="flex items-center cursor-pointer hover:underline">
            <span className="mr-2">←</span> Go Back
          </div>
          <p className="text-xs text-gray-500">
            OUR WORK / PORTFOLIOS / <span className="text-black font-medium">Aishwary Panwar</span>
          </p>
        </div>

        <div className="bg-brand-accent2-130/5 border border-brand-green p-6 flex justify-between items-start flex-wrap gap-6 reveal-text">
          <div className="flex flex-col gap-4 min-w-[280px] flex-1">
            <div className="flex flex-wrap gap-10">
              <div>
                <p className="text-xs uppercase text-brand-green opacity-70">Name</p>
                <p className="text-[15px]">Aishwary Singh Panwar</p>
              </div>
              <div>
                <p className="text-xs uppercase text-brand-green opacity-70">Graduating Year</p>
                <p className="text-[14px] text-brand-green">2027</p>
              </div>
              <div>
                <p className="text-xs uppercase text-brand-green opacity-70">Course</p>
                <p className="text-[14px] text-brand-green">CS & Design</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="text-xs uppercase text-brand-green opacity-70">Email</p>
                <p className="text-[14px] text-brand-green">aishwary23055@iiitd.ac.in</p>
              </div>
              <div>
                <p className="text-xs uppercase text-brand-green opacity-70">Phone</p>
                <p className="text-[14px] text-brand-green">+91 9811059076</p>
              </div>
            </div>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center bg-brand-green text-white px-4 py-2 rounded text-sm w-[30vw] hover:bg-brand-green/80 transition-colors duration-200 reveal-text"
            >
              LINKEDIN
            </a>
          </div>
          <div className="min-w-[120px] max-w-[140px] reveal-text">
            <img
              src={sagarImage}
              alt="Aishwary Panwar"
              className="w-[200px] h-auto border border-brand-green"
            />
          </div>
        </div>

        <div className="border border-brand-green rounded-sm p-6 mt-6 reveal-text">
          <h2 className="text-lg font-semibold mb-4">Skills &amp; Softwares</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'FIGMA',
              'ADOBE ILLUSTRATOR',
              'ADOBE PHOTOSHOP',
              'UNITY 3D',
              'UNREAL ENGINE',
              'FUSION 360',
              'Python',
              'C++',
              'Java',
            ].map(skill => (
              <span
                key={skill}
                className="bg-brand-green text-white px-5 py-3 text-xs uppercase rounded reveal-text"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="border border-brand-green rounded-sm p-6 reveal-text">
            <h3 className="text-lg font-semibold mb-4">Education</h3>
            <div className="mb-6">
              <p className="uppercase text-xs text-brand-green opacity-70">Undergraduate</p>
              <p className="font-medium">Indraprastha Institute of Information Technology, Delhi</p>
              <p className="text-sm text-brand-green mt-1">2023–2027</p>
              <p className="text-sm font-semibold mt-1">CGPA: 8.85</p>
            </div>
            <div>
              <p className="uppercase text-xs text-brand-green opacity-70">High School</p>
              <p className="font-medium">The Mother's International School, Delhi</p>
              <p className="text-sm text-brand-green mt-1">2023</p>
              <p className="text-sm font-semibold mt-1">Percentage: 92.8%</p>
            </div>
          </div>
          <div className="border border-brand-green rounded-sm p-6 reveal-text">
            <h3 className="text-lg font-semibold mb-4">Awards &amp; Achievements</h3>
            <div className="mb-6">
              <p className="font-medium">IIIT Delhi</p>
              <p className="text-sm">Dean’s List Communication Award in Design</p>
              <p className="text-xs text-brand-green mt-1">August 2024</p>
            </div>
            <div>
              <p className="font-medium">IIIT Delhi</p>
              <p className="text-sm">Dean’s List Communication Award in Design</p>
              <p className="text-xs text-brand-green mt-1">August 2024</p>
            </div>
          </div>
        </div>

        <div className="border border-brand-green rounded-sm p-6 mt-6 reveal-text">
          <h3 className="text-lg font-semibold mb-4">Experience</h3>
          {[1, 2].map((_, idx) => (
            <div key={idx} className={`pb-6 ${idx === 1 ? '' : 'border-b border-brand-green mb-6'}`}>
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold">HEALTHKART</p>
                <p className="text-xs text-brand-green">May, 2025 – July, 2025</p>
              </div>
              <p className="font-medium mb-2">User Experience Design Intern</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Post Purchase UX Research: conducting post-purchase research and creating a design framework for scalable and multidisciplinary use</li>
                <li>MuscleBlaze UX Design Feature Prototype: analysed the current design system and designed hi-fi prototypes of new features</li>
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 reveal-text">
          <h3 className="text-lg font-semibold mb-4">Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8 reveal-text">
            <div className="col-span-1 border border-brand-green rounded-sm p-6 reveal-text">
              <p className="text-xs text-brand-green uppercase mb-1">HEALTHKART</p>
              <h4 className="font-medium mb-3">Post Purchase E-Commerce UX Research</h4>
              <ul className="list-disc list-inside text-sm space-y-1 mb-4">
                <li>Leading in-depth UX research on the post-purchase journey to identify user needs, emotional pain points, and behavior patterns.</li>
                <li>Designed a 13-phase experience framework to optimize loyalty, habit formation, and retention.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-3">
                {['FIGMA','ILLUSTRATOR','FIGJAM','RESEARCH'].map(tag=>(
                  <span key={tag} className="bg-brand-green text-white px-2 py-1 text-xs uppercase rounded reveal-text">{tag}</span>
                ))}
              </div>
              <p className="text-sm font-semibold mb-4">Duration: May, 25 – Jul, 25</p>
              <button className="text-sm font-medium uppercase border border-brand-green px-4 py-2 hover:bg-brand-green hover:text-white transition reveal-text">View Project Details →</button>
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-4">
              <div className="bg-gray-200 aspect-square reveal-text"></div>
              <div className="bg-gray-200 aspect-square reveal-text"></div>
              <div className="bg-gray-200 aspect-square reveal-text"></div>
              <div className="bg-gray-200 aspect-square reveal-text"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 reveal-text">
            <div className="col-span-2 grid grid-cols-2 gap-4">
              <div className="bg-gray-200 aspect-square reveal-text"></div>
              <div className="bg-gray-200 aspect-square reveal-text"></div>
              <div className="bg-gray-200 aspect-square reveal-text"></div>
              <div className="bg-gray-200 aspect-square reveal-text"></div>
            </div>
            <div className="col-span-1 border border-brand-green rounded-sm p-6 reveal-text">
              <p className="text-xs text-brand-green uppercase mb-1">HEALTHKART</p>
              <h4 className="font-medium mb-3">Post Purchase E-Commerce UX Research</h4>
              <ul className="list-disc list-inside text-sm space-y-1 mb-4">
                <li>Leading in-depth UX research on the post-purchase journey to identify user needs, emotional pain points, and behavior patterns.</li>
                <li>Designed a 13-phase experience framework to optimize loyalty, habit formation, and retention.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-3">
                {['FIGMA','ILLUSTRATOR','FIGJAM','RESEARCH'].map(tag=>(
                  <span key={tag} className="bg-brand-green text-white px-2 py-1 text-xs uppercase rounded reveal-text">{tag}</span>
                ))}
              </div>
              <p className="text-sm font-semibold mb-4">Duration: May, 25 – Jul, 25</p>
              <button className="text-sm font-medium uppercase border border-brand-green px-4 py-2 hover:bg-brand-green hover:text-white transition reveal-text">View Project Details →</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio4;
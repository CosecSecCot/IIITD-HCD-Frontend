import React, { useRef } from 'react';
import Navbar from '../../components/Navbar';
import GridLines from '../../components/GridLines';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import sagarImage from '../../assets/sagar.svg';

const Portfolio5 = () => {
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
    <div className="font-anybody bg-white text-brand-voilet">
      <Navbar type="solidvoilet" />
      <GridLines count={4} color="rgba(0,0,0,0.03)" />
      <main ref={containerRef} className="pt-[210px] px-[12.5vw] pb-10">

        <div className="flex justify-between items-center mb-4 reveal-text">
          <button className="text-sm text-brand-voilet hover:underline flex items-center">
            <span className="mr-2">←</span> Go Back
          </button>
          <p className="text-xs text-gray-500">
            OUR WORK / PORTFOLIOS / <span className="text-black font-medium">Sagar Gupta</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 reveal-text">
          <div className="col-span-1 border border-brand-voilet rounded p-6">
            <img
              src={sagarImage}
              alt="Sagar Gupta"
              className="w-full h-auto mb-4 rounded"
            />
            <p className="text-xs uppercase text-brand-voilet opacity-70">Name</p>
            <p className="text-lg font-medium mb-3">Sagar Gupta</p>
            <p className="text-xs uppercase text-brand-voilet opacity-70">Graduating Year</p>
            <p className="mb-3">2027</p>
            <p className="text-xs uppercase text-brand-voilet opacity-70">Course</p>
            <p className="mb-3">CS & Design</p>
            <p className="text-xs uppercase text-brand-voilet opacity-70">Email</p>
            <p className="mb-3">sagar23458@iiitd.ac.in</p>
            <p className="text-xs uppercase text-brand-voilet opacity-70">Phone</p>
            <p className="mb-4">+91 9310121033</p>
            <a
              href="#"
              className="inline-flex items-center bg-brand-voilet text-white px-4 py-2 rounded text-sm w-full justify-center hover:bg-brand-voilet/80 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5A2.49 2.49 0 0 0 2.5 6v12a2.5 2.5 0 0 0 2.48 2.5h12a2.5 2.5 0 0 0 2.5-2.5V6a2.49 2.49 0 0 0-2.48-2.5h-12Zm.02 3h12v12h-12v-12Zm8.5 2.75h-1.5v1.5h1.5v-1.5Zm.77 0h-1.5v1.5h1.5v-1.5Zm.73.87a.94.94 0 1 1-.001 1.881A.94.94 0 0 1 14.98 7.12Z" />
              </svg>
              LINKEDIN
            </a>
          </div>

          <div className="col-span-2 space-y-8">
            <div className="border border-brand-voilet rounded p-6 reveal-text">
              <h2 className="text-lg font-medium mb-4 text-brand-voilet">Skills & Softwares</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  'FIGMA', 'ADOBE ILLUSTRATOR', 'ADOBE PHOTOSHOP',
                  'Python', 'C++', 'Java', 'UNITY 3D',
                  'UNREAL ENGINE', 'FUSION 360',
                ].map(skill => (
                  <span
                    key={skill}
                    className="bg-brand-voilet text-white px-3 py-1 text-xs uppercase rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-brand-voilet rounded p-6 grid grid-cols-1 md:grid-cols-2 gap-6 reveal-text">
              <div>
                <h3 className="text-base font-medium mb-2 text-brand-voilet">Education</h3>
                <p className="text-xs uppercase text-gray-500">Undergraduate</p>
                <p className="mb-1">Indraprastha Institute of Information Technology, Delhi</p>
                <p className="text-sm text-brand-voilet">2023–2027</p>
                <p className="text-xs text-brand-voilet mt-1">CGPA: 8.85</p>
                <div className="mt-4">
                  <p className="text-xs uppercase text-gray-500">High School</p>
                  <p className="mb-1">The Mother's International School, Delhi</p>
                  <p className="text-sm text-brand-voilet">2023–2027</p>
                  <p className="text-xs text-brand-voilet mt-1">Percentage: 92.8%</p>
                </div>
              </div>
            </div>

            <div className="space-y-12 reveal-text">
              {[1, 2].map((_, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-6">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-medium text-brand-voilet">HEALTHKART</p>
                    <p className="text-xs text-brand-voilet">May, 2025 – July, 2025</p>
                  </div>
                  <p className="font-medium mb-2">User Experience Design Intern</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Post Purchase UX Research: conducting post-purchase research and creating a design framework for scalable and multidisciplinary use</li>
                    <li>MuscleBlaze UX Design Feature Prototype: Analysed the current design system and designed hi-fi prototypes of new features</li>
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 reveal-text">
              <h3 className="text-lg font-medium mb-4 text-brand-voilet">Projects</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
                <div className="col-span-1">
                  <div className="border border-brand-voilet rounded p-6">
                    <p className="text-xs text-brand-voilet uppercase mb-1">HEALTHKART</p>
                    <h4 className="font-medium mb-3">Post Purchase E-Commerce UX Research</h4>
                    <ul className="list-disc list-inside text-sm space-y-1 mb-4">
                      <li>Leading in-depth UX research on the post-purchase journey to identify user needs, emotional pain points, and behavior patterns.</li>
                      <li>Designed a 13-phase experience framework to optimize loyalty, habit formation, and retention.</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {['FIGMA','ILLUSTRATOR','FIGJAM','RESEARCH'].map(tag => (
                        <span key={tag} className="bg-brand-voilet text-white px-2 py-1 text-xs uppercase rounded">{tag}</span>
                      ))}
                    </div>
                    <p className="text-sm font-semibold mb-4">Duration: May, 25 – Jul, 25</p>
                    <button className="text-sm font-medium uppercase border border-brand-voilet px-4 py-2 hover:bg-brand-voilet hover:text-white transition">View Project Details →</button>
                  </div>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-4">
                  <div className="bg-gray-200 aspect-square"></div>
                  <div className="bg-gray-200 aspect-square"></div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="col-span-2 grid grid-cols-2 gap-4">
                  <div className="bg-gray-200 aspect-square"></div>
                  <div className="bg-gray-200 aspect-square"></div>
                </div>
                <div className="col-span-1">
                  <div className="border border-brand-voilet rounded p-6">
                    <p className="text-xs text-brand-voilet uppercase mb-1">HEALTHKART</p>
                    <h4 className="font-medium mb-3">Post Purchase E-Commerce UX Research</h4>
                    <ul className="list-disc list-inside text-sm space-y-1 mb-4">
                      <li>Leading in-depth UX research on the post-purchase journey to identify user needs, emotional pain points, and behavior patterns.</li>
                      <li>Designed a 13-phase experience framework to optimize loyalty, habit formation, and retention.</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {['FIGMA','ILLUSTRATOR','FIGJAM','RESEARCH'].map(tag => (
                        <span key={tag} className="bg-brand-voilet text-white px-2 py-1 text-xs uppercase rounded">{tag}</span>
                      ))}
                    </div>
                    <p className="text-sm font-semibold mb-4">Duration: May, 25 – Jul, 25</p>
                    <button className="text-sm font-medium uppercase border border-brand-voilet px-4 py-2 hover:bg-brand-voilet hover:text-white transition">View Project Details →</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio5;

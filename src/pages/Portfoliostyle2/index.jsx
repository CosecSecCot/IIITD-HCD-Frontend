import React from 'react';
import Navbar from '../../components/Navbar';
import sagarImage from '../../assets/sagar.svg';
import linkedinIcon from '../../assets/linkedin.svg';

const SagarGupta = () => {
  return (
    <div className="font-sans bg-white text-[#003B3F]">
      <Navbar type="solidblue" />

      <div className="pt-[210px] px-[12.5vw] pb-10">
        <div className="flex justify-between items-center mb-6 text-base text-[#093B69]">
          <div className="flex items-center cursor-pointer hover:underline text-[16px]">
            <span className="mr-2">←</span> Go Back
          </div>
          <p className="text-sm text-gray-500">
            OUR WORK / PORTFOLIOS / <span className="text-black font-semibold">SAGAR GUPTA</span>
          </p>
        </div>

        <div className="border border-[#093B69] rounded-sm p-8 flex justify-between items-center bg-[#F9FDFD] flex-wrap gap-8">
          <div className="flex flex-col gap-8 flex-1 min-w-[250px]">
            <div className="flex flex-wrap gap-20">
              <div>
                <p className="text-[#093B6980] uppercase text-sm tracking-wide">Name</p>
                <p className="text-[18px] font-regular text-[#093B69]">Sagar Gupta</p>
              </div>
              <div>
                <p className="text-[#093B6980] uppercase text-sm tracking-wide">Graduating Year</p>
                <p className="text-[17px] text-[#093B69] font-regular">2027</p>
              </div>
              <div>
                <p className="text-[#093B6980] uppercase text-sm tracking-wide">Course</p>
                <p className="text-[17px] text-[#093B69] font-regular">CS & Design</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-20">
              <div>
                <p className="text-[#093B6980] uppercase text-sm tracking-wide">Email</p>
                <p className="text-[17px] text-[#093B69] font-regular">sagar23458@iiitd.ac.in</p>
              </div>
              <div>
                <p className="text-[#093B6980] uppercase text-sm tracking-wide">Phone</p>
                <p className="text-[17px] text-[#093B69] font-regular">+91 9310121033</p>
              </div>
            </div>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center bg-[#093B69] text-white px-6 py-3 rounded text-base w-[250px] font-semibold justify-center"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5 mr-3" />
              LINKEDIN
            </a>
          </div>

          <div className="w-[200px] h-[200px] shrink-0">
            <img src={sagarImage} alt="Sagar Gupta" className="w-full h-full object-cover border" />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4 text-[#093B69]">Skills & Softwares</h2>
          <div className="border border-[#093B69] rounded-sm p-6 bg-[#F9FDFD]">
            <div className="flex flex-wrap gap-6">
              {['FIGMA', 'ADOBE ILLUSTRATOR', 'ADOBE PHOTOSHOP', 'UNITY 3D', 'UNREAL ENGINE', 'FUSION 360', 'Python', 'C++', 'Java'].map(skill => (
                <span key={skill} className="bg-[#093B69] text-white px-4 py-2 text-sm font-medium">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex">
          <div className="w-1/2 pr-12">
            <h2 className="text-lg font-semibold mb-4 text-[#093B69]">Education</h2>
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <p className="text-[#093B6980] uppercase text-xs tracking-wide mb-1">UNDERGRADUATE</p>
                  <p className="text-[#093B69] font-medium text-base">Indraprastha Institute of <br /> Information Technology, Delhi</p>
                </div>
                <div className="flex items-start">
                  <div className="w-[280px] h-px bg-[#093B69] mx-4 mt-8"></div>
                  <div className="text-right mt-4">
                    <p className="text-[#093B69] uppercase text-xs tracking-wide">CGPA</p>
                    <p className="text-[#093B69] font-medium text-base mb-3">8.65</p>
                  </div>
                </div>
              </div>
              <p className="text-[#093B69] text-sm">2023-2027</p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <p className="text-[#093B6980] uppercase text-xs tracking-wide mb-1">HIGH SCHOOL</p>
                  <p className="text-[#093B69] font-medium text-base">The Mother's International<br /> School, Delhi</p>
                </div>
                <div className="flex items-start">
                  <div className="w-[220px] h-px bg-[#093B69] mx-4 mt-8"></div>
                  <div className="text-right mt-4">
                    <p className="text-[#093B69] uppercase text-xs tracking-wide">PERCENTAGE</p>
                    <p className="text-[#093B69] font-medium text-base mb-5">92.8%</p>
                  </div>
                </div>
              </div>
              <p className="text-[#093B69] text-sm">2023-2027</p>
            </div>
          </div>

          <div className="w-1/2 flex justify-end">
            <div className="w-full max-w-[400px]">
              <h2 className="text-lg font-semibold mb-4 text-[#093B69]">Awards & Achievements</h2>
              <div className="mb-6">
                <p className="text-[#093B6980] uppercase text-xs tracking-wide mb-1">IIIT DELHI</p>
                <p className="text-[#093B69] font-semibold text-base">Dean's List Communication Award in Design</p>
                <p className="text-[#093B69] text-sm">August 2024</p>
              </div>
              <div>
                <p className="text-[#093B6980] uppercase text-xs tracking-wide mb-1">IIIT DELHI</p>
                <p className="text-[#093B69] font-semibold text-base">Dean's List Communication Award in Design</p>
                <p className="text-[#093B69] text-sm">August 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#093B69] mt-12"></div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4 text-[#093B69]">Experience</h2>

          {[1, 2].map((_, i) => (
            <div className="mb-8" key={i}>
              <div className="mb-2">
                <p className="text-[#093B6980] uppercase text-xs tracking-wide mb-1">HEALTHKART</p>
                <div className="flex justify-between items-center">
                  <p className="text-[#093B69] font-semibold text-[17px]">User Experience Design Intern</p>
                  <div className="flex items-center">
                    <div className="w-[700px] h-px bg-[#093B69] mx-4"></div>
                    <p className="text-[#093B69] text-[17px]">May, 2025 - July, 2025</p>
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
            </div>
          ))}

          <div className="border-t border-[#093B69] mt-6"></div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4 text-[#093B69]">Projects</h2>

          {[false, true].map((reversed, i) => (
            <div className={`flex gap-8 ${i > 0 ? 'mt-12' : ''}`} key={i}>
              {!reversed ? (
                <>
                  <ProjectTextSide />
                  <ProjectImageSide />
                </>
              ) : (
                <>
                  <ProjectImageSide />
                  <ProjectTextSide reversed />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectTextSide = ({ reversed }) => (
  <div className="w-1/3">
    <div className={`mb-4 ${reversed ? 'text-right' : ''}`}>
      <p className="text-[#093B6980] uppercase text-xs tracking-wide mb-1">HEALTHKART</p>
      <h3 className="text-[#093B69] font-semibold text-[17px] mb-3">Post Purchase E-Commerce UX Research</h3>
      <div className="mb-4">
        <p className={`text-gray-600 text-[17px] leading-relaxed ${reversed ? 'text-right' : ''}`}>
          • Leading in-depth UX research on the post-purchase journey to identify user needs, emotional pain points, and behavior patterns.
        </p>
        <p className={`text-gray-600 text-[17px] leading-relaxed ${reversed ? 'text-right' : ''}`}>
          • Designed a 13-phase experience framework to optimize loyalty, habit formation, and retention.
        </p>
      </div>
      <div className="mb-4">
        <p className="text-[#093B69] uppercase text-xs tracking-wide mb-2">TECH STACK</p>
        <div className={`flex flex-wrap gap-2 ${reversed ? 'justify-end' : ''}`}>
          {['FIGMA', 'ILLUSTRATOR', 'FIGJAM', 'RESEARCH'].map(stack => (
            <span key={stack} className="bg-[#093B69] text-white px-3 py-1 text-xs font-medium">{stack}</span>
          ))}
        </div>
      </div>
      <p className="text-[#093B69] text-[17px]"><span className="font-medium">Duration:</span> May, 25 - Jul, 25</p>
      <button className="border border-[#093B69] text-[#093B69] px-6 py-2 text-[17px] font-medium hover:bg-[#093B69] hover:text-white transition-colors w-full bg-[#F9FDFD] mt-4">
        View Project Details →
      </button>
    </div>
  </div>
);

const ProjectImageSide = () => (
  <div className="w-2/3 flex gap-4">
    <div className="w-[48%] h-[450px] bg-gray-300 rounded"></div>
    <div className="w-[48%] flex flex-col gap-4">
      <div className="w-full h-[220px] bg-gray-300 rounded"></div>
      <div className="w-full h-[220px] bg-gray-300 rounded"></div>
    </div>
  </div>
);

export default SagarGupta;

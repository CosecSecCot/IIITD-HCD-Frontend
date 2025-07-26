import React from 'react';
import Navbar from '../../components/Navbar';
import sagarImage from '../../assets/sagar.svg';
import linkedinIcon from '../../assets/linkedin.svg';


const Portfolio1 = () => {
  return (
    <div className="font-sans bg-white text-[#003B3F]">
      <Navbar type="solid"/>

      {/* Content container */}
      <div className="pt-[210px] px-[12.5vw] pb-10">
        {/* Go Back and Breadcrumb */}
        <div className="flex justify-between items-center mb-6 text-base text-[#005C5C]">
          <div className="flex items-center cursor-pointer hover:underline text-[16px]">
            <span className="mr-2">←</span> Go Back
          </div>
          <p className="text-sm text-gray-500">
            OUR WORK / PORTFOLIOS / <span className="text-black font-semibold">SAGAR GUPTA</span>
          </p>
        </div>

        {/* Main card */}
        <div className="border border-[#005C5C] rounded-sm p-8 flex justify-between items-center bg-[#F9FDFD] flex-wrap gap-8">

          {/* Left Info Section */}
          <div className="flex flex-col gap-8 flex-1 min-w-[250px]">
            {/* Top Row: Name, Year, Course */}
            <div className="flex flex-wrap gap-20">
              <div>
                <p className="text-[#005c5c80] uppercase text-sm tracking-wide">Name</p>
                <p className="text-[18px] font-regular text-[#005C5C]">Sagar Gupta</p>
              </div>
              <div>
                <p className="text-[#005c5c80] uppercase text-sm tracking-wide">Graduating Year</p>
                <p className="text-[17px] text-[#005C5C] font-regular">2027</p>
              </div>
              <div>
                <p className="text-[#005c5c80] uppercase text-sm tracking-wide">Course</p>
                <p className="text-[17px] text-[#005C5C] font-regular">CS & Design</p>
              </div>
            </div>

            {/* Second Row: Email | Phone */}
            <div className="flex flex-wrap gap-20">
              <div>
                <p className="text-[#005c5c80] uppercase text-sm tracking-wide">Email</p>
                <p className="text-[17px] text-[#005C5C] font-regular">sagar23458@iiitd.ac.in</p>
              </div>
              <div>
                <p className="text-[#005c5c80] uppercase text-sm tracking-wide">Phone</p>
                <p className="text-[17px] text-[#005C5C] font-regular">+91 9310121033</p>
              </div>
            </div>

            {/* LinkedIn Button */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center bg-[#005C5C] text-white px-6 py-3 rounded text-base w-[250px] font-semibold justify-center"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-5 h-5 mr-3"
              />
              LINKEDIN
            </a>
          </div>

          {/* Right Section (Image) */}
          <div className="w-[200px] h-[200px] shrink-0">
            <img
              src={sagarImage}
              alt="Sagar Gupta"
              className="w-full h-full object-cover border"
            />
          </div>
        </div>

        {/* Skills & Softwares Section */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4 text-[#005C5C]">Skills & Softwares</h2>
          <div className="border border-[#005C5C] rounded-sm p-6 bg-[#F9FDFD]">
            <div className="flex flex-wrap gap-6">
              <span className="bg-[#005C5C] text-white px-4 py-2 text-sm font-medium">FIGMA</span>
              <span className="bg-[#005C5C] text-white px-4 py-2 text-sm font-medium">ADOBE ILLUSTRATOR</span>
              <span className="bg-[#005C5C] text-white px-4 py-2 text-sm font-medium">ADOBE PHOTOSHOP</span>
              <span className="bg-[#005C5C] text-white px-4 py-2 text-sm font-medium">UNITY 3D</span>
              <span className="bg-[#005C5C] text-white px-4 py-2 text-sm font-medium">UNREAL ENGINE</span>
              <span className="bg-[#005C5C] text-white px-4 py-2 text-sm font-medium">FUSION 360</span>
              <span className="bg-[#005C5C] text-white px-4 py-2 text-sm font-medium">Python</span>
              <span className="bg-[#005C5C] text-white px-4 py-2 text-sm font-medium">C++</span>
              <span className="bg-[#005C5C] text-white px-4 py-2 text-sm font-medium">Java</span>
            </div>
          </div>
        </div>

        {/* Education and Awards Section */}
        <div className="mt-12 flex">
          {/* Education Section */}
          <div className="w-1/2 pr-12">
            <h2 className="text-lg font-semibold mb-4 text-[#005C5C]">Education</h2>
            {/* Undergraduate */}
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <p className="text-[#005c5c80] uppercase text-xs tracking-wide mb-1">UNDERGRADUATE</p>
                  <p className="text-[#005C5C] font-medium text-base">Indraprastha Institute of <br /> Information Technology, Delhi</p>
                </div>
                <div className="flex items-start">
                  <div className="w-[280px] h-px bg-[#096964] mx-4 mt-8"></div>
                    <div className="text-right mt-4">
                      <p className="text-[#005C5C] uppercase text-xs tracking-wide ">CGPA</p>
                      <p className="text-[#005C5C] font-medium text-base mb-3">8.65</p>
                    </div>
                  </div>
                </div>
              <p className="text-[#005C5C] text-sm">2023-2027</p>
            </div>

            {/* High School */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <p className="text-[#005c5c80] uppercase text-xs tracking-wide mb-1">HIGH SCHOOL</p>
                  <p className="text-[#005C5C] font-medium text-base">The Mother's International<br /> School, Delhi</p>
                </div>
                <div className="flex items-start">
                  <div className="w-[220px] h-px bg-[#096964] mx-4 mt-8"></div>
                  <div className="text-right mt-4">
                    <p className="text-[#005C5C] uppercase text-xs tracking-wide ">PERCENTAGE</p>
                    <p className="text-[#005C5C] font-medium text-base mb-5">92.8%</p>
                  </div>
                </div>
              </div>
              <p className="text-[#005C5C] text-sm">2023-2027</p>
            </div>
          </div>

          {/* Awards & Achievements Section - Shifted to the right */}
          <div className="w-1/2 flex justify-end">
            <div className="w-full max-w-[400px]">
              <h2 className="text-lg font-semibold mb-4 text-[#005C5C]">Awards & Achievements</h2>
              {/* First Award */}
              <div className="mb-6">
                <p className="text-[#005c5c80] uppercase text-xs tracking-wide mb-1">IIIT DELHI</p>
                <p className="text-[#005C5C] font-semibold text-base">Dean's List Communication Award in Design</p>
                <p className="text-[#005C5C] text-sm">August 2024</p>
              </div>

              {/* Second Award */}
              <div>
                <p className="text-[#005c5c80] uppercase text-xs tracking-wide mb-1">IIIT DELHI</p>
                <p className="text-[#005C5C] font-semibold text-base">Dean's List Communication Award in Design</p>
                <p className="text-[#005C5C] text-sm">August 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Line above Experience */}
        <div className="border-t border-[#096964] mt-12"></div>

        {/* Experience Section */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4 text-[#005C5C]">Experience</h2>
          
          {/* First Experience */}
          <div className="mb-8">
            <div className="mb-2">
              <p className="text-[#005C5C] uppercase text-xs tracking-wide mb-1">HEALTHKART</p>
              <div className="flex justify-between items-center">
                <p className="text-[#005C5C] font-semibold text-[17px]">User Experience Design Intern</p>
                <div className="flex items-center">
                  <div className="w-[700px] h-px bg-[#096964] mx-4"></div>
                  <p className="text-[#005C5C] text-[17px]">May, 2025 - July, 2025</p>
                </div>
              </div>
            </div>
            <div className="ml-0 mt-3 w-2/3">
              <div className="flex items-start mb-2">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <p className="text-gray-600 text-[17px] leading-relaxed">
                  <span className="font-medium">Post Purchase UX Research:</span> Conducting post-purchase research and creating a design framework for scalable and multi disciplinary use
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

          {/* Second Experience */}
          <div className="mb-8">
            <div className="mb-2">
              <p className="text-[#005C5C] uppercase text-xs tracking-wide mb-1">HEALTHKART</p>
              <div className="flex justify-between items-center">
                <p className="text-[#005C5C] font-semibold text-[17px]">User Experience Design Intern</p>
                <div className="flex items-center">
                  <div className="w-[700px] h-px bg-[#096964] mx-4"></div>
                  <p className="text-[#005C5C] text-[17px]">May, 2025 - July, 2025</p>
                </div>
              </div>
            </div>
            <div className="ml-0 mt-3 w-2/3">
              <div className="flex items-start mb-2">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <p className="text-gray-600 text-[17px] leading-relaxed">
                  <span className="font-medium">Post Purchase UX Research:</span> Conducting post-purchase research and creating a design framework for scalable and multi disciplinary use
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

          {/* Line at the end of Experience */}
          <div className="border-t border-[#096964] mt-6"></div>
        </div>

        {/* Projects Section */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4 text-[#005C5C]">Projects</h2>
          
          {/* Project Card */}
          <div className="flex gap-8">
            {/* Left Content - 1/3 width */}
            <div className="w-1/3">
              <div className="mb-4">
                <p className="text-[#005C5C] uppercase text-xs tracking-wide mb-1">HEALTHKART</p>
                <h3 className="text-[#005C5C] font-semibold text-[17px] mb-3">Post Purchase E-Commerce UX Research</h3>
                
                {/* Project Description */}
                <div className="mb-4">
                  <div className="flex items-start mb-2">
                    <span className="text-gray-400 mr-3 mt-1">•</span>
                    <p className="text-gray-600 text-[17px] leading-relaxed">
                      Leading in-depth UX research on the post-purchase journey to identify user needs, emotional pain points, and behavior patterns.
                    </p>
                  </div>
                  <div className="flex items-start mb-4">
                    <span className="text-gray-400 mr-3 mt-1">•</span>
                    <p className="text-gray-600 text-[17px] leading-relaxed">
                      Designed a 13-phase experience framework to optimize loyalty, habit formation, and retention.
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="text-[#005C5C] uppercase text-xs tracking-wide mb-2">TECH STACK</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#005C5C] text-white px-3 py-1 text-xs font-medium">FIGMA</span>
                    <span className="bg-[#005C5C] text-white px-3 py-1 text-xs font-medium">ILLUSTRATOR</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-[#005C5C] text-white px-3 py-1 text-xs font-medium">FIGJAM</span>
                    <span className="bg-[#005C5C] text-white px-3 py-1 text-xs font-medium">RESEARCH</span>
                  </div>
                </div>

                {/* Duration */}
                <div className="mb-6">
                  <p className="text-[#005C5C] text-[17px]">
                    <span className="font-medium">Duration:</span> May, 25 - Jul, 25
                  </p>
                </div>

                {/* View Project Details Button */}
                <button className="border border-[#005C5C] text-[#005C5C] px-6 py-2 text-[17px] font-medium hover:bg-[#005C5C] hover:text-white transition-colors w-full bg-[#F9FDFD]">
                  View Project Details →
                </button>
              </div>
            </div>

            {/* Right Images - 2/3 width */}
            <div className="w-2/3 flex gap-4">
              {/* First Image Placeholder - Tall - Increased height */}
              <div className="w-[48%] h-[450px] bg-gray-300 rounded"></div>
              {/* Right Column */}
              <div className="w-[48%] flex flex-col gap-4">
                {/* Second Image Placeholder - Increased height */}
                <div className="w-full h-[220px] bg-gray-300 rounded"></div>
                {/* Third Image Placeholder - Increased height */}
                <div className="w-full h-[220px] bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>

          {/* Second Project Card - Reversed Layout */}
          <div className="flex gap-8 mt-12">
            {/* Left Images - 2/3 width */}
            <div className="w-2/3 flex gap-4">
              {/* First Image Placeholder - Tall */}
              <div className="w-[48%] h-[450px] bg-gray-300 rounded"></div>
              {/* Right Column */}
              <div className="w-[48%] flex flex-col gap-4">
                {/* Second Image Placeholder */}
                <div className="w-full h-[220px] bg-gray-300 rounded"></div>
                {/* Third Image Placeholder */}
                <div className="w-full h-[220px] bg-gray-300 rounded"></div>
              </div>
            </div>

            {/* Right Content - 1/3 width - Right aligned text */}
            <div className="w-1/3">
              <div className="mb-4 text-right">
                <p className="text-[#005C5C] uppercase text-xs tracking-wide mb-1">HEALTHKART</p>
                <h3 className="text-[#005C5C] font-semibold text-[17px] mb-3">Post Purchase E-Commerce UX Research</h3>
                
                {/* Project Description */}
                <div className="mb-4">
                  <div className="flex items-start mb-2">
                    <span className="text-gray-400 mr-3 mt-1">•</span>
                    <p className="text-gray-600 text-[17px] leading-relaxed text-right">
                      Leading in-depth UX research on the post-purchase journey to identify user needs, emotional pain points, and behavior patterns.
                    </p>
                  </div>
                  <div className="flex items-start mb-4">
                    <span className="text-gray-400 mr-3 mt-1">•</span>
                    <p className="text-gray-600 text-[17px] leading-relaxed text-right">
                      Designed a 13-phase experience framework to optimize loyalty, habit formation, and retention.
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="text-[#005C5C] uppercase text-xs tracking-wide mb-2">TECH STACK</p>
                  <div className="flex flex-wrap gap-2 justify-end">
                    <span className="bg-[#005C5C] text-white px-3 py-1 text-xs font-medium">FIGMA</span>
                    <span className="bg-[#005C5C] text-white px-3 py-1 text-xs font-medium">ILLUSTRATOR</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2 justify-end">
                    <span className="bg-[#005C5C] text-white px-3 py-1 text-xs font-medium">FIGJAM</span>
                    <span className="bg-[#005C5C] text-white px-3 py-1 text-xs font-medium">RESEARCH</span>
                  </div>
                </div>

                {/* Duration */}
                <div className="mb-6">
                  <p className="text-[#005C5C] text-[17px]">
                    <span className="font-medium">Duration:</span> May, 25 - Jul, 25
                  </p>
                </div>

                {/* View Project Details Button */}
                <button className="border border-[#005C5C] text-[#005C5C] px-6 py-2 text-[17px] font-medium hover:bg-[#005C5C] hover:text-white transition-colors w-full bg-[#F9FDFD]">
                  View Project Details →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio1;
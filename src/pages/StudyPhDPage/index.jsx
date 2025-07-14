import React from 'react';
import Navbar from '../../components/Navbar';
import background from '../../assets/backgr.svg';
import phdHeading from '../../assets/phd-heading.svg';
import gradientRing from '../../assets/gradient-ring.svg'; // <-- Your quarter arc SVG

const CourseDirectory = () => {
  return (
    <div className="relative min-h-screen font-sans bg-white overflow-x-hidden">
      {/* Background */}
      <img
        src={background}
        alt="Background"
        className="absolute top-0 left-0 w-full object-contain object-left z-0 brightness-90 contrast-125"
      />

      {/* Navbar */}
      <Navbar />

      {/* Intro Section */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-[160px] pt-[240px]">
        <div className="grid grid-cols-12 gap-4 w-full">
          {/* Left */}
          <div className="col-span-6">
            <button className="text-[#084c4c] text-[20px] font-normal mb-4">← Go Back</button>
            <h2 className="text-[#084c4c] text-[26px] font-normal">
              Doctor of Philosophy  |  PhD
            </h2>
            <h1 className="text-6xl font-light text-[48px] leading-tight">
              Human Centered <br /> Design
            </h1>
          </div>

          {/* Right */}
          <div className="col-span-6 flex items-center justify-end mt-3">
            <p className="font-light italic text-[18px] text-right leading-relaxed max-w-md">
              "Design tomorrow's information technology products, <br />
              services and systems which combine emerging<br /> technologies"
            </p>
          </div>
        </div>
      </div>

      {/* PhD Section */}
      <div className="relative z-10 w-full pb-20 pt-10 bg-white font-sans">
        <div className="w-full overflow-hidden mb-10">
          <img
            src={phdHeading}
            alt="Study PhD @IIITD with Lines"
            className="w-screen h-auto block"
          />
        </div>

        <div className="px-[160px] ml-[600px]">
          <p className="text-[17px] text-[#333] font-light leading-[1.8] max-w-[780px] text-left">
            The PhD program at IIIT-Delhi is focused towards research like any other PhD
            program – limited coursework to enhance the breadth and depth of a student,
            followed by focused research. Admissions are made through regular admission
            process as well as rolling mode. Regular admissions for all disciplines are made in
            March-April and Nov-Dec every year. For rolling admission, the interested
            candidates are expected to interact with the concerned faculty member(s) in IIIT-
            Delhi and get their consent for working with him/her. However, such candidates will
            undergo a full selection process before being admitted to the PhD program.
          </p>
        </div>
      </div>

      {/* View Courses Cards */}
      <div className="relative z-10 bg-white px-[160px] py-10">
        <div className="flex gap-6 w-full">
          {/* Card 1 */}
          <div
            className="border border-[#9fc5c5] px-12 py-10 w-1/2 relative overflow-hidden shadow-sm min-h-[320px] flex flex-col justify-center"
            style={{ backgroundColor: 'rgba(9, 105, 100, 0.1)' }}
          >
            {/* Quarter Arc SVG */}
            <img
              src={gradientRing}
              alt="Quarter Arc"
              className="absolute right-[-60px] bottom-[-80px] w-[300px] opacity-80 pointer-events-none"
            />

            <div className="relative z-10">
              <p className="text-[14px] text-gray-800 mb-1">Bachelor’s Degree</p>
              <h3 className="text-[34px] text-[#0b5e5e] font-bold leading-snug mb-4">View Courses</h3>
              <p className="text-[17px] text-gray-800 font-normal mb-10">
                The first level of the university system:<br />
                three-year study courses.
              </p>
              <button className="text-[13px] font-bold text-black uppercase tracking-wide flex items-center gap-1">
                View Details <span className="text-[18px]">→</span>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="border border-[#9fc5c5] px-12 py-10 w-1/2 relative overflow-hidden shadow-sm min-h-[320px] flex flex-col justify-center"
            style={{ backgroundColor: 'rgba(9, 105, 100, 0.1)' }}
          >
            {/* Quarter Arc SVG */}
            <img
              src={gradientRing}
              alt="Quarter Arc"
              className="absolute right-[-60px] bottom-[-80px] w-[300px] opacity-80 pointer-events-none"
            />

            <div className="relative z-10">
              <p className="text-[14px] text-gray-800 mb-1">Bachelor’s Degree</p>
              <h3 className="text-[34px] text-[#0b5e5e] font-bold leading-snug mb-4">View Courses</h3>
              <p className="text-[17px] text-gray-800 font-normal mb-10">
                The first level of the university system:<br />
                three-year study courses.
              </p>
              <button className="text-[13px] font-bold text-black uppercase tracking-wide flex items-center gap-1">
                View Details <span className="text-[18px]">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDirectory;

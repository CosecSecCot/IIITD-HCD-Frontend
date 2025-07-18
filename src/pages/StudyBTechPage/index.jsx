import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import background from '../../assets/backgr.svg';
import btechHeading from '../../assets/btech-heading.svg';
import admissionHeading from '../../assets/admissionHeading.svg';
import gradientRing from '../../assets/gradient-ring.svg';
import searchIcon from '../../assets/Search.svg';
import programmeHeading from '../../assets/programmeHeading.svg';
import leftverticalLine from '../../assets/leftverticalLine.svg';
import rightverticalLine from '../../assets/rightverticalLine.svg';
import leftrectangleLine from '../../assets/leftRectangle.svg';
import rightrectangleLine from '../../assets/rightRectangle.svg';
import admissionleftLine from '../../assets/admissionleft.svg';
import admissionrightLine from '../../assets/admissionright.svg';
import programleftLine from '../../assets/programleft.svg';
import programrightLine from '../../assets/programright.svg';
import textureBg from '../../assets/textureBg.svg';
import Vectorbtech from '../../assets/Vectorbtech.svg';

const CourseDirectory = () => {
  const [activePortal, setActivePortal] = useState('UCEED');

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
          <div className="col-span-6">
            <button className="text-[#084c4c] text-[20px] font-normal mb-4">← Go Back</button>
            <h2 className="text-[#084c4c] text-[26px] font-normal">Bachelor’s Degree  |  B.Tech</h2>
            <h1 className="text-6xl font-light text-[48px] leading-tight">
              Computer Science <br /> Design
            </h1>
          </div>
          <div className="col-span-6 flex items-center justify-end mt-3">
            <p className="font-light italic text-[18px] text-right leading-relaxed max-w-md">
              "Design tomorrow's information technology products, <br />
              services and systems which combine emerging<br /> technologies"
            </p>
          </div>
        </div>
      </div>

      {/* BTech Info Section */}
      <div className="relative z-10 w-full pb-20 pt-10 bg-white font-sans">
        <div className="relative z-10 w-full pb-4 pt-10 bg-white font-sans">
          <div className="w-full flex items-baseline  mb-10 px-[0px]">
            <img src={leftrectangleLine} alt="Left Line" className="h-auto w-[200px] mr-auto" />

            <h2 className="text-[45px] font-light text-black tracking-wide">
              Study <span className="text-[#0b5e5e] font-semibold">CSD</span> @IIITD
            </h2>

            <img src={rightrectangleLine} alt="Right Line" className="h-auto w-[960px] ml-auto" />
          </div>
        </div>

        <div className="px-[160px] ml-[610px]">
          <p className="text-[17px] text-[#333] font-light leading-[1.8] max-w-[780px] text-left">
            The program will prepare students to work in the IT industry as well as digital media industry like gaming, animation, virtual/augmented reality, etc. The program will also allow students, who want to pursue higher studies, to take up higher studies in CS/IT or in Design.
          </p>
          <br />
          <br />
          <br />
          <p className="text-[17px] text-[#333] font-light leading-[1.8] max-w-[780px] text-left">
            The program will prepare students to work in the IT industry as well as digital media industry like gaming, animation, virtual/augmented reality, etc. The program will also allow students, who want to pursue higher studies, to take up higher studies in CS/IT or in Design.
          </p>
        </div>
      </div>

      {/* Admission Section */}
      <div className="relative z-10 w-full pb-4 pt-4 bg-white font-sans">
        <div className="w-full flex items-baseline  mb-10 px-[0px]">
          <img src={admissionleftLine} alt="Left Line" className="h-auto w-[910px] mr-auto" />
          <h2 className="text-[45px] font-light text-black tracking-wide">
            <span className="text-[#0b5e5e] font-semibold">Admissions</span> Process
          </h2>
          <img src={admissionrightLine} alt="Right Line" className="h-auto w-[200px] ml-auto" />
        </div>
      </div>

      {/* Admissions Process */}
      <div className="relative z-10 w-full bg-white px-[160px]  py-4">
        <div className="flex mb-6">
          {/* UCEED Button */}
          <div
            onClick={() => setActivePortal('UCEED')}
            className={`px-6 py-2 text-[13px] font-semibold uppercase tracking-wide cursor-pointer min-w-[285px] justify-center flex items-center gap-2 ${
              activePortal === 'UCEED'
                ? 'bg-[#0b5e5e] text-white'
                : 'bg-white border border-[#c4c4c4] text-black'
            }`}
          >
            <img src={searchIcon} alt="Search Icon" className="w-[16px] h-[16px]" />
            UCEED PORTAL
          </div>

          {/* JEE Button */}
          <div
            onClick={() => setActivePortal('JEE')}
            className={`px-6 py-2 text-[13px] font-semibold uppercase tracking-wide cursor-pointer min-w-[285px] justify-center flex items-center gap-2 ${
              activePortal === 'JEE'
                ? 'bg-[#0b5e5e] text-white'
                : 'bg-white border border-[#c4c4c4] text-black'
            }`}
          >
            <img src={searchIcon} alt="Search Icon" className="w-[16px] h-[16px]" />
            JEE PORTAL
          </div>
        </div>

        <div className="text-[16.5px] leading-[1.9] font-light text-[#222] max-w-[960px] mr-[610px]">
          Admission to this program will be through two channels – approximately half of the seats will be through the Joint Admission Counselling (JAC) of Delhi, which takes students through JEE (Main), and approximately half the seats will be filled through UCEED conducted by IIT Bombay. More information about the admission to all the B.Tech. programs at IIIT-Delhi will be made available on the admissions pages from time to time. More details regarding admissions are available here.
        </div>
      </div>

      {/* Programme Structure Section */}
      <div className="relative z-10 bg-white  py-20">
        <div className="relative z-10 w-full pb-4 pt-4 bg-white font-sans">
          <div className="w-full flex items-center mb-10 px-[0px]">
            <img src={programleftLine} alt="Left Line" className="h-auto w-[530px] mr-auto" />
            <h2 className="text-[45px] font-light text-black tracking-wide">
              <span className="text-[#0b5e5e] font-semibold">Programme</span> Structure
            </h2>
            <img src={programrightLine} alt="Right Line" className="h-auto w-[530px] ml-auto" />
          </div>
        </div>
        <br />

        <div className="relative flex items-start justify-between gap-0">
          <img src={leftverticalLine} alt="line" className="h-[380px] w-[180px]" />
          <div className="flex gap-x-8">
            {[
              {
                text: 'Ability to function effectively in teams to accomplish a common goal.',
                num: '01',
              },
              {
                text: 'Ability to design and implement efficient software solutions using suitable algorithms, data structures, and other computing techniques.',
                num: '02',
              },
              {
                text: 'Understanding of design principles and techniques and ability to apply these for developing solutions to human/societal problems.',
                num: '03',
              },
              {
                text: 'Ability to independently investigate a problem which can be solved by an Human Computer Interaction (HCI).',
                num: '04',
              },
              {
                text: 'Ability to effectively use suitable tools and platforms, as well as enhance them, to develop applications/ products.',
                num: '05',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="w-[210px] border border-[#9fc5c5] min-h-[430px] bg-white shadow-sm flex flex-col justify-between px-8 py-6"
              >
                <p className="text-[16px] text-gray-800 leading-[1.6] text-right">{item.text}</p>
                <p className="text-[#0b5e5e] text-[80px] font-light text-right">{item.num}</p>
              </div>
            ))}
          </div>
          <img src={leftverticalLine} alt="line" className="h-[380px] w-[180px]" />
        </div>
      </div>

      {/* View Courses Section */}
      <div className="relative z-10 bg-white px-[160px] py-10">
        <div className="flex gap-6 w-full">
          {[1, 2].map((item, idx) => (
            <div
              key={idx}
              className="border border-[#9fc5c5] px-12 py-10 w-1/2 relative overflow-hidden shadow-sm min-h-[320px] flex flex-col justify-center"
              style={{ backgroundColor: 'rgba(9, 105, 100, 0.1)' }}
            >
              <img src={gradientRing} alt="Quarter Arc" className="absolute right-[-60px] bottom-[-80px] w-[300px] opacity-80 pointer-events-none" />
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDirectory;

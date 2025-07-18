import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import background from '../../assets/backgr.svg';
import searchIcon from '../../assets/Search.svg'; // assuming this is your imported icon

const CourseDirectory = () => {
  const [courses, setCourses] = useState([]);
  const [activeTab, setActiveTab] = useState('design');

  useEffect(() => {
    setCourses([
      {
        id: 1,
        credits: '4 Credit course',
        title: 'Mobile and Middleware Systems',
        acronym: 'MMS',
        code: 'CSE566/DES5MMS',
        prerequisites: 'CSE535',
      },
      {
        id: 2,
        credits: '4 Credit course',
        title: 'Mobile and Middleware Systems',
        acronym: 'MMS',
        code: 'CSE566/DES5MMS',
        prerequisites: 'CSE535',
      },
      {
        id: 3,
        credits: '4 Credit course',
        title: 'Mobile and Middleware Systems',
        acronym: 'MMS',
        code: 'CSE566/DES5MMS',
        prerequisites: 'CSE535',
      },
      {
        id: 4,
        credits: '4 Credit course',
        title: 'Mobile and Middleware Systems',
        acronym: 'MMS',
        code: 'CSE566/DES5MMS',
        prerequisites: 'CSE535',
      },
      {
        id: 5,
        credits: '4 Credit course',
        title: 'Mobile and Middleware Systems',
        acronym: 'MMS',
        code: 'CSE566/DES5MMS',
        prerequisites: 'CSE535',
      },
      {
        id: 6,
        credits: '4 Credit course',
        title: 'Mobile and Middleware Systems',
        acronym: 'MMS',
        code: 'CSE566/DES5MMS',
        prerequisites: 'CSE535',
      },
    ]);
  }, []);

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
            <h2 className="text-[#084c4c] text-[26px] font-normal">B.Tech & PhD Options</h2>
            <h1 className="text-6xl font-light text-[48px] leading-tight">Course Directory</h1>
          </div>

          {/* Right */}
          <div className="col-span-6 flex items-center justify-end mt-5">
            <p className="font-light italic text-[18px] text-right leading-relaxed max-w-md">
              "Design tomorrow's information technology products, <br />
              services and systems which combine emerging<br /> technologies"
            </p>
          </div>
        </div>
      </div>

      {/* Search + Tabs */}
      <div className="relative z-10 px-[140px] pb-20 pt-10">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-black text-[20px] mb-2 pt-10">Search</p>
          <input
            type="text"
            placeholder="Enter Course Name or Code..."
            className="w-full border border-black outline-none py-2 px-4 mb-6 bg-transparent placeholder-black text-black"
          />

          {/* Tabs with toggle */}
          <div className="grid grid-cols-3 border border-black mb-10">
            <button
              onClick={() => setActiveTab('design')}
              className={`flex items-center justify-center px-4 py-2 border-r border-black font-medium ${
                activeTab === 'design' ? 'bg-[#084c4c] text-white' : 'text-black'
              }`}
            >
              <img src={searchIcon} alt="search" className="w-4 h-4 mr-2" />
              Design Courses
            </button>
            <button
              onClick={() => setActiveTab('cse')}
              className={`flex items-center justify-center px-4 py-2 border-r border-black font-medium ${
                activeTab === 'cse' ? 'bg-[#084c4c] text-white' : 'text-black'
              }`}
            >
              <img src={searchIcon} alt="search" className="w-4 h-4 mr-2" />
              CSE Courses
            </button>
            <button
              onClick={() => setActiveTab('ssh')}
              className={`flex items-center justify-center px-4 py-2 font-medium ${
                activeTab === 'ssh' ? 'bg-[#084c4c] text-white' : 'text-black'
              }`}
            >
              <img src={searchIcon} alt="search" className="w-4 h-4 mr-2" />
              SSH Courses
            </button>
          </div>
        </div>

        {/* Grid Section */}
        <div className="max-w-[1200px] mx-auto mt-10 border border-[#cdd5cd]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className={`p-5 bg-white border-t border-l border-[#cdd5cd] ${((idx + 1) % 3 === 0) ? 'border-r' : ''} ${
                  idx >= courses.length - 3 ? 'border-b' : ''
                }`}
              >
                <p className="text-sm text-[#198c88] font-medium mb-1">{course.credits}</p>
                <h3 className="text-black font-semibold text-[18px] mb-1 leading-tight">{course.title}</h3>
                <p className="text-sm text-gray-800 mb-1">
                  <span className="font-medium text-black">Acronym:</span> {course.acronym} &nbsp;&nbsp;
                  <span className="font-medium text-black">Code:</span> {course.code}
                </p>
                <p className="text-sm text-[#198c88] mb-3">
                  <span className="font-medium">Prerequisites:</span> {course.prerequisites}
                </p>
                <div className="flex justify-end">
                  <a href="#" className="text-[#198c88] text-sm font-semibold hover:underline flex items-center">
                    View Details <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDirectory;

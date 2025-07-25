import React from 'react';
import Navbar from '../../components/Navbar';
import sagarImage from '../../assets/sagar.svg';

const SagarGupta = () => {
  return (
    <div className="font-sans bg-white text-[#003B3F]">
      <Navbar />

      {/* Content container */}
      <div className="pt-[210px] px-[12.5vw] pb-10">
        {/* Go Back and Breadcrumb */}
        <div className="flex justify-between items-center mb-4 text-sm text-[#003B3F]">
          <div className="flex items-center cursor-pointer hover:underline">
            <span className="mr-2">←</span> Go Back
          </div>
          <p className="text-xs text-gray-500">
            OUR WORK / PORTFOLIOS / <span className="text-black font-medium">SAGAR GUPTA</span>
          </p>
        </div>

        {/* Main card */}
        <div className="border border-gray-300 rounded-sm p-6 flex justify-between items-start flex-wrap gap-6 bg-[#F9FDFD]">
          {/* Left Section (Text Info) */}
          <div className="flex flex-col gap-4 min-w-[280px] flex-1">
            {/* Top Row: Name | Graduating Year | Course */}
            <div className="flex flex-wrap gap-10">
              <div>
                <p className="text-gray-500 uppercase text-[10px]">Name</p>
                <p className=" text-[15px]">Sagar Gupta</p>
              </div>
              <div>
                <p className="text-gray-500 uppercase text-[10px]">Graduating Year</p>
                <p className="text-[14px] text-[#003B3F]">2027</p>
              </div>
              <div>
                <p className="text-gray-500 uppercase text-[10px]">Course</p>
                <p className="text-[14px] text-[#003B3F]">CS & Design</p>
              </div>
            </div>

            {/* Second Row: Email | Phone */}
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="text-gray-500 uppercase text-[10px]">Email</p>
                <p className="text-[14px] text-[#003B3F]">sagar23458@iiitd.ac.in</p>
              </div>
              <div>
                <p className="text-gray-500 uppercase text-[10px]">Phone</p>
                <p className="text-[14px] text-[#003B3F]">+91 9310121033</p>
              </div>
            </div>

            {/* LinkedIn Button */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center bg-[#005C5C] text-white px-4 py-2 rounded text-sm w-fit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                className="w-4 h-4 mr-2"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.2h.1c.5-1 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6V24h-4v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24H8V8z" />
              </svg>
              LINKEDIN
            </a>
          </div>

          {/* Right Section (Image) */}
          <div className="min-w-[120px] max-w-[140px]">
            <img
              src={sagarImage}
              alt="Sagar Gupta"
              className="w-[200px] h-auto border"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SagarGupta;

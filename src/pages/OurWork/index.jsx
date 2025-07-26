import React from 'react';
import Navbar from '../../components/Navbar';
import GridLines from '../../components/GridLines';
import Footer from '../../components/Footer';

const WorkAndProjects = () => {
  return (
    <div className="relative w-full font-sans overflow-x-hidden bg-white">
      {/* Navbar once for entire page */}
      <Navbar />

      {/* Grid lines and texture overlay */}
      <GridLines count={4} color="rgba(255,255,255,0.05)" />
      <div className="texture-overlay" />

      {/* Our Work Section */}
      <div className="bg-[#006666] text-white pt-20 px-6 pb-16 relative z-10">
        <div className="mt-32 mb-10 mx-[170px] flex justify-end">
          <div className="border-r-8 border-white pr-6 text-right">
            <h1 className="text-6xl font-semibold font-helvetica_now_display">
              Our Work
            </h1>
            <p className="text-lg mt-6 max-w-xl text-white/80 font-anybody">
              The program will prepare students to work in the IT industry as well as
              digital media industry like gaming, animation.
            </p>
          </div>
        </div>

        <div className="h-52 mx-[170px] mb-6 border-2 border-dashed border-white/40 rounded-lg flex items-center justify-center text-white/70 text-lg italic font-anybody">
          Cards section coming soon...
        </div>

        <div className="mt-6 max-w-xl font-anybody mx-[170px] text-left">
          <p className="text-base uppercase tracking-wide text-white/70">CIPD Lab</p>
          <h2 className="text-2xl font-semibold">
            Intelligent Product Development Research
          </h2>
          <p className="text-lg text-white/80 mt-3">
            The program will prepare students to work in the IT industry as well as
            digital media industry like gaming, animation.
          </p>
        </div>
      </div>

      {/* Student Projects Section */}
      <div className="bg-white text-black relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-20">
          {/* View Portfolios Section */}
          <div className="border border-[#D0E3DB] bg-[#EDF8F5] p-8 md:p-10 mb-20 w-[75vw] ml-[-4.2vw]">
            <h2 className="text-3xl font-semibold mb-4">View Student Portfolio’s</h2>
            <p className="text-sl text-gray-700 mb-6">
              The program will prepare students to work in the IT industry as well as digital media industry like gaming, animation, virtual/augmented reality, etc. The program will also allow students, who want to pursue higher studies, to take up higher studies in CS/IT or in Design.
            </p>
            <button className="bg-[#025C4C] text-white px-7 py-3 rounded hover:bg-[#014D3F] text-lg">
              View Portfolios →
            </button>
          </div>

          {/* Highlighted Projects Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-4">Highlighted Projects</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-6xl">
              The program will prepare students to work in the IT industry as well as digital media industry like gaming, animation, virtual/augmented reality, etc. The program will also allow students.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="p-0 flex flex-col justify-between"
                >
                  <div className="bg-gray-300 w-full h-52 mb-5" /> {/* Image Placeholder */}

                  <div className="mb-4">
                    <p className="text-lg text-gray-600">Sagar Gupta</p>
                    <h3 className="text-xl text-[#025C4C] font-semibold mb-2">
                      Project Title #01
                    </h3>
                    <p className="text-sm text-gray-700">
                      The program will prepare students to work in the IT industry as well as digital media industry like gaming, animation, virtual/augmented reality, etc. The program will also allow students.
                    </p>
                  </div>

                  <button className="w-full border border-[#025C4C] text-lg py-2.5 rounded hover:bg-[#025C4C] hover:text-white transition">
                    View Project →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Optional footer */}
      <Footer />
    </div>
  );
};

export default WorkAndProjects;
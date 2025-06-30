import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import publicationsBanner from '../../assets/publications-banner.svg';

const App = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get('http://localhost:1337/api/students?populate=*');
        const studentData = res.data.data.map((item) => ({
          id: item.id,
          name: item.name,
          bio: item.bio,
          imageUrl: `http://localhost:1337${item.profilePicture?.formats?.medium?.url || item.profilePicture?.url || ''}`,
        }));
        setStudents(studentData);
      } catch (err) {
        console.error('Failed to fetch student data:', err);
      }
    };

    fetchStudents();
  }, [activeTab]);

  const totalColumns = 3;
  const totalRows = Math.ceil(students.length / totalColumns);

  return (
    <div className="relative min-h-screen font-sans bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <img
        src={publicationsBanner}
        alt="Publications Banner"
        className="-mt-[64px] w-full object-cover"
      />

      {/* Full Height Vertical Lines */}
      <div className="fixed inset-0 pointer-events-none z-5">
        <div className="max-w-screen-xl mx-auto h-full relative">
          <div className="absolute top-0 bottom-0 left-0 w-[0.5px] bg-gray-400" />
          <div className="absolute top-0 bottom-0 right-0 w-[0.5px] bg-gray-400" />
          <div className="absolute top-0 bottom-0 left-1/3 w-[0.5px] bg-gray-400 lg:block hidden" />
          <div className="absolute top-0 bottom-0 left-2/3 w-[0.5px] bg-gray-400 lg:block hidden" />
          <div className="absolute top-0 bottom-0 left-1/2 w-[0.5px] bg-gray-400 sm:block lg:hidden hidden" />
        </div>
      </div>

      {/* Content Section */}
      <div className="relative max-w-screen-xl mx-auto pt-12 pb-12">
        {/* Tabs */}
        <div className="flex border border-gray-400 w-fit mb-10">
          <button
            onClick={() => setActiveTab('current')}
            className={`min-w-[427px] px-6 py-1 text-sm font-medium transition-all duration-200 border-r border-gray-400
              ${activeTab === 'current'
                ? 'bg-[#096964] text-white'
                : 'bg-white text-black hover:bg-gray-100'}`}
          >
            CURRENT
          </button>
          <button
            onClick={() => setActiveTab('archive')}
            className={`min-w-[425px] px-6 py-1 text-sm font-medium transition-all duration-200
              ${activeTab === 'archive'
                ? 'bg-[#096964] text-white'
                : 'bg-white text-black hover:bg-gray-100'}`}
          >
            ARCHIVE
          </button>
        </div>

        {/* Student Grid */}
        <div className="relative border border-gray-400">
          {/* Grid lines inside */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute top-0 bottom-0 left-1/3 w-[0.5px] bg-gray-400 lg:block hidden" />
            <div className="absolute top-0 bottom-0 left-2/3 w-[0.5px] bg-gray-400 lg:block hidden" />
            <div className="absolute top-0 bottom-0 left-1/2 w-[0.5px] bg-gray-400 sm:block lg:hidden hidden" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {students.map((student, index) => {
              const col = index % totalColumns;
              const row = Math.floor(index / totalColumns);
              const isLastRow = row === totalRows - 1;

              return (
                <div
                  key={student.id}
                  className={`flex border border-gray-300 ${
                    !isLastRow ? 'border-b' : ''
                  }`}
                  style={{
                    width: '100%',
                    minHeight: '200px',
                    borderRight: col !== totalColumns - 1 ? '0.5px solid #ccc' : undefined,
                  }}
                >
                  {/* Image Section */}
                  <div className="w-[40%] h-full p-4 flex items-center justify-center">
                    <img
                      src={student.imageUrl}
                      alt={student.name}
                      className="h-[160px] w-auto object-contain"
                    />
                  </div>

                  {/* Text Section */}
                  <div className="flex flex-col justify-center w-[60%] p-4">
                    <div>
                      <h3 className="font-bold text-lg text-black leading-tight">
                        {student.name?.split(' ')[0]} <br />
                        {student.name?.split(' ').slice(1).join(' ')}
                      </h3>
                      <p className="mt-2 text-gray-500 text-[16px] leading-snug">
                        {student.bio || 'We are a collective of diverse thinkers reimagining how.'}
                      </p>
                    </div>
                    <div className="mt-4">
                      <a
                        href="#"
                        className="text-black text-md font-semibold hover:underline"
                      >
                        VIEW ALL →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import axios from 'axios';

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

  return (
    <div className="min-h-screen bg-[#ffffff] font-sans">
      <Navbar />

      <div className="max-w-screen-xl mx-auto px-6 mt-20">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Publications</h1>
          <p className="text-gray-700 text-lg max-w-4xl">
            We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-10">
          <button
            onClick={() => setActiveTab('current')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border
              ${activeTab === 'current'
                ? 'bg-[#096964] text-white border-[#096964]'
                : 'bg-white text-black border-gray-300 hover:bg-gray-100'}`}
          >
            CURRENT
          </button>
          <button
            onClick={() => setActiveTab('archive')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border
              ${activeTab === 'archive'
                ? 'bg-[#096964] text-white border-[#096964]'
                : 'bg-white text-black border-gray-300 hover:bg-gray-100'}`}
          >
            ARCHIVE
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x divide-y border border-gray-200">
          {students.map((student, index) => (
            <div
              key={student.id}
              className={`flex p-4 gap-4 items-start bg-[#ffffff]`}
              style={{
                borderTop: index < 3 ? 'none' : '1px solid #E5E7EB',
                borderLeft: index % 3 === 0 ? 'none' : '1px solid #E5E7EB',
              }}
            >
              <img
                src={student.imageUrl}
                alt={student.name}
                className="w-28 h-28 object-cover"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-md text-black"> {student.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {student.bio || "We are a collective of diverse thinkers reimagining how."}
                  </p>
                </div>
                <a
                  href="#"
                  className="mt-3 text-black text-sm font-medium hover:underline"
                >
                  VIEW ALL →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

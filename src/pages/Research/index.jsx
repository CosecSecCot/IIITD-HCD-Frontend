import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import publicationsBanner from '../../assets/banner-main-back.png';
import LabLogo from '../../assets/research-lab-logo.svg'; // dummy logo, replace path as needed

// 7 dummy labs
const dummyLabs = [
  {
    id: 1,
    title: 'Accessibility and Inclusive Design Lab',
    short: 'We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful.',
    lead: 'Dr. Richa Gupta, A - 418',
    logo: LabLogo,
    full: 'Accessibility and Inclusive Design Lab aims at enabling independent living and empowering persons with special needs by making the world more inclusive and accessible. It attempts to address the challenges that hamper independent and easy access to educational resources as well as information that facilitates navigation (both indoor and outdoor). This lab leverage the principles of human-centred design to create convenient and pleasant day-to-day experiences while solving problems particularly for persons with special needs.',
    website: '#',
  },
  {
    id: 2,
    title: 'Creative Interfaces Lab',
    short: 'We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful.',
    lead: 'Dr. Anmol Srivastava, A – 416',
    logo: LabLogo,
    full: 'Creative Interfaces Lab aims at making technology interaction fun and intuitive for all. The lab investigates new interaction paradigms, prototyping methods, and novel interface technologies for a diverse range of users.',
    website: '#',
  },
  {
    id: 3,
    title: 'Design for Social Innovation Lab',
    short: 'Fostering innovation for social good using design thinking approaches and participatory research.',
    lead: 'Dr. Priya Sharma, A – 417',
    logo: LabLogo,
    full: 'Design for Social Innovation Lab focuses on leveraging design thinking for social impact projects, working with NGOs, governments, and grassroots innovators.',
    website: '#',
  },
  {
    id: 4,
    title: 'Human Factors and Ergonomics Lab',
    short: 'Optimizing environments, products, and systems to suit human abilities and limitations.',
    lead: 'Dr. S. Iyer, A – 420',
    logo: LabLogo,
    full: 'The Human Factors and Ergonomics Lab explores how design can reduce risk and enhance usability, comfort, and safety across domains from healthcare to transport.',
    website: '#',
  },
  {
    id: 5,
    title: 'Emotional AI Lab',
    short: 'Bridging affective computing and user-centered design for empathetic technology.',
    lead: 'Dr. Sunil Reddy, A – 422',
    logo: LabLogo,
    full: 'The Emotional AI Lab pioneers work at the intersection of affective computing, psychology, and design, developing technologies that respond to emotional needs.',
    website: '#',
  },
  {
    id: 6,
    title: 'Playful Learning Lab',
    short: 'Rethinking education and learning environments through play, creativity, and new media.',
    lead: 'Dr. Vandana Singh, A – 424',
    logo: LabLogo,
    full: 'The Playful Learning Lab invents playful, interactive learning environments and experiences, blending pedagogy, digital media, and fun.',
    website: '#',
  },
  {
    id: 7,
    title: 'Digital Humanities Lab',
    short: 'Integrating technology and humanities for richer, more inclusive research and learning.',
    lead: 'Dr. Kiran Pandey, A – 426',
    logo: LabLogo,
    full: 'Digital Humanities Lab investigates digital methods for the study and dissemination of culture, history, and literature, focusing on inclusivity and accessibility.',
    website: '#',
  },
];

const App = () => {
  // useEffect(() => {
  //   const fetchStudents = async () => {
  //     try {
  //       const res = await axios.get('http://localhost:1337/api/students?populate=*');
  //       const studentData = res.data.data.map((item) => ({
  //         id: item.id,
  //         name: item.name,
  //         bio: item.bio,
  //         imageUrl: `http://localhost:1337${item.profilePicture?.formats?.medium?.url || item.profilePicture?.url || ''}`,
  //       }));
  //       setStudents(studentData);
  //     } catch (err) {
  //       console.error('Failed to fetch student data:', err);
  //     }
  //   };

  //   fetchStudents();
  // }, [activeTab]);
  const [expandedId, setExpandedId] = useState(null);
  const [activeTab, setActiveTab] = useState('current');
  const totalColumns = 3;
  const labsToShow = dummyLabs; // Change as needed for archive logic

  return (
    <div className="relative min-h-screen font-myfont bg-[#f7f9fa]">
      <Navbar />
      <div className="relative w-full">
        <img
          src={publicationsBanner}
          alt="Labs Banner"
          className="w-full object-cover"
        />
        <div className="absolute top-[40%] left-3/4 z-10">
          <span className="text-white font-anybody text-[1vw] font-normal" style={{ letterSpacing: 1 }}>
            <span className="opacity-60">RESEARCH</span> <span className="opacity-60">/</span> <span style={{ color: '#FFF' }}>LABS</span>
          </span>
        </div>
        <h1
          className="absolute bottom-10 left-[30%] transform -translate-x-1/2 text-[6vw] lg:text-[4vw] leading-normal font-normal font-anybody text-white"
          style={{ fontStyle: 'normal' }}
        >
          RESEARCH LABS
        </h1>
      </div>

      <div className="fixed inset-0 pointer-events-none z-5">
        <div className="max-w-screen-xl mx-auto h-full relative">
          <div className="absolute top-0 bottom-0 left-0 w-[0.25px] bg-neutral-500/30" />
          <div className="absolute top-0 bottom-0 right-0 w-[0.25px] bg-neutral-500/30" />
          <div className="absolute top-0 bottom-0 left-1/3 w-[0.25px] bg-neutral-500/30 lg:block hidden" />
          <div className="absolute top-0 bottom-0 left-2/3 w-[0.25px] bg-neutral-500/30 lg:block hidden" />
          <div className="absolute top-0 bottom-0 left-1/2 w-[0.25px] bg-neutral-500/30 sm:block lg:hidden hidden" />
        </div>
      </div>

      <div className="relative max-w-screen-xl mx-auto pt-12 pb-12">
        {/* Tabs */}
        <div className="flex border border-neutral-400 w-fit mb-10">
          <button
            onClick={() => setActiveTab('current')}
            className={`min-w-[180px] sm:min-w-[270px] lg:min-w-[427px] px-6 py-2 text-base font-medium transition-all duration-200 border-r border-neutral-400
              ${activeTab === 'current'
                ? 'bg-[#096964] text-white'
                : 'bg-white text-black hover:bg-gray-100'}`}
          >
            CURRENT
          </button>
          <button
            onClick={() => setActiveTab('archive')}
            className={`min-w-[180px] sm:min-w-[270px] lg:min-w-[425px] px-6 py-2 text-base font-medium transition-all duration-200
              ${activeTab === 'archive'
                ? 'bg-[#096964] text-white'
                : 'bg-white text-black hover:bg-gray-100'}`}
          >
            ARCHIVE
          </button>
        </div>
        <div className="relative border border-neutral-500/30 bg-white">
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute top-0 bottom-0 left-1/3 w-[0.25px] bg-neutral-500/30 lg:block hidden" />
            <div className="absolute top-0 bottom-0 left-2/3 w-[0.25px] bg-neutral-500/30 lg:block hidden" />
            <div className="absolute top-0 bottom-0 left-1/2 w-[0.25px] bg-neutral-500/30 sm:block lg:hidden hidden" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-0">
            {labsToShow.map((lab, idx) => {
              const isExpanded = expandedId === lab.id;
              if (isExpanded) {
                return (
                  <div
                    key={lab.id}
                    className="lg:col-span-2 lg:row-span-2 bg-[#597494] text-white p-12 transition-all duration-300 ease-in-out flex flex-col relative"
                    style={{
                      minHeight: '620px',
                      gridColumn: 'span 2 / span 2',
                      gridRow: 'span 2 / span 2',
                    }}
                  >
                    <div className="flex flex-col h-full justify-between">
                      <div className="flex items-start gap-7 mb-4">
                        <img src={lab.logo} alt={lab.title + ' logo'} className="h-16 w-auto mt-2" />
                        <div className="flex flex-col">
                          <div className="text-2xl lg:text-3xl font-anybody font-bold mb-1 leading-tight">
                            {lab.title}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          color: '#FFF',
                          fontFamily: 'Helvetica Now Display',
                          fontSize: '26px',
                          fontStyle: 'normal',
                          fontWeight: 400,
                          lineHeight: '36px',
                          opacity: 0.8,
                          marginBottom: '2.5rem',
                        }}
                      >
                        {lab.full}
                      </div>
                      <div className="text-lg font-anybody font-semibold mb-6">{lab.lead}</div>
                      <div className="flex flex-row items-center gap-10 mt-auto">
                        <a href={lab.website} target="_blank" rel="noopener noreferrer"
                          className="border border-white text-white px-8 py-3 font-anybody text-lg flex gap-3 items-center hover:bg-white hover:text-[#597494] transition">
                          VISIT WEBSITE
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.25 6.75L18.25 12M18.25 12L13.25 17.25M18.25 12H5.75" /></svg>
                        </a>
                        <button
                          onClick={() => setExpandedId(null)}
                          className="ml-auto text-white text-base flex items-center gap-1 hover:underline font-anybody"
                        >
                          CLOSE <span className="text-xl">✕</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={lab.id}
                  className={`relative bg-white flex flex-col p-10 border-b border-neutral-300 ${idx % totalColumns < totalColumns - 1 ? 'lg:border-r' : ''} transition-colors duration-300 ease-in-out group`}
                  style={{
                    '--tw-bg-opacity': 1,
                    backgroundColor: `var(--lab-hover-${lab.id}, #fff)`
                  }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = lab.hover}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#fff'}
                >
                  <div className="flex items-start gap-6">
                    <img src={lab.logo} alt={lab.title + ' logo'} className="h-14 w-auto mt-1" />
                    <div>
                      <div className="font-anybody font-semibold text-xl lg:text-2xl leading-tight mb-1">{lab.title}</div>
                      <div className="text-gray-700 text-base font-normal mb-3" style={{ fontFamily: 'Helvetica Now Display, sans-serif' }}>{lab.short}</div>
                      <div className="text-gray-700 text-base font-semibold mb-1">{lab.lead}</div>
                    </div>
                  </div>
                  <div className="mt-8 text-right">
                    <button
                      onClick={() => setExpandedId(lab.id)}
                      className="font-anybody text-lg font-semibold hover:underline flex items-center gap-2 text-black"
                    >
                      VIEW DETAILS
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.25 6.75L18.25 12M18.25 12L13.25 17.25M18.25 12H5.75" /></svg>
                    </button>
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

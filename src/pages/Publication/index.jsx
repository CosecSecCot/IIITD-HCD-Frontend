import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import publicationsBanner from '../../assets/banner-main-back.png';
import ArrowRight from '../../assets/Arrow - Right.svg';
import prof1 from '../../assets/project-3.png';
import prof2 from '../../assets/project-3.png';
import prof3 from '../../assets/project-3.png';
import prof4 from '../../assets/project-3.png';
import prof5 from '../../assets/project-3.png';
import prof6 from '../../assets/project-3.png';

const publications = [
  // 2025
  { id: 1, year: 2025, name: 'Dr. Anmol Srivastava', avatar: prof1, desc: 'We are a collective of diverse thinkers reimagining how.', details: { title: 'Metaverse Education for Global South', abstract: 'The recent adoption of the Metaverse in various sectors indicates its potential for digital transformation. Technologies like XR, where X = Augmented/ Virtual/ Mixed Reality, will be its key enablers and can be powerful tools for developing nations’ digital educational transformation. These developing nations are often categorized under the Global South. This workshop presents a first step toward the socio-technical Human-Computer Interaction (HCI) aspects of the Metaverse to understand its impact on education in the Global South. The socio-technical approach helps cover human, social, and organizational factors, leading to more acceptable systems for end users and stakeholders. With the Metaverse, students, and teachers can log in via different immersive devices and experience different virtual environments fabricated to their individual needs, learning, and teaching styles. It will open up possibilities to explore new situations and access facilities that might be impossible due to physical world constraints. Two key concepts will be covered – (i) A socio-technical HCI approach to the Metaverse and (ii) an Interaction Design perspective on Avatar representation and understanding of human work in the Metaverse. This workshop will initiate dialogs on questions: (a) What are the socio-technical issues of the Metaverse for education in the global south? (b) Are there any cross-cultural usability and interaction design concerns regarding digital avatar representation? (c) What considerations will be required for educational Metaverse human-work interaction design?', link: 'https://doi.org/10.1007/978-3-031-42293-5_93' } },
  { id: 2, year: 2025, name: 'Dr. Anmol Srivastava', avatar: prof2, desc: 'We are a collective of diverse thinkers reimagining how.', details: { title: 'Metaverse Education for Global South', abstract: 'The recent adoption of the Metaverse in various sectors indicates its potential for digital transformation. Technologies like XR, where X = Augmented/ Virtual/ Mixed Reality, will be its key enablers and can be powerful tools for developing nations’ digital educational transformation. These developing nations are often categorized under the Global South. This workshop presents a first step toward the socio-technical Human-Computer Interaction (HCI) aspects of the Metaverse to understand its impact on education in the Global South. The socio-technical approach helps cover human, social, and organizational factors, leading to more acceptable systems for end users and stakeholders. With the Metaverse, students, and teachers can log in via different immersive devices and experience different virtual environments fabricated to their individual needs, learning, and teaching styles. It will open up possibilities to explore new situations and access facilities that might be impossible due to physical world constraints. Two key concepts will be covered – (i) A socio-technical HCI approach to the Metaverse and (ii) an Interaction Design perspective on Avatar representation and understanding of human work in the Metaverse. This workshop will initiate dialogs on questions: (a) What are the socio-technical issues of the Metaverse for education in the global south? (b) Are there any cross-cultural usability and interaction design concerns regarding digital avatar representation? (c) What considerations will be required for educational Metaverse human-work interaction design?', link: 'https://doi.org/10.1007/978-3-031-42293-5_93' } },
  { id: 3, year: 2025, name: 'Dr. Anmol Srivastava', avatar: prof3, desc: 'We are a collective of diverse thinkers reimagining how.', details: { title: 'Metaverse Education for Global South', abstract: 'The recent adoption of the Metaverse in various sectors indicates its potential for digital transformation. Technologies like XR, where X = Augmented/ Virtual/ Mixed Reality, will be its key enablers and can be powerful tools for developing nations’ digital educational transformation. These developing nations are often categorized under the Global South. This workshop presents a first step toward the socio-technical Human-Computer Interaction (HCI) aspects of the Metaverse to understand its impact on education in the Global South. The socio-technical approach helps cover human, social, and organizational factors, leading to more acceptable systems for end users and stakeholders. With the Metaverse, students, and teachers can log in via different immersive devices and experience different virtual environments fabricated to their individual needs, learning, and teaching styles. It will open up possibilities to explore new situations and access facilities that might be impossible due to physical world constraints. Two key concepts will be covered – (i) A socio-technical HCI approach to the Metaverse and (ii) an Interaction Design perspective on Avatar representation and understanding of human work in the Metaverse. This workshop will initiate dialogs on questions: (a) What are the socio-technical issues of the Metaverse for education in the global south? (b) Are there any cross-cultural usability and interaction design concerns regarding digital avatar representation? (c) What considerations will be required for educational Metaverse human-work interaction design?', link: 'https://doi.org/10.1007/978-3-031-42293-5_93' } },
  { id: 4, year: 2025, name: 'Dr. Anmol Srivastava', avatar: prof4, desc: 'We are a collective of diverse thinkers reimagining how.', details: { title: 'Metaverse Education for Global South', abstract: 'The recent adoption of the Metaverse in various sectors indicates its potential for digital transformation. Technologies like XR, where X = Augmented/ Virtual/ Mixed Reality, will be its key enablers and can be powerful tools for developing nations’ digital educational transformation. These developing nations are often categorized under the Global South. This workshop presents a first step toward the socio-technical Human-Computer Interaction (HCI) aspects of the Metaverse to understand its impact on education in the Global South. The socio-technical approach helps cover human, social, and organizational factors, leading to more acceptable systems for end users and stakeholders. With the Metaverse, students, and teachers can log in via different immersive devices and experience different virtual environments fabricated to their individual needs, learning, and teaching styles. It will open up possibilities to explore new situations and access facilities that might be impossible due to physical world constraints. Two key concepts will be covered – (i) A socio-technical HCI approach to the Metaverse and (ii) an Interaction Design perspective on Avatar representation and understanding of human work in the Metaverse. This workshop will initiate dialogs on questions: (a) What are the socio-technical issues of the Metaverse for education in the global south? (b) Are there any cross-cultural usability and interaction design concerns regarding digital avatar representation? (c) What considerations will be required for educational Metaverse human-work interaction design?', link: 'https://doi.org/10.1007/978-3-031-42293-5_93' } },
  { id: 5, year: 2025, name: 'Dr. Anmol Srivastava', avatar: prof5, desc: 'We are a collective of diverse thinkers reimagining how.', details: { title: 'Metaverse Education for Global South', abstract: 'The recent adoption of the Metaverse in various sectors indicates its potential for digital transformation. Technologies like XR, where X = Augmented/ Virtual/ Mixed Reality, will be its key enablers and can be powerful tools for developing nations’ digital educational transformation. These developing nations are often categorized under the Global South. This workshop presents a first step toward the socio-technical Human-Computer Interaction (HCI) aspects of the Metaverse to understand its impact on education in the Global South. The socio-technical approach helps cover human, social, and organizational factors, leading to more acceptable systems for end users and stakeholders. With the Metaverse, students, and teachers can log in via different immersive devices and experience different virtual environments fabricated to their individual needs, learning, and teaching styles. It will open up possibilities to explore new situations and access facilities that might be impossible due to physical world constraints. Two key concepts will be covered – (i) A socio-technical HCI approach to the Metaverse and (ii) an Interaction Design perspective on Avatar representation and understanding of human work in the Metaverse. This workshop will initiate dialogs on questions: (a) What are the socio-technical issues of the Metaverse for education in the global south? (b) Are there any cross-cultural usability and interaction design concerns regarding digital avatar representation? (c) What considerations will be required for educational Metaverse human-work interaction design?', link: 'https://doi.org/10.1007/978-3-031-42293-5_93' } },
  { id: 6, year: 2025, name: 'Dr. Anmol Srivastava', avatar: prof6, desc: 'We are a collective of diverse thinkers reimagining how.', details: { title: 'Metaverse Education for Global South', abstract: 'The recent adoption of the Metaverse in various sectors indicates its potential for digital transformation. Technologies like XR, where X = Augmented/ Virtual/ Mixed Reality, will be its key enablers and can be powerful tools for developing nations’ digital educational transformation. These developing nations are often categorized under the Global South. This workshop presents a first step toward the socio-technical Human-Computer Interaction (HCI) aspects of the Metaverse to understand its impact on education in the Global South. The socio-technical approach helps cover human, social, and organizational factors, leading to more acceptable systems for end users and stakeholders. With the Metaverse, students, and teachers can log in via different immersive devices and experience different virtual environments fabricated to their individual needs, learning, and teaching styles. It will open up possibilities to explore new situations and access facilities that might be impossible due to physical world constraints. Two key concepts will be covered – (i) A socio-technical HCI approach to the Metaverse and (ii) an Interaction Design perspective on Avatar representation and understanding of human work in the Metaverse. This workshop will initiate dialogs on questions: (a) What are the socio-technical issues of the Metaverse for education in the global south? (b) Are there any cross-cultural usability and interaction design concerns regarding digital avatar representation? (c) What considerations will be required for educational Metaverse human-work interaction design?', link: 'https://doi.org/10.1007/978-3-031-42293-5_93' } },
  // 2024
  { id: 7, year: 2024, name: 'Dr. Anmol Srivastava', avatar: prof1, desc: 'We are a collective of diverse thinkers reimagining how.', details: { title: 'Metaverse Education for Global South', abstract: 'The recent adoption of the Metaverse in various sectors indicates its potential for digital transformation. Technologies like XR, where X = Augmented/ Virtual/ Mixed Reality, will be its key enablers and can be powerful tools for developing nations’ digital educational transformation. These developing nations are often categorized under the Global South. This workshop presents a first step toward the socio-technical Human-Computer Interaction (HCI) aspects of the Metaverse to understand its impact on education in the Global South. The socio-technical approach helps cover human, social, and organizational factors, leading to more acceptable systems for end users and stakeholders. With the Metaverse, students, and teachers can log in via different immersive devices and experience different virtual environments fabricated to their individual needs, learning, and teaching styles. It will open up possibilities to explore new situations and access facilities that might be impossible due to physical world constraints. Two key concepts will be covered – (i) A socio-technical HCI approach to the Metaverse and (ii) an Interaction Design perspective on Avatar representation and understanding of human work in the Metaverse. This workshop will initiate dialogs on questions: (a) What are the socio-technical issues of the Metaverse for education in the global south? (b) Are there any cross-cultural usability and interaction design concerns regarding digital avatar representation? (c) What considerations will be required for educational Metaverse human-work interaction design?', link: 'https://doi.org/10.1007/978-3-031-42293-5_93' } },
  { id: 8, year: 2024, name: 'Dr. Anmol Srivastava', avatar: prof2, desc: 'We are a collective of diverse thinkers reimagining how.', details: { title: 'Metaverse Education for Global South', abstract: 'The recent adoption of the Metaverse in various sectors indicates its potential for digital transformation. Technologies like XR, where X = Augmented/ Virtual/ Mixed Reality, will be its key enablers and can be powerful tools for developing nations’ digital educational transformation. These developing nations are often categorized under the Global South. This workshop presents a first step toward the socio-technical Human-Computer Interaction (HCI) aspects of the Metaverse to understand its impact on education in the Global South. The socio-technical approach helps cover human, social, and organizational factors, leading to more acceptable systems for end users and stakeholders. With the Metaverse, students, and teachers can log in via different immersive devices and experience different virtual environments fabricated to their individual needs, learning, and teaching styles. It will open up possibilities to explore new situations and access facilities that might be impossible due to physical world constraints. Two key concepts will be covered – (i) A socio-technical HCI approach to the Metaverse and (ii) an Interaction Design perspective on Avatar representation and understanding of human work in the Metaverse. This workshop will initiate dialogs on questions: (a) What are the socio-technical issues of the Metaverse for education in the global south? (b) Are there any cross-cultural usability and interaction design concerns regarding digital avatar representation? (c) What considerations will be required for educational Metaverse human-work interaction design?', link: 'https://doi.org/10.1007/978-3-031-42293-5_93' } },
  { id: 9, year: 2024, name: 'Dr. Anmol Srivastava', avatar: prof3, desc: 'We are a collective of diverse thinkers reimagining how.', details: { title: 'Metaverse Education for Global South', abstract: 'The recent adoption of the Metaverse in various sectors indicates its potential for digital transformation. Technologies like XR, where X = Augmented/ Virtual/ Mixed Reality, will be its key enablers and can be powerful tools for developing nations’ digital educational transformation. These developing nations are often categorized under the Global South. This workshop presents a first step toward the socio-technical Human-Computer Interaction (HCI) aspects of the Metaverse to understand its impact on education in the Global South. The socio-technical approach helps cover human, social, and organizational factors, leading to more acceptable systems for end users and stakeholders. With the Metaverse, students, and teachers can log in via different immersive devices and experience different virtual environments fabricated to their individual needs, learning, and teaching styles. It will open up possibilities to explore new situations and access facilities that might be impossible due to physical world constraints. Two key concepts will be covered – (i) A socio-technical HCI approach to the Metaverse and (ii) an Interaction Design perspective on Avatar representation and understanding of human work in the Metaverse. This workshop will initiate dialogs on questions: (a) What are the socio-technical issues of the Metaverse for education in the global south? (b) Are there any cross-cultural usability and interaction design concerns regarding digital avatar representation? (c) What considerations will be required for educational Metaverse human-work interaction design?', link: 'https://doi.org/10.1007/978-3-031-42293-5_93' } },
  { id: 10, year: 2024, name: 'Dr. Anmol Srivastava', avatar: prof4, desc: 'We are a collective of diverse thinkers reimagining how.', details: { title: 'Metaverse Education for Global South', abstract: 'The recent adoption of the Metaverse in various sectors indicates its potential for digital transformation. Technologies like XR, where X = Augmented/ Virtual/ Mixed Reality, will be its key enablers and can be powerful tools for developing nations’ digital educational transformation. These developing nations are often categorized under the Global South. This workshop presents a first step toward the socio-technical Human-Computer Interaction (HCI) aspects of the Metaverse to understand its impact on education in the Global South. The socio-technical approach helps cover human, social, and organizational factors, leading to more acceptable systems for end users and stakeholders. With the Metaverse, students, and teachers can log in via different immersive devices and experience different virtual environments fabricated to their individual needs, learning, and teaching styles. It will open up possibilities to explore new situations and access facilities that might be impossible due to physical world constraints. Two key concepts will be covered – (i) A socio-technical HCI approach to the Metaverse and (ii) an Interaction Design perspective on Avatar representation and understanding of human work in the Metaverse. This workshop will initiate dialogs on questions: (a) What are the socio-technical issues of the Metaverse for education in the global south? (b) Are there any cross-cultural usability and interaction design concerns regarding digital avatar representation? (c) What considerations will be required for educational Metaverse human-work interaction design?', link: 'https://doi.org/10.1007/978-3-031-42293-5_93' } },
  { id: 11, year: 2024, name: 'Dr. Anmol Srivastava', avatar: prof5, desc: 'We are a collective of diverse thinkers reimagining how.', details: { title: 'Metaverse Education for Global South', abstract: 'The recent adoption of the Metaverse in various sectors indicates its potential for digital transformation. Technologies like XR, where X = Augmented/ Virtual/ Mixed Reality, will be its key enablers and can be powerful tools for developing nations’ digital educational transformation. These developing nations are often categorized under the Global South. This workshop presents a first step toward the socio-technical Human-Computer Interaction (HCI) aspects of the Metaverse to understand its impact on education in the Global South. The socio-technical approach helps cover human, social, and organizational factors, leading to more acceptable systems for end users and stakeholders. With the Metaverse, students, and teachers can log in via different immersive devices and experience different virtual environments fabricated to their individual needs, learning, and teaching styles. It will open up possibilities to explore new situations and access facilities that might be impossible due to physical world constraints. Two key concepts will be covered – (i) A socio-technical HCI approach to the Metaverse and (ii) an Interaction Design perspective on Avatar representation and understanding of human work in the Metaverse. This workshop will initiate dialogs on questions: (a) What are the socio-technical issues of the Metaverse for education in the global south? (b) Are there any cross-cultural usability and interaction design concerns regarding digital avatar representation? (c) What considerations will be required for educational Metaverse human-work interaction design?', link: 'https://doi.org/10.1007/978-3-031-42293-5_93' } },
  { id: 12, year: 2024, name: 'Dr. Anmol Srivastava', avatar: prof5, desc: 'We are a collective of diverse thinkers reimagining how.', details: { title: 'Metaverse Education for Global South', abstract: 'The recent adoption of the Metaverse in various sectors indicates its potential for digital transformation. Technologies like XR, where X = Augmented/ Virtual/ Mixed Reality, will be its key enablers and can be powerful tools for developing nations’ digital educational transformation. These developing nations are often categorized under the Global South. This workshop presents a first step toward the socio-technical Human-Computer Interaction (HCI) aspects of the Metaverse to understand its impact on education in the Global South. The socio-technical approach helps cover human, social, and organizational factors, leading to more acceptable systems for end users and stakeholders. With the Metaverse, students, and teachers can log in via different immersive devices and experience different virtual environments fabricated to their individual needs, learning, and teaching styles. It will open up possibilities to explore new situations and access facilities that might be impossible due to physical world constraints. Two key concepts will be covered – (i) A socio-technical HCI approach to the Metaverse and (ii) an Interaction Design perspective on Avatar representation and understanding of human work in the Metaverse. This workshop will initiate dialogs on questions: (a) What are the socio-technical issues of the Metaverse for education in the global south? (b) Are there any cross-cultural usability and interaction design concerns regarding digital avatar representation? (c) What considerations will be required for educational Metaverse human-work interaction design?', link: 'https://doi.org/10.1007/978-3-031-42293-5_93' } },
];

const years = [...new Set(publications.map(pub => pub.year))].sort((a, b) => b - a);

// Dropdown component
const Dropdown = ({ label, options, selected, setSelected }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-full h-full"> {/* Fills grid cell just like a card */}
      <button
        className="w-full h-16 px-6 py-4 border border-neutral-300 bg-white text-black flex items-center justify-between font-semibold text-base tracking-wide uppercase hover:bg-neutral-100 focus:outline-none"
        onClick={() => setOpen(o => !o)}
        type="button"
      >
        {selected || label}
        <svg className={`w-4 h-4 ml-2 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <ul className="absolute left-0 mt-1 w-full bg-white border border-neutral-300 shadow-lg z-20">
          {options.map(option => (
            <li
              key={option}
              className={`px-6 py-3 hover:bg-[#096964] hover:text-white cursor-pointer ${selected===option?'bg-neutral-100':''}`}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const PublicationPage = () => {
    /*
    const [publications, setPublications] = useState([]);

    useEffect(() => {
    const fetchPublications = async () => {
        try {
        const res = await axios.get('http://localhost:1337/api/publications?populate=*');
        // Map data as per your backend structure:
        const data = res.data.data.map(item => ({
            id: item.id,
            year: item.year, // Adjust if different
            name: item.author_name, // Adjust property as per backend
            avatar: item.avatar_url, // Adjust property as per backend
            desc: item.description, // Adjust property as per backend
            details: {
            title: item.title,
            abstract: item.abstract,
            link: item.link,
            },
        }));
        setPublications(data);
        } catch (err) {
        console.error('Failed to fetch publication data:', err);
        }
    };

    fetchPublications();
    }, []);
*/
  const [expandedId, setExpandedId] = useState(null);

  const [selectedPublication, setSelectedPublication] = useState('ALL PUBLICATIONS');
  const [selectedGenre, setSelectedGenre] = useState('GENRE');
  const [selectedResearch, setSelectedResearch] = useState('RESEARCH AREA');

  const publicationOptions = ['ALL PUBLICATIONS', '2025 PUBLICATIONS', '2024 PUBLICATIONS'];
  const genreOptions = ['GENRE', 'Journal', 'Conference', 'Book', 'Other'];
  const researchOptions = ['RESEARCH AREA', 'AI', 'HMI', 'CI', 'MIDAS', 'ETiDM', 'Other'];

  return (
    <div className="relative min-h-screen font-myfont bg-white">
      <Navbar />
      <div className="relative w-full">
        <img src={publicationsBanner} alt="Publications Banner" className="w-full object-cover"/>
        <div className="absolute top-[40%] left-3/4 z-10">
          <span className="text-white font-anybody text-[1vw] font-normal" style={{letterSpacing:1}}>
            <span className="opacity-60">RESEARCH</span> <span className="opacity-60">/</span> <span style={{color:'#FFF'}}>PUBLICATIONS</span>
          </span>
        </div>
        <h1 className="absolute bottom-10 left-[22%] transform -translate-x-1/2 text-[6vw] lg:text-[4vw] leading-normal font-normal font-anybody text-white">
          PUBLICATIONS
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
      {/* DROPDOWNS ABOVE YEARS */}
      <div className="relative max-w-screen-xl mx-auto flex flex-col pt-12 pb-12">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 mb-6 w-full z-10 px-2 lg:px-0">
          <div className="flex-1">
            <Dropdown label="ALL PUBLICATIONS" options={publicationOptions} selected={selectedPublication} setSelected={setSelectedPublication} />
          </div>
          <div className="flex-1">
            <Dropdown label="GENRE" options={genreOptions} selected={selectedGenre} setSelected={setSelectedGenre} />
          </div>
          <div className="flex-1">
            <Dropdown label="RESEARCH AREA" options={researchOptions} selected={selectedResearch} setSelected={setSelectedResearch} />
          </div>
        </div>
        <div className="relative border border-neutral-500/30">
          {years.map(year => (
            <div key={year} className="mb-8">
              <div className="text-2xl font-bold my-4 ml-4 text-[#096964]">{year}</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {publications.filter(pub => pub.year === year).map(pub => {
                  const isExpanded = expandedId === pub.id;
                  if (isExpanded) {
                    return (
                      <div key={pub.id} className="col-span-3 bg-[#096964] text-white p-10 transition-all duration-300 ease-in-out">
                        <div className="flex flex-col lg:flex-row gap-8">
                          <img
                            src={pub.avatar}
                            alt={pub.name}
                            className="w-full lg:w-1/3 h-auto object-cover rounded-lg"
                          />
                          <div className="flex flex-col flex-grow pt-4">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-anybody">
                              {pub.details.title}
                            </h3>
                            <div className="text-lg font-anybody font-medium mb-2">{pub.name}</div>
                            <div className="text-base opacity-80 mb-2">{pub.desc}</div>
                            <div className="mb-4 text-base opacity-70">{pub.details.abstract}</div>
                            <a href={pub.details.link} className="underline text-white font-anybody mb-6" target="_blank" rel="noopener noreferrer">
                              {pub.details.link}
                            </a>
                            <button
                              onClick={() => setExpandedId(null)}
                              className="mt-8 self-end underline text-sm font-anybody"
                            >
                              CLOSE ✕
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div
                      key={pub.id}
                      className="flex flex-row items-center border border-neutral-300 bg-white h-40 px-4 py-3 transition duration-300 ease-in-out hover:bg-[#096964] hover:text-white"
                      style={{margin:0, borderRightWidth: '0.5px', borderBottomWidth: '0.5px', borderLeftWidth: '0.5px', borderTopWidth: '0.5px'}}
                    >
                      <img src={pub.avatar} alt={pub.name} className="w-20 h-24 object-cover rounded-md mr-5" />
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="font-bold text-base lg:text-lg font-anybody">{pub.name}</div>
                        <div className="text-sm mt-1 mb-2 font-normal" style={{ fontFamily: 'Helvetica Now Display, sans-serif' }}>{pub.desc}</div>
                        <button
                          onClick={() => setExpandedId(pub.id)}
                          className="group font-semibold text-sm inline-flex items-center gap-1 font-anybody mt-2"
                        >
                          VIEW ALL <img src={ArrowRight} alt="" className="inline w-4 h-4 ml-1 group-hover:invert group-hover:brightness-200" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicationPage;

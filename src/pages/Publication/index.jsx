import React, { useRef, useState } from 'react';
import Navbar from '../../components/Navbar';
import GridLines from '../../components/GridLines';
import Footer from '../../components/Footer';
import publicationsBanner from '../../assets/banner-main-back.png';
import { ArrowRight, X } from 'lucide-react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import { useGSAP } from '@gsap/react';
import prof1 from '../../assets/project-3.png';
import prof2 from '../../assets/project-3.png';
import prof3 from '../../assets/project-3.png';
import prof4 from '../../assets/project-3.png';
import prof5 from '../../assets/project-3.png';
import prof6 from '../../assets/project-3.png';

gsap.registerPlugin(Flip);

function Dropdown({ label, options, selected, setSelected }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-full">
      <button
        type="button"
        className="w-full px-6 py-4 border border-black/30 bg-white text-black flex items-center justify-between text-[12px] lg:text-[18px] uppercase font-semibold hover:bg-neutral-100"
        onClick={() => setOpen(o => !o)}
      >
        {selected || label}
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <ul className="absolute left-0 mt-1 w-full bg-white border border-black/30 shadow-lg z-20">
          {options.map(opt => (
            <li
              key={opt}
              className={`px-6 py-3 hover:bg-brand-accent2 hover:text-white cursor-pointer text-[12px] lg:text-[18px] font-semibold ${selected === opt ? 'bg-black/10' : ''}`}
              onClick={() => { setSelected(opt); setOpen(false); }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

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

function Banner({ text }) {
  const bannerRef = useRef();
  useGSAP(
    () => {
      gsap.fromTo(
        '.reveal-animation-text',
        { y: '10%', opacity: 0, clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
        { y: 0, opacity: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', stagger: 0.1, duration: 1.5, ease: 'expo.out' }
      );
    },
    { scope: bannerRef, dependencies: [text] }
  );

  return (
    <section ref={bannerRef} className="relative min-h-[45vh] bg-brand-accent2">
      <div className="texture-overlay absolute inset-0" />
      <img src={publicationsBanner} alt="Publications Banner" className="w-full h-full object-cover absolute inset-0" />
      <p className="absolute top-[84px] right-[12.5vw] text-[12px] lg:text-[20px] text-white">
        <span className="opacity-50">RESEARCH /</span> <span>PUBLICATIONS</span>
      </p>
      <h1 className="reveal-animation-text absolute bottom-4 left-[12.5vw] text-[28px] lg:text-[72px] text-white">
        {text}
      </h1>
    </section>
  );
}

function PublicationCard({ pub, expanded, onExpand, onCollapse }) {
  const cardRef = useRef();
  useGSAP(
    () => {
      gsap.fromTo(
        '.reveal-animation, .reveal-animation-text',
        { y: '10%', opacity: 0, clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
        { y: 0, opacity: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', stagger: 0.1, duration: 0.5, ease: 'expo.out' }
      );
    },
    { scope: cardRef, dependencies: [expanded] }
  );

  return (
    <div
      data-publication-card
      ref={cardRef}
      className={`w-full p-[28px] lg:p-[40px] transition duration-300 ${expanded ? 'col-span-3 bg-[#096964] text-white' : 'bg-white hover:bg-[#096964] hover:text-white cursor-pointer'}`}
      style={expanded ? { gridColumn: 'span 3' } : {}}
      onClick={!expanded ? onExpand : undefined}
    >
      {expanded ? (
        <div className="flex flex-col lg:flex-row gap-8">
          <img src={pub.avatar} alt={pub.name} className="w-full lg:w-1/3 object-cover rounded-lg" />
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-[24px] lg:text-[32px] font-medium mb-4 reveal-animation-text">{pub.details.title}</h3>
              <div className="text-[20px] font-medium mb-2 reveal-animation-text">{pub.name}</div>
              <p className="text-[16px] opacity-80 mb-2 reveal-animation-text">{pub.desc}</p>
              <p className="text-[16px] opacity-70 mb-4 reveal-animation-text">{pub.details.abstract}</p>
            </div>
            <div className="flex justify-between items-center">
              <a href={pub.details.link} className="underline font-medium reveal-animation-opacity-only" target="_blank" rel="noopener noreferrer">
                {pub.details.link}
              </a>
              <button type="button" onClick={onCollapse} className="underline text-[14px] flex items-center gap-2 reveal-animation-opacity-only">
                <span>CLOSE</span> <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center">
          <img src={pub.avatar} alt={pub.name} className="w-[80px] h-[100px] object-cover rounded-md mr-5 reveal-animation-opacity-only" />
          <div className="flex-1 flex flex-col justify-center">
            <div className="font-medium text-[16px] mb-1 reveal-animation-text">{pub.name}</div>
            <p className="text-[14px] opacity-60 mb-2 reveal-animation-text">{pub.desc}</p>
            <button type="button" onClick={onExpand} className="inline-flex items-center font-semibold text-[14px] gap-2 reveal-animation-opacity-only">
              VIEW DETAILS <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const PublicationPage = () => {
  const isSmallScreen = useMediaQuery('(max-width:1280px)');
  const [expandedId, setExpandedId] = useState(null);
  const containerRef = useRef(null);
  const flipStateRef = useRef(null);
  const { contextSafe } = useGSAP(() => {}, { scope: containerRef, dependencies: [] });

  const handleExpand = contextSafe(id => {
    const cards = gsap.utils.toArray('[data-publication-card]');
    flipStateRef.current = Flip.getState(cards);
    setExpandedId(id);
  });
  const handleCollapse = contextSafe(() => {
    const cards = gsap.utils.toArray('[data-publication-card]');
    flipStateRef.current = Flip.getState(cards);
    setExpandedId(null);
  });

  useGSAP(() => {
    if (!flipStateRef.current) return;
    Flip.from(flipStateRef.current, { duration: 0.3, ease: 'power4.out', absolute: false });
    flipStateRef.current = null;
  }, { scope: containerRef, dependencies: [expandedId] });

  // Filter state
  const [selectedPub, setSelectedPub] = useState('ALL PUBLICATIONS');
  const [selectedGenre, setSelectedGenre] = useState('GENRE');
  const [selectedRes, setSelectedRes] = useState('RESEARCH AREA');

  return (
    <div className="w-full font-anybody">
      <Navbar />
      <GridLines count={isSmallScreen ? 3 : 4} />
      <Banner text="PUBLICATIONS" />
      <main className="w-[75vw] mx-[12.5vw] mt-[30px]">
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex-1">
            <Dropdown label="ALL PUBLICATIONS" options={['ALL PUBLICATIONS','2025 PUBLICATIONS','2024 PUBLICATIONS']} selected={selectedPub} setSelected={setSelectedPub} />
          </div>
          <div className="flex-1">
            <Dropdown label="GENRE" options={['GENRE','Journal','Conference','Book','Other']} selected={selectedGenre} setSelected={setSelectedGenre} />
          </div>
          <div className="flex-1">
            <Dropdown label="RESEARCH AREA" options={['RESEARCH AREA','AI','HMI','CI','MIDAS','ETiDM','Other']} selected={selectedRes} setSelected={setSelectedRes} />
          </div>
        </div>
        <section ref={containerRef} className="grid grid-cols-1 xl:grid-cols-3 divide-y divide-black/10 mt-[30px] auto-rows-auto gap-y-px xl:gap-x-px">
          {years.map(year => (
            <div key={year} className="col-span-3 bg-white">
              <div className="text-[20px] lg:text-[32px] font-bold text-[#096964] py-4 px-4">{year}</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {publications.filter(pub => pub.year === year).map(pub => (
                  <PublicationCard
                    key={pub.id}
                    pub={pub}
                    expanded={expandedId === pub.id}
                    onExpand={() => handleExpand(pub.id)}
                    onCollapse={handleCollapse}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PublicationPage;

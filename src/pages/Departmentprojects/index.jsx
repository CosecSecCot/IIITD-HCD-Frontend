import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import publicationsBanner from '../../assets/banner-main-back.png';
import ArrowRight from '../../assets/Arrow - Right.svg';
import project1 from '../../assets/project-1.png';
import project2 from '../../assets/project-2.png';
import project3 from '../../assets/project-3.png';
import project3expand from '../../assets/project-1-expand.png';

const App = () => {
  // Commented out backend fetching
  /*
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('http://localhost:1337/api/department-projects?populate=*');
        const data = res.data.data.map((item) => ({
          id: item.id,
          title: item.heading_of_project,
          description: item.about_the_project,
          source: item.name,
          imageUrl: `http://localhost:1337${item.iamge?.[0]?.formats?.thumbnail?.url || item.iamge?.[0]?.url || ''}`,
        }));
        setProjects(data);
      } catch (err) {
        console.error('Failed to fetch project data:', err);
      }
    };

    fetchProjects();
  }, []);
  */
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const [projects] = useState([
    {
      id: 1,
      title: "AI Empowered Attention Evaluation among Children with ADHD",
      description: "We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful.",
      source: "TIH-Anubhuti",
      faculty: "Dr. Jainendra Shukla",
      duration: "September 2021 - August 2024",
      imageUrl: project1,
      imageUrlExpanded: project3expand,
      fullDescription: `Specific Learning Disabilities (SLDs) conditions manifest as a deficit in processing language, spoken or written, that may manifest itself as a difficulty to comprehend, speak, read, write, spell, or to do mathematical calculations and includes such conditions as perceptual disabilities, dyslexia, dysgraphia, dyscalculia, dyspraxia, and developmental aphasia. The cognitive flexibility associated with SLDs can manifest itself in noteworthy talents, which include a multi-sensory lens for creative and lateral thinking, resulting in out-of-the-box solutions for problems. The untapped potential of SLDs causes a high opportunity cost for the Nation’s progress. However, children with SLDs experience repeated failures and poor performance despite their continuous efforts and practice in learning. At the same time, worldwide, the condition will SLDs has been exacerbated due to the COVID-19 pandemic when education delivery shifted online. Thus, strengthening online education delivery will be important and impacting. However, research has indicated that educators might not always be aware of their students’ attentional focus, and this may be particularly true for novice teachers. The aim of this project is to develop an AI-empowered tool that will offer personalized, monitored, and evidence-based identification of attention levels among children with SLD. The project will first develop a multimodal dataset of audio-visual and physiological signals among 150 children with SLD to understand the attention and engagement of children with SLD during digital learning. It will further perform a systematic comparison of physiological, audio-visual, and eye-dilation signals for the attention monitoring of children with SLD to identify the valid indicators of attention. Based on these, the project will develop an AI-empowered system for real-time continuous monitoring of attention among children with SLD. Finally, the project will deploy and evaluate the efficacy of the developed AI-empowered system among 50 children with SLD and 25 typically developing children in naturalistic settings. Once validated the findings of this project can improve and monitor the attention of children with SLDs and can play a significant role in their inclusion during digital learning.`
    },
    {
      id: 2,
      title: "AI Empowered Attention Evaluation among Children with ADHD",
      description: "We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful.",
      source: "TIH-Anubhuti",
      faculty: "Dr. Jainendra Shukla",
      duration: "September 2021 - August 2024",
      imageUrl: project2,
      // imageUrlExpanded: project3expand,
      fullDescription: `Specific Learning Disabilities (SLDs) conditions manifest as a deficit in processing language, spoken or written, that may manifest itself as a difficulty to comprehend, speak, read, write, spell, or to do mathematical calculations and includes such conditions as perceptual disabilities, dyslexia, dysgraphia, dyscalculia, dyspraxia, and developmental aphasia. The cognitive flexibility associated with SLDs can manifest itself in noteworthy talents, which include a multi-sensory lens for creative and lateral thinking, resulting in out-of-the-box solutions for problems. The untapped potential of SLDs causes a high opportunity cost for the Nation’s progress. However, children with SLDs experience repeated failures and poor performance despite their continuous efforts and practice in learning. At the same time, worldwide, the condition will SLDs has been exacerbated due to the COVID-19 pandemic when education delivery shifted online. Thus, strengthening online education delivery will be important and impacting. However, research has indicated that educators might not always be aware of their students’ attentional focus, and this may be particularly true for novice teachers. The aim of this project is to develop an AI-empowered tool that will offer personalized, monitored, and evidence-based identification of attention levels among children with SLD. The project will first develop a multimodal dataset of audio-visual and physiological signals among 150 children with SLD to understand the attention and engagement of children with SLD during digital learning. It will further perform a systematic comparison of physiological, audio-visual, and eye-dilation signals for the attention monitoring of children with SLD to identify the valid indicators of attention. Based on these, the project will develop an AI-empowered system for real-time continuous monitoring of attention among children with SLD. Finally, the project will deploy and evaluate the efficacy of the developed AI-empowered system among 50 children with SLD and 25 typically developing children in naturalistic settings. Once validated the findings of this project can improve and monitor the attention of children with SLDs and can play a significant role in their inclusion during digital learning.`
    },
    {
      id: 3,
      title: "AI Empowered Attention Evaluation among Children with ADHD",
      description: "We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful.",
      source: "TIH-Anubhuti",
      faculty: "Dr. Jainendra Shukla",
      duration: "September 2021 - August 2024",
      imageUrl: project3,
      // imageUrlExpanded: project3expand,
      fullDescription: `Specific Learning Disabilities (SLDs) conditions manifest as a deficit in processing language, spoken or written, that may manifest itself as a difficulty to comprehend, speak, read, write, spell, or to do mathematical calculations and includes such conditions as perceptual disabilities, dyslexia, dysgraphia, dyscalculia, dyspraxia, and developmental aphasia. The cognitive flexibility associated with SLDs can manifest itself in noteworthy talents, which include a multi-sensory lens for creative and lateral thinking, resulting in out-of-the-box solutions for problems. The untapped potential of SLDs causes a high opportunity cost for the Nation’s progress. However, children with SLDs experience repeated failures and poor performance despite their continuous efforts and practice in learning. At the same time, worldwide, the condition will SLDs has been exacerbated due to the COVID-19 pandemic when education delivery shifted online. Thus, strengthening online education delivery will be important and impacting. However, research has indicated that educators might not always be aware of their students’ attentional focus, and this may be particularly true for novice teachers. The aim of this project is to develop an AI-empowered tool that will offer personalized, monitored, and evidence-based identification of attention levels among children with SLD. The project will first develop a multimodal dataset of audio-visual and physiological signals among 150 children with SLD to understand the attention and engagement of children with SLD during digital learning. It will further perform a systematic comparison of physiological, audio-visual, and eye-dilation signals for the attention monitoring of children with SLD to identify the valid indicators of attention. Based on these, the project will develop an AI-empowered system for real-time continuous monitoring of attention among children with SLD. Finally, the project will deploy and evaluate the efficacy of the developed AI-empowered system among 50 children with SLD and 25 typically developing children in naturalistic settings. Once validated the findings of this project can improve and monitor the attention of children with SLDs and can play a significant role in their inclusion during digital learning.`
    },
  ]);

  const totalColumns = 3;
  const totalRows = Math.ceil(projects.length / totalColumns);

  return (
    <div className="relative min-h-screen font-myfont bg-white">
      <Navbar />
      <div className="relative w-full">
        <img src={publicationsBanner} alt="Publications Banner" className="w-full object-cover"/>
        
        <div className="absolute top-[40%] left-3/4 z-10">
          <span className="text-white font-anybody text-[1vw] font-normal" style={{letterSpacing:1}}><span className="opacity-60">
            RESEARCH</span> <span className="opacity-60">/</span> <span style={{color:'#FFF'}}>PROJECTS</span>
          </span>
        </div>
        <h1
          className="absolute bottom-10 left-[36%] transform -translate-x-1/2 text-[6vw] lg:text-[4vw] leading-normal font-normal font-anybody text-white"
          style={{ fontStyle: 'normal' }}
        >
          DEPARTMENT PROJECTS
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
        <div className="relative border border-neutral-500/30">
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute top-0 bottom-0 left-1/3 w-[0.25px] bg-neutral-500/30 lg:block hidden" />
            <div className="absolute top-0 bottom-0 left-2/3 w-[0.25px] bg-neutral-500/30 lg:block hidden" />
            <div className="absolute top-0 bottom-0 left-1/2 w-[0.25px] bg-neutral-500/30 sm:block lg:hidden hidden" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => {
              const col = index % totalColumns;
              const row = Math.floor(index / totalColumns);
              const isLastRow = row === totalRows - 1;
              const isExpanded = expandedProjectId === project.id;

              if (isExpanded) {
                return (
                  <div key={project.id} className="col-span-3 bg-[#096964] text-white p-10 transition-all duration-300 ease-in-out">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <img
                        src={project.imageUrlExpanded || project.imageUrl}
                        alt={project.title}
                        className="w-full lg:w-1/3 h-auto object-cover"
                      />
                      <div className="flex flex-col flex-grow pt-4">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-anybody">
                          {project.title}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                          <div>
                            <span className="text-sm uppercase font-anybody font-normal leading-normal opacity-60 text-white">
                              Faculty Name
                            </span>
                            <div className="text-base font-anybody font-medium leading-normal text-white">
                              {project.faculty || 'N/A'}
                            </div>
                          </div>
                          <div>
                            <span className="text-sm uppercase font-anybody font-normal leading-normal opacity-60 text-white">
                              Project Funding
                            </span>
                            <div className="text-base font-anybody font-medium leading-normal text-white">
                              {project.source}
                            </div>
                          </div>
                          <div>
                            <span className="text-sm uppercase font-anybody font-normal leading-normal opacity-60 text-white">
                              Duration
                            </span>
                            <div className="text-base font-anybody font-medium leading-normal text-white">
                              {project.duration || 'N/A'}
                            </div>
                          </div>
                        </div>
                        <p
                          className="text-sm leading-[20px] opacity-70 whitespace-pre-line"
                          style={{ fontFamily: 'Helvetica Now Display, sans-serif', color: '#FFF', fontWeight: '400' }}
                        >
                          {project.fullDescription}
                        </p>
                        <button
                          onClick={() => setExpandedProjectId(null)}
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
                  key={project.id}
                  className={`relative flex flex-col transition duration-300 ease-in-out hover:bg-[#096964] hover:text-white bg-white ${!isLastRow ? 'border-b border-neutral-500/30' : ''}`}
                >
                  <div className="p-9 flex flex-col justify-between h-full transition-colors duration-300 ease-in-out">
                    <img src={project.imageUrl} alt={project.title} className="w-full h-44 object-cover mb-4" />
                    <div className="flex flex-col justify-between grow">
                      <div>
                        <h3 className="font-semibold text-2xl lg:text-2xl leading-tight transition-colors duration-300 ease-in-out font-anybody">{project.title}</h3>
                        <p className="text-sm mt-2 leading-snug transition-colors duration-300 ease-in-out" style={{ fontFamily: 'Helvetica Now Display, sans-serif', fontStyle: "normal" }}>{project.description}</p>
                        <p className="font-medium text-sm mt-4 transition-colors duration-300 ease-in-out font-anybody">{project.source}</p>
                      </div>
                      <div className="mt-6 text-right">
                        <button
                          onClick={() => setExpandedProjectId(project.id)}
                          className="group font-semibold text-sm hover:underline inline-flex items-center gap-1 transition-colors duration-300 ease-in-out font-anybody"
                        >
                          <span className="transition-colors duration-300 ease-in-out group-hover:text-white">VIEW DETAILS</span>
                          <img src={ArrowRight} alt="" className="inline w-4 h-4 ml-1 transition-all duration-300 ease-in-out group-hover:invert group-hover:brightness-200" />
                        </button>
                      </div>
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

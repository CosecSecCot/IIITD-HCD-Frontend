import React, { useState/*, useEffect*/ } from 'react';
import Navbar from '../../components/Navbar';
// import axios from 'axios';
import publicationsBanner from '../../assets/department_project.svg';
import ArrowRight from '../../assets/Arrow - Right.svg';

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

  const [projects] = useState([
    {
      id: 1,
      title: "AI Empowered Attention Evaluation among Children with ADHD",
      description: "We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful.",
      source: "TIH-Anubhuti",
      
    },
    {
      id: 2,
      title: "AI Empowered Attention Evaluation among Children with ADHD",
      description: "We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful.",
      source: "TIH-Anubhuti",
      imageUrl: "https://via.placeholder.com/300x150",
    },
    {
      id: 3,
      title: "AI Empowered Attention Evaluation among Children with ADHD",
      description: "We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful.",
      source: "TIH-Anubhuti",
      imageUrl: "https://via.placeholder.com/300x150",
    },
  ]);

  const totalColumns = 3;
  const totalRows = Math.ceil(projects.length / totalColumns);

  return (
    <div className="relative min-h-screen font-myfont bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <img
        src={publicationsBanner}
        alt="Publications Banner"
        className="w-full object-cover"
      />

      {/* Full Height Vertical Lines */}
      <div className="fixed inset-0 pointer-events-none z-5">
        <div className="max-w-screen-xl mx-auto h-full relative">
          {/* Outer vertical lines */}
          <div className="absolute top-0 bottom-0 left-0 w-[0.25px] bg-neutral-500" />
          <div className="absolute top-0 bottom-0 right-0 w-[0.25px] bg-neutral-500" />
          {/* Vertical dividers */}
          <div className="absolute top-0 bottom-0 left-1/3 w-[0.25px] bg-neutral-500 lg:block hidden" />
          <div className="absolute top-0 bottom-0 left-2/3 w-[0.25px] bg-neutral-500 lg:block hidden" />
          <div className="absolute top-0 bottom-0 left-1/2 w-[0.25px] bg-neutral-500 sm:block lg:hidden hidden" />
        </div>
      </div>

      {/* Grid Section */}
      <div className="relative max-w-screen-xl mx-auto pt-12 pb-12">
        {/* Card Grid with Border */}
        <div className="relative border border-neutral-500">
          {/* Inner vertical lines between cards */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute top-0 bottom-0 left-1/3 w-[0.25px] bg-neutral-500 lg:block hidden" />
            <div className="absolute top-0 bottom-0 left-2/3 w-[0.25px] bg-neutral-500 lg:block hidden" />
            <div className="absolute top-0 bottom-0 left-1/2 w-[0.25px] bg-neutral-500 sm:block lg:hidden hidden" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => {
              const col = index % totalColumns;
              const row = Math.floor(index / totalColumns);
              const isLastRow = row === totalRows - 1;

              return (
                <div
                  key={project.id}
                  className={`relative flex flex-col bg-white ${
                    !isLastRow ? 'border-b border-neutral-500' : ''
                  } font-myfont`}
                >
                  {/* Card Content */}
                  <div className="p-5 flex flex-col justify-between h-full bg-white font-myfont">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-44 object-cover mb-4"
                    />
                    <div className="flex flex-col justify-between grow">
                      <div>
                        <h3 className="text-black font-semibold text-[15px] leading-snug font-myfont">
                          {project.title}
                        </h3>
                        <p
                          className="text-gray-600 text-sm mt-2 leading-snug"
                          style={{
                            fontFamily: '"Helvetica Now Display", sans-serif',
                            fontStyle: "normal",
                          }}
                        >
                          {project.description}
                        </p>
                        <p className="text-black font-medium text-sm mt-4 font-myfont">
                          {project.source}
                        </p>
                      </div>
                      <div className="mt-6 text-right">
                        <a
                          href="#"
                          className="text-black font-semibold text-sm hover:underline font-myfont inline-flex items-center gap-1"
                        >
                          VIEW DETAILS
                          <img src={ArrowRight} alt="" className="inline w-4 h-4 ml-1" />
                        </a>
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

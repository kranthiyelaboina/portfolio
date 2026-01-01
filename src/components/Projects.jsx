import { FaLocationArrow } from 'react-icons/fa';
import { SiReact, SiVite, SiPython, SiFlask, SiAmazon, SiTensorflow } from 'react-icons/si';
import vyomaImg from '../assets/vyoma.png';
import resourcebaseImg from '../assets/resourcebase.png';
import admissionImg from '../assets/admissionenquiry.jpeg';
import trovoImg from '../assets/trovo.png';

const getTechIcon = (tech) => {
  const iconProps = { className: 'w-3 h-3 sm:w-4 sm:h-4' };
  const techIconMap = {
    'React': <SiReact {...iconProps} />,
    'Vite': <SiVite {...iconProps} />,
    'Python': <SiPython {...iconProps} />,
    'Flask': <SiFlask {...iconProps} />,
    'AWS': <SiAmazon {...iconProps} />,
    'TensorFlow': <SiTensorflow {...iconProps} />,
  };
  return techIconMap[tech] || null;
};

const Projects = () => {
  const projects = [
    {
      title: "Vyoma",
      description: "An immersive VR therapy application for stress and anxiety management",
      iconList: ["React", "Vite", "WebXR", "Three.js"],
      img: vyomaImg,
      link: "https://vyoma-theta.vercel.app/",
    },
    {
      title: "ResourceBase",
      description: "A Flask-based web application for efficient resource management",
      iconList: ["Flask", "Python", "SQLite", "Bootstrap"],
      img: resourcebaseImg,
      link: "https://www.resourcebase.in/",
    },
    {
      title: "TROVO",
      description: "Trusted Resource for Omics and Variant Overview - AI-powered protein discovery",
      iconList: ["Python", "TensorFlow", "Flask", "ML"],
      img: trovoImg,
      link: "https://kranthiyelaboina.github.io/Trusted-Resource-for-Omics-and-Variant-Overview/",
    },
    {
      title: "AWS Admission Analysis",
      description: "Serverless admission enquiry analysis system built on AWS",
      iconList: ["AWS", "Lambda", "DynamoDB", "QuickSight"],
      img: admissionImg,
      link: "https://github.com/kranthiyelaboina/AWS-Admission-Enquiries-Analysis",
    },
  ];

  return (
    <div id="projects-section" className="py-12 sm:py-20">
      <h1 className="heading px-4">
        A small selection of{' '}
        <span className="text-accent">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-8 sm:gap-12 lg:gap-16 mt-6 sm:mt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="lg:min-h-[32.5rem] h-[22rem] sm:h-[25rem] flex items-center justify-center w-[85vw] sm:w-96"
          >
            <div className="relative group/pin z-50 cursor-pointer">
              <div
                style={{ perspective: '1000px' }}
                className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
              >
                <div
                  style={{ transform: 'translate(-50%, -50%) rotateX(0deg)' }}
                  className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
                >
                  <div className="relative z-50">
                    {/* Project Image */}
                    <div className="relative flex items-center justify-center w-[85vw] sm:w-96 overflow-hidden h-[18vh] sm:h-[20vh] lg:h-[30vh] mb-6 sm:mb-10">
                      <div
                        className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                        style={{ backgroundColor: 'rgb(19, 22, 45)' }}
                      >
                        <img
                          alt={project.title}
                          className="absolute h-full w-full inset-0 object-cover"
                          src={project.img}
                        />
                      </div>
                    </div>

                    {/* Project Title */}
                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                      {project.title}
                    </h1>

                    {/* Project Description */}
                    <p
                      className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                      style={{ color: 'rgb(190, 193, 221)', margin: '1vh 0px' }}
                    >
                      {project.description}
                    </p>

                    {/* Tech Stack and Link */}
                    <div className="flex items-center justify-between mt-4 sm:mt-7 mb-3">
                      <div className="flex items-center">
                        {project.iconList.slice(0, 3).map((tech, idx) => {
                          const icon = getTechIcon(tech);
                          return icon ? (
                            <div
                              key={idx}
                              className="border border-white/[.2] rounded-full bg-black w-7 h-7 sm:w-8 sm:h-8 flex justify-center items-center hover:border-accent transition-all duration-200"
                              style={{ transform: `translateX(-${idx * 5}px)` }}
                              title={tech}
                            >
                              {icon}
                            </div>
                          ) : (
                            <div
                              key={idx}
                              className="border border-white/[.2] rounded-full bg-black w-7 h-7 sm:w-8 sm:h-8 flex justify-center items-center text-[9px] sm:text-xs hover:border-accent transition-all duration-200"
                              style={{ transform: `translateX(-${idx * 5}px)` }}
                              title={tech}
                            >
                              {tech.slice(0, 2)}
                            </div>
                          );
                        })}
                      </div>
                      {project.link !== '#' && (
                        <div className="flex justify-center items-center">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex text-xs sm:text-sm md:text-xs lg:text-xl cursor-pointer text-accent hover:text-green-200 transition-all duration-200"
                          >
                            View Project
                          </a>
                          <FaLocationArrow className="ms-2 sm:ms-3 text-xs sm:text-sm" color="#00ff99" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

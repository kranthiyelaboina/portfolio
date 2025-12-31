import { useState } from 'react';
import bg1Image from '../assets/Professional _ Radnaabazar Bulgan_files/bg1-min.png';
import gridImage from '../assets/Professional _ Radnaabazar Bulgan_files/grid.svg';
import b4Image from '../assets/Professional _ Radnaabazar Bulgan_files/b4.svg';
import b5Image from '../assets/Professional _ Radnaabazar Bulgan_files/b5.svg';
import awsImage from '../assets/aws.png';
import PixelCard from './PixelCard';
import SpotlightCard from './SpotlightCard';

const BentoGrid = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kranthiyelaboinahere@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const items = [
    {
      id: 1,
      title: "AWS Certified Cloud Practitioner",
      description: "",
      className: "lg:col-span-3 sm:col-span-2 md:col-span-6 md:row-span-4 min-h-[50vh] lg:min-h-[60vh]",
      imgSrc: awsImage,
      titleClassName: "justify-end",
      hasPixelCard: true,
    },
    {
      id: 2,
      title: "Fluent in English and Hindi with technical communication skills",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    },
    {
      id: 3,
      title: "React, Node.js, AWS",
      description: "My primary tech stack",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      techStack: ["ReactJS", "Node.js", "TypeScript", ".NET", "Python", "AWS"],
    },
    {
      id: 4,
      title: "Full-Stack Developer",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgSrc: gridImage,
      spareImg: b4Image,
    },
    {
      id: 5,
      title: "Currently pursuing B.Tech at IARE",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgSrc: b5Image,
      spareImg: gridImage,
      hasGridBg: true,
    },
    {
      id: 6,
      title: "Want to collaborate on a project?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      hasGradient: true,
    },
  ];

  return (
    <section id="about">
      <div style={{ opacity: 1 }}>
        <h1 className="heading pt-12 sm:pt-20 px-4">Short Profile</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto w-full py-10 sm:py-20 px-4 sm:px-0">
          {items.map((item) => (
            <SpotlightCard
              key={item.id}
              className={`row-span-1 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 ${item.className}`}
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="h-full" style={{ background: 'rgb(20, 20, 32)', borderRadius: 'inherit' }}>
                {/* Grid Background for item 5 */}
                {item.hasGridBg && (
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      alt="grid"
                      className="w-full h-full object-cover opacity-50"
                      src={gridImage}
                    />
                  </div>
                )}
                
                {/* Background Image */}
                {item.imgSrc && item.hasPixelCard && (
                  <>
                    <PixelCard variant="blue" className="absolute w-full h-full">
                      <img
                        alt={item.title}
                        className="w-full h-full object-cover object-center absolute inset-0 z-0"
                        src={item.imgSrc}
                      />
                    </PixelCard>
                    {/* Verify Badge Button */}
                    <a
                      href="https://www.credly.com/badges/366396fb-16ca-443b-8b66-fbadec7584ec/public_url"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 left-4 z-30 flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-xs font-semibold rounded-full shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Verify
                    </a>
                  </>
                )}
                {item.imgSrc && !item.hasPixelCard && (
                  <div className={`absolute ${item.id === 5 ? 'bottom-0 right-0' : 'w-full h-full'}`}>
                    <img
                      alt={item.title}
                      className={item.id === 5 ? "w-[280px] h-[280px] md:w-[350px] md:h-[350px] object-contain" : "object-cover object-center"}
                      src={item.imgSrc}
                    />
                  </div>
                )}

                {/* Spare Image */}
                {item.spareImg && (
                  <div className={`absolute ${item.id === 5 ? 'right-0 bottom-0 w-1/2 h-1/2' : 'right-0 -bottom-5'}`}>
                    <img
                      alt="spare"
                      className={item.id === 5 ? "object-contain object-right-bottom w-full h-full" : "object-cover object-center w-full h-full"}
                      src={item.spareImg}
                    />
                  </div>
                )}

                {/* Gradient Background for item 6 */}
                {item.hasGradient && (
                  <div className="w-full h-full absolute overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]">
                    <div className="gradients-container h-full w-full blur-lg">
                      <div className="absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat] [mix-blend-mode:hard-light] w-[80%] h-[80%] top-[calc(50%-40%)] left-[calc(50%-40%)] animate-first opacity-100"></div>
                      <div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-[80%] h-[80%] top-[calc(50%-40%)] left-[calc(50%-40%)] animate-second opacity-100"></div>
                      <div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-[80%] h-[80%] top-[calc(50%-40%)] left-[calc(50%-40%)] animate-third opacity-100"></div>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className={`${item.id === 1 ? 'justify-end' : item.id === 3 ? 'justify-center' : item.id === 5 ? 'justify-center md:justify-start lg:justify-center' : 'justify-start'} group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10`}>
                  <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                    {item.description}
                  </div>
                  <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
                    {item.title}
                  </div>

                  {/* Tech Stack for item 3 */}
                  {item.techStack && (
                    <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                      <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                        {item.techStack.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#3a3a44]">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                        <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#3a3a44]"></span>
                        {item.techStack.slice(3).map((tech, idx) => (
                          <span key={idx} className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#3a3a44]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Copy Email Button for item 6 */}
                  {item.hasGradient && (
                    <div className="mt-5 relative">
                      <button 
                        onClick={handleCopyEmail}
                        className="relative inline-flex h-12 z-50 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
                      >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 !bg-primary">
                          {copied ? (
                            <>
                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                              </svg>
                              Email copied!
                            </>
                          ) : (
                            <>
                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <rect width="336" height="336" x="128" y="128" fill="none" strokeLinejoin="round" strokeWidth="32" rx="57" ry="57"></rect>
                                <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="m383.5 128 .5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24"></path>
                              </svg>
                              Copy my email address
                            </>
                          )}
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;

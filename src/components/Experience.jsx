import exp1Img from '../assets/Professional _ Radnaabazar Bulgan_files/exp1.svg';
import exp2Img from '../assets/Professional _ Radnaabazar Bulgan_files/exp2.svg';

const Experience = () => {
  const experiences = [
    {
      title: "Programming Lead",
      description: "Leading Google Developer Groups at IARE, organizing workshops and hackathons for the developer community.",
      thumbnail: exp1Img,
    },
    {
      title: "AWS Emerging Talent Community",
      description: "Active member of the AWS ETC, focusing on AWS architectural best practices and cloud networking.",
      thumbnail: exp2Img,
    },
  ];

  return (
    <div className="py-12 sm:py-20 w-full px-4 sm:px-0">
      <h1 className="heading px-4">
        My <span className="text-accent">experience</span>
      </h1>
      <div className="w-full mt-8 sm:mt-12 grid lg:grid-cols-2 grid-cols-1 gap-6 sm:gap-10 max-w-4xl mx-auto">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
          >
            <div className="relative flex items-center justify-center w-full">
              {/* Animated border container */}
              <div
                className="relative overflow-hidden rounded-3xl p-[4px] w-full group"
                style={{
                  background: 'linear-gradient(90deg, rgba(50,50,50,1) 0%, rgba(130,130,130,1) 50%, rgba(50,50,50,1) 100%)',
                }}
              >
                {/* Inner glowing border animation */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(0, 255, 153, 0.3), transparent)',
                    animation: 'shimmer 2s infinite',
                  }}
                />
                
                {/* Card content */}
                <div
                  className="flex lg:flex-row flex-col lg:items-center p-3 py-4 sm:py-6 md:p-5 lg:p-10 gap-2 rounded-3xl"
                  style={{ backgroundColor: '#13162d' }}
                >
                  <img
                    alt={experience.title}
                    loading="lazy"
                    width="128"
                    height="128"
                    decoding="async"
                    className="lg:w-32 md:w-20 w-12 sm:w-16"
                    src={experience.thumbnail}
                    style={{ color: 'transparent' }}
                  />
                  <div className="lg:ms-5">
                    <h1 className="text-start text-lg sm:text-xl md:text-2xl font-bold">
                      {experience.title}
                    </h1>
                    <p className="text-start text-white/60 mt-2 sm:mt-3 font-semibold text-sm sm:text-base">
                      {experience.description}
                    </p>
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

export default Experience;
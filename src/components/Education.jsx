import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Institute of Aeronautical Engineering (IARE)",
      period: "Aug 2024 - Jun 2027",
      grade: "9.01",
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "VMR Polytechnic",
      period: "Aug 2021 - Jun 2024",
      grade: "9.91",
    },
    {
      degree: "Secondary Education",
      institution: "Karunya Jyothi High School",
      period: "2011 - 2021",
      grade: "10.0",
    }
  ];

  return (
    <div id="education" className="mt-16 sm:mt-24 md:mt-32 max-w-5xl mx-auto px-4 sm:px-8" style={{ opacity: 1 }}>
      <h1 className="heading flex items-center justify-center gap-2">
        <FaGraduationCap className="text-accent text-2xl sm:text-3xl md:text-4xl" />
        <div>
          <span>Education</span>
        </div>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-6 sm:py-10">
        {educationData.map((edu, index) => (
          <div key={index} className="relative group block p-2 h-full w-full">
            <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-[rgb(22,22,29)] border border-white/[0.2] group-hover:border-accent/60 relative z-20">
              <div className="relative z-50">
                <div className="p-4">
                  <h4 className="text-zinc-100 font-bold tracking-wide mt-4">
                    {edu.degree}
                  </h4>
                  <div className="text-white/80 text-sm">{edu.period}</div>
                  <div className="flex items-center gap-3 justify-end text-accent">
                    <FaGraduationCap className="size-5" />
                    {edu.grade}
                  </div>
                  <p className="mt-8 text-zinc-400 tracking-wide text-sm">
                    {edu.institution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
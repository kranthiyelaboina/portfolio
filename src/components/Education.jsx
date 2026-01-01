import { FaGraduationCap } from 'react-icons/fa';
import { HoverEffect } from "./ui/card-hover-effect";

const Education = () => {
  const educationData = [
    {
      title: "B.Tech in Computer Science",
      description: "Institute of Aeronautical Engineering (IARE) | Aug 2024 - Jun 2027",
      grade: "9.01",
    },
    {
      title: "Diploma in Computer Engineering",
      description: "VMR Polytechnic | Aug 2021 - Jun 2024",
      grade: "9.91",
    },
    {
      title: "Secondary Education",
      description: "Karunya Jyothi High School | 2011 - 2021",
      grade: "10.0",
    }
  ];

  const itemsWithGrades = educationData.map(edu => ({
    ...edu,
    descriptionWithGrade: (
      <div>
        <p>{edu.description}</p>
        <div className="flex items-center gap-2 justify-end text-accent mt-4">
          <FaGraduationCap className="size-4" />
          <span className="font-semibold">{edu.grade}</span>
        </div>
      </div>
    )
  }));

  return (
    <div id="education" className="mt-16 sm:mt-24 md:mt-32 max-w-5xl mx-auto px-4 sm:px-8" style={{ opacity: 1 }}>
      <h1 className="heading flex items-center justify-center gap-2">
        <FaGraduationCap className="text-accent text-2xl sm:text-3xl md:text-4xl" />
        <div>
          <span>Education</span>
        </div>
      </h1>

      <HoverEffect items={educationData.map(edu => ({
        title: edu.title,
        description: (
          <div>
            <p className="text-sm">{edu.description}</p>
            <div className="flex items-center gap-2 justify-end text-accent mt-4">
              <FaGraduationCap className="size-4" />
              <span className="font-semibold text-sm">{edu.grade}</span>
            </div>
          </div>
        )
      }))} />
    </div>
  );
};

export default Education;
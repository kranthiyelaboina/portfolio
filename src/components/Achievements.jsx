import Timeline from './Timeline';

// Import achievement images
import schoolImg from '../assets/achievements/school.jpeg';
import diplomaImg from '../assets/achievements/diploma.jpeg';
import mahindraImg from '../assets/achievements/mahindra.png';
import cloudcertImg from '../assets/achievements/cloudcert.png';
import vnrvjietImg from '../assets/achievements/vnrvjiet.jpeg';
import oracleImg from '../assets/achievements/oracle.png';

const Achievements = () => {
  const timelineData = [
    {
      title: "2021",
      content: (
        <div className="bg-neutral-900/50 rounded-2xl p-4 sm:p-6 border border-neutral-800">
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
            <div className="w-full md:w-1/3">
              <div className="rounded-xl h-36 sm:h-48 overflow-hidden">
                <img 
                  src={schoolImg} 
                  alt="SSC Certificate" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">SSC Completed</h3>
              <p className="text-neutral-400 mb-3 sm:mb-4 text-sm sm:text-base">
                Graduated from <span className="text-cyan-400">Karunya Jyothi High School</span> with a perfect CGPA of <span className="text-green-400 font-bold">10.0/10.0</span>
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 sm:px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs sm:text-sm">Top Score</span>
                <span className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs sm:text-sm">Academic Excellence</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="bg-neutral-900/50 rounded-2xl p-4 sm:p-6 border border-neutral-800">
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
            <div className="w-full md:w-1/3">
              <div className="rounded-xl h-36 sm:h-48 overflow-hidden">
                <img 
                  src={diplomaImg} 
                  alt="Diploma Certificate" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">Diploma Graduated - College Topper</h3>
              <p className="text-neutral-400 mb-3 sm:mb-4 text-sm sm:text-base">
                Graduated from <span className="text-cyan-400">VMR Polytechnic College</span> with the highest CGPA of <span className="text-green-400 font-bold">9.91/10.0</span> in Computer Science department
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 sm:px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs sm:text-sm">🏆 College Topper</span>
                <span className="px-2 sm:px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs sm:text-sm">CSE Department</span>
                <span className="px-2 sm:px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs sm:text-sm">9.91 CGPA</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Early 2025",
      content: (
        <div className="bg-neutral-900/50 rounded-2xl p-6 border border-neutral-800">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3">
              <div className="rounded-xl h-48 overflow-hidden">
                <img 
                  src={mahindraImg} 
                  alt="AminoVerse Hackathon Winner" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">1st Place - AminoVerse Hackathon</h3>
              <p className="text-neutral-400 mb-3 sm:mb-4 text-sm sm:text-base">
                Won <span className="text-yellow-400 font-bold">First Place</span> at the <span className="text-cyan-400">Mahindra University AminoVerse Hackathon 2025</span>
              </p>
              <p className="text-neutral-500 text-xs sm:text-sm mb-3 sm:mb-4">
                Developed <span className="text-white font-semibold">TROVO</span>, an AI-powered protein exploration platform integrating UniProt, AlphaFold, and ChEMBL with an interactive conversational assistant for intuitive protein biology learning.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 sm:px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs sm:text-sm">🥇 1st Place</span>
                <span className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs sm:text-sm">Python Flask</span>
                <span className="px-2 sm:px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs sm:text-sm">3Dmol.js</span>
                <span className="px-2 sm:px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs sm:text-sm">Healthcare API's</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Feb 2025",
      content: (
        <div className="bg-neutral-900/50 rounded-2xl p-4 sm:p-6 border border-neutral-800">
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
            <div className="w-full md:w-1/3">
              <div className="rounded-xl h-36 sm:h-48 overflow-hidden">
                <img 
                  src={cloudcertImg} 
                  alt="AWS Certified Cloud Practitioner" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">AWS Certified Cloud Practitioner</h3>
              <p className="text-neutral-400 mb-3 sm:mb-4 text-sm sm:text-base">
                Earned the <span className="text-orange-400 font-bold">AWS Certified Cloud Practitioner</span> certification, demonstrating foundational cloud knowledge and AWS expertise.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 sm:px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs sm:text-sm">AWS Certified</span>
                <span className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs sm:text-sm">Cloud Computing</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Oct 2025",
      content: (
        <div className="bg-neutral-900/50 rounded-2xl p-4 sm:p-6 border border-neutral-800">
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
            <div className="w-full md:w-1/3">
              <div className="rounded-xl h-36 sm:h-48 overflow-hidden">
                <img 
                  src={vnrvjietImg} 
                  alt="VNRVJIET Hackathon Runner-up" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">Runner-up - VNRVJIET National Hackathon</h3>
              <p className="text-neutral-400 mb-3 sm:mb-4 text-sm sm:text-base">
                Secured <span className="text-gray-300 font-bold">Runner-up</span> position at the <span className="text-cyan-400">VNRVJIET VJ National Hackathon</span>
              </p>
              <p className="text-neutral-500 text-xs sm:text-sm mb-3 sm:mb-4">
                Developed <span className="text-white font-semibold">Vyoma</span>, an immersive VR therapy platform built with React + Vite for browser-based mental wellness sessions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 sm:px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-xs sm:text-sm">🥈 Runner-up</span>
                <span className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs sm:text-sm">React</span>
                <span className="px-2 sm:px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs sm:text-sm">WebXR</span>
                <span className="px-2 sm:px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs sm:text-sm">Vite</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Oct 2025",
      content: (
        <div className="bg-neutral-900/50 rounded-2xl p-4 sm:p-6 border border-neutral-800">
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
            <div className="w-full md:w-1/3">
              <div className="rounded-xl h-36 sm:h-48 overflow-hidden">
                <img 
                  src={oracleImg} 
                  alt="Oracle Multicloud Architect Professional" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">Oracle Multicloud Architect Professional</h3>
              <p className="text-neutral-400 mb-3 sm:mb-4 text-sm sm:text-base">
                Earned the <span className="text-red-400 font-bold">Oracle Multicloud Architect Professional</span> certification, demonstrating expertise in multicloud architecture.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 sm:px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs sm:text-sm">Oracle Certified</span>
                <span className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs sm:text-sm">Multicloud</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return <Timeline data={timelineData} />;
};

export default Achievements;

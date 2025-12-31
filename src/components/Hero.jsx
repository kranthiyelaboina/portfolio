import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiCredly } from 'react-icons/si';
import profileImage from '../assets/kranthi.png';

// Preload the profile image
const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = src;
  });
};

const Hero = () => {
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    // Preload profile image on component mount
    preloadImage(profileImage);
    
    // Show profile after intro animation completes (0.8s)
    const timer = setTimeout(() => {
      setShowProfile(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { value: '21', label: 'Age' },
    { value: '10+', label: 'Certifications' },
    { value: '15+', label: 'Projects worked on' },
    { value: '5', label: 'Projects Deployed' },
  ];

  const socials = [
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/kranthi-yelaboina-a95690295/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/kranthiyelaboina', label: 'Github' },
    { icon: SiCredly, href: 'https://www.credly.com/users/kranthi-yelaboina', label: 'Credly' },
  ];

  return (
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        {/* Text Content */}
        <div className="text-center xl:text-left order-2 xl:order-none px-4 sm:px-0">
          <div style={{ opacity: 1 }}>
            <span className="text-base sm:text-lg md:text-xl">Full Stack Developer</span>
            <h1 className="h1 mb-4 sm:mb-6">
              Hello I'm <br />
              <span className="text-accent relative inline-block group cursor-pointer overflow-hidden">
                <span className="relative z-10 inline-block transition-colors duration-500 group-hover:text-primary">
                  Kranthi <span className="hidden sm:inline"><br /></span><span className="sm:hidden"> </span>Yelaboina
                </span>
                <span
                  className="absolute inset-0 bg-accent z-0 transition-transform duration-500 ease-out scale-x-0 group-hover:scale-x-100"
                  style={{ transformOrigin: 'left center 0px' }}
                ></span>
              </span>
            </h1>
            <p className="max-w-[500px] mb-6 sm:mb-9 text-sm sm:text-base text-white/80 px-2 sm:px-0">
              B.Tech CS Student at IARE | Programming Lead - GDG IARE | AWS CCP & Oracle Multicloud Architect Certified | From India
            </p>

            <div className="flex flex-col sm:flex-row xl:flex-row items-center gap-4 sm:gap-6 xl:gap-8">
              {/* Resume Button */}
              <a 
                href="https://limewire.com/d/cFmt6#zSitlLNkJh"
                target="_blank"
                rel="noopener noreferrer"
                className="group h-[56px] px-8 border border-accent rounded-full flex items-center justify-center gap-2 text-accent text-sm font-semibold uppercase tracking-[2px] hover:bg-accent hover:text-primary transition-all duration-200"
              >
                <span>View Resume</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </a>

              {/* Social Links */}
              <div className="mb-8 xl:mb-0">
                <div className="flex gap-6">
                  {socials.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                      >
                        <Icon />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <div className="w-full h-full relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={showProfile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] absolute" style={{ opacity: showProfile ? 1 : 0 }}>
                <motion.div 
                  className="rounded-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={showProfile ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <img
                    alt="Kranthi Yelaboina"
                    className="object-cover shadow-md shadow-accent p-3 rounded-full absolute h-full w-full inset-0"
                    src={profileImage}
                    loading="eager"
                    fetchpriority="high"
                    decoding="async"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%2312121a" width="100" height="100"/><text x="50" y="55" text-anchor="middle" fill="%2300ff99" font-size="40" font-family="Arial">K</text></svg>';
                    }}
                  />
                </motion.div>
              </div>
              {/* Rotating Circle SVG */}
              <motion.svg
                className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] rotating-circle"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ opacity: 0, rotate: -180 }}
                animate={showProfile ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -180 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <circle
                  cx="253"
                  cy="253"
                  r="250"
                  stroke="#00ff99"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="7.25133 189.0376 40.96608 35.5472"
                />
              </motion.svg>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-6 max-w-[100vw] md:max-w-[80vw] mx-auto xl:max-w-none">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <div className="flex items-center gap-4" style={{ opacity: 1 }}>
                  <div className="flex items-center gap-4" style={{ filter: 'blur(0px)', opacity: 1 }}>
                    <span className="text-4xl xl:text-6xl font-extrabold">{stat.value}</span>
                    <p className="max-w-[150px] leading-snug text-white/80">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

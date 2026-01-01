import { useState, useEffect, useRef, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaYoutube, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiArrowLeft, HiArrowRight, HiX } from 'react-icons/hi';
import { World } from './ui/Globe';
import { Cover } from './ui/Cover';
import chessImg from '../assets/chess.png';

// Spotlight effect component
const Spotlight = () => {
  return (
    <div className="max-w-full overflow-hidden pointer-events-none absolute inset-0 h-full w-full" style={{ opacity: 1 }}>
      {/* Left spotlight */}
      <div className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none">
        <div
          style={{
            transform: 'translateY(-350px) rotate(-45deg)',
            background: 'radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(179, 217, 255, 0.08) 0px, rgba(26, 140, 255, 0.02) 50%, rgba(0, 115, 230, 0) 80%)',
            width: '560px',
            height: '1380px',
          }}
          className="absolute top-0 left-0"
        />
      </div>
      {/* Right spotlight */}
      <div className="absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none">
        <div
          style={{
            transform: 'translateY(-350px) rotate(45deg)',
            background: 'radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(179, 217, 255, 0.08) 0px, rgba(26, 140, 255, 0.02) 50%, rgba(0, 115, 230, 0) 80%)',
            width: '560px',
            height: '1380px',
          }}
          className="absolute top-0 right-0"
        />
      </div>
    </div>
  );
};

// Animated Cover Text with blue lines effect
const CoverText = ({ text }) => {
  const lines = 8;
  return (
    <div className="relative hover:bg-neutral-900 group/cover inline-block bg-neutral-900 px-2 py-2 transition duration-200 rounded-sm">
      {/* Animated blue lines */}
      {[...Array(lines)].map((_, i) => (
        <svg
          key={i}
          width="189"
          height="1"
          viewBox="0 0 189 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-x-0 w-full"
          style={{ top: `${(i + 1) * (88 / lines)}px` }}
        >
          <motion.path
            d="M0 0.5H189"
            stroke="url(#gradient)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: i * 0.1 }}
          />
          <defs>
            <linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0%" x2="100%">
              <stop stopColor="#2EB9DF" stopOpacity="0" />
              <stop offset="0.5" stopColor="#3b82f6" />
              <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      ))}
      <span className="text-white inline-block relative z-20 group-hover/cover:text-white transition duration-200">
        {text}
      </span>
      {/* Corner dots */}
      <div className="pointer-events-none animate-pulse group-hover/cover:hidden h-2 w-2 rounded-full bg-neutral-600 opacity-20 absolute -right-[2px] -top-[2px]" />
      <div className="pointer-events-none animate-pulse group-hover/cover:hidden h-2 w-2 rounded-full bg-neutral-600 opacity-20 absolute -bottom-[2px] -right-[2px]" />
      <div className="pointer-events-none animate-pulse group-hover/cover:hidden h-2 w-2 rounded-full bg-neutral-600 opacity-20 absolute -left-[2px] -top-[2px]" />
      <div className="pointer-events-none animate-pulse group-hover/cover:hidden h-2 w-2 rounded-full bg-neutral-600 opacity-20 absolute -bottom-[2px] -left-[2px]" />
    </div>
  );
};

// Flip Words Animation
const FlipWords = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="relative inline-block">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
          transition={{ duration: 0.4 }}
          className="z-10 inline-block relative text-left text-neutral-100"
        >
          {words[currentIndex].split('').map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, filter: 'blur(8px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.2, delay: i * 0.03 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Rotating images for the books section
const RotatingImages = ({ images }) => {
  const randomRotation = () => (Math.random() - 0.5) * 15;
  
  return (
    <div className="relative h-max-[400px] flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      <div className="flex flex-row -ml-20">
        {images.slice(0, 5).map((img, i) => (
          <motion.div
            key={i}
            className="rounded-xl -mr-4 mt-4 p-1 bg-neutral-800 border-neutral-700 border shrink-0 overflow-hidden"
            style={{ transform: `rotate(${randomRotation()}deg)` }}
            whileHover={{ scale: 1.1, zIndex: 10 }}
          >
            <img
              alt="media"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
              src={img}
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.slice(0, 5).map((img, i) => (
          <motion.div
            key={i + 5}
            className="rounded-xl -mr-4 mt-4 p-1 bg-neutral-800 border-neutral-700 border shrink-0 overflow-hidden"
            style={{ transform: `rotate(${randomRotation()}deg)` }}
            whileHover={{ scale: 1.1, zIndex: 10 }}
          >
            <img
              alt="media"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
              src={img}
            />
          </motion.div>
        ))}
      </div>
      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-black to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-black to-transparent h-full pointer-events-none" />
    </div>
  );
};

// Globe Container with new World component
const GlobeContainer = () => {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.1, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 3.139, endLng: 101.6869, arcAlt: 0.2, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 2, startLat: 1.3521, startLng: 103.8198, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.2, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 2, startLat: 51.5072, startLng: -0.1276, endLat: 3.139, endLng: 101.6869, arcAlt: 0.3, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 3, startLat: -33.8688, startLng: 151.2093, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 3, startLat: 21.3099, startLng: -157.8581, endLat: 40.7128, endLng: -74.006, arcAlt: 0.3, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 4, startLat: 11.986597, startLng: 8.571831, endLat: -15.595412, endLng: -56.05918, arcAlt: 0.5, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 4, startLat: -34.6037, startLng: -58.3816, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.7, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 5, startLat: 14.5995, startLng: 120.9842, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 5, startLat: 1.3521, startLng: 103.8198, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.2, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 6, startLat: -15.432563, startLng: 28.315853, endLat: 1.094136, endLng: -63.34546, arcAlt: 0.7, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 6, startLat: 37.5665, startLng: 126.978, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.1, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 7, startLat: -19.885592, startLng: -43.951191, endLat: -15.595412, endLng: -56.05918, arcAlt: 0.1, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 7, startLat: 48.8566, startLng: -2.3522, endLat: 52.52, endLng: 13.405, arcAlt: 0.1, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 8, startLat: -8.833221, startLng: 13.264837, endLat: -33.936138, endLng: 18.436529, arcAlt: 0.2, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 8, startLat: 49.2827, startLng: -123.1207, endLat: 52.3676, endLng: 4.9041, arcAlt: 0.2, color: colors[Math.floor(Math.random() * colors.length)] },
  ];

  return (
    <div className="relative w-full h-48 md:h-60 overflow-hidden rounded-lg">
      {/* Background glow */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(90, 84, 255, 0.15) 0%, rgba(4, 13, 33, 0.8) 50%, rgba(4, 13, 33, 1) 100%)',
        }}
      />
      <Suspense fallback={<div className="flex items-center justify-center h-full text-neutral-400">Loading globe...</div>}>
        <World data={sampleArcs} globeConfig={globeConfig} />
      </Suspense>
    </div>
  );
};

// Carousel Card Component with Modal
const CarouselCard = ({ category, title, image, images, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="rounded-3xl h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10 flex-shrink-0 cursor-pointer"
      style={{ backgroundColor: 'rgb(18, 18, 24)' }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
      <div className="relative z-40 p-8">
        <p className="text-white text-sm md:text-base font-medium text-left">{category}</p>
        <p className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left mt-2">{title}</p>
      </div>
      {image && (
        <img
          alt={title}
          className="transition duration-300 object-cover absolute z-10 inset-0 w-full h-full hover:scale-105"
          src={image}
        />
      )}
      {/* Click indicator */}
      <div className="absolute bottom-4 right-4 z-40 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
        <span className="text-white text-xs">Click to explore</span>
      </div>
    </motion.button>
  );
};

// Modal for Carousel Card Details - Shows text summary
const CardModal = ({ isOpen, onClose, item }) => {
  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative bg-[rgb(22,22,29)] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <HiX className="text-white text-xl" />
          </button>

          {/* Header */}
          <div className="p-6 border-b border-neutral-800">
            <p className="text-accent text-sm font-medium">{item.category}</p>
            <h3 className="text-white text-2xl md:text-3xl font-bold mt-1">{item.title}</h3>
          </div>

          {/* Text Summary Content */}
          <div className="p-6 pb-8 overflow-y-auto max-h-[70vh]">
            <div className="bg-neutral-900/50 rounded-2xl p-6">
              <p className="text-white text-lg leading-relaxed">
                <span className="font-bold text-accent">{item.title}</span> {item.summary}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Carousel Component
const Carousel = ({ items }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', checkScroll);
      return () => ref.removeEventListener('scroll', checkScroll);
    }
  }, []);

  return (
    <>
      <div className="relative w-full">
        <div
          ref={scrollRef}
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth"
          style={{ scrollbarWidth: 'none' }}
        >
          <div className="flex flex-row justify-start gap-4 pl-4 max-w-7xl mx-auto">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
              >
                <CarouselCard 
                  {...item} 
                  onClick={() => setSelectedItem(item)}
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mr-10">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
          >
            <HiArrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
          >
            <HiArrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
      
      {/* Modal */}
      <CardModal 
        isOpen={!!selectedItem} 
        onClose={() => setSelectedItem(null)} 
        item={selectedItem} 
      />
    </>
  );
};

// Stats Bar Component
const StatsBar = ({ items }) => {
  const colors = ['bg-blue-500', 'bg-purple-500', 'bg-red-500', 'bg-green-500', 'bg-yellow-500'];
  
  return (
    <div className="group flex h-96 w-32 flex-col gap-1 rounded-md p-1">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`relative w-full rounded-md transition-all ${colors[index % colors.length]}`}
          style={{ height: `${100 / items.length}%` }}
          whileHover={{ scale: 1.05 }}
        >
          <div className={`absolute left-full top-1/2 size-4 -translate-y-1/2 translate-x-1 rotate-45 ${colors[index % colors.length]}`} />
          <div className={`absolute left-full top-1/2 flex w-20 -translate-y-1/2 translate-x-3 justify-center rounded-md ${colors[index % colors.length]}`}>
            <div className="relative px-3 py-2 font-bold">{item.value}</div>
          </div>
          <div className="flex h-full w-full items-center justify-center text-center text-xs font-bold px-1">
            {item.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Extended Stats Bar Component with horizontal layout
const ExtendedStatsBar = ({ items }) => {
  const colors = ['bg-blue-500', 'bg-purple-500', 'bg-red-500', 'bg-green-500', 'bg-yellow-500'];
  
  return (
    <div className="flex flex-col gap-2 w-full lg:w-auto">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className={`${colors[index % colors.length]} rounded-lg px-4 py-2 text-white text-sm font-bold min-w-[120px] text-center`}>
            {item.label}
          </div>
          <div className={`${colors[index % colors.length]} rounded-lg px-4 py-2 text-white text-sm font-bold`}>
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
};

// Meteor Effect for Thank You section
const MeteorEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-0 top-20 m-auto h-14 w-px rounded-full"
          style={{
            background: 'linear-gradient(to top, rgb(0, 255, 153), rgba(0, 255, 153, 0.5), transparent)',
            left: `${100 + i * 200}px`,
          }}
          initial={{ y: -200 }}
          animate={{ y: 800 }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        />
      ))}
    </div>
  );
};

// Main Personal Page Component
const Personal = () => {
  const personalities = ['Curious', 'Passionate', 'Creative', 'Dedicated', 'Disciplined', 'Peaceful'];

  const mediaImages = [
    '/src/assets/shadow.jpg',
    '/personal/interstellar.webp',
    '/src/assets/witcher.jpg',
    '/personal/radiohead.webp',
    '/personal/steinsgate.webp',
  ];

  const carouselItems = [
    { 
      category: 'Computer, IT', 
      title: 'Interest, Coding', 
      image: '/personal/rhgtcqncmymzaunwkpsh.webp',
      summary: 'I love coding so much that I spend hours building projects and learning new technologies. Currently I\'m focused on Full Stack Development with React, Node.js, and AWS. Programming is not just my career choice, it\'s my passion. I started coding in college and haven\'t stopped since. The feeling of solving complex problems and building something from scratch is incredibly satisfying. I also enjoy exploring different programming paradigms and frameworks.'
    },
    { 
      category: 'Music', 
      title: 'Rookie Singer', 
      image: '/personal/wxf2xdvus4t3fqfbluyw.webp',
      summary: 'I love singing so much that I practice almost every day. Currently I\'m learning classical and contemporary songs. Started my singing journey recently and sharing my covers on YouTube. Music has always been a part of my life - it helps me relax and express myself. I believe everyone should have a creative outlet, and singing is mine. I\'m constantly improving and hope to get better with time.'
    },
    { 
      category: 'Chess', 
      title: 'Chess', 
      image: chessImg,
      summary: 'I love playing chess as it sharpens my strategic thinking and problem-solving skills. Chess teaches patience, foresight, and the importance of planning ahead. Every game is a new challenge that helps me think critically and make better decisions. It\'s a game that perfectly combines mental exercise with competitive fun. I enjoy both casual games and studying different openings and strategies to improve my game.'
    },
    { 
      category: 'Books', 
      title: 'Fiction Novels', 
      image: '/personal/kqo4dwwisjmqn6gmikmp.webp',
      summary: 'I love reading so much that I read novels for about 20,000 hours. Currently I have a matcha kindle (absolutely the best thing ever ❤️) and read novels with it everyday. In 10th grade or 2020, when I wanted to start reading books, it coincided with the COVID period, so I couldn\'t buy books. At that time, it was possible to read novels on the computer, so I started reading intensively from this period. I read books for 3-10 hours every day, and haven\'t missed this trend until 2025. Currently hooked on Shadow Slave and Lord of the Mysteries - absolutely captivated by the storytelling and intricate world-building. These novels have completely drawn me in with their compelling narratives and character development.'
    },
    { 
      category: 'Foreign Languages', 
      title: 'Learning Languages', 
      image: '/personal/dpv2bqhztkhyme41pxqa.webp',
      summary: 'I dream of becoming a polyglot someday. Currently learning new languages and planning to study more in the future. Language learning opens doors to new cultures, people, and perspectives. I find it fascinating how different languages express the same ideas in unique ways. It\'s challenging but incredibly rewarding. My goal is to be conversational in at least 3-4 languages in the coming years.'
    },
  ];

  const dailyRoutine = [
    { time: '6:00 AM', activity: 'Wake up' },
    { time: '9:00 AM', activity: 'College' },
    { time: '6:00 PM', activity: 'Coding' },
    { time: '8:00 PM', activity: 'Read books' },
    { time: '9:00 PM', activity: 'Music' },
    { time: '10:30 PM', activity: 'Sleep' },
  ];

  const futurePlans = [
    'Graduation',
    'Travel abroad',
    'Master new technologies',
    'Build impactful projects',
    'Learn more languages',
    'Play more Chess',
    'Read more Books',
    'Make family happy',
  ];

  const stats = [
    { label: 'Books read', value: '+50' },
    { label: 'Animes watched', value: '+300' },
    { label: 'Movies watched', value: '+500' },
    { label: 'Songs learned', value: '+20' },
    { label: 'Projects built', value: '+10' },
  ];

  return (
    <div className="overflow-hidden">
      <Spotlight />
      
      <div className="bg-black-100 flex justify-center items-center flex-col w-full">
        <div className="w-full max-w-7xl mx-auto">
          
          {/* Nickname Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="min-h-[25dvh] sm:h-[30dvh] place-content-center px-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold max-w-7xl mx-auto text-center mt-4 sm:mt-6 relative z-20 py-4 sm:py-6 leading-relaxed">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-white">Hello again?</span> <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-white">My nickname is </span>
                <Cover>Bablu</Cover>
              </h1>
            </div>

            {/* Flip Words Section */}
            <div className="h-auto min-h-[8rem] sm:min-h-[12rem] max-h-[20rem] flex justify-center items-center px-4 py-6 sm:py-8">
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl mx-auto font-normal text-neutral-400 text-center">
                I'm <br className="lg:hidden block" />
                <FlipWords words={personalities} />
                <br />
                <span className="hidden sm:block text-sm sm:text-base md:text-lg">Took me about 72+ hours to Build it.</span>
              </div>
            </div>
          </motion.div>

          {/* Hobbies Section */}
          <motion.div
            className="relative z-20 py-8 sm:py-10 lg:py-40 max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="px-4 sm:px-8">
              <h4 className="text-2xl sm:text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white">
                My Hobbies
              </h4>
              <p className="text-xs sm:text-sm lg:text-base max-w-2xl my-4 mx-auto text-center font-normal text-neutral-300">
                I like to stay active. New hobbies are added almost every year.
              </p>
            </div>

            {/* Hobbies Grid - Exact match to HTML */}
            <div className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-6 mt-8 sm:mt-12 xl:border rounded-md border-neutral-800">
                
                {/* Morning Run - Large card */}
                <div className="p-4 sm:p-8 h-[280px] sm:h-[350px] lg:h-[calc(100vh-400px)] lg:max-h-[600px] relative overflow-hidden col-span-1 lg:col-span-4 border-b lg:border-r border-neutral-800">
                  <p className="max-w-5xl mx-auto text-left tracking-tight text-white text-lg sm:text-xl md:text-2xl md:leading-snug">
                    Morning Run
                  </p>
                  <p className="text-xs sm:text-sm font-normal text-neutral-300 text-left max-w-sm mx-0 md:text-sm my-2">
                    There's something special about running in the morning. It makes me feel truly peaceful (⊗`◟´⊗). I also enjoy playing chess and staying mentally active (〜￣▽￣)〜
                  </p>
                  <div className="h-full w-full">
                    <div className="relative flex h-max-[800px] py-8 px-2 gap-10 h-full">
                      <div className="w-full p-5 mx-auto bg-neutral-900 shadow-2xl group h-full">
                        <div className="flex flex-1 w-full h-full flex-col space-y-2">
                          <img
                            alt="morning run"
                            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
                            src="/personal/morning.webp"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-black via-black to-transparent w-full pointer-events-none" />
                      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-black via-transparent to-transparent w-full pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Enjoyer of good books */}
                <div className="p-4 sm:p-8 h-[280px] sm:h-[350px] lg:h-[calc(100vh-400px)] lg:max-h-[600px] relative overflow-hidden border-b col-span-1 lg:col-span-2 border-neutral-800">
                  <p className="max-w-5xl mx-auto text-left tracking-tight text-white text-lg sm:text-xl md:text-2xl md:leading-snug">
                    Enjoyer of good books
                  </p>
                  <p className="text-xs sm:text-sm font-normal text-neutral-300 text-left max-w-sm mx-0 md:text-sm my-2">
                    I enjoy many pastimes, from video games to movies and music, but reading novels is how I spend most of my time lately.
                  </p>
                  <div className="h-full w-full">
                    <RotatingImages images={mediaImages} />
                  </div>
                </div>

                {/* Music Enthusiast - with YouTube link and singing.png */}
                <div className="p-4 sm:p-8 h-[280px] sm:h-[350px] lg:h-[calc(100vh-400px)] lg:max-h-[600px] relative overflow-hidden col-span-1 lg:col-span-3 lg:border-r border-neutral-800">
                  <p className="max-w-5xl mx-auto text-left tracking-tight text-white text-lg sm:text-xl md:text-2xl md:leading-snug">
                    Music Enthusiast
                  </p>
                  <p className="text-xs sm:text-sm font-normal text-neutral-300 text-left max-w-sm mx-0 md:text-sm my-2">
                    I love singing songs and sharing my music online (❁´◡`❁).
                  </p>
                  <div className="h-full w-full">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex gap-10 h-full group/image"
                      href="https://youtu.be/DCFKz3cUfls?si=LLJhyWuUJxYFZqnt"
                    >
                      <div className="w-full mx-auto bg-transparent group h-full">
                        <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
                          <FaYoutube className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto" />
                          <img
                            alt="singing"
                            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
                            src="/personal/singing.png"
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Dream of Becoming a Polyglot - with 3D Globe */}
                <div className="p-4 sm:p-8 h-[280px] sm:h-[350px] lg:h-[calc(100vh-400px)] lg:max-h-[600px] relative overflow-hidden col-span-1 lg:col-span-3 border-b border-neutral-800">
                  <p className="max-w-5xl mx-auto text-left tracking-tight text-white text-lg sm:text-xl md:text-2xl md:leading-snug">
                    Dream of Becoming a Polyglot
                  </p>
                  <p className="text-xs sm:text-sm font-normal text-neutral-300 text-left max-w-sm mx-0 md:text-sm my-2">
                    Currently learning new languages and planning to study more in the future. No specific goal yet []﹏(￣▽￣)﹏*
                  </p>
                  <div className="h-full w-full mt-2 sm:mt-4">
                    <GlobeContainer />
                    <p className="text-neutral-400 mt-2 sm:mt-4 text-center text-xs sm:text-sm">Languages are bridges to new worlds</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Components of Life Carousel */}
          <motion.div
            className="w-screen max-w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="pl-4 mx-auto text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold text-neutral-200">
              Components of My Life
            </h2>
            <Carousel items={carouselItems} />
          </motion.div>

          {/* Stats Section with Grid Background */}
          <motion.div
            className="flex relative mt-10 sm:mt-20 flex-col gap-4 p-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full absolute left-0 top-0 min-h-full pointer-events-none">
              <img alt="grid" className="w-full h-full opacity-50" src="/personal/footer-grid.svg" />
            </div>
            <div className="flex justify-center relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                
                {/* Daily Routine Card */}
                <div className="col-span-1">
                  <div className="w-full lg:w-72 rounded-3xl border-accent bg-accent/15 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-md font-bold text-white">Daily routine</p>
                      <span className="text-accent">⏰</span>
                    </div>
                    <div className="mt-3 flex flex-col gap-2">
                      {dailyRoutine.map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex-col justify-start tabular-nums">
                            <p className="text-md font-bold text-white">{item.time}</p>
                            <p className="text-xs font-medium text-neutral-400">{item.activity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Future Plans Card */}
                <div className="col-span-1">
                  <div className="h-auto w-full lg:w-72 rounded-3xl bg-zinc-900 p-4">
                    <div className="text-md flex items-center justify-between gap-2 font-bold text-blue-400">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">🔔</span>
                        <p className="text-xl">Future plan</p>
                      </div>
                      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-zinc-700 text-xs text-blue-400">
                        {futurePlans.length}
                      </div>
                    </div>
                    <div className="mt-1 overflow-hidden">
                      {futurePlans.map((plan, index) => (
                        <div key={index} className="flex cursor-pointer items-center gap-3 border-b border-gray-700 py-1">
                          <input
                            className="h-3 w-3 appearance-none rounded-full border-2 border-gray-700"
                            type="checkbox"
                            readOnly
                          />
                          <p className="bg-transparent text-xs font-semibold capitalize text-white">{plan}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stats Section */}
                <div className="col-span-1">
                  <ExtendedStatsBar items={stats} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Thank You Section */}
          <div className="w-full mt-12">
            <div className="relative w-full">
              <button
                className="bg-transparent relative text-xl p-[1px] overflow-hidden md:col-span-2 md:row-span-1 w-full"
                style={{ background: 'rgb(22, 22, 29)', borderRadius: 'calc(1.68rem)' }}
              >
                <div className="relative bg-slate-900/[0.] border backdrop-blur-xl flex items-center justify-center h-full text-sm antialiased w-full text-white p-2 border-slate-800" style={{ borderRadius: 'calc(1.68rem)' }}>
                  <div
                    className="h-96 md:h-[40rem] relative w-full overflow-hidden flex flex-col gap-4 items-center justify-center"
                    style={{ background: 'linear-gradient(rgb(15, 14, 26), rgb(20, 20, 32))' }}
                  >
                    <MeteorEffect />
                    <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-white tracking-tight">
                      For visiting my profile
                      <br />
                      <div className="relative mx-auto inline-block w-max">
                        <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500">
                          <span>Thank you.</span>
                        </div>
                        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                          <span>Thank you.</span>
                        </div>
                      </div>
                    </h2>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Footer */}
          <footer className="relative w-full pt-20 pb-10" id="contact">
            <div className="w-full absolute left-0 -bottom-72 min-h-96 pointer-events-none">
              <img alt="grid" className="w-full h-full opacity-50" src="/personal/footer-grid.svg" />
            </div>
            <div className="flex mb-20 lg:mb-0 gap-y-5 mt-16 md:flex-row flex-col justify-between items-center relative z-10">
              <p className="md:text-base text-sm md:font-normal font-light">Kranthi Yelaboina</p>
              <div className="flex gap-6">
                <a
                  href="https://www.youtube.com/@kranthiyelaboina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.linkedin.com/in/kranthi-yelaboina-a95690295/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/kranthiyelaboina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Personal;

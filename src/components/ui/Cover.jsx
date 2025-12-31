import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

export const Cover = ({ children, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const [beamPositions, setBeamPositions] = useState([]);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const numberOfBeams = Math.floor(rect.width / 10);
      const positions = Array.from({ length: numberOfBeams }, (_, i) => ({
        left: (i * rect.width) / numberOfBeams,
        delay: Math.random() * 2,
      }));
      setBeamPositions(positions);
    }
  }, []);

  return (
    <span
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-block px-2 py-1 group/cover cursor-pointer transition-all duration-200 ${className}`}
    >
      {/* Animated beams on hover */}
      <AnimatePresence>
        {isHovered && (
          <>
            {beamPositions.map((beam, i) => (
              <Beam
                key={i}
                left={beam.left}
                delay={beam.delay}
              />
            ))}
          </>
        )}
      </AnimatePresence>
      
      {/* Background that appears on hover */}
      <motion.span
        className="absolute inset-0 rounded-sm z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          background: "linear-gradient(90deg, #14b8a6 0%, #22d3ee 50%, #818cf8 100%)",
        }}
      />
      
      {/* Sparkles effect */}
      {isHovered && <SparklesCore />}
      
      {/* Gradient lines effect */}
      <motion.span
        className="absolute inset-0 rounded-sm z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{ top: `${15 + i * 15}%` }}
            initial={{ x: "-100%" }}
            animate={isHovered ? { x: "100%" } : { x: "-100%" }}
            transition={{
              duration: 1.5,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
          />
        ))}
      </motion.span>

      {/* Text content */}
      <motion.span
        className="relative z-20 inline-block text-accent"
        animate={{
          scale: isHovered ? 1.1 : 1,
          color: isHovered ? "#ffffff" : "#00ff99",
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
    </span>
  );
};

const Beam = ({ left, delay }) => {
  return (
    <motion.span
      className="absolute top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
      style={{ left }}
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: "100%", opacity: [0, 1, 0] }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1.5,
        delay: delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 2,
      }}
    />
  );
};

const SparklesCore = () => {
  const sparkles = Array.from({ length: 12 });
  
  return (
    <span className="absolute inset-0 z-10 overflow-hidden rounded-sm">
      {sparkles.map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 1 + Math.random(),
            delay: Math.random() * 0.5,
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
          }}
        />
      ))}
    </span>
  );
};

export default Cover;

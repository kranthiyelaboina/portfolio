import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingBar = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Reset and start loading on route change
    setKey(prev => prev + 1);
    setIsLoading(true);
    setProgress(0);

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Fast initial progress, slower towards the end
        const increment = prev < 60 ? 15 : prev < 90 ? 8 : 3;
        return Math.min(prev + increment, 100);
      });
    }, 50);

    // Complete loading after content is ready
    const completeTimer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    }, 400);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
    };
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key={key}
          className="fixed top-0 left-0 right-0 z-[9999] h-[3px]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 shadow-lg shadow-green-500/50"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ 
              duration: 0.1, 
              ease: "easeOut" 
            }}
            style={{
              boxShadow: "0 0 10px rgba(34, 197, 94, 0.8), 0 0 20px rgba(34, 197, 94, 0.4)"
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingBar;

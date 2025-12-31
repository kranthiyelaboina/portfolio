import { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(true);
  const [animationKey, setAnimationKey] = useState(Date.now());
  const prevPathRef = useRef(location.pathname);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip duplicate triggers
    if (prevPathRef.current === location.pathname && !isFirstRender.current) {
      return;
    }
    
    isFirstRender.current = false;
    prevPathRef.current = location.pathname;
    
    // Generate new unique key and start animation
    setAnimationKey(Date.now());
    setIsAnimating(true);
    
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* Page transition overlay - Green bars animation */}
      <AnimatePresence mode="wait">
        {isAnimating && (
          <motion.div 
            key={animationKey}
            className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-[100] flex"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, delay: 0.5 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`bar-${i}`}
                className="h-full w-full bg-green-800"
                initial={{ y: 0 }}
                animate={{ y: '100%' }}
                transition={{ 
                  duration: 0.4, 
                  delay: i * 0.05, 
                  ease: [0.645, 0.045, 0.355, 1] 
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
};

export default PageTransition;

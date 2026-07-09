import { useEffect, useRef } from 'react';
import { useAnimation, useInView, useReducedMotion } from 'framer-motion';

export function useScrollReveal({
  threshold = 0.2,
  once = true,
  stagger = 0.08,
  y = 24,
  blur = 8,
  delay = 0,
  duration = 0.7,
  ease = [0.22, 1, 0.36, 1],
} = {}) {
  const ref = useRef(null);
  const controls = useAnimation();
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { threshold, triggerOnce: once });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : stagger, delayChildren: reduceMotion ? 0 : delay },
    },
  };

  const item = reduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
      }
    : {
        hidden: { opacity: 0, y, filter: `blur(${blur}px)` },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration, ease },
        },
      };

  return { ref, controls, container, item, inView };
}

export default useScrollReveal;

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

/**
 * Count-up animation for numeric stats.
 * @param {number} target - target numeric value
 * @param {object} opts - { duration (ms), decimals, prefix, suffix }
 */
export function useCountUp(target, { duration = 2000, decimals = 0, prefix = '', suffix = '' } = {}) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { threshold: 0.4, triggerOnce: true });

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setValue(target);
      return;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setValue(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration, reduceMotion]);

  const formatted = `${prefix}${value.toFixed(decimals)}${suffix}`;
  return [ref, formatted];
}

export default useCountUp;

import { useRef } from 'react';
import { useScroll, useTransform, useReducedMotion } from 'framer-motion';

/**
 * Multi-depth parallax hook.
 * @param {string} offset - framer useScroll offset, default ['start end', 'end start']
 * @param {Array<[number, number]>} ranges - array of [from, to] y-translate percentages per layer
 * @returns {Array} [containerRef, motionY[]] - ref + array of MotionValues, one per layer
 */
export function useParallax(ranges = [[0, -20]], offset = ['start end', 'end start']) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const motionValues = ranges.map(([from, to]) =>
    useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [`${from}%`, `${to}%`])
  );

  return [ref, motionValues, scrollYProgress];
}

export default useParallax;

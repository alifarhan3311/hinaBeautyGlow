import { useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

export function useMagnetic(strength = 0.32) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const disabled = reduceMotion ||
    (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches);

  const onMouseMove = (e) => {
    if (disabled || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * strength;
    const y = (e.clientY - r.top - r.height / 2) * strength;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const onMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0px, 0px)';
  };

  return { ref, onMouseMove, onMouseLeave, disabled };
}

export default useMagnetic;

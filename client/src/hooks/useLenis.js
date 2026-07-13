import { useEffect } from 'react';
import Lenis from 'lenis';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const isCoarsePointer =
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: coarse)').matches;

export function useLenis(enabled = true) {
  useEffect(() => {
    if (!enabled || prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
      lerp: 0.09,
      smoothTouch: false,
    });

    let id;
    const raf = (time) => {
      lenis.raf(time);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);

    // Allow elements (modals, scroll containers) to opt out
    lenis.on('scroll', () => {});

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, [enabled]);
}

export const lenisDisabled = !isCoarsePointer && !prefersReducedMotion ? false : true;

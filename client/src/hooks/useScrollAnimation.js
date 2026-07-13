// Backward-compatible wrapper around useScrollReveal.
// Existing consumers use { ref, controls }; the new hook also exposes container/item variants.
import { useScrollReveal } from './useScrollReveal';

export function useScrollAnimation(threshold = 0.1) {
  const { ref, controls } = useScrollReveal({ threshold });
  return { ref, controls };
}

export default useScrollAnimation;

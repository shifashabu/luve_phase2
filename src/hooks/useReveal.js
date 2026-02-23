// ─────────────────────────────────────────────────────────
// hooks/useReveal.js
// LESSON: useEffect + IntersectionObserver
// This hook watches when an element enters the viewport
// and adds a "visible" class to trigger CSS animations.
// ─────────────────────────────────────────────────────────

import { useEffect, useRef } from 'react';

function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    // IntersectionObserver fires when element enters/leaves screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // stop watching once visible
        }
      },
      { threshold: 0.12 }
    );

    if (ref.current) observer.observe(ref.current);

    // Cleanup: disconnect observer when component unmounts
    return () => observer.disconnect();
  }, []);

  return ref;
}

export default useReveal;

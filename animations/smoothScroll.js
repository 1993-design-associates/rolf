
import Lenis from "lenis";

const smoothScroll = () => {
  // Initialize Lenis
  const lenis = new Lenis({
    lerp: 0.1, // Smoothing factor
    wheelMultiplier: 0.85, // Scroll speed multiplier
    gestureOrientation: "vertical", // Scroll direction
    normalizeWheel: false, // Keep natural scroll wheel behavior
    smoothTouch: false, // Disable touch smoothing

  });
 
  // Animation frame loop to update Lenis
  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);

  return lenis; // Return Lenis instance for further use if needed
  lenis.stop();
};

export default smoothScroll;

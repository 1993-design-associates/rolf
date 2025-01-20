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

  // Toggle scroll behavior based on button click
  const toggleElements = document.querySelectorAll("[data-lenis-toggle]");
  toggleElements.forEach((element) => {
    element.addEventListener("click", () => {
      element.classList.toggle("stop-scroll");
      if (element.classList.contains("stop-scroll")) {
        lenis.stop();
      } else {
        lenis.start();
      }
    });
  });

  return lenis; // Return Lenis instance for further use if needed
};

export default smoothScroll;

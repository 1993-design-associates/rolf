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

  // Start smooth scrolling when element with data-lenis-start is clicked
  const startElements = document.querySelectorAll("[data-lenis-start]");
  startElements.forEach((element) => {
    element.addEventListener("click", () => {
      lenis.start();
    });
  });

  // Stop smooth scrolling when element with data-lenis-stop is clicked
  const stopElements = document.querySelectorAll("[data-lenis-stop]");
  stopElements.forEach((element) => {
    element.addEventListener("click", () => {
      lenis.stop();
    });
  });
};

export default smoothScroll;

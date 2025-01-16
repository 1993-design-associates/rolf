import anime from "animejs";


const homeHeroTextIn = () => {
  // Split text into letters
  const textElement = document.querySelector('.h1');
  const text = textElement.textContent;
  textElement.innerHTML = text
    .split('')
    .map(letter => `<span>${letter}</span>`)
    .join('');

  // Animate each letter
  anime({
    targets: '.h1 span',
    opacity: [
      { value: 0, duration: 0 }, // Initial state
      { value: 1, duration: 900, easing: 'easeOutSine' }
    ],
    filter: [
      { value: 'blur(10px)', duration: 0 }, // Initial blur
      { value: 'blur(0px)', duration: 800, easing: 'easeOutQuart' }
    ],
    delay: anime.stagger(100, { start: 900,from: 'center' })
  })


};

const preloaderAnime = () => {
  // Set the initial state of the circles
  document.querySelectorAll('.preloader-circle').forEach(circle => {
    circle.style.transform = 'scale(0)';
    circle.style.opacity = '0';
  });

  anime({
    targets: '.preloader-circle',
    scale: [
      { value: 0.5, duration: 0 }, // Initial state
      { value: 1, duration: 1550, easing: 'easeOutQuart' }
    ],
    opacity: [
      { value: 0, duration: 0 }, // Initial state
      { value: 0.5, duration: 1000, easing: 'easeOutExpo' }, // Fade in
      { value: 0, duration: 500, easing: 'easeInOutSine' } // Fade out (ends with scale)
    ],
    delay: anime.stagger(-250, { start: 300 * (document.querySelectorAll('.preloader-circle').length - 1) }),
    complete: function () {
      // Trigger the loader and start the hero text animation
      document.querySelector('#loader-trigger').click();
      homeHeroTextIn();

    }
  });
};

export default preloaderAnime;

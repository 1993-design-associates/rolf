import anime from 'animejs'
import smoothScroll from './smoothScroll'

const homeHeroTextIn = () => {
    const textElement = document.querySelector('.h1');

    // Get the data-direction value or default to 'center' if not specified
    const direction = textElement.dataset.direction || 'center';
    const speed = textElement.dataset.speed || '1500';

    // Split text into letters with spaces as spans
    textElement.innerHTML = [...textElement.textContent]
        .map(
            (letter) =>
                `<span class="${
                    letter === ' ' ? 'space' : ''
                }">${letter}</span>`
        )
        .join('');

    // Animate each letter
    anime.timeline({ autoplay: true }).add({
        targets: '.h1 span',
        translateY: [-25, 0],
        opacity: [0, 1],
        filter: ['blur(10px)', 'blur(0px)'],
        duration: speed,
        easing: 'easeOutCubic',
        delay: anime.stagger(100, { start: 900, from: direction }), // Use the direction value
    });
};


const preloaderAnime = () => {
    //disable page scrolling until the preloader and hero text animation finishes
    //scroll is enabled in line 57
    document.body.style.overflow = 'hidden'

    // Set the initial state of the circles
    document.querySelectorAll('.preloader-circle').forEach((circle) => {
        circle.style.transform = 'scale(0)'
        circle.style.opacity = '0'
    })

    anime({
        targets: '.preloader-circle',
        scale: [
            { value: 0.5, duration: 0 }, // Initial state
            { value: 1, duration: 1550, easing: 'easeOutQuart' },
        ],
        opacity: [
            { value: 0, duration: 0 }, // Initial state
            { value: 0.5, duration: 1000, easing: 'easeOutExpo' }, // Fade in
            { value: 0, duration: 500, easing: 'easeInOutSine' }, // Fade out (ends with scale)
        ],
        delay: anime.stagger(-250, {
            start:
                300 *
                (document.querySelectorAll('.preloader-circle').length - 1),
        }),
        complete: function () {
            smoothScroll()
            document.body.style.overflow = ''
            // Trigger the loader and start the hero text animation
            document.querySelector('#loader-trigger').click()
            homeHeroTextIn()
        },
    })
}

export default preloaderAnime

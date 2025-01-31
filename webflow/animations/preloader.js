import anime from 'animejs'
import smoothScroll from './smoothScroll'

const homeHeroTextIn = () => {
    const textElement = document.querySelector('.h1');

    // Get the data-direction value or default to 'center' if not specified
    const direction = textElement.dataset.direction || 'center';
    const staggerGap  = textElement.dataset.staggergap || '100';

    // Split text into words, wrap letters in spans, and keep spaces separate
    textElement.innerHTML = textElement.textContent
        .split(/\s+/) // Split into words
        .map(word =>
            `<span class="word">${[...word]
                .map(letter => `<span class="letter">${letter}</span>`)
                .join('')}</span>`)
        .join(' <span class="space">&nbsp;</span>'); // Preserve spaces


    // Animate each letter
    anime.timeline({ autoplay: true }).add({
        targets: '.h1 .letter',
        translateY: [-25, 0],
        opacity: [0, 1],
        filter: ['blur(10px)', 'blur(0px)'],
        duration: 1000,
        easing: 'easeOutQuad',
        delay: anime.stagger(staggerGap, { start: 450, from: direction }), // delay starts at 450ms then increase by 100ms for each elements by default
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

import anime from 'animejs';
import smoothScroll from './smoothScroll';

const homeHeroTextIn = () => {
    const textElement = document.querySelector('.h1');
    if (!textElement) return;

    const direction = textElement.dataset.direction || 'center';
    const staggerGap = parseInt(textElement.dataset.staggergap, 10) || 100;

    // Split text into words, wrap letters in spans, and keep spaces separate
    textElement.innerHTML = textElement.textContent
        .split(/\s+/)
        .map(word =>
            `<span class="word">${[...word]
                .map(letter => `<span class="letter">${letter}</span>`).join('')}</span>`
        )
        .join(' <span class="space">&nbsp;</span>'); // Preserve spaces

    // Animate each letter
    anime.timeline({ autoplay: true }).add({
        targets: '.h1 .letter',
        translateY: [-25, 0],
        opacity: [0, 1],
        filter: ['blur(10px)', 'blur(0px)'],
        duration: 1000,
        easing: 'easeOutQuad',
        delay: anime.stagger(staggerGap, { start: 450, from: direction }), // delay starts at 450ms then increase by 100ms for each element by default
    });
};

const preloaderAnime = () => {
    if (sessionStorage.getItem('preloaderPlayed')) return; // Prevent running again on resize/zoom

    const body = document.body;
    const preloaderCircles = document.querySelectorAll('.preloader-circle');
    const loaderTrigger = document.querySelector('#loader-trigger');

    if (!body || !preloaderCircles.length || !loaderTrigger) return;

    // Mark the animation as played
    sessionStorage.setItem('preloaderPlayed', 'true');

    // Disable page scrolling until the preloader and hero text animation finishes
    body.style.overflow = 'hidden';

    // Set the initial state of the circles
    preloaderCircles.forEach(circle => {
        circle.style.transform = 'scale(0)';
        circle.style.opacity = '0';
    });

    anime({
        targets: preloaderCircles,
        scale: [
            { value: 0.5, duration: 0 },
            { value: 1, duration: 1550, easing: 'easeOutQuart' },
        ],
        opacity: [
            { value: 0, duration: 0 },
            { value: 0.5, duration: 1000, easing: 'easeOutExpo' },
            { value: 0, duration: 500, easing: 'easeInOutSine' },
        ],
        delay: anime.stagger(-250, {
            start: 300 * (preloaderCircles.length - 1),
        }),
        complete: () => {
            smoothScroll();
            body.style.overflow = '';
            loaderTrigger.click();
            homeHeroTextIn();
        },
    });
};

// Reset sessionStorage when the page is refreshed
window.addEventListener('beforeunload', () => {
    sessionStorage.removeItem('preloaderPlayed');
});

export default preloaderAnime;

import anime from "animejs";

const textIn = () => {
    document.querySelectorAll('.word-break').forEach(el => {

        // Break text into spans
        el.innerHTML = [...el.textContent]
            .map(char => `<span${char === ' ' ? ' class="space"' : ''} style="opacity: 0;">${char}</span>`)
            .join('');

        // Create an animation for the spans
        const animation = anime({
            targets: el.querySelectorAll('span'),
            opacity: [0, 1],
            autoplay: false,
            delay: (el, i) => 500 + 30 * i,
            duration: 4000,

            //delay: anime.stagger(100, { start: 500,  duration: 2000 }),
            easing: 'easeInSine',
        });

        // Track if animation has been played
        let hasPlayed = false;

        // Add scroll listener for this element
        const onScroll = () => {
            const rect = el.getBoundingClientRect();
            const startTrigger = window.innerHeight * 0.85; // 75% of viewport height
            const endTrigger = window.innerHeight * 0.6; // 25% of viewport height

            const scrollPercent = Math.min(
                Math.max((rect.top - startTrigger) / (endTrigger- startTrigger), 0),
                1
            );

            if (!hasPlayed) {
                // Update animation progress
                animation.seek(scrollPercent * animation.duration);

                // Check if animation has completed
                if (scrollPercent >= 1) {
                    hasPlayed = true;
                }
            }
        };

        window.addEventListener('scroll', onScroll);
        onScroll(); // Trigger initial check in case the element is already in view
    });
};

export default textIn;

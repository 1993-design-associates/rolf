import anime from "animejs";

const titleFadeIn = () => {
    document.querySelectorAll('.h2-display').forEach(el => {
        console.log(`Processing element:`, el);

        // Break text into spans
        el.innerHTML = [...el.textContent]
            .map(char => `<span${char === ' ' ? ' class="space"' : ''} style="opacity: 0;">${char}</span>`)
            .join('');

        // Create an animation for the spans
        const animation = anime({
            targets: el.querySelectorAll('span'),
            opacity: [0, 1],
            filter: ['blur(10px)', 'blur(0px)'],
            autoplay: false,
            delay: anime.stagger(100, { start: 500, from: 'center', duration: 2000 }),
            easing: 'easeOutQuad',
        });

        // Track if animation has been played
        let hasPlayed = false;

        // Add scroll listener for this element
        const onScroll = () => {
            const rect = el.getBoundingClientRect();
            const startTrigger = window.innerHeight * 0.25; // 75% of viewport height
            const endTrigger = window.innerHeight * 0.85; // 25% of viewport height

            // Calculate normalized scroll percent (0 to 1)
            const scrollPercent = Math.min(
                Math.max((rect.top - endTrigger) / (startTrigger - endTrigger), 0),
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

export default titleFadeIn;

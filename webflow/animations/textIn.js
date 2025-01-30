import anime from "animejs";

const textIn = () => {
    const animations = new Map();

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
            easing: 'easeInSine',
        });

        animations.set(el, animation);

        let hasPlayed = false;

        const onScroll = () => {
            const rect = el.getBoundingClientRect();
            const startTrigger = window.innerHeight * 0.85;
            const endTrigger = window.innerHeight * 0.6;

            const scrollPercent = Math.min(
                Math.max((rect.top - startTrigger) / (endTrigger - startTrigger), 0),
                1
            );

            if (!hasPlayed) {
                animation.seek(scrollPercent * animation.duration);

                if (scrollPercent >= 1) {
                    hasPlayed = true;
                }
            }
        };

        window.addEventListener('scroll', onScroll);
        onScroll();
    });

    // Replay animation when a .filter-btn is clicked
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            animations.forEach(animation => {
                console.log(animation);
                animation.seek(animation.duration);
            });
        });
    });
};

export default textIn;

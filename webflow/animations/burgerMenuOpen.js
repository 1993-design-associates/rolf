import anime from 'animejs';

const burgerMenuOpen = () => {
    const navItems = document.querySelectorAll('.nav-item');
    const burgerMenu = document.querySelector('.burger-menu');

    let isAnimating = false; // Flag to track if an animation is running

    burgerMenu.addEventListener('click', () => {
        if (isAnimating) return; // Prevent overlapping animations

        isAnimating = true; // Set flag to true

        anime({
            targets: navItems,
            opacity: [0, 1],
            translateX: [-10, 0],
            delay: anime.stagger(100, { start: 10 }),
            easing: 'easeOutQuad',
            duration: 1000,
            complete: () => {
                isAnimating = false; // Reset flag when animation completes
            },
        });
    });
};

export default burgerMenuOpen;
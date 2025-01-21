import anime from "animejs";

const navOpen = () => {
    const navItems = document.querySelectorAll('.nav-item');
    const burgerMenu = document.querySelector('.burger-menu');

    // Ensure elements exist
    if (!burgerMenu || navItems.length === 0) {
        console.error("Required elements not found in the DOM.");
        return;
    }

    // Add click event listener to the burger menu
    burgerMenu.addEventListener('click', () => {
        console.log("Burger menu clicked");

       anime({
            targets: navItems,
            opacity: [0, 1],
            delay: anime.stagger(100, { start: 500 }), // Staggering delay
            duration: 2000, // Animation duration
            easing: 'easeOutQuad',
        });

    
    });
};

export default navOpen;

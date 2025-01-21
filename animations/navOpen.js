import anime from "animejs";

const navOpen = () => {
    const navItems = document.querySelectorAll('.nav-item');
    const burgerMenu = document.querySelector('.burger-menu');

    // Add click event listener to the burger menu
    burgerMenu.addEventListener('click', () => {
        // Use anime.js to animate the nav items
        anime({
            targets: navItems,
            opacity: [0, 1], // Fade in effect
            translateY: [-20, 0], // Slide in from above
            delay: anime.stagger(100, { start: 900}),
            easing: 'easeOutQuad', // Easing for a smooth animation
            duration: 1500, // Duration of each animation
        });
        console.log("nav-click");
    });
};

// Call the function to initialize the functionality
export default navOpen;

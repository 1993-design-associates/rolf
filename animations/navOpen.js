import anime from "animejs";

const navOpen = () => {
    const navItems = document.querySelectorAll('.nav-item');
    const burgerMenu = document.querySelector('.burger-menu');

    // Add click event listener to the burger menu
    burgerMenu.addEventListener('click', () => {
        console.log("Burger menu clicked");

       anime({
            targets: navItems,
            opacity: [0, 1],
            translateX: [-50, 0],
            delay: anime.stagger(100, { start: 10,  duration: 2000 }),
            duration: 2000, // Animation duration
            easing: 'easeOutQuad',
        });

    
    });
};

export default navOpen;

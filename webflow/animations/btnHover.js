import anime from "animejs";

const btnHover = () => {
    const splitText = (text) => text.replace(/./g, char => `<span class="letter">${char === ' ' ? '&nbsp;' : char}</span>`);

    const animateLetters = (targets, translateFrom, translateTo, opacityFrom, opacityTo) => 
        anime({
            targets,
            translateY: [translateFrom, translateTo],
            opacity: [opacityFrom, opacityTo],
            duration: 800,
            easing: 'easeOutExpo',
            delay: (el, i) => 100 + 30 * i
        });

    document.querySelectorAll('.btn').forEach(button => {
        const [btnRel, btnAbs] = button.querySelectorAll('.btn-text-top, .btn-text-back');

        if (btnRel && btnAbs) {
            btnRel.innerHTML = splitText(btnRel.textContent);
            btnAbs.innerHTML = splitText(btnAbs.textContent);

            const btnRelLetters = btnRel.querySelectorAll('.letter');
            const btnAbsLetters = btnAbs.querySelectorAll('.letter');

            button.addEventListener('mouseenter', () => {
                animateLetters(btnRelLetters, '0%', '-100%', 1, 0); // Move up and fade out
                animateLetters(btnAbsLetters, '110%', '0%', 0, 1); // Move down and fade in
            });

            button.addEventListener('mouseleave', () => {
                [...btnRelLetters, ...btnAbsLetters].forEach(span => {
                    span.style.transform = span.closest('.btn-text-top') ? 'translateY(0%)' : 'translateY(100%)';
                    span.style.opacity = span.closest('.btn-text-top') ? '1' : '0'; // Reset opacity
                });
            });
        }
    });
};

export default btnHover;
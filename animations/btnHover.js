import anime from "animejs";

const btnHover = () => {
    document.querySelectorAll('.btn').forEach(button => {
        const [btnRel, btnAbs] = button.querySelectorAll('.btn-text-top, .btn-text-back');

        if (btnRel && btnAbs) {
            // Split text into spans, preserving spaces
            const splitText = text => text.replace(/./g, char => 
                `<span class="letter">${char === ' ' ? '&nbsp;' : char}</span>`);

            [btnRel, btnAbs].forEach(el => el.innerHTML = splitText(el.textContent));

            const animateLetters = (targets, from, to) => anime({
                targets, translateY: [from, to],
                delay: anime.stagger(50),
                duration: 400,
                easing: 'easeInOutQuad'
            });

            button.addEventListener('mouseenter', () => {
                animateLetters(btnRel.querySelectorAll('.letter'), '0%', '-100%');
                animateLetters(btnAbs.querySelectorAll('.letter'), '0%', '-100%');
            });

            button.addEventListener('mouseleave', () => {
                [...btnRel.querySelectorAll('.letter'), ...btnAbs.querySelectorAll('.letter')]
                    .forEach(span => span.style.transform = span.closest('.btn-text-top') ? 'translateY(0%)' : 'translateY(100%)');
            });
        }
    });
};

export default btnHover;

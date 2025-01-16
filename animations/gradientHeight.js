const gradientHeight = () => {
    const element = document.querySelector('.bg-wrap'); // Use a class selector
    if (element) { // Ensure the element exists
        element.style.height = `${document.documentElement.scrollHeight}px`;
    } else {
        console.warn('Element with class "bg-wrap" not found.');
    }
};

// Call the function initially to set the height
gradientHeight();

// Update the height on window resize
window.addEventListener('resize', gradientHeight);

export default gradientHeight;

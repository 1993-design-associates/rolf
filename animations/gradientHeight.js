const gradientHeight = () => {
    const element = document.querySelector('.bg-wrap'); // Use a class selector


    if (element) { // Ensure the element exists
        // Remove the CSS min-height to avoid conflicts
        element.style.minHeight = 'unset';
        // Dynamically set the height based on the document's height
        element.style.height = `${document.documentElement.scrollHeight}px`;
    } else {
        console.warn('Element with class "bg-wrap" not found.');
    }

};

export default gradientHeight;

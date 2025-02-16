const handleZoom = () => {
    // Store the initial scale and window dimensions
    let initialScale = window.visualViewport.scale;
    let initialWidth = window.innerWidth;
    let initialHeight = window.innerHeight;

    // Function to handle the zoom event
    const handleZoomEvent = () => {
        const currentScale = window.visualViewport.scale;

        // Check if the scale has changed (zooming in or out)
        if (currentScale !== initialScale) {
            // Calculate the new dimensions based on the zoom level
            const newWidth = initialWidth / currentScale;
            const newHeight = initialHeight / currentScale;

            // Adjust the viewport or layout to prevent shifting
            document.body.style.width = `${newWidth}px`;
            document.body.style.height = `${newHeight}px`;
            document.body.style.transform = `scale(${currentScale})`;
            document.body.style.transformOrigin = 'top left';

            // Update the initial scale and dimensions
            initialScale = currentScale;
            initialWidth = newWidth;
            initialHeight = newHeight;
        }
    };

    // Attach the event listeners to the visualViewport
    window.visualViewport.addEventListener('resize', handleZoomEvent);
    window.visualViewport.addEventListener('scroll', handleZoomEvent);
};

export default handleZoom;
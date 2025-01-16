const articleClick = () => {
    // Check if the current breakpoint is desktop
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    if (isDesktop) {
        // Select all tabs
        const tabs = document.querySelectorAll(".article-wrap");

        // Add event listeners to all tabs
        tabs.forEach((tab, index) => {
            tab.addEventListener("click", () => {
                // Remove "active" class from all tabs
                tabs.forEach(otherTab => {
                    otherTab.classList.remove("active");
                });

                // Add "active" class to the clicked tab
                tab.classList.add("active");
            });

            // Simulate a click on the first tab when the page loads
            if (index === 0) {
                tab.click();
            }
        });
    }
};

export default articleClick;

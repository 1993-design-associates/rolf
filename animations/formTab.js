const formTab = () => {
    const tabWraps = document.querySelectorAll(".form-tab-wrap");

    const initializeTabs = (wrap) => {
        const tabMenus = wrap.querySelectorAll(".form-tab");
        const tabContents = wrap.querySelectorAll(".tab-form");

        const activateTab = (index) => {
            // Update active menu
            tabMenus.forEach((menu, i) => {
                menu.classList.toggle("active", i === index);
            });

            // Update tab content with fade effect
            tabContents.forEach((content, i) => {
                if (i === index) {
                    content.style.display = "block";
                    setTimeout(() => (content.style.opacity = 1), 10);
                } else {
                    content.style.opacity = 0;
                    setTimeout(() => (content.style.display = "none"), 500); // Match CSS transition duration
                }
            });
        };

        // Attach click events to tab menu items
        tabMenus.forEach((menu, index) => {
            menu.addEventListener("click", () => activateTab(index));
        });

        // Initialize first tab
        activateTab(0);

        // Check if viewport matches desktop
        const mediaQuery = window.matchMedia("(min-width: 992px)");
        if (mediaQuery.matches) {
            activateTab(0);
        }

        // Reinitialize tabs on viewport resize
        mediaQuery.addEventListener("change", (e) => {
            if (e.matches) {
                activateTab(0);
            } else {
                // Reset styles when switching out of desktop
                tabMenus.forEach(menu => menu.classList.remove("active"));
                tabContents.forEach(content => {
                    content.style.opacity = 0;
                    content.style.display = "none";
                });
            }
        });
    };

    // Initialize tabs for each wrap
    tabWraps.forEach((wrap) => initializeTabs(wrap));
};

export default formTab;

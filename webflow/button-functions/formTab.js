const formTab = () => {
    const tabWraps = document.querySelectorAll('.form-tab-wrap') // Get all tab wraps

    const initializeTabs = (wrap) => {
        const tabMenus = wrap.querySelectorAll('.form-tab') // Tabs within this wrap
        const tabContents = wrap.querySelectorAll('.tab-form') // Contents within this wrap

        const activateTab = (index) => {
            // Update active menu only within the current wrap
            tabMenus.forEach((menu, i) => {
                menu.classList.toggle('active', i === index) // Toggle active class
            })

            // Update tab content with fade effect only within the current wrap
            tabContents.forEach((content, i) => {
                if (i === index) {
                    content.style.display = 'block'
                    setTimeout(() => (content.style.opacity = 1), 10) // Small delay for fade-in effect
                } else {
                    content.style.opacity = 0
                    setTimeout(() => (content.style.display = 'none'), 500) // Delay matches fade-out transition
                }
            })
        }

        const mediaQuery = window.matchMedia('(min-width: 992px)')

        const handleViewportChange = () => {
            if (mediaQuery.matches) {
                activateTab(0) // Activate the first tab on desktop
            } else {
                // Reset styles for non-desktop views
                tabMenus.forEach((menu) => menu.classList.remove('active'))
                tabContents.forEach((content) => {
                    content.style.opacity = 0
                    content.style.display = 'none'
                })
            }
        }

        // Attach click events to tabs within the current wrap
        tabMenus.forEach((menu, index) => {
            menu.addEventListener('click', () => {
                if (mediaQuery.matches) {
                    activateTab(index) // Activate the clicked tab
                }
            })
        })

        // Initialize tabs for desktop view
        if (mediaQuery.matches) {
            activateTab(0) // Activate the first tab by default
        }

        // Listen for viewport changes
        mediaQuery.addEventListener('change', handleViewportChange)
    }

    // Initialize tabs for each wrap
    tabWraps.forEach((wrap) => initializeTabs(wrap))
}

export default formTab

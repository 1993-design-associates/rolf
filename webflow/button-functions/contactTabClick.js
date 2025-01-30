const contactTabClick = () => {
    // Check if the window width is above 1024px (desktop breakpoint)
    if (window.innerWidth > 991) {
        // Select all form-tab-wrap elements
        const tabWraps = document.querySelectorAll('.form-tab-wrap')

        // Iterate through each .form-tab-wrap
        tabWraps.forEach((tabWrap) => {
            // Select all .form-tab elements within the current .form-tab-wrap
            const tabs = tabWrap.querySelectorAll('.form-tab')

            // Add "active" class to the first tab on page load
            if (tabs.length > 0) {
                tabs[0].classList.add('active')
            }

            // Add event listeners to all tabs within the current .form-tab-wrap
            tabs.forEach((tab) => {
                tab.addEventListener('click', () => {
                    // Remove "active" class from all tabs within the current .form-tab-wrap
                    tabs.forEach((otherTab) => {
                        otherTab.classList.remove('active')
                    })

                    // Add "active" class to the clicked tab
                    tab.classList.add('active')
                })
            })
        })
    }
}

export default contactTabClick

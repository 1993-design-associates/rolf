const activeFilter = () => {
    // Check if the window width is above 767px (tablet breakpoint)
    if (window.innerWidth > 767) {

        const filters = document.querySelectorAll(".filter-btn");

        if (filters.length > 0) {
            filters[0].classList.add("active");
        }
        console.log("filter");
        filters.forEach(filter => {
            filters.addEventListener("click", () => {
                // Remove "active" class from all .filter-btn elements
                filters.forEach(otherfilter => {
                    otherfilter.classList.remove("active");
                });

                // Add "active" class to the clicked .filter-btn
                filter.classList.add("active");
            });
        });
    }
};

export default activeFilter;

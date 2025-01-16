const contactTabClick = () => {
    // Select all tabs
    const tabs = document.querySelectorAll(".form-tab");
  
    // Add "active" class to the first tab on page load
    if (tabs.length > 0) {
      tabs[0].classList.add("active");
    }
  
    // Add event listeners to all tabs
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        // Remove "active" class from all tabs
        tabs.forEach(otherTab => {
          otherTab.classList.remove("active");
        });
  
        // Add "active" class to the clicked tab
        tab.classList.add("active");
      });
    });
  };
  
  export default contactTabClick;
  
const handleZoom = () => {
    let lastScale = 1;
  
    document.addEventListener("gesturestart", (e) => {
      e.preventDefault();
    });
  
    document.addEventListener("gesturechange", (e) => {
      const currentScale = e.scale;
      const scrollTop = window.scrollY;
      const scrollLeft = window.scrollX;
  
      if (currentScale !== lastScale) {
        document.body.style.transform = `scale(${1 / currentScale})`;
        document.body.style.transformOrigin = "0 0";
        document.body.style.width = `${currentScale * 100}%`;
      }
  
      window.scrollTo(scrollLeft, scrollTop);
      lastScale = currentScale;
    });
  
    document.addEventListener("gestureend", () => {
      document.body.style.transform = "";
      document.body.style.width = "";
    });
  };
  
  export default handleZoom;
  
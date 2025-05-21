function updateTravelDistance() {
    const travelDist = document.body.scrollWidth + window.innerWidth * 0.5; // wider than viewport
    document.documentElement.style.setProperty('--travel-distance', travelDist + 'px');
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    // Your existing navigation smooth scroll code:
    const links = document.querySelectorAll(".subtext span");
  
    links.forEach(link => {
      link.addEventListener("click", () => {
        const targetId = link.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // Call updateTravelDistance once DOM is ready
    updateTravelDistance();
  });
  
  // Also update travel distance whenever the window resizes
  window.addEventListener('resize', updateTravelDistance);
  
const navBackground = document.querySelector(".nav-background");
document.addEventListener("scroll", () => {
   console.log(window.pageYOffset);
   if (window.pageYOffset == 0) {
      navBackground.style.position = "unset";
      navBackground.style.transition = "all 0.3s ease-in-out";
   } else {
      navBackground.style.position = "fixed";
      navBackground.style.zIndex = "10";
      navBackground.style.transition = "all 0.3s ease-in-out";
   }
});

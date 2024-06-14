const hamburgerButton = document.getElementById("hamburger-button");
const navBar = document.getElementById("nav-bar");

hamburgerButton.addEventListener("click", () => {
    navBar.classList.toggle("show")
    
})
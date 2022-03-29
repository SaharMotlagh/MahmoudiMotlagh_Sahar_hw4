const hambergur = document.getElementsByClassName("hamburger")[0];
const navBar= document.getElementsByClassName("navBar")[0];

hambergur.addEventListener("click", () => {
    navBar.classList.toggle("active")
})
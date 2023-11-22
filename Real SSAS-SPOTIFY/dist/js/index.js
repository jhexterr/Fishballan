const headerNav = document.querySelector(".header-nav");
const burgerBtn = document.querySelector(".first-burger");
burgerBtn.addEventListener("click", () => {
    headerNav.classList.toggle("open");
    burgerBtn.classList.toggle("open");
});
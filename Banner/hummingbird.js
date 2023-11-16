const bar = document.querySelector(".burger-btn");
const sp = document.querySelector("span");
bar.addEventListener("click", () => {
    bar.classList.toggle("open");
    sp.classList.toggle("open");
})
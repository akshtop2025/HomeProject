// menu start
const bar = document.querySelector(".bar");
const navbar = document.querySelector('.list');
const navbarli = document.querySelectorAll(".list li");

bar.addEventListener("click", () => {
    bar.classList.toggle("active");
    navbar.classList.toggle('active');
});

let btn = document.querySelector(".bar");
let icon = btn.querySelector(".fa-bars");
btn.onclick = function () {
    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-times");
    } else {
        icon.classList.replace("fa-times", "fa-bars");
    }
}
// menu end
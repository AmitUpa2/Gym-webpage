const header = document.querySelector("header");
const menubtn = document.querySelector("#menu-btn");
const closemenubtn = document.querySelector("#close-menu-btn");


menubtn.addEventListener("click", ()=> {
    header.classList.toggle("show-mobile-menu");
});

closemenubtn.addEventListener("click", ()=> {
    menubtn.click();
});
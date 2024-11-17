const menu = document.querySelector(".menu");
const hideMenu = document.querySelector(".hidemenu");
menu.onclick = () => {
    hideMenu.classList.toggle("hide");
}
const btnMenu = document.querySelector(".menu__icon");
const menu = document.querySelector(".menu")
const menuItem = document.getElementsByClassName(".menu__item")


btnMenu.addEventListener('click', mobileMenu);
menu.addEventListener('click', mobileMenu);

function mobileMenu() {
    btnMenu.classList.toggle('menu__icon_rotate');
    menu.classList.toggle("menu_active");
}

document.addEventListener('click', (element)=> {
     if (!element.composedPath().includes(document.querySelector(".navigation"))) {
                menu.classList.remove("menu_active")
    }
})
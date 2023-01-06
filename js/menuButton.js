const menuBtnEl = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu__list');


menuBtnEl.addEventListener('click', () => {
    menuBtnEl.classList.toggle('activeList');
    menuList.classList.toggle('activeList');
});
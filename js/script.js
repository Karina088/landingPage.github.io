'use strict';

const menuBtn = document.querySelectorAll('.menu__btn');
menuBtn.forEach(el => el.addEventListener('pointerover',
    (e) => {
        e.target.style.cssText =
            `color: #3A79FF;
    background-color: #D2E1FF;`
    }));

menuBtn.forEach(el => el.addEventListener('pointerout',
    (e) => {
        e.target.style.cssText =
            `color: #697CA6;
    background-color: #D6DAE5;`
    }));


const contentBtn = document.querySelector('.content__btn');
contentBtn.addEventListener('pointerover', () => {
    contentBtn.classList.toggle('animation-content__btn');
});

const custLogo = document.querySelectorAll('div.costumers-logo>img');
custLogo.forEach((el) => {
    el.classList.add('costumers__img');
    document.querySelectorAll('.costumers__img')
        .forEach((el) =>
            el.addEventListener('click', (e) => {
                e.target.style.backgroundColor = '#5982E7';
                console.log(e.target);
            }));
});


document.querySelectorAll('form')
    .forEach(el => el.addEventListener('click',
        (event) => event.preventDefault()));


// document.querySelector('.get-started__links')
//     .addEventListener('click', (event) =>
//         event.preventDefault());

document.querySelectorAll('.blog__info-p')
    .forEach(el => el.addEventListener('click',
        (event) => event.preventDefault()));


// связала кнопку с изображениями в блоке illustration
const btnIllustrator = document.querySelector('.illustration__btn');
const imgIllustrator = document.querySelector('.illustration__img');

btnIllustrator.addEventListener("pointerdown", detectInputType);

function detectInputType(event) {
    switch (event.pointerType) {
        case "mouse":
            btnIllustrator.classList.toggle('color');
            imgIllustrator.classList.toggle('active-img');
            break;
        case "pen":
            btnIllustrator.classList.toggle('color');
            imgIllustrator.classList.toggle('active-img');
            break;
        case "touch":
            btnIllustrator.classList.toggle('color');
            imgIllustrator.classList.toggle('active-img');
            break;
        default:
    }
}

// link for block fearures__transition
const featuresLinkLeftEl = document.querySelector('.features__left');
const featuresLinkEl = document.querySelector('.features__link');

featuresLinkLeftEl.addEventListener('touchmove', () => {
    featuresLinkLeftEl.classList.toggle('features__left-active');
})
featuresLinkEl.addEventListener('touchmove', () => {
    featuresLinkEl.classList.toggle('features__link-active');
})


// прокрутка по ссылкам
function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
}
const link = document.querySelector('.link-features');
const featuresClass = document.querySelector('.features');
const linkBlog = document.querySelector('.link-blog');
const blogEl = document.querySelector('.blog');
const linkPricing = document.querySelector('.link-get-started');
const getStartedEl = document.querySelector('.get-started');

link.addEventListener('pointerover', () => {
    scrollTo(featuresClass);
});
linkBlog.addEventListener('pointerover', () => {
    scrollTo(blogEl);
});
linkPricing.addEventListener('pointerover', () => {
    scrollTo(getStartedEl);
});

// проверяла на соотвествие размеров с макетом
const swiperel = document.querySelector('.illustration');
console.log(swiperel.offsetHeight);
console.log(swiperel.offsetWidth);

'use strict'

// Доделать закрывание с кнопки и по области
const sort = document.querySelector('.sort');
const sortSelectButton = sort.querySelector('.sort__select');
const sortList = sort.querySelector('.sort__list');
const sortLinks = sortList.querySelectorAll('.sort__link');


/* Открываем.закрываем список сортровки */
sortSelectButton.addEventListener('click', () => {
  sortList.classList.toggle('sort__list--open');
  sortSelectButton.classList.toggle('sort__select--open');
});

/* Меняем выбранный вид сортировки */
sortList.addEventListener('click', (evt) => {
  evt.preventDefault();
  const sortSelectType = evt.target;

  sortLinks.forEach((link) => {
    link.classList.remove('sort__link--current');
  });

  sortSelectType.classList.add('sort__link--current');
  sortList.classList.remove('show-sort-list');
  sortSelectButton.classList.remove('show-sort-list');
  sortSelectButton.textContent = sortSelectType.textContent;
});

const mainSiteList = document.querySelector('.site-list');
const navToggle = document.querySelector('.main-nav__toggle-menu');

mainSiteList.classList.remove('main-nav__site-list--nojs');
navToggle.classList.remove('main-nav__toggle-menu--nojs');

if (!mainSiteList.classList.contains('site-list--closed')) {
  mainSiteList.classList.add('site-list--closed');
}

navToggle.addEventListener('click', () => {
  mainSiteList.classList.toggle('site-list--closed');
  navToggle.classList.toggle('main-nav__toggle-menu--opened');
  navToggle.classList.toggle('main-nav__toggle-menu--closed');
});

const swiper = new Swiper('.main-slider__container', {
  navigation: {
    nextEl: '.main-slider__button-next',
    prevEl: '.main-slider__button-prev',
  },

  breakpoints: {
    1380: {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,

        renderBullet: function (index, className) {
          return `<span class="${className}"></span>`;
        },
      },
    },
  }
});

// const link = document.querySelector('.js-login');
// const popup = document.querySelector('.modal');
// const close = popup.querySelector('.modal__button--close');
// const form = popup.querySelector('form');
// const login = popup.querySelector('[name=login]');
// const password = popup.querySelector('[name=password]');

// let isStorageSupport = true;
// let storage = '';

// try {
//   storage = localStorage.getItem('login');
// } catch (err) {
//   isStorageSupport = false;
// }

// link.addEventListener('click', function (evt) {
//   evt.preventDefault();
//   popup.classList.add('modal--show');

//   if (storage) {
//     login.value = storage;
//     password.focus();
//   } else {
//     login.focus();
//   }
// });

// close.addEventListener('click', function (evt) {
//   evt.preventDefault();
//   popup.classList.remove('modal--show');
//   popup.classList.remove('modal--error');
// });

// form.addEventListener('submit', function (evt) {
//   if (!login.value || !password.value) {
//     evt.preventDefault();
//     popup.classList.remove('modal--error');
//     popup.offsetWidth = popup.offsetWidth;
//     popup.classList.add('modal--error');
//   } else {
//     if (isStorageSupport) {
//       localStorage.setItem('login', login.value);
//     }
//   }
// });

// window.addEventListener('keydown', function (evt) {
//   if (evt.keyCode === 27) {
//     evt.preventDefault();

//     if (popup.classList.contains('modal--show')) {
//       popup.classList.remove('modal--show');
//       popup.classList.remove('modal--error');
//     }
//   }
// });

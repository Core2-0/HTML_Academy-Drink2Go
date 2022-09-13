const selectSingle = document.querySelector('.sort');
const selectSingle_title = selectSingle.querySelector('.sort__active');
const selectSingle_labels = selectSingle.querySelectorAll('.sort__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}







// const navMain = document.querySelector('.main-nav');
// const navToggle = document.querySelector('.main-nav__toggle');

// navMain.classList.remove('main-nav--nojs');

// navToggle.addEventListener('click', function() {
//   if (navMain.classList.contains('main-nav--closed')) {
//     navMain.classList.remove('main-nav--closed');
//     navMain.classList.add('main-nav--opened');
//   } else {
//     navMain.classList.add('main-nav--closed');
//     navMain.classList.remove('main-nav--opened');
//   }
// });

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

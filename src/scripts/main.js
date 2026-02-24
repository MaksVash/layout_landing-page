'use strict';

const allSelectors = '.logo, .aside-link, .icon-cros';
const elements = document.querySelectorAll(allSelectors);
const burger = document.querySelector('.icon-burger');
const phone = document.querySelector('.icon-phone');

phone.addEventListener('mouseenter', () => {
  document.querySelector('.phone-number').classList.remove('displey-none');
});

phone.addEventListener('click', () => {
  document.querySelector('.phone-number').classList.add('displey-none');
});

burger.addEventListener('click', () => {
  document.body.classList.add('no-scroll');
});

elements.forEach((el) => {
  el.addEventListener('click', () => {
    document.body.classList.remove('no-scroll');
  });
});

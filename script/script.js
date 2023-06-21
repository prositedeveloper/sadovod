'use strict';


const header = document.querySelector('header');
const burger = document.querySelector('.burger');
const text = document.querySelector('.text');
const undertext = document.querySelector('.under_text');
const back = document.querySelector('.back');
const flow = document.querySelector('.mount');


document.addEventListener('DOMContentLoaded', function() {
    burger.addEventListener('click', function() {
        header.classList.toggle('open');
        document.querySelector('html').classList.toggle('block');
    })
})

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    text.style.top = value / 1.4 + 'px';
    undertext.style.top = value / 1.4 + 'px';
    back.style.bottom = -value / 2.7 + 'px';
    flow.style.bottom = -value / 4 + 'px';
})

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
});



'use strict'

const shcemeSvg = document.querySelector('.shceme__svg');
const totalPriceTag = document.querySelector('.price__total');
const menuButton = document.querySelector('.m-menu');
const menu = document.querySelector('.menu__list');
let cost = 120;
let totalPrice = 0;

shcemeSvg.addEventListener('click', (event) => {
 if(!event.target.classList.contains('booked')){
    event.target.classList.toggle('active');
    let totalSeats = shcemeSvg.querySelectorAll('.active').length;
    totalPrice = totalSeats * cost;
    totalPriceTag.textContent = totalPrice;
    
 }
});

menuButton.addEventListener('click', () =>{
   console.log("Клик");
menu.classList.toggle('is-open');
})
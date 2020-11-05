import './scss/index.scss'
import 'bootstrap/dist/css/bootstrap-grid.css'
import 'rellax';

import './image/home-banner.jpg'
import './image/rt-logo.svg'
import './image/rt-logo-white.svg'
import './image/wave1.svg'
import './image/wave2.svg'
import './image/wave3.svg'
import './image/wave4.svg'
import './image/ent-sol.svg'
import './image/digi-market.svg'




//nav button

window.toggleMenu = function toggleMenu(x) {
        x.classList.toggle("change");
        document.querySelector('.nav-menu').classList.toggle('open')
}



window.onscroll = function scroll(){
    if (window.scrollY < 10){
        document.querySelector('#navigation').classList.remove('white-nav');
    } else{
        document.querySelector('#navigation').classList.add('white-nav');
    } 
}








let Rellax = require('rellax');

new Rellax('.backgroundIndex-banner',{
    speed: 2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
});

new Rellax('.rellax',{
    speed: 2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
});




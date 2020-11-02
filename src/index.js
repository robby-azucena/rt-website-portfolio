import './scss/index.scss'
import 'bootstrap/dist/css/bootstrap-grid.css'
import 'rellax';

import './image/home-banner.jpg'
import './image/rt-logo.svg'
import './image/wave1.svg'
import './image/wave2.svg'
import './image/ent-sol.svg'
import './image/digi-market.svg'




//nav button

window.toggleMenu = function toggleMenu(x) {
    x.classList.toggle("change");
    document.querySelector('.nav-menu').classList.toggle('open')
}








let Rellax = require('rellax');

var rellax = new Rellax('.backgroundIndex-banner', '.rellax',{
    speed: 2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
});



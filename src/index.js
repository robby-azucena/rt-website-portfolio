import './scss/index.scss'
import 'bootstrap/dist/css/bootstrap-grid.css'
import 'rellax';

import './image/home-banner.jpg'
import './image/esg-banner.jpg'
import './image/dm-banner.jpg'
import './image/article.jpg'
import './image/article2.jpg'
import './image/article3.jpg'
import './image/article4.jpg'
import './image/ads.jpg'
import './image/rt-logo.svg'
import './image/rt-logo-white.svg'
import './image/wave1.svg'
import './image/wave2.svg'
import './image/wave3.svg'
import './image/wave4.svg'
import './image/wave5.svg'
import './image/ent-sol.svg'
import './image/digi-market.svg'
import './image/app-dev.svg'
import './image/it-aug.svg'
import './image/ready-2-use.svg'
import './image/sms-connect.svg'
import './image/24-7.svg'
import './image/agile.svg'
import './image/dedicated.svg'
import './image/multi.svg'
import './image/digi-strat.svg'
import './image/influencer.svg'
import './image/market-creative.svg'
import './image/paid-media.svg'
import './image/social-media.svg'
import './image/mobile-app.svg'
import './image/web-app.svg'
import './image/system-int.svg'
import './image/work-tools.svg'
import './image/staff-aug.svg'
import './image/manage-service.svg'
import './image/auth.svg'
import './image/marketing.svg'
import './image/promo.svg'
import './image/transaction.svg'
import './image/bizload.svg'
import './image/kast-logo.svg'




//nav button

window.toggleMenu = function toggleMenu(x) {
        x.classList.toggle("change");
        document.querySelector('.nav-menu').classList.toggle('open')
}


window.expand1 = function expand1(x) {
    if (x.classList.contains('show-btn')){
        x.classList.remove("show-btn");
        x.classList.add("hide-btn");
        document.querySelector('.less1').classList.add("show-btn");
        document.querySelector('#app-dev').classList.add("expand");
    } 
}

window.less1 = function less1(x) {
    if (x.classList.contains('show-btn')){
        x.classList.remove("show-btn");
        x.classList.add("hide-btn");
        document.querySelector('.expand1').classList.add("show-btn");
        document.querySelector('#app-dev').classList.remove("expand");
    } 
}

window.expand2 = function expand2(x) {
    if (x.classList.contains('show-btn')){
        x.classList.remove("show-btn");
        x.classList.add("hide-btn");
        document.querySelector('.less2').classList.add("show-btn");
        document.querySelector('#it-staff').classList.add("expand");
    } 
}

window.less2 = function less2(x) {
    if (x.classList.contains('show-btn')){
        x.classList.remove("show-btn");
        x.classList.add("hide-btn");
        document.querySelector('.expand2').classList.add("show-btn");
        document.querySelector('#it-staff').classList.remove("expand");
    } 
}

window.expand3 = function expand3(x) {
    if (x.classList.contains('show-btn')){
        x.classList.remove("show-btn");
        x.classList.add("hide-btn");
        document.querySelector('.less3').classList.add("show-btn");
        document.querySelector('#sms').classList.add("expand");
    } 
}

window.less3 = function less3(x) {
    if (x.classList.contains('show-btn')){
        x.classList.remove("show-btn");
        x.classList.add("hide-btn");
        document.querySelector('.expand3').classList.add("show-btn");
        document.querySelector('#sms').classList.remove("expand");
    } 
}

window.expand4 = function expand3(x) {
    if (x.classList.contains('show-btn')){
        x.classList.remove("show-btn");
        x.classList.add("hide-btn");
        document.querySelector('.less4').classList.add("show-btn");
        document.querySelector('#ready').classList.add("expand");
    } 
}

window.less4 = function less3(x) {
    if (x.classList.contains('show-btn')){
        x.classList.remove("show-btn");
        x.classList.add("hide-btn");
        document.querySelector('.expand4').classList.add("show-btn");
        document.querySelector('#ready').classList.remove("expand");
    } 
}








window.onscroll = function scroll(){
    if (window.scrollY < 10 && document.querySelector('#navigation')){
        document.querySelector('#navigation').classList.remove('white-nav');
    } else if (window.scrollY > 10 && document.querySelector('#navigation')){
        document.querySelector('#navigation').classList.add('white-nav');
    } 
}








let Rellax = require('rellax');

new Rellax('.background-banner',{
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




import './scss/index.scss'
import 'bootstrap/dist/css/bootstrap-grid.css'

import './image/home-banner.jpg'
import 'rellax';

let Rellax = require('rellax');

var rellax = new Rellax('.rellax',{
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
});

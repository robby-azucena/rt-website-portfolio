import './scss/index.scss'
import 'bootstrap/dist/css/bootstrap-grid.css'
import 'axios'

const axios = require('axios');




axios.get('http://worldtimeapi.org/api/timezone/Asia/Manila')
  .then(function (response) {
    if (response){
        console.log(response.data.timezone)
        document.getElementById("timezone").innerHTML = response.data.timezone;
        document.getElementById("time").innerHTML = response.data.utc_datetime;  
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
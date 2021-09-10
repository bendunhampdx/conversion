import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency.js';

function getElements(response) {
  let country = $('#country').val();

  if (response.result !== "success") {
    const errorTypeIfExists = (response && response['error-type']) ? response['error-type'] : null;
    $('.showErrors').html(`There was an error and the type was ${errorTypeIfExists}!`)
  }
  else if ()
}

$(document).ready(function() {
  $('#convert').click(function() {

  })

})
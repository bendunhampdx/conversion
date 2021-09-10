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
  else if (country === 'United Emirates') {
    let AEDConversion = $('#dollar').val() * response.conversion_rates.AED;
    $('.output').html(`The conversion in AED is ${AEDConversion}`);
  }
  else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $('#convert').click(function() {
    CurrencyService.getCurrency()
    .then(function (response) {
      getElements(response);
    }).catch(function() {
      $('.showErrors').text(`There was an error fethcing informatin from the API.`)
    });
  });
});
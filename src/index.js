import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency.js';



function getElements(response) {
  let country = $('#country').val();

  if (response.result !== "success") {
    const errorTypeIfExists = (response && response['error-type']) ? response['error-type'] : null;
    $('.showErrors').html(`There was an error and the type was ${errorTypeIfExists}!`);
  }
  else if (country === 'United Emirates') {
    let AEDConversion = $('#dollar').val() * response.conversion_rates.AED;
    $('.output').html(`The conversion in AED is ${AEDConversion}`);
  }
  else if (country === 'Afghanistan') {
    let AFNConversion = $('#dollar').val() * response.conversion_rates.AFN;
    $('.output').html(`The conversion in AFN is ${AFNConversion}`);
  }
  else if (country === 'Albania') {
    let ALLConversion = $('#dollar').val() * response.conversion_rates.ALL;
    $('.output').html(`The conversion in ALL is ${ALLConversion}`);
  }
  else if (country === 'Armenia') {
    let AMDConversion = $('#dollar').val() * response.conversion_rates.AMD;
    $('.output').html(`The conversion in AMD is ${AMDConversion}`);
  }
  else if (country === 'Netherlands') {
    let ANGConversion = $('#dollar').val() * response.conversion_rates.ANG;
    $('.output').html(`The conversion in ANG is ${ANGConversion}`);
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
        $('.showErrors').text(`There was an error fethcing informatin from the API.`);
      });
  });
});
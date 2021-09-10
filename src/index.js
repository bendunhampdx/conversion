import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency.js';


$(document).ready(function() {
  $('#convert').click(function() {
    let dollar = $('#dollar').val();
    CurrencyService.getCurrency(dollar)
      .then(function(currencyResponse) {
        if (currencyResponse instanceof Error) {
          throw Error(`ExchangeRae API error: ${currencyResponse.message}`);
        }
      })
  })
});

  
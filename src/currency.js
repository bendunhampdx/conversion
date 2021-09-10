export default class CurrencyService {  
  static geturrency(dollar) {
    return fetch(`https://v6.exchangerate-api.com/v6//latest/USD${process.env.API_KEY}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return Error(error);
      })
  }
}
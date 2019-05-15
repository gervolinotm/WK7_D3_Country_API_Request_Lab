const Country = require('./models/countries.js');
const SelectView = require('./views/select_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');


  const selectCountry = document.querySelector('select#countries');
  const countryDropdown = new SelectView(selectCountry);
  countryDropdown.bindEvents();

  const country = new Country();
  country.getData()
});

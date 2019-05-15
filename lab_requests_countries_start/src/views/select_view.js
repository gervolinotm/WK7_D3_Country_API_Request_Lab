const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element) {
   this.element = element;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:all-countries-ready', (event) =>{
    const allCountries = event.detail
    console.log(allCountries);
    this.populate(allCountries)
  });

  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value
    console.log(selectedIndex)
    PubSub.publish('SelectView:change', selectedIndex)
  })
}


SelectView.prototype.populate = function (allCountriesData) {
  allCountriesData.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.element.appendChild(option);
  });
};

module.exports = SelectView;

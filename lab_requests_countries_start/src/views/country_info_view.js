const PubSub = require('../helpers/pub_sub.js');

const CountryInfoView = function(container){
  this.container = container;
}

CountryInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Country:target-country-ready',(event) => {
  const thisCountry = event.detail
  console.log('this',thisCountry);
  this.render(thisCountry);
  })
}

CountryInfoView.prototype.render = function(thisCountry){
  this.container.innerHTML = '';

  const countryName = document.createElement('h3');
  countryName.textContent = `Welcome to ${thisCountry.name}!!`
  this.container.appendChild(countryName);

  const countryRegion = document.createElement('h4');
  countryRegion.textContent = `We are located in ${thisCountry.region}.`
  this.container.appendChild(countryRegion);

  const countryFlag = document.createElement('IMG');
  countryFlag.src = thisCountry.flag
  this.container.appendChild(countryFlag);

  const countryLanguages = this.createLanguageList(thisCountry.languages);
  this.container.appendChild(countryLanguages);

  const flavorText = document.createElement('h3');
  flavorText.textContent = `All Your Base Are Belong To Us!!`
  this.container.appendChild(flavorText);
 }

CountryInfoView.prototype.createLanguageList = function (countryLanguages) {
  const list = document.createElement('ul')
  list.textContent = `If you know how to speak in...`;

  countryLanguages.forEach((language) => {
    const listItem = document.createElement('li');
    listItem.textContent = language.name;
    list.appendChild(listItem);
  });

  return list;
};


module.exports = CountryInfoView;

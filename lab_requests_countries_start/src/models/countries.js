const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Country = function(){
  this.data = null
}

Country.prototype.getData = function(){
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    this.data = data
    PubSub.publish('Country:all-countries-ready', this.data);
  })

}
Country.prototype.bindEvents = function(){

  PubSub.subscribe('SelectView:change', (event) => {
    const selectedIndex = event.detail;
    this.publishCountryDetails(selectedIndex);
  })
  this.getData();
}

Country.prototype.publishCountryDetails = function (index) {
    const selection = this.data[index]
    PubSub.publish('Country:target-country-ready', selection );
}

module.exports = Country;

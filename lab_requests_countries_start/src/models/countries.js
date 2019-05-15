const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Country = function(){
  this.data = null
}

Country.prototype.getData = function(){
  const request = new RequestHelper('https://restcountries.eu');
  request.get((data) => {
    console.log(data);
    this.data = data.detail
    PubSub.publish('Country:all-countries-ready', this.data);
  })
}


module.exports = Country;

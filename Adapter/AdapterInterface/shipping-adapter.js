const advancedShipping = require('../Interfaces/advanced-shipping');

// adapter interface
class ShippingAdapter {
  
  constructor(credentials) {
    this.shipping = new advancedShipping();
    this.shipping.login(credentials);
  }

  request(zipStart, zipEnd, weight) {
    this.shipping.setStart(zipStart);
    this.shipping.setDestination(zipEnd);
    return this.shipping.calculate(weight);

  }

}

module.exports = ShippingAdapter;
const Vendor = require('../products/vendor');

class VendorFactory {

  create(name) {
    return new Vendor(name);
  }

}

module.exports = new VendorFactory();
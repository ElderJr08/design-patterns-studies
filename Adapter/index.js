const Shipping = require('./Interfaces/shipping');
const ShippingAdapter = require('./AdapterInterface/shipping-adapter');

const shipping = new Shipping();
const credentials = { token: "30a8-6ee1" };
const adapter = new ShippingAdapter(credentials);

let cost = shipping.request("78701", "10010", "2 lbs");

console.log("Old cost: ", cost);

cost = adapter.request("78701", "10010", "2 lbs");

console.log("New cost: " + cost);
const express = require('express');
const route = express.Router();

const storeController = require('../controllers/store');

route.get("/", storeController.getProducts);

route.get("/product-details", storeController.getProductDetails );

route.get("/cart", storeController.getCart);
route.post("/add-to-cart", storeController.addToCart );
route.post("/remove-from-cart", storeController.removeFromCart);


module.exports = route;
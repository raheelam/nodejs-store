const express = require('express');
const route = express.Router();
const path = require('path');

route.get("/", (req, res, next)=>{
    res.render(path.join(__dirname, '../', 'views', 'index.ejs'));

});

route.get("/product-details", (req, res, next)=>{
    res.render(path.join(__dirname, '../', 'views', 'product-details.ejs'));

});

route.get("/cart", (req, res, next)=>{
    res.render(path.join(__dirname, '../', 'views', 'cart.ejs'));

});
route.post("/add-to-cart", (req, res, next)=>{
    res.redirect('/');

});
route.post("/remove-from-cart", (req, res, next)=>{
    res.redirect('/cart');

});


module.exports = route;
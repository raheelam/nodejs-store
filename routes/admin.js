const express = require('express');
const route = express.Router();
const path = require('path');
const productsController = require('../controllers/admin-products')

route.get("/products", productsController);

route.get("/add-product", (req, res, next)=>{
    res.render(path.join(__dirname, '../', 'views', 'add-product.ejs'));

});
route.get("/add-product", (req, res, next)=>{
    res.redirect('/admin/products');

});

route.get("/edit-product", (req, res, next)=>{
    res.render(path.join(__dirname, '../', 'views', 'edit-product.ejs'));

});
route.post("/edit-product", (req, res, next)=>{
    res.redirect('admin/products');

});
route.post("/delete-product", (req, res, next)=>{
    res.redirect('admin/products');

});

module.exports = route;
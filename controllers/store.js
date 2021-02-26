const path = require('path');
const Product = require('../models/product');

exports.getProducts = (req, res, next)=>{
    Product.find()
    .then(products => {
      console.log(products);
      res.render(path.join(__dirname, '../', 'views', 'store','index.ejs'), {
        prods: products,
        pageTitle: 'All Products',
      });
    })
    .catch(err => {
      console.log(err);
    });
   // res.render(path.join(__dirname, '../', 'views', 'store','index.ejs'));

};

exports.getProductDetails = (req, res, next)=>{
    res.render(path.join(__dirname, '../', 'views', 'store','product-details.ejs'), {pageTitle: "Product Detail"});

};

exports.getCart = (req, res, next)=>{
    res.render(path.join(__dirname, '../', 'views', 'store', 'cart.ejs'));

};

exports.addToCart = (req, res, next)=>{
    res.redirect('/');

};

exports.removeFromCart = (req, res, next)=>{
    res.redirect('/cart');

};
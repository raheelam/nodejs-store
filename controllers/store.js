const path = require('path');

exports.getProducts = (req, res, next)=>{
    res.render(path.join(__dirname, '../', 'views', 'store','index.ejs'));

};

exports.getProductDetails = (req, res, next)=>{
    res.render(path.join(__dirname, '../', 'views', 'store','product-details.ejs'));

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

const path = require('path');

exports.getProducts = (req, res, next) =>{
   res.render(path.join(__dirname, '../', 'views','admin', 'admin-products.ejs'));
};

exports.getAddProduct =  (req, res, next)=>{
   res.render(path.join(__dirname, '../', 'views','admin', 'add-product.ejs'));
};

exports.postAddProduct = (req, res, next)=>{
   res.redirect('/admin/products');
};

exports.getEditProduct = (req, res, next)=>{
   res.render(path.join(__dirname, '../', 'views','admin', 'edit-product.ejs'));

};

exports.postEditProduct = (req, res, next)=>{
   res.redirect('/admin/products');

};

exports.postDeleteProduct =  (req, res, next)=>{
   res.redirect('/admin/products');

};


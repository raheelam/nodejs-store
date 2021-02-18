
const path = require('path');

exports.showProducts = (req, res, next) =>{
   res.render(path.join(__dirname, '../', 'views', 'admin-products.ejs'));
};

exports.getAddProduct =  (req, res, next)=>{
   res.render(path.join(__dirname, '../', 'views', 'add-product.ejs'));
};

exports.postAddProduct = (req, res, next)=>{
   res.redirect('/admin/products');
};

exports.getEditProduct = (req, res, next)=>{
   res.render(path.join(__dirname, '../', 'views', 'edit-product.ejs'));

};

exports.postEditProduct = (req, res, next)=>{
   res.redirect('admin/products');

};

exports.postDeleteProduct =  (req, res, next)=>{
   res.redirect('admin/products');

};



const Product = require('../models/product');
const path = require('path');

exports.getProducts = (req, res, next) =>{
   Product.find()
   .then(products => {
     console.log(products);
     res.render(path.join(__dirname, '../', 'views','admin', 'admin-products.ejs'), {
       prods: products,
       pageTitle: 'All Products',
       
     });
   })
   .catch(err => {
     console.log(err);
   });
  
};

exports.getAddProduct =  (req, res, next)=>{
   res.render(path.join(__dirname, '../', 'views','admin', 'add-product.ejs'), {pageTitle: "Add Product"});
};

exports.postAddProduct = (req, res, next)=>{
   const title = req.body.title;
   const imageUrl = req.body.imageUrl;
   const price = req.body.price;
   const description = req.body.description;
   const product = new Product({
     title: title,
     price: price,
     description: description,
     imageUrl: imageUrl,
     
   });
   product
     .save()
     .then(result => {
       // console.log(result);
       console.log('Created Product');
       res.redirect('/admin/products');
     })
     .catch(err => {
       console.log(err);
     });
};

exports.getEditProduct = (req, res, next)=>{
   res.render(path.join(__dirname, '../', 'views','admin', 'edit-product.ejs'), {pageTitle: "Edit Product"});

};

exports.postEditProduct = (req, res, next)=>{
   res.redirect('/admin/products');

};

exports.postDeleteProduct =  (req, res, next)=>{
   res.redirect('/admin/products');

};


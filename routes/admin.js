const express = require('express');
const route = express.Router();
const path = require('path');
const adminController = require('../controllers/admin')

route.get("/products", adminController.showProducts);

route.get("/add-product", adminController.getAddProduct);
route.post("/add-product", adminController.postAddProduct);

route.get("/edit-product", adminController.getEditProduct );
route.post("/edit-product", adminController.postEditProduct);
route.post("/delete-product", adminController.postDeleteProduct);

module.exports = route;
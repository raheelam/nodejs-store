
const path = require('path');

const showProducts = (req, res, next) =>{
   res.render(path.join(__dirname, '../', 'views', 'admin-products.ejs'));
};

module.exports = showProducts;
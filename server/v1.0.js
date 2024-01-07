var express = require('express');
var router = express.Router();

const productRoutes = require('./src/routes/product/productRoutes.js');

// Product Route
router.use('/product', productRoutes);

module.exports = router;
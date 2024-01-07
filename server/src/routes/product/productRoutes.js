const express = require('express');
const productController = require('../../controllers/product/productController');
const router = express.Router();

router.get('/search', productController.searchProduct); //Search Product

module.exports = router;

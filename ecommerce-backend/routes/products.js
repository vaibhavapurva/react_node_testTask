const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/productController');

// Create product
router.post('/', auth, createProduct);

// Get all products
router.get('/', getProducts);

// Update product
router.put('/:id', auth, updateProduct);

// Delete product
router.delete('/:id', auth, deleteProduct);

module.exports = router;

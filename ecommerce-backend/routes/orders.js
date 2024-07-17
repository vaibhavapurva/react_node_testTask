const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createOrder, getOrders, updateOrder } = require('../controllers/orderController');

// Create order
router.post('/', auth, createOrder);

// Get all orders
router.get('/', auth, getOrders);

// Update order
router.put('/:id', auth, updateOrder);

module.exports = router;

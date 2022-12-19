const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const ensureAdminUser = require('../../config/ensureAdminUser');


// GET /api/orders/cart
router.get('/cart', ordersCtrl.cart);
// GET /api/orders
router.get('/', ordersCtrl.getAllForUser);
// GET /api/orders/all
router.get('/all', ordersCtrl.getAllActiveOrders);
// POST /api/orders/cart/items/:id
router.post('/cart/items/:id', ordersCtrl.addToCart);
// POST /api/orders/cart/checkout
router.post('/cart/checkout', ordersCtrl.checkout);
// PUT /api/orders/cart/qty
router.put('/cart/qty', ordersCtrl.setItemQtyInCart);
// PUT /api/order/update
router.put('/update', ensureAdminUser, ordersCtrl.updateOrder);

module.exports = router;

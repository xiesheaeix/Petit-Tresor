const Order = require('../../models/order');

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
  getAllForUser,
  getAllOrders
};

async function getAllOrders(req, res) {
  const orders = await Order.find({isPaid: true});
  res.json(orders);
}

async function getAllForUser(req, res) {
  const orders = await Order.find({user: req.user._id, isPaid: true}).sort('-updatedAt');
  res.json(orders);
}

// A cart is the unpaid order for a user
async function cart(req, res) {
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}

// Add an item to the cart
async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.addItemToCart(req.params.id);
  res.json(cart);
}

// Updates an item's qty in the cart
async function setItemQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.setItemQty(req.body.itemId, req.body.newQty);
  res.json(cart);
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    cart.shipment = req.body;
    await cart.save();
    const newCart = await Order.getCart(req.user._id);
    res.json(newCart);
  } catch(e) {
    console.log(e)
    res.status(500).json(e);
  }
}

import sendRequest from './send-request';

const BASE_URL = '/api/orders';

// Retrieve an unpaid order for the logged in user
export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

// Add an item to the cart
export function addItemToCart(itemId) {
  return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
}

export function setItemQtyInCart(itemId, newQty) {
  console.log(itemId)
  console.log(newQty)
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
}

// Updates the order's (cart's) isPaid property to true
export function checkout(orderData) {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST', orderData);
}

// Fetches all orders for the logged in user
export function getAllForUser() {
  return sendRequest(`${BASE_URL}`);
}

export function getAllActiveOrders() {
    return sendRequest(`${BASE_URL}/all`);
}

export function updateOrder(itemId, orderData) {
  console.log(orderData)
  console.log(itemId)
  return sendRequest(`${BASE_URL}/update`, 'PUT', {itemId, orderData})
}

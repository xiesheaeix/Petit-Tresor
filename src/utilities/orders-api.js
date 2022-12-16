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
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
}

// Updates the order's (cart's) isPaid property to true
export function checkout(orderData) {
    //console.log(orderData);
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST', orderData);
}

// Fetches all orders for the logged in user
export function getAllForUser() {
  return sendRequest(`${BASE_URL}`);
}

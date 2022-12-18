import sendRequest from "./send-request";
const BASE_URL = '/api/items';

export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function getById(itemId) {
  return sendRequest(`${BASE_URL}/${itemId}`);
}

export async function createItem(productData) {
  return sendRequest(`${BASE_URL}/new`, 'POST', productData)
}

export async function removeItem(itemId) {
  return sendRequest(`${BASE_URL}/${itemId}`, 'DELETE');
}
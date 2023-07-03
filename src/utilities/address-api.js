import sendRequest from "./send-request";

const BASE_URL = 'http://localhost:3001/api/my_address';

export async function getAllAddresses() {
  return sendRequest(BASE_URL);
}

export async function getAddressById(addressId) {
  return sendRequest(`${BASE_URL}/${addressId}`);
}

export async function create(addressData) {
  return sendRequest(BASE_URL, 'POST', addressData);
}

export async function update(addressId, updatedAddressData) {
  return sendRequest(`${BASE_URL}/${addressId}`, 'PATCH', updatedAddressData);
}

export async function deleteAddress(addressId) {
  return sendRequest(`${BASE_URL}/${addressId}`, 'DELETE');
}

export async function getMyAddresses() {
  return sendRequest(`${BASE_URL}/my_address`);
}
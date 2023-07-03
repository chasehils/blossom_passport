
import sendRequest from './send-request';
const BASE_URL = 'http://localhost:3001/api/addresses';



  export async function getAddresses() {
    return sendRequest(BASE_URL, 'GET');
  }

  export async function createAddress(address) {
    return sendRequest(BASE_URL, 'POST', address);
  }

  export async function getAddressById(addressId) {
    return sendRequest(BASE_URL + '/' + addressId, 'GET');
  }

  export async function updateAddress(address, addressId) {
    return sendRequest(BASE_URL + '/' + addressId,  'PUT', address);
  }

  export async function deleteAddress(addressId) {
    return sendRequest(BASE_URL + '/' + addressId, 'DELETE');
  }



import axios from 'axios';
const BASE_URL = 'http://localhost:3001/api/users';

class AddressService {
  getAddresses() {
    return axios.get(BASE_URL);
  }

  createAddress(address) {
    return axios.post(BASE_URL, address);
  }

  getAddressById(addressId) {
    return axios.get(BASE_URL + '/' + addressId);
  }

  updateAddress(address, addressId) {
    return axios.put(BASE_URL + '/' + addressId, address);
  }

  deleteAddress(addressId) {
    return axios.delete(BASE_URL + '/' + addressId);
  }
}

export default new AddressService();
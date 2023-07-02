import sendRequest from "./send-request";
const BASE_URL = 'http://localhost:3001/api/users';

export async function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export async function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export async function getUserProfile(userId) {
  return sendRequest(`${BASE_URL}/${userId}`, 'GET');
}

export async function updateUserProfile(userId, updatedProfile) {
  return sendRequest(`${BASE_URL}/${userId}/users-profile`, 'PUT', updatedProfile);
}

export async function addAddress(userId, address) {
  return sendRequest(`${BASE_URL}/${userId}/addresses`, 'PUT', { address, userId });
}

export async function deleteAddress(userId) {
  return sendRequest(`${BASE_URL}/${userId}/addresses`, 'DELETE');
}

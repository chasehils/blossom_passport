// Service modules export business/app logic
// such as managing tokens, etc.
// Service modules often depend upon API modules
// for making AJAX requests to the server.

import * as usersAPI from './users-api';

export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  localStorage.setItem('token', token);
  return getUser();
}

export async function login(credentials) {
  // Delegate the AJAX request to the users-api.js
  // module.
  const token = await usersAPI.login(credentials);
  localStorage.setItem('token', token);
  return getUser();
}

export function logOut() {
  localStorage.removeItem('token');
}

export function getToken() {
  // getItem will return null if the key does not exists
  const token = localStorage.getItem('token');
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  // A JWT's exp is expressed in seconds, not miliseconds
  if (payload.exp * 1000 < Date.now()) {
    // Token has expired
    localStorage.removeItem('token');
    return null;
  }
  return token;
}
console.log('Token')
export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}
console.log('console before getUserProfile')

export async function getUserProfile(userId) {
  try {
    console.log('getUserProfile')
    const response = await usersAPI.getUserProfile(userId); // Make the API request to retrieve the user's profile
    const profileData = await response.json();
    console.log('after profileData', profileData);
    return profileData;
  } catch (error) {
    throw new Error('Failed to retrieve user profile');
  }
}
console.log('before update user profile')

export async function updateUserProfile(userId, updatedProfile) {
  try {
    console.log('Updating user profile')
    const response = await usersAPI.updateUserProfile(userId, updatedProfile); // Make the API request to update the user's profile
    const updatedData = await response.json();
    return updatedData;
  } catch (error) {
    throw new Error('Failed to update user profile');
  }
}

// async function addAddress(userId, addressData) {
//   try {
//     const response = await fetch(`/api/users/${userId}/account`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${getToken()}`,
//       },
//       body: JSON.stringify(addressData),
//     });
//     console.log('before response')
//     if (!response.ok) {
//       throw new Error('Failed to update user address');
//     }
    
//     console.log('response', responseData)
//     const responseData = await response.json(); // Parse the response data

//     return responseData // Return the user data
//   } catch (error) {
//     console.error('Failed to add address:', error);
//     throw error;
//   }
// }


// export {addAddress}
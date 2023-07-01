import React, { useState } from 'react';
import { getUserProfile, updateUserProfile } from '../../utilities/users-service';
import * as usersService from '../../utilities/users-service';
import { addAddress, deleteAddress } from '../../utilities/users-api';


export default function MyAccount(props) {
  // State hooks for address and profile update
  const [address, setAddress] = useState(props.user.address);
  const [addressSubmitted, setAddressSubmitted] = useState(!!props.user.address);
  const [subscriptionLevel, setSubscriptionLevel] = useState(props.user.subscriptionLevel);
  const [updatedAddress, setUpdatedAddress] = useState('');
  const [isEditingAddress, setIsEditingAddress] = useState(false);


  // Handle address submission
 
  const handleAddressSubmit = async () => {
    console.log('handleSubmission')

    try {
      // const id = '649de807d2bf8a9030514a37'; // Replace with your actual user ID
      // Call the addAddress function with the user ID and address data
      const updatedAddressData = await addAddress(props.user._id, address);
      console.log('updatedAddressData', updatedAddressData);
      props.setUser(updatedAddressData) 
      console.log('Address added successfully:', updatedAddressData);
      props.setUser(addressSubmitted)
      setAddress(address)
      setAddressSubmitted(true)
      setIsEditingAddress(false)
      // Optionally, you can update the state or perform other actions after address submission
    } catch (error) {
      console.error('Failed to add address:', error);
    }
  };
 
  const handleEditAddress = () => {
    setIsEditingAddress(true);
    setUpdatedAddress(address)
  };
  
  const handleDeleteAddress = async () => {
    try {
      // Call the deleteAddress function with the user ID
      await deleteAddress(props.user._id, address);
      console.log('Address deleted successfully');
      setAddress('');
      setAddressSubmitted(false);
    } catch (error) {
      console.error('Failed to delete address:', error);
    }
  };

  // Handle profile update
  const handleUpdateProfile = async () => {
    try {
      // Prepare the updated profile data
      const updatedProfile = {
        address,
        subscriptionLevel,
      };
      // Call the updateUserProfile function with the updated profile data
      const updatedData = await updateUserProfile(props.user._id, updatedProfile);
      console.log('User profile updated successfully:', updatedData);
      // Optionally, you can update the state or perform other actions after profile update
    } catch (error) {
      console.error('Failed to update user profile:', error);
    }
  };

  const handleEditProfile = () => {
    setIsEditing(true);
    setUpdatedAddress(address);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSaveAddress = () => {
    setAddress(updatedAddress);
    setIsEditingAddress(false);
  };

  const handleSubscriptionLevelChange = (e) => {
    setSubscriptionLevel(e.target.value);
  };

  // Handle Subscription level submit
  const handleSubscriptionLevelSubmit = async () => {
    try {
      // prepare the updated profile data
      const subLevel = {
        address,
        subscriptionLevel,
      }
      const updatedData = await updateUserProfile(props.user._id, updatedProfile)
      console.log('User profile update successfully', updatedData)
    } catch (error) {
      console.error('Failed to update user profile', error)
    }
  }

  return (
    <div>
      <h2>Hello, {props.user.name}</h2>
      <div>
        <p>My Address: {address}</p>
        <p>Subscription Level: {subscriptionLevel}</p>
      </div>
      {!isEditing && (
        <div>
          <button type="button" onClick={handleEditProfile}>
            Update Profile
          </button>
        </div>
      )}
      {isEditing && (
        <div>
          <div>
            <input type="text" value={updatedAddress} onChange={handleAddressChange} />
            <button type="button" onClick={handleSaveAddress}>
              Save Address
            </button>
            <button type="button" onClick={handleDeleteAddress}>
              Delete Address
            </button>
          </div>
          <div>
            <label>Subscription Level:</label>
            <select value={subscriptionLevel} onChange={handleSubscriptionLevelChange}>
              <option value="">Choose Subscription Level</option>
              <option value="Blossom">Blossom</option>
              <option value="Floral">Floral</option>
              <option value="Botanical">Botanical</option>
            </select>
          </div>
          <button type="button" onClick={handleUpdateProfile}>
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}
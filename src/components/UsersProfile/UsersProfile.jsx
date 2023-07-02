// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { updateUserProfile } from '../../utilities/users-service';
// import { addAddress, deleteAddress, updateUserProfile } from '../../utilities/users-api';


// export default function UserProfile(props) {
//   const [address, setAddress] = useState(props.user.address || '');
//   const [subscriptionLevel, setSubscriptionLevel] = useState(props.user.subscriptionLevel || '');
//   const [updatedAddress, setUpdatedAddress] = useState(address);
//   const [isEditingAddress, setIsEditingAddress] = useState(false);
//   const [addressSubmitted, setAddressSubmitted] = useState(!!props.user.address);

//   const history = useHistory();

//   const handleAddressSubmit = async () => {
//     try {
//       const updatedAddressData = await addAddress(props.user._id, address);
//       console.log('Address added successfully:', updatedAddressData);
//       setAddress(updatedAddressData.address);
//       setIsEditingAddress(false);
//     } catch (error) {
//       console.error('Failed to add address:', error);
//     }
//   };

//   const handleEditAddress = () => {
//     setIsEditingAddress(true);
//     setUpdatedAddress(address);
//   };

//   const handleDeleteAddress = async () => {
//     try {
//       await deleteAddress(props.user._id);
//       console.log('Address deleted successfully');
//       setAddress('');
//     } catch (error) {
//       console.error('Failed to delete address:', error);
//     }
//   };

//   const handleAddressChange = (e) => {
//     setUpdatedAddress(e.target.value);
//   };

//   const handleSaveAddress = () => {
//     setAddress(updatedAddress);
//     setIsEditingAddress(false);
//   };

//   const handleSubscriptionLevelChange = (e) => {
//     setSubscriptionLevel(e.target.value);
//   };

//   const handleSaveChanges = async () => {
//     try {
//       const updatedProfile = {
//         address,
//         subscriptionLevel,
//       };
//       const updatedData = await updateUserProfile(props.user._id, updatedProfile);
//       console.log('User profile updated successfully:', updatedData);
//       history.push('/account'); // Redirect to /account page after saving changes
//     } catch (error) {
//       console.error('Failed to update user profile:', error);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <label>Address:</label>
//         {isEditingAddress ? (
//           <>
//             <input type="text" value={updatedAddress} onChange={handleAddressChange} />
//             <button type="button" onClick={handleSaveAddress}>
//               Save Address
//             </button>
//           </>
//         ) : (
//           <>
//             <p>{address}</p>
//             <button type="button" onClick={handleEditAddress}>
//               Edit Address
//             </button>
//             <button type="button" onClick={handleDeleteAddress}>
//               Delete Address
//             </button>
//           </>
//         )}
//       </div>
//       <div>
//         <label>Subscription Level:</label>
//         <select value={subscriptionLevel} onChange={handleSubscriptionLevelChange}>
//           <option value="">Choose Subscription Level</option>
//           <option value="Blossom">Blossom</option>
//           <option value="Floral">Floral</option>
//           <option value="Botanical">Botanical</option>
//         </select>
//       </div>
//       <button type="button" onClick={handleSaveChanges}>
//         Save Changes
//       </button>
//     </div>
//   );
// }
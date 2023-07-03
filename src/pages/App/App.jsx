import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LoginForm  from '../../components/LoginForm/LoginForm';
import { getUser, updateUserProfile } from '../../utilities/users-service';
import { getUserProfile } from '../../utilities/users-api';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import MyAccount from '../../components/MyAccount/MyAccount';
import ListAddressComponent from '../../components/ListAddress/ListAddress';
import CreateAddressComponent from '../../components/CreateAddress/CreateAddress.jsx';
// import UsersProfile from '../../components/UsersProfile/UsersProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import FlowerList from '../../components/FlowerList/FlowerList';



export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user profile data after the user is logged in
    const userId = '...'; // Get the user ID from the JWT or wherever it's stored
    getUserProfile(userId)
      .then((profileData) => setUser(profileData))
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }, []);

  const handleUpdateProfile = (updatedProfile) => {
    const userId = '...'; // Get the user ID from the JWT or wherever it's stored
    updateUserProfile(userId, updatedProfile)
      .then((updatedUserData) => {
        // Update the user state with the updated profile data
        setUser(updatedUserData);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  // const flowerItems = [
  //   { name: 'Rosa Double Delight', image: '/Flower_pictures/Rosa_Double_Delight.png' },
  //   { name: 'Bourbon Rose', image: '/Flower_Pictures/Bourbon_Rose.png' },
  //   // Add more flower items here
  // ];

  return (
    <main className="App">
      {user ? (
        <>
        <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/addresses" element={<ListAddressComponent user={user} setUser={setUser}/>} />
            <Route path="/add-address" element={<CreateAddressComponent user={user} setUser={setUser}/>} />
            {/* <Route path="/flower-list" element={<FlowerList user={user} setUser={setUser} flowerItems={flowerItems} />}
            /> */}
            {/* <Route path="/user-profile" element={<UsersProfile />} /> */}
            <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/:account"element={<MyAccount user={user} setUser={setUser} updateUserProfile={handleUpdateProfile} />} />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/login" element={<Navigate to="/account" replace />} />

          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

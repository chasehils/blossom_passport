import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  const navigate = useNavigate;

  // Function to handle successful login
  const handleLogin = () => {
    setUser(getUser());
    navigate('/');
  };

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </>
      ) : (
        <AuthPage onLogin={handleLogin} />
      )}
    </main>
  );
}
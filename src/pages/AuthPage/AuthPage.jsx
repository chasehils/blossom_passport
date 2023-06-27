import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ onLogin }) {
  const [showSignUp, setShowSignUp] = useState(false);
  const navigate = useNavigate();

  // Function to handle successful login
 
  return (
    <main>
      <h1>AuthPage</h1>
      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
      {showSignUp ? (
        <SignUpForm setUser={onLogin} />
      ) : (
        <LoginForm setUser={onLogin} />
      )}
    </main>
  );
}
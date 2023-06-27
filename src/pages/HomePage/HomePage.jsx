import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage({ user, onLogout }) {
  return (
    <div>
      <h1>Welcome, {user}!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/order-history">Order History</Link>
          </li>
          <li>
            <Link to="/new-order">New Order</Link>
          </li>
        
          <li>
            <button onClick={onLogout}>Log Out</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

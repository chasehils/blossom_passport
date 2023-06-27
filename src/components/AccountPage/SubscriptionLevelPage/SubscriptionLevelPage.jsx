import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SubscriptionLevelPage() {
  const [selectedLevel] = useState('');
  const navigate = useNavigate();

  function handleSelectLevel(level) {
    navigate('/flowers', { state: { selectedLevel: level } })
  }

  function handleNext() {
    // Perform any necessary actions before proceeding to the next step
    // For example, you can submit the selected level to the server or update user data
    console.log('Selected level:', selectedLevel);
    
    // Redirect or navigate to the next page (FlowerPage)
    navigate.push({
      pathname: '/flowers',
      state: { selectedLevel: selectedLevel }
    });
  }

  return (
    <div>
      <h1>Subscription Level</h1>
      <div>
        <button onClick={() => handleSelectLevel('Blossom')}>
          Blossom
        </button>
        <p>Pick 2 flowers of your choice</p>
      </div>
      <div>
        <button onClick={() => handleSelectLevel('Botanical')}>
          Botanical
        </button>
        <p>Pick 4 flowers of your choice</p>
      </div>
      <div>
        <button onClick={() => handleSelectLevel('Floral')}>
          Floral
        </button>
        <p>Pick 6 flowers of your choice</p>
      </div>
      {selectedLevel && (
        <div>
          <p>Selected Level: {selectedLevel}</p>
          <button onClick={handleNext}>Next</button>
        </div>
      )}
    </div>
  );
}
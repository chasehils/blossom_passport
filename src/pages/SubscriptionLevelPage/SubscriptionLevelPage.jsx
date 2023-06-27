import React, { useState } from 'react';

export default function SubscriptionLevelPage() {
  const [selectedLevel, setSelectedLevel] = useState('');

  function handleSelectLevel(level) {
    setSelectedLevel(level);
  }

  function handleNext() {
    // Perform any necessary actions before proceeding to the next step
    // For example, you can submit the selected level to the server or update user data
    console.log('Selected level:', selectedLevel);
    // Redirect or navigate to the next page
    // Example: history.push('/confirmation');
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
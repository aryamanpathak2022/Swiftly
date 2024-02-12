import React, { useState, useEffect } from 'react';

function App() {
  // State variable to store the value retrieved from local storage
  const [storedValue, setStoredValue] = useState('');

  // Function to retrieve the value from local storage on component mount
  useEffect(() => {
    const storedItem = localStorage.getItem('token'); // Replace 'token' with your actual key
    if (storedItem) {
      setStoredValue(storedItem);
    }
  }, []); // Empty dependency array to run the effect only once on component mount


 

  return (
    <div>
      
      <p>Value stored in local storage: {storedValue}</p>
    </div>
  );
}

export default App;

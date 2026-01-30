import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/data')
      .then(response => response.json())
      .then(data => setBackendMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Vite + React</h1>
        <p>Message from backend: {backendMessage}</p>
      </header>
    </div>
  );
}

export default App;

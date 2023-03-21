import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      return;
    }

    axios.post('http://localhost:8000/api/auth/', null, {
      headers: { Authorization: `Bearer ${accessToken}`},
    })
    .then(response => {
      setIsLoggedIn(true);
      userUsername(true);
      setUserUsername(response.data.username);
    })
  }, []);

  return (

    <div className="App">
      {isLoggedIn ? <Dashboard userUsername={userUsername}
      setIsLoggedIn={setIsLoggedIn} /> : <Authentication
      setIsLoggedIn={setIsLoggedIn}
      setUserUsername={setUserUsername} />}
    </div>
  );
}

export default App;

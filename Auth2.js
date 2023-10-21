// client/src/App.js
import React, { useState } from 'react';
import axios from 'axios';

const Auth2 = () => {
  const [code, setCode] = useState('');
  const [userId, setUserId] = useState('');

  const storeDeviceCode = () => {
    axios.post('http://localhost:3001/api/device-codes', { userId, code })
      .then(response => {
        console.log('Device code stored successfully.');
      })
      .catch(error => {
        console.error('Error storing device code:', error);
      });
  };

  const retrieveDeviceCode = () => {
    axios.get(`http://localhost:3001/api/device-codes/${userId}`)
      .then(response => {
        const { code } = response.data;
        setCode(code);
      })
      .catch(error => {
        console.error('Error retrieving device code:', error);
      });
  };

  return (
    <div>
      <h1>Device Code Management</h1>
      <div>
        <label>User ID: </label>
        <input type="text" value={userId} onChange={e => setUserId(e.target.value)} />
      </div>
      <div>
        <label>Device Code: </label>
        <input type="text" value={code} onChange={e => setCode(e.target.value)} />
      </div>
      <div>
        <button onClick={storeDeviceCode}>Store Device Code</button>
        <button onClick={retrieveDeviceCode}>Retrieve Device Code</button>
      </div>
    </div>
  );
};

export default Auth2;

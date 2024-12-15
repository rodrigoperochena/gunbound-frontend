// src/components/OnlineUsers.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OnlineUsers = () => {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOnlineUsers = async () => {
      try {
        const response = await axios.get('/api/auth/online', { withCredentials: true });
        setOnlineUsers(response.data.onlineUsers);
      } catch (err) {
        setError('Failed to fetch online users');
      }
    };

    fetchOnlineUsers();
  }, []);

  return (
    <div>
      <h1>Online Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {onlineUsers.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default OnlineUsers;
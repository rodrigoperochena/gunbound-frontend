// src/components/LastSeenUsers.jsx
import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { format } from 'date-fns'
import { Link, useSearchParams } from 'react-router-dom';

const LastSeenUsers = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const timeframe = parseInt(searchParams.get('days'), 10) || 1; // Default to 1 days
  const [lastSeenUsers, setLastSeenUsers] = useState([]); // State to store the last seen users
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // Error state

  // Function to handle button clicks and update the URL
  const updateTimeframe = (days) => {
    setSearchParams({ days }); // Update the `days` query parameter in the URL
  };

  const rankNames = {
    20: 'Admin',
    19: 'Chick',
    18: 'Wood Hammer',
    17: 'Double Wood Hammer',
    16: 'Stone Axe'
  }

  const getGradeImage = (grade) => `/assets/grades/${grade}.png`;

  // Fetch online users from the backend
  useEffect(() => {
    const fetchLastSeenUsers = async () => {
      try {
        const response = await fetch(`/api/users/last-seen?days=${timeframe}`); // Fetch users seen in the last week
        if (!response.ok) {
          throw new Error('Failed to fetch last seen users');
        }
        const data = await response.json();
        setLastSeenUsers(data.lastSeenUsers || []); // Update the state with users
      } catch (error) {
        setError(error.message); // Capture error message
      } finally {
        setLoading(false); // End loading state
      }
    };

    fetchLastSeenUsers();
  }, [timeframe]); // Empty dependency array means this runs once after the component mounts

  // Render logic
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>
  
  return (
    <div className="last-seen">
      <div className='container'>
        {/* Buttons to change timeframe */}
        <div className="timeframe-buttons">
          <button className='button' onClick={() => updateTimeframe(1)}>Last Day</button>
          <button className='button' onClick={() => updateTimeframe(3)}>Last 3 Days</button>
          <button className='button' onClick={() => updateTimeframe(7)}>Last Week</button>
        </div>

        <h2 className='heading'> 
          Last seen users in the last {timeframe === 1 ? '24 hours' : `${timeframe} days` } 👀
        </h2>

        {lastSeenUsers.length > 0 ? (
          <ul>
            {lastSeenUsers.map((user) => (
              <li key={user.id}>
                <Link to={`/users/${user.id}`}>
                  <span className="user">{user.id}</span>
                </Link>
                <img
                    src={getGradeImage(user.totalGrade)}
                    alt={`${rankNames[user.totalGrade]} rank`}
                    title={`${rankNames[user.totalGrade]} rank`}
                  /> at {' '}{format(new Date(user.lastLoginTime), 'h:mm aaa, MMM do yyyy')} on {user.serverPort}
              </li>
            ))}
          </ul>
        ) : (
          <p>Nobody... 😔</p>
        )}
      </div>
    </div>
  )
}

export default LastSeenUsers;
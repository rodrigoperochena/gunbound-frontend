import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageBodyClass from '../hooks/usePageBodyClass';

function PlayerList() {
  usePageBodyClass('users-page'); // Add `home-page` class to <body>

  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const getGradeImage = (grade) => `/assets/grades/${grade}.png`;
  const rankNames = {
    20: 'Admin',
    19: 'Chick',
    18: 'Wood Hammer',
    17: 'Double Wood Hammer',
    16: 'Stone Axe'
  }


  // Fetch players data
  const fetchPlayers = async () => {
    try {
      const response = await fetch('/api/users'); // Fetch API call
      if (!response.ok) {
        throw new Error('Failed to fetch players'); // Handle HTTP errors
      }
      const data = await response.json();
      setPlayers(data.users); // Update players state
    } catch (err) {
      console.error('Error fetching players:', err);
      setError(err.message); // Handle and store error
    } finally {
      setLoading(false); // Ensure loading state is updated
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  if (loading) return <p>Loading players...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="users-ranking">
      <div className='container'>
        <h2 className='heading'>Player List <em>&ndash; ranked by GP's</em></h2>
        <ol>
          {players.map((player) => (
            <li key={player.userId}>
              <div className="user">
                <Link to={`/users/${player.userId}`}>{player.userId}</Link>
                <img
                  src={getGradeImage(player.totalGrade)}
                  alt={`${rankNames[player.totalGrade]} rank`}
                  title={rankNames[player.totalGrade]}
                />&mdash; {player.totalScore} GP
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default PlayerList;
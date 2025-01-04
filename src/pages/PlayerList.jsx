import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageBodyClass from '../hooks/usePageBodyClass';
import trico from '../assets/images/trico.gif';

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

  if (loading) return (
    <div className="container">
      <img src={trico} alt="trico loading" />
    </div>
  )
  if (error) return (
    <div className="container">
      <p>Error: {error}</p>
    </div>
  )

  return (
    <div className="users-ranking">
      <div className='container'>
        <div className="main-header">
          <h2 className='heading'>Player Rankings <em>&ndash; ranked by GP's</em></h2>
          <p>Here’s the ranked list of players, sorted by their game points (GP). Click on any username to view detailed player stats.</p>
        </div>
        <ol>
          {players.map((player) => (
            <li key={player.userId}>
              <div className="user">
                <Link to={`/player-rankings/${player.userId}`}>{player.userId}</Link>
                <img
                  src={getGradeImage(player.totalGrade)}
                  alt={`${rankNames[player.totalGrade]} rank`}
                  title={rankNames[player.totalGrade]}
                /><em>&mdash; ({player.totalScore} GP)</em>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default PlayerList;
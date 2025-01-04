import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // For dynamic routing
import { format } from 'date-fns';
import usePageBodyClass from '../hooks/usePageBodyClass';
import Flag from 'react-flagpack';
import raon from '../assets/images/raon-vehicle.gif';

const getGradeImage = (grade) => `/assets/grades/${grade}.png`;
const rankNames = {
  20: 'Admin',
  19: 'Chick',
  18: 'Wood Hammer',
  17: 'Double Wood Hammer',
  16: 'Stone Axe',
}

const countryFlags = {
  Argentina: 'ARG',
  Peru: 'PER',
  Indonesia: 'IDN',
  Brasil: 'BRA',
  USA: 'USA'
}

const PlayerDetails = () => {
  usePageBodyClass('users-page'); // Add `home-page` class to <body>
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams(); // Get the 'id' from the URL

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`/api/users/${id}`);
        if (!response.ok) {
          throw new Error('User not found');
        }
        const data = await response.json();
        setUserDetails(data.user); // Set user details in state
      } catch (error) {
        setError(error.message); // Set error if fetching fails
      } finally {
        setLoading(false); // Stop loading once done
      }
    };

    fetchUserDetails();
  }, [id]); // Runs whenever the 'id' in the URL changes

  if (loading) return (
    <div className="container">
      <img src={raon} alt="raon loading" />
    </div>
  )
  if (error) return (
    <div className="container">
      <p>Error: {error}</p>
    </div>
  )
  

  return (
    <div className="user-details">
      <div className='container'>
        <div className="main-header">
          <h3 className='heading'>🎮 {userDetails.userId}</h3>
          <p>Welcome to <span>{userDetails.userId}'s</span> profile. Find their rank, game points, and more&nbsp;below.</p>
        </div>
        <div className="player-overview">
          <h4 className="heading">🕹 Overview</h4>
          <ul className="user-details-list">
            <li className='user' title='User ID'>
              Username: {userDetails.userId}
            </li>
            <li className='rank' title='Game Rank'>Rank: 
              <img
                src={getGradeImage(userDetails.totalGrade)}
                alt={`Grade ${userDetails.totalGrade}`}
              />
              {rankNames[userDetails.totalGrade]}
              </li>
            <li title='Country'>Country:
              <Flag
                code={countryFlags[userDetails.country]}
                size="m"
                hasBorderRadius
              />
              {userDetails.country}
            </li>
            <li title='Last Login Time'>Last Online: {' '}{format(new Date(userDetails.lastLoginTime), 'h:mm aaa, MMM do yyyy')}</li>
          </ul>
        </div>

        <div className="game-stats">
          <h4 className='heading'>📊 Game Stats</h4>
          <ul className="user-details-list">
          <li className='gp' title='Game Points'>GP: <span className="mono-font">{userDetails.totalScore}</span></li>
          <li title='win-rate'>Win Rate:<span className="mono-font">{userDetails.winRate}%</span></li>
          <li title='Gold'>Gold: <span className="mono-font gold">{userDetails.money}</span></li>
          <li title='Cash'>Cash: <span className="mono-font cash">{userDetails.cash}</span></li>
        </ul>

        </div>
      </div>
    </div>
  );
};

export default PlayerDetails;
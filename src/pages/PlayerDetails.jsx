import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // For dynamic routing
import { format } from 'date-fns';
import usePageBodyClass from '../hooks/usePageBodyClass';
import Flag from 'react-flagpack';

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="user-details">
      <div className='container'>
        <h3 className='heading'>User Details📝</h3>
        <ul className="user-details-list">
          <li className='user'>
            User: {userDetails.userId}
          </li>
          <li className='rank'>Rank:
            <img
              src={getGradeImage(userDetails.totalGrade)}
              alt={`Grade ${userDetails.totalGrade}`}
            />
            {rankNames[userDetails.totalGrade]}
            </li>
          <li>GP: {userDetails.totalScore}</li>
          <li>Gold: <span className="gold">{userDetails.money}</span></li>
          <li>Cash: <span className="cash">{userDetails.cash}</span></li>
          <li>Country: 
            <Flag 
              code={countryFlags[userDetails.country]} 
              size="m"
              hasBorderRadius
            />
            {userDetails.country}
          </li>
          <li>Last Login: {' '}{format(new Date(userDetails.lastLoginTime), 'h:mm aaa, MMM do yyyy')}</li>
        </ul>
      </div>
    </div>
  );
};

export default PlayerDetails;
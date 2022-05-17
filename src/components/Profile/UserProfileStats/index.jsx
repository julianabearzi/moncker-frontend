import React from 'react';
import './profilestats.css';

const UserProfileStats = ({ numOfTransExp, numOfTransInc }) => {
  return (
    <div className="userProfileStatsContainer">
      <span className="totalExpenses">Number of Expenses: {numOfTransExp}</span>
      <span className="totalIncome">Number of Income: {numOfTransInc}</span>
    </div>
  );
};

export default UserProfileStats;

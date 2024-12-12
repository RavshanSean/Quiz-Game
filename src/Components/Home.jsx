import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Quiz App</h1>
      <Link to="/quiz">
        <button className="start-btn">Dev Quiz</button>
      </Link>
      <Link to="/app-languages">
          <button className="start-btn">Apps and Languages Quiz</button>
        </Link>
    </div>
  );
};

export default Home;

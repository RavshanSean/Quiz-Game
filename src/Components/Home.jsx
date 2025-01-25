import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
  return (
    <div className="home-container">
      <h1 className='text'>Welcome Developers...</h1>
      <div className="button-container">
        
        <Link to="/app-languages">
          <button className="button">Noob</button>
        </Link>
        <Link to="/pro-quiz">
          <button className="button">Pro</button>
        </Link>
        
      </div>
      
    </div>
  );
};

export default Home;

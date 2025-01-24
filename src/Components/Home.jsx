import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import tata from '../assets/tata.gif'; 

const Home = () => {
  return (
    <div className="home-container">
      <h1 className='text'>Welcome</h1>
      <div className="button-container">
        
        <Link to="/app-languages">
          <button className="button">Noob Quiz</button>
        </Link>
        <Link to="/pro-quiz">
          <button className="button">Pro Quiz</button>
        </Link>
        
      </div>
      <img src={tata} alt="NPC" className="bottom-right-gif" />
    </div>
  );
};

export default Home;

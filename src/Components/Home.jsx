import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
  return (
    <div className="home-container">
      <h1 className='text'>Welcome to the Quiz App</h1>
      <Link to="/quiz">
         <button className="button">Developer Quiz</button>
      </Link>
      <Link to="/app-languages">
          <button className="button">Languages Quiz</button>
      </Link>
      <Link to="/css-quiz">
         <button className="button">CSS Quiz</button>
      </Link>
      <Link to="/html-quiz">
         <button className="button">Html Quiz</button>
      </Link>
      <Link to="/javascript-quiz">
         <button className="button">JavaScript Quiz</button>
      </Link>
      <Link to="/python-quiz">
         <button className="button">Python Quiz</button>
      </Link>
      <Link to="/database-quiz">
         <button className="button">Database Quiz</button>
      </Link>
      <Link to="/csharp-quiz">
        <button className="button">C# Quiz</button>
      </Link>

    </div>
  );
};

export default Home;

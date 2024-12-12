import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Quiz App</h1>
      <Link to="/quiz">
         <button className="start-btn">Developer Quiz</button>
      </Link>
      <Link to="/app-languages">
          <button className="start-btn">Programming Languages Quiz</button>
      </Link>
      <Link to="/css-quiz">
         <button className="quiz-btn">CSS Quiz</button>
      </Link>
      <Link to="/html-quiz">
         <button className="quiz-btn">Html Quiz</button>
      </Link>
      <Link to="/javascript-quiz">
         <button className="quiz-btn">JavaScript Quiz</button>
      </Link>
      <Link to="/python-quiz">
         <button className="quiz-btn">Python Quiz</button>
      </Link>
      <Link to="/database-quiz">
         <button className="quiz-btn">Database Quiz</button>
      </Link>
      <Link to="/csharp-quiz">
        <button className="quiz-btn">C# Quiz</button>
      </Link>

    </div>
  );
};

export default Home;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './Components/Quiz/Quiz'; // regular quiz 
import Home from './Components/Home'; // Create this component
import AppLanguagesQuiz from './Components/AppLanguagesQuiz/AppLanguagesQuiz'; // app and games quiz
import CssQuiz from './Components/CssQuiz/CssQuiz'; // css quiz


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page */}
        <Route path="/quiz" element={<Quiz />} /> {/* Quiz Page */}
        <Route path="/app-languages" element={<AppLanguagesQuiz />} /> {/* App Languages Quiz */}
        <Route path="/css-quiz" element={<CssQuiz />}/>
      </Routes>
    </Router>
  );
};

export default App;

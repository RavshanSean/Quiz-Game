import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './Components/Quiz/Quiz';
import Home from './Components/Home'; // Create this component
import AppLanguagesQuiz from './Components/AppLanguagesQuiz/AppLanguagesQuiz'; // app and games quiz


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page */}
        <Route path="/quiz" element={<Quiz />} /> {/* Quiz Page */}
        <Route path="/app-languages" element={<AppLanguagesQuiz />} /> {/* App Languages Quiz */}
      </Routes>
    </Router>
  );
};

export default App;

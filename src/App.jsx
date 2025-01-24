import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'; 
import AppLanguagesQuiz from './Components/AppLanguagesQuiz/AppLanguagesQuiz'; 
import ProQuiz from './Components/ProQuiz/ProQuiz'; 



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/app-languages" element={<AppLanguagesQuiz />} /> 
        <Route path="/pro-quiz" element={<ProQuiz />}/> 
      </Routes>
    </Router>
  );
};

export default App;

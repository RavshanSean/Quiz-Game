import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './Components/Quiz/Quiz'; 
import Home from './Components/Home'; 
import AppLanguagesQuiz from './Components/AppLanguagesQuiz/AppLanguagesQuiz'; 
import CssQuiz from './Components/CssQuiz/CssQuiz'; 
import HtmlQuiz from './Components/HtmlQuiz/HtmlQuiz'; 
import JavaScriptQuiz from './Components/JavaScriptQuiz/JavaScriptQuiz'; 
import PythonQuiz from './Components/PythonQuiz/PythonQuiz'; 
import DatabaseQuiz from './Components/DatabaseQuiz/DatabaseQuiz'; 
import CSharpQuiz from './Components/CSharpQuiz/CSharpQuiz'; 



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/quiz" element={<Quiz />} /> 
        <Route path="/app-languages" element={<AppLanguagesQuiz />} /> 
        <Route path="/css-quiz" element={<CssQuiz />}/> 
        <Route path="/html-quiz" element={<HtmlQuiz />} /> 
        <Route path="/javascript-quiz" element={<JavaScriptQuiz />} /> 
        <Route path="/python-quiz" element={<PythonQuiz />} /> 
        <Route path="/database-quiz" element={<DatabaseQuiz />} /> 
        <Route path="/csharp-quiz" element={<CSharpQuiz />} /> 
      </Routes>
    </Router>
  );
};

export default App;

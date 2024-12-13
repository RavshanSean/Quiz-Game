import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './Components/Quiz/Quiz'; // regular quiz 
import Home from './Components/Home'; // main home
import AppLanguagesQuiz from './Components/AppLanguagesQuiz/AppLanguagesQuiz'; // app and games quiz
import CssQuiz from './Components/CssQuiz/CssQuiz'; // css quiz
import HtmlQuiz from './Components/HtmlQuiz/HtmlQuiz'; // html quiz
import JavaScriptQuiz from './Components/JavaScriptQuiz/JavaScriptQuiz'; //JavaScript quiz
import PythonQuiz from './Components/PythonQuiz/PythonQuiz'; // Python quiz
import DatabaseQuiz from './Components/DatabaseQuiz/DatabaseQuiz'; // database quiz
import CSharpQuiz from './Components/CSharpQuiz/CSharpQuiz'; // C# quiz



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page */}
        <Route path="/quiz" element={<Quiz />} /> {/* Quiz Page */}
        <Route path="/app-languages" element={<AppLanguagesQuiz />} /> {/* App Languages Quiz */}
        <Route path="/css-quiz" element={<CssQuiz />}/> {/* css Quiz */}
        <Route path="/html-quiz" element={<HtmlQuiz />} /> {/* html Quiz */}
        <Route path="/javascript-quiz" element={<JavaScriptQuiz />} /> {/* js quiz */}
        <Route path="/python-quiz" element={<PythonQuiz />} /> {/* Python quiz */}
        <Route path="/database-quiz" element={<DatabaseQuiz />} /> {/* database quiz */}
        <Route path="/csharp-quiz" element={<CSharpQuiz />} /> {/* C# Quiz */}
      </Routes>
    </Router>
  );
};

export default App;

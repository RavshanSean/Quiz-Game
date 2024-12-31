import React, { useRef, useState, useEffect } from 'react';
import './CssQuiz.css';
import { cssQuizData } from '../../assets/cssQuizData';
import { Link } from 'react-router-dom'; 
import Weather from '../../assets/weather'; 

const CssQuiz = () => {
  let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  let [quizQuestions, setQuizQuestions] = useState([]);  
  let [currentQuestion, setCurrentQuestion] = useState(null);  
  let [isLocked, setIsLocked] = useState(false);
  let [quizScore, setQuizScore] = useState(0);
  let [showResult, setShowResult] = useState(false);

  let optionOneRef = useRef(null);
  let optionTwoRef = useRef(null);
  let optionThreeRef = useRef(null);
  let optionFourRef = useRef(null);

  let optionsRefs = [optionOneRef, optionTwoRef, optionThreeRef, optionFourRef];

  const shuffleQuestions = () => {
    const shuffled = [...cssQuizData].sort(() => Math.random() - 0.5); 
    return shuffled.slice(0, 50); 
  };

  useEffect(() => {
    const randomized = shuffleQuestions();
    setQuizQuestions(randomized);  
    setCurrentQuestion(randomized[0]); 
  }, []); 

  const handleAnswerCheck = (e, selectedOption) => {
    if (!isLocked) {
      if (currentQuestion.ans === selectedOption) {
        e.target.classList.add('correct-answer');
        setIsLocked(true);
        setQuizScore((prev) => prev + 1);
      } else {
        e.target.classList.add('wrong-answer');
        setIsLocked(true);
        optionsRefs[currentQuestion.ans - 1].current.classList.add('correct-answer');
      }
    }
  };

  const goToNextQuestion = () => {
    if (isLocked) {
      if (currentQuestionIndex === quizQuestions.length - 1) {
        setShowResult(true);
        return;
      }
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setCurrentQuestion(quizQuestions[currentQuestionIndex + 1]); 
      setIsLocked(false);
      optionsRefs.forEach((option) => {
        option.current.classList.remove('wrong-answer');
        option.current.classList.remove('correct-answer');
      });
    }
  };

  const restartQuiz = () => {
    const randomized = shuffleQuestions(); 
    setCurrentQuestionIndex(0);
    setQuizQuestions(randomized); 
    setCurrentQuestion(randomized[0]); 
    setQuizScore(0);
    setIsLocked(false);
    setShowResult(false);
  };

  return (
    
    <div className='quiz-wrapper'>
      <div className="background-images-wrapper">
         <img src="/src/assets/first.png" alt="Background 1" className="background-image first-image" />
         <img src="/src/assets/second.png" alt="Background 2" className="background-image second-image" />
     </div>
     <div className="background-5">
         <img src="/src/assets/5th.png" alt="Background 5" className="background-city" />
     </div>
     <h6 className="css-quiz"><Weather /></h6>
      <Link to="/">
        <button className="home-button">Home</button>
      </Link>
      <h5>CSS </h5>
      <hr />
      {!showResult ? (
        <>
        <div className="css-question-box">
          <h2 className="css-question">{currentQuestionIndex + 1}. {currentQuestion?.question}</h2></div>
          <ul className='css-options'>
            <li className="css-option" ref={optionOneRef} onClick={(e) => handleAnswerCheck(e, 1)}>{currentQuestion?.option1}</li>
            <li className="css-option" ref={optionTwoRef} onClick={(e) => handleAnswerCheck(e, 2)}>{currentQuestion?.option2}</li>
            <li className="css-option" ref={optionThreeRef} onClick={(e) => handleAnswerCheck(e, 3)}>{currentQuestion?.option3}</li>
            <li className="css-option" ref={optionFourRef} onClick={(e) => handleAnswerCheck(e, 4)}>{currentQuestion?.option4}</li>
          </ul>
          <button onClick={goToNextQuestion} className='next-button'>Next</button>
          <div className='question-counter'>{currentQuestionIndex + 1} of {quizQuestions.length} questions</div>
        </>
      ) : (
        <>
        <div className='css-score2'><h5 className='score1'>You Scored {quizScore} out of {quizQuestions.length}</h5></div>
     
          <button onClick={restartQuiz} className='reset-button'>Restart</button>
        </>
      )}
    </div>
  );
};

export default CssQuiz;

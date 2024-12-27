import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';
import { data } from '../../assets/data';
import DigitalClock from '../../assets/DigitalClock';

import Weather from '../../assets/weather'; 



const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [questions, setQuestions] = useState([]);
  let [question, setQuestion] = useState(null);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);
  let [questionTyped, setQuestionTyped] = useState(false);
  let [optionsVisible, setOptionsVisible] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];

  const randomizeQuestions = () => {
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 50);
  };

  useEffect(() => {
    const randomized = randomizeQuestions();
    setQuestions(randomized);
    setQuestion(randomized[0]);
  }, []);

  useEffect(() => {
    if (question) {
      setQuestionTyped(false);
      let typedQuestion = '';
      let charIndex = 0;

      const typingInterval = setInterval(() => {
        typedQuestion += question.question[charIndex];
        setQuestionTyped(typedQuestion);
        charIndex++;

        if (charIndex === question.question.length) {
          clearInterval(typingInterval);
          setOptionsVisible(true); 
        }
      }, 100); 

      return () => clearInterval(typingInterval);
    }
  }, [question]);

  useEffect(() => {
    if (optionsVisible) {
      option_array.forEach((option, idx) => {
        setTimeout(() => {
          option.current.classList.add('show');
        }, idx * 300);
      });
    }
  }, [optionsVisible]);

  const checkAns = (e, ans) => {
    if (!lock) {
      if (question.ans === ans) {
        e.target.classList.add('correct');
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add('wrong');
        option_array[question.ans - 1].current.classList.add('correct'); 
      }
      setLock(true); 
    }
  };

  const next = () => {
    if (lock) {
      if (index === questions.length - 1) {
        setResult(true);
        return;
      }
      setIndex((prevIndex) => prevIndex + 1);
      setQuestion(questions[index + 1]);
      setLock(false);
      setOptionsVisible(false);
      setQuestionTyped(false);
      option_array.map((option) => {
        option.current.classList.remove('wrong');
        option.current.classList.remove('correct');
        option.current.classList.remove('show');
        return null;
      });
    }
  };

  const reset = () => {
    const randomized = randomizeQuestions();
    setIndex(0);
    setQuestions(randomized);
    setQuestion(randomized[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  return (
    <div className="container">
      <Link to="/">
          <button className="home-btn">Go to Home</button>
           </Link>
           <button className='next-btn' onClick={next}>Next</button>
      <div className="heart"></div>
      <div className="radar"></div>
      <h1 className="quiz"><DigitalClock /></h1>
      <h1 className="quiz"><Weather /></h1>

      {!result ? (
        <>
          <div className="question-container">
            <h2>{questionTyped}</h2>
          </div>
          <div className={`options-container ${optionsVisible ? 'show' : ''}`}>
            <ul>
              <li ref={Option1} onClick={(e) => checkAns(e, 1)}>
                {question?.option1}
              </li>
              <li ref={Option2} onClick={(e) => checkAns(e, 2)}>
                {question?.option2}
              </li>
              <li ref={Option3} onClick={(e) => checkAns(e, 3)}>
                {question?.option3}
              </li>
              <li ref={Option4} onClick={(e) => checkAns(e, 4)}>
                {question?.option4}
              </li>
            </ul>
          </div>
          
          <div className="index">
            {index + 1} of {questions.length} questions
          </div>
        </>
      ) : (
        <>
          <h2>
            You Scored {score} out of {questions.length}
          </h2>
          <button className='reset-btn' onClick={reset}>Reset</button>
        </>
      )}
    </div>
  );
};

export default Quiz;

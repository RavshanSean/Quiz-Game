import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DatabaseQuiz.css';
import { databaseData } from '../../assets/databaseData';

const DatabaseQuiz = () => {
  let [index, setIndex] = useState(0);
  let [questions, setQuestions] = useState([]);  
  let [question, setQuestion] = useState(null);  
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];

 
  const randomizeQuestions = () => {
    const shuffled = [...databaseData].sort(() => Math.random() - 0.5); 
    return shuffled.slice(0, 50); 
  };

  useEffect(() => {
    const randomized = randomizeQuestions();
    setQuestions(randomized);  
    setQuestion(randomized[0]); 
  }, []); 

  const checkAns = (e, ans) => {
    if (!lock) {
      if (question.ans === ans) {
        e.target.classList.add('correct');
        setLock(true);
        setScore(prev => prev + 1);
      } else {
        e.target.classList.add('wrong');
        setLock(true);
        option_array[question.ans - 1].current.classList.add('correct');
      }
    }
  };

  const next = () => {
    if (lock) {
      if (index === questions.length - 1) {
        setResult(true);
        return;
      }
      setIndex(prevIndex => prevIndex + 1);
      setQuestion(questions[index + 1]); 
      setLock(false);
      option_array.map((option) => {
        option.current.classList.remove('wrong');
        option.current.classList.remove('correct');
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
    <div className='container'>
      <Link to="/">
        <button className="home-btn">Go to Home</button>
      </Link>

      <h1>Database Quiz</h1>
      <hr />
      {!result ? (
        <>
          <h2>{index + 1}. {question?.question}</h2>
          <ul>
            <li ref={Option1} onClick={(e) => checkAns(e, 1)}>{question?.option1}</li>
            <li ref={Option2} onClick={(e) => checkAns(e, 2)}>{question?.option2}</li>
            <li ref={Option3} onClick={(e) => checkAns(e, 3)}>{question?.option3}</li>
            <li ref={Option4} onClick={(e) => checkAns(e, 4)}>{question?.option4}</li>
          </ul>
          <button onClick={next}>Next</button>
          <div className='index'>{index + 1} of {questions.length} questions</div>
        </>
      ) : (
        <>
          <h2>You Scored {score} out of {questions.length}</h2>
          <button onClick={reset}>Reset</button>
        </>
      )}
    </div>
  );
};

export default DatabaseQuiz;

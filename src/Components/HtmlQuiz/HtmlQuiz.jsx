import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom'; 
import './HtmlQuiz.css';
import { htmlData } from '../../assets/htmlData'; 

const HtmlQuiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(htmlData[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];

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
      if (index === htmlData.length - 1) {
        setResult(true);
        return;
      }
      setIndex(prevIndex => prevIndex + 1);
      setQuestion(htmlData[index + 1]);
      setLock(false);
      option_array.map((option) => {
        option.current.classList.remove('wrong');
        option.current.classList.remove('correct');
        return null;
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(htmlData[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  return (
    <div className='container'>
      <Link to="/">
        <button className="home-btn">Go to Home</button>
      </Link>

      <h1>HTML Quiz</h1>
      <hr />
      {!result ? (
        <>
          <h2>{index + 1}. {question.question}</h2>
          <ul>
            <li ref={Option1} onClick={(e) => checkAns(e, 1)}>{question.option1}</li>
            <li ref={Option2} onClick={(e) => checkAns(e, 2)}>{question.option2}</li>
            <li ref={Option3} onClick={(e) => checkAns(e, 3)}>{question.option3}</li>
            <li ref={Option4} onClick={(e) => checkAns(e, 4)}>{question.option4}</li>
          </ul>
          <button onClick={next}>Next</button>
          <div className='index'>{index + 1} of {htmlData.length} questions</div>
        </>
      ) : (
        <>
          <h2>You Scored {score} out of {htmlData.length}</h2>
          <button onClick={reset}>Reset</button>
        </>
      )}
    </div>
  );
};

export default HtmlQuiz;

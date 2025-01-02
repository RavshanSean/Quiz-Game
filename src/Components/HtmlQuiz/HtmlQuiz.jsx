import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './HtmlQuiz.css';
import { htmlData } from '../../assets/htmlData'; 

const HtmlQuiz = () => {
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
    const shuffled = [...htmlData].sort(() => Math.random() - 0.5); 
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
    <div className="html-quiz-wrapper">
      <div className='boxy'>

        <div className="anime-gif anime3"></div>
        <div className="anime-gif anime11"></div>
        <div className="comic-nezuko">Im faster!</div>
        <div className="anime-gif anime5"></div>
        <div className="comic-avatar">He He He!</div>
        <div className="anime-gif anime6"></div>
        <div className="comic-jojo">Ora Ora Ora!!</div>
        <div className="anime-gif anime7"></div>
        <div className="comic-goku">Im gonna win!</div>
        <div className="anime-gif anime9"></div>
        <div className="comic-box">You so cool!</div>
        <div className="anime-gif anime10"></div>
        <div className="comic-naruto">SASUKEEE!</div>
        <div className="comic-sasuke">NARUTOOO!</div>


        <div className="button-container">
        <Link to="/">
          <button className="homeButton">Home</button>
        </Link>
          <button className='nexButton' onClick={next}>Next</button></div>
  
        {!result ? (
          <>
          <div className="question-box">
            <h6 className="box-question">{index + 1}. {question?.question}</h6></div>
            <ul className="options">
              <li className="option" ref={Option1} onClick={(e) => checkAns(e, 1)}>{question?.option1}</li>
              <li className="option" ref={Option2} onClick={(e) => checkAns(e, 2)}>{question?.option2}</li>
              <li className="option" ref={Option3} onClick={(e) => checkAns(e, 3)}>{question?.option3}</li>
              <li className="option" ref={Option4} onClick={(e) => checkAns(e, 4)}>{question?.option4}</li>
            </ul>
  
            <div className='dex'>{index + 1} of {questions.length} questions</div>
          </>
        ) : (
          <>
          
            <h6>You Scored {score} out of {questions.length}</h6>
            <button onClick={reset}>Reset</button>
          </>
        )}
      </div>
    </div>
  );  
};

export default HtmlQuiz;

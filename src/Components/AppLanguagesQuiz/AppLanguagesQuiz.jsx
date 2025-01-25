
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AppLanguagesQuiz.css';
import { appLanguagesData } from '../../assets/appLanguageDatas';
import DigitalClock from '../../assets/DigitalClock';
import NpcDialogue from '../../assets/NpcDialogue';  

const AppLanguagesQuiz = () => {
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
    const shuffled = [...appLanguagesData].sort(() => Math.random() - 0.5);
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
        e.target.classList.add('app-lang-correct');
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add('app-lang-wrong');
        setLock(true);
        option_array[question.ans - 1].current.classList.add('app-lang-correct');
      }
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
      option_array.map((option) => {
        option.current.classList.remove('app-lang-wrong');
        option.current.classList.remove('app-lang-correct');
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
    <div className="app-lang-container">
      <h1 className="app-lang-title">
        <DigitalClock />
      </h1>
      <hr className="app-lang-divider" />
      {!result ? (
        <>
          <div className="app-lang-question-box">
            <h2 className="app-lang-question">
              {index + 1}. {question?.question}
            </h2>
          </div>
          <ul className="app-lang-options">
            <li
              className="app-lang-option"
              ref={Option1}
              onClick={(e) => checkAns(e, 1)}
            >
              {question?.option1}
            </li>
            <li
              className="app-lang-option"
              ref={Option2}
              onClick={(e) => checkAns(e, 2)}
            >
              {question?.option2}
            </li>
            <li
              className="app-lang-option"
              ref={Option3}
              onClick={(e) => checkAns(e, 3)}
            >
              {question?.option3}
            </li>
            <li
              className="app-lang-option"
              ref={Option4}
              onClick={(e) => checkAns(e, 4)}
            >
              {question?.option4}
            </li>
          </ul>
          <div className="npc-container">
            <img
              src="src/assets/13.gif"
              alt="NPC"
              className="npc-gif"
            />
            <NpcDialogue /> 
          </div>
          <button className="app-lang-next-btn" onClick={next}>
            Next
          </button>
          <Link to="/">
            <button className="app-lang-home-btn">Home</button>
          </Link>
          <div className="app-lang-index">
            {index + 1} of {questions.length} questions
          </div>
        </>
      ) : (
        <div className="app-lang-result-container">
          <h3 className="app-lang-scor">
            You Scored {score} out of {questions.length}
          </h3>
          <button className="app-lang-reset-btn" onClick={reset}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default AppLanguagesQuiz;

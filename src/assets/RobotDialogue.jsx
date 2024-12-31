import React, { useState, useEffect, useRef } from 'react';

const RobotDialogue = () => {
  const [message, setMessage] = useState('');
  const robotMessages = [
    "Greetings, human! Ready to solve some quizzes?",
    "Processing... How do humans deal with emotions?",
    "Beep boop! Did you know robots dream of electric sheep?",
    "Analyzing data... Why is pineapple on pizza controversial?",
    "Initiating relaxation protocol. Weekend detected. 🛠️",
    "Error 404: Motivation not found.",
    "Why do humans charge their phones but forget themselves? 🤔",
    "Activating curiosity mode: What’s your favorite algorithm?",
    "Fun fact: I can calculate faster than a speeding bullet! 🖥️💨",
    "Would you like a hint for the next question? Just kidding, I can’t help. 🤖",
    "Warning: Too much scrolling detected. Take a break!",
    "Loading compassion... completed. Humans are fascinating! ❤️",
    "Let’s ace this quiz, together. Beep boop!",
    "Hey! Don’t give up yet, you’re doing great!",
    "Time to flex those brain circuits, human!",
    "I’m here for moral support. And calculations.",
    "Just calculated 10,000 answers in the time it took you to read this. 🧠",
    "Uh oh, I think I short-circuited. Just kidding!",
    "Robots don’t procrastinate, but we understand if you do. 😉",
    "Trivia time! Did you know I have a 100% uptime? Except during updates.",
  ];

  const messageIndexRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const firstMessageTimeout = setTimeout(() => {
      setMessage(robotMessages[messageIndexRef.current]);

      intervalRef.current = setInterval(() => {
        messageIndexRef.current = (messageIndexRef.current + 1) % robotMessages.length;
        setMessage(robotMessages[messageIndexRef.current]);
      }, 9000);
    }, 500);

    return () => {
      clearTimeout(firstMessageTimeout);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [robotMessages]);

  return (
    <div className="robot-dialogue-container">
      <div className="robot-dialogue-box">
        <p className="robot-message">{message}</p>
      </div>
    </div>
  );
};

export default RobotDialogue;

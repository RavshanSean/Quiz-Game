import React from 'react'
import './Quiz.css'

const Quiz = () => {
  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr />
        <h2>What is the correct syntax for a function in Python?</h2>
        <ul>
            <li>def my_function():</li>
            <li>def my_function():</li>
            <li>func my_function()</li>
            <li>def myFunction {}</li>
        </ul>
        <button>Next</button>
        <div className='index'></div>
    </div>
  )
}

export default Quiz
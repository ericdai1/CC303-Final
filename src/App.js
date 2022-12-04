import React, { useState} from 'react';
import "./App.css"
import ChecklistBox from "./ChecklistBox"

function App() {
  const questions = [
    {text: "You like dogs", clicked: false},
    {text: "You like cats", clicked: false},
    {text: "You like snakes", clicked: false},
    {text: "You like farm animals", clicked: false},
    {text: "You consider yourself intelligent, in terms of book smarts and IQ", clicked: false},
    {text: "You consider yourself physically strong", clicked: false},
    {text: "You have a great sense of hearing", clicked: false},
    {text: "You have really bad eye-sight", clicked: false},
    {text: "You have siblings", clicked: false},
    {text: "You believe in the afterlife (i.e. heaven or hell)", clicked: false},
    {text: "You are a night owl", clicked: false},
    {text: "You are a fast runner", clicked: false},
    {text: "You are physically attractive", clicked: false},
    {text: "You are tall", clicked: false},
    {text: "You are older than 30", clicked: false},
    {text: "You frequently fly on airplains", clicked: false},
    {text: "You have pranked or tricked someone", clicked: false},
    {text: "You have been to a desert", clicked: false},
    {text: "You have had a close call with death", clicked: false}
  ]

  const [stateQuestions, setStateQuestions] = useState(questions)
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false)

  function SubmitButton() {
    return (
      <div className="submitContainer"> 
        <button className="submitButton" onClick={() => {
          setIsQuizSubmitted(true)
        }}>
          <span className="submitText">
            Find out your monster!
          </span>
        </button>
      </div>
    )
  }

  function MonsterOutput() {
    return (
      <div className="monsterOutput">
        <img></img>
      </div>
    )
  }

  return (
    <div>
      <div className="titlePage">
        <span className="titleText">
          MythologyFeed
        </span>
      </div>

      <div className="checklistTitle">
        Check off all the statements that apply to you:
      </div>

      <div className="checklistContainer">
        {
          stateQuestions.map((question, i) => {
            return <ChecklistBox key={i} isClicked={question.clicked} text={question.text}
                    onClick={() => {
                      let newQuestions = [...stateQuestions];
                      newQuestions[i].clicked = !newQuestions[i].clicked;
                      setStateQuestions(newQuestions);
                    }}
            />
          })
        }
      </div>

      {
        isQuizSubmitted ? null : <SubmitButton />
      }
    </div>
  )
}

export default App;
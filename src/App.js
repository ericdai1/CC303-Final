import React, { useState} from 'react';
import "./App.css"
import ChecklistBox from "./ChecklistBox"

function App() {
  const questions = [
    {text: "Do you like dogs?", clicked: false},
    {text: "Do you like cats?", clicked: false}
  ]

  const [stateQuestions, setStateQuestions] = useState(questions)

  function render() {
    console.log(questions)
    
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
    </div>
  )
}

export default App;
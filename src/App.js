import React, { useState} from 'react';
import "./App.css"
import ChecklistBox from "./ChecklistBox"

import Cerberus from "./Monsters/Cerberus.jfif"
import Medusa from "./Monsters/Medusa.jpg"
import Sphinx from "./Monsters/Sphinx.png"
import Siren from "./Monsters/Siren.webp"
import Harpy from "./Monsters/Harpy.jpg"
import Hydra from "./Monsters/Hydra.jpg"
import Fury from "./Monsters/Fury.jfif"
import Chimera from "./Monsters/Chimera.jfif"
import Griffin from "./Monsters/Griffin.webp"
import Cyclops from "./Monsters/Cyclops.webp"
import Minotaur from "./Monsters/Minotaur.jpg"
import Centaur from "./Monsters/Centaur.png"
import Pegasus from "./Monsters/Pegasus.jfif"

function App() {
  const monsterWeights = { "Cerberus": 0, "Medusa": 0, "Sphinx": 0, "Siren": 0, "Harpy": 0, "Hydra": 0, "Fury": 0,
      "Chimera": 0, "Griffin": 0, "Cyclops": 0, "Minotaur": 0, "Centaur": 0, "Pegasus": 0}
  const questionWeights = [
    { "Cerberus": 150 },
    { "Sphinx": 50, "Chimera": 50, "Griffin": 50 },
    { "Medusa": 75, "Chimera": 75 },
    { "Pegasus": 50, "Chimera": 50, "Centaur": 50 },
    { "Siren": 50, "Harpy": 50, "Fury": 50 },
    { "Minotaur": 25, "Griffin": 25, "Cerberus": 25, "Cyclops": 25, "Sphinx": 25, "Hydra": 25 },
    { "Harpy": 75, "Griffin": 75 },
    { "Cyclops": 150 },
    { "Cerberus": 75, "Hydra": 75 },
    { "Fury": 50, "Pegasus": 50, "Cerberus": 50 },
    { "Cerberus": 50, "Fury": 50, "Medusa": 50 },
    { "Centaur": 50, "Minotaur": 50, "Cerberus": 50 },
    { "Siren": 75, "Pegasus": 75 },
    { "Cyclops": 50, "Hydra": 50, "Cerberus": 50 },
    { "Fury": 75, "Medusa": 75 },
    { "Harpy": 50, "Griffin": 50, "Pegasus": 50 },
    { "Siren": 50, "Medusa": 50, "Fury": 50 },
    { "Sphinx": 150 },
    { "Cerberus": 50, "Fury": 50, "Minotaur": 50 },
  ]

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
    {text: "You frequently fly on airplanes", clicked: false},
    {text: "You have pranked or tricked someone", clicked: false},
    {text: "You have been to a desert", clicked: false},
    {text: "You have had a close call with death", clicked: false}
  ]

  const [stateQuestions, setStateQuestions] = useState(questions)
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false)
  // const [monsterWeights, setWeights] = useState(weights);

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

  function assignWeights() {
    for (let i = 0; i < stateQuestions.length; i++) {
      if (stateQuestions.clicked) {
        let weightsToAdd = questionWeights[i];
        for (const key of Object.keys(weightsToAdd)) {
          monsterWeights[key] += weightsToAdd[key];
        }
      }
    }
  }

  function MonsterOutput() {
    assignWeights();
    return (
      <div className="monsterOutput">
        <img src={Cerberus} />
      </div>
    )
  }

  return (
    <div className="container">
      <div className="titlePage">
        <span className="titleText">
          MythologyFeed
        </span>
      </div>

      <div className="quizDescription">
        Take our quiz to find out which mythology monster is most like you!
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
        isQuizSubmitted ? <MonsterOutput /> : <SubmitButton />
      }
    </div>
  )
}

export default App;
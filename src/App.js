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
    "Chimera": 0, "Griffin": 0, "Cyclops": 0, "Minotaur": 0, "Centaur": 0, "Pegasus": 0
  }
  
  const images = {
    "Cerberus": Cerberus, "Medusa": Medusa, "Sphinx": Sphinx, "Siren": Siren, "Harpy": Harpy,
    "Hydra": Hydra, "Fury": Fury, "Chimera": Chimera, "Griffin": Griffin, "Cyclops": Cyclops,
    "Minotaur": Minotaur, "Centaur": Centaur, "Pegasus": Pegasus
  }

  const descriptions = {
    "Cerberus": "You got Cerberus! The three-headed guard dog of the underworld, " + 
      "putting fear into anyone who enters, except for Hercules :) ",
    "Medusa": "You got Medusa! The gorgon sister with terrifying snake hair and deadly eyes, " +
      "turning all who stare to stone, except for gods. Just beware of Percy Jackson...",
    "Sphinx": "You got Sphinx! The mythical creature with the head of a human, " +
      "the body of a lion, and the wings of a falcon. You eat those who cannot answer your tricky riddles. ",
    "Siren": "You got Siren! A creature who tempts the sailors trekking dangerous seas, killing any " +
      "that hear your beautiful but deadly song. Sadly, you could not outsmart Odysseus :(",
    "Harpy": "You got Harpy! A creature who is a terrifying mix of human and eagle that travels at speeds " +
      "the human eye cannot see, being confused for winds that carried people away in the Odyssey.",
    "Hydra": "You got Hydra! The strongest creature in the seas, and known for the ability to regrow multiple " +
      "heads when one is decapitated. However, you should still be wary of Hercules...",
    "Fury": "You got Fury! One of the furies, who are goddesses so powerful and vengeful with the ability to cast " +
      "curses on those that dare to commit crimes. This does, of course, only apply to the mortal beings of the world, not gods.",
    "Chimera": "You got Chimera! An abomination of multiple different creatures, most commonly a lion, goat, and snake. " +
      "You put fear into humans, but you should watch out for Bellerophen and his Pegasus.",
    "Griffin": "You got Griffin! You are a famous creature with the body, tail, and legs of a lion and the head and wings " +
      "of an eagle. You are well known for being the guardian of various treasures and goodies.",
    "Cyclops": "You got Cyclops! You are the son of Poseidon himself, twice the size of mere mortals, and bolster one eye! " +
      "But don’t get too arrogant: beware of cunning heroes like Odysseus...",
    "Minotaur": "You got Minotaur! You are a monster with the body of a man and the head and tail of a bull. Unfortunately, " +
      "you are imprisoned in the famous maze, the Labyrinth. Most fear you, but I’d stay wary of Theseus.",
    "Centaur": "You got a Centaur! You are a vicious warrior with the upper body of a human and the lower legs of the horse. " +
      "Although you are a force to be reckoned with in battle, I’d steer clear of Theseus and Hercules!",
    "Pegasus": "You got a Pegasus! You are a beautiful, winged stallion sired by Poseidon himself! You are a very famous icon " +
      "in Ancient Greece, depicted on several pieces of art even during the Renaissance."
  }
  
  const questionWeights = [
    { "Cerberus": 75 },
    { "Sphinx": 50, "Chimera": 50, "Griffin": 50 },
    { "Medusa": 100, "Chimera": 75 },
    { "Pegasus": 50, "Chimera": 50, "Centaur": 50, "Minotaur": 50, "Harpy": 50},
    { "Siren": 50, "Harpy": 50, "Fury": 50 },
    { "Minotaur": 25, "Griffin": 25, "Cerberus": 25, "Cyclops": 25, "Sphinx": 50, "Hydra": 75},
    { "Harpy": 75, "Griffin": 75 },
    { "Cyclops": 125 },
    { "Cerberus": 50, "Fury": 50, "Hydra": 50, "Medusa": 50},
    { "Fury": 50, "Pegasus": 50, "Cerberus": 50 },
    { "Cerberus": 50, "Fury": 50, "Minotaur": 50},
    { "Centaur": 100, "Minotaur": 50, "Griffin": 50, "Chimera": 50},
    { "Siren": 75, "Pegasus": 75, "Centaur": 50},
    { "Cyclops": 50, "Hydra": 50},
    { "Fury": 50, "Medusa": 50, "Sphinx": 50},
    { "Harpy": 50, "Griffin": 50, "Pegasus": 50 },
    { "Siren": 75, "Medusa": 50},
    { "Sphinx": 100 },
    { "Minotaur": 50, "Cyclops": 50, "Hydra": 50},
  ]

  const questions = [
    {text: "You like dogs", clicked: false},
    {text: "You like cats", clicked: false},
    {text: "You like snakes", clicked: false},
    {text: "You like farm animals", clicked: false},
    {text: "You consider yourself intelligent, in terms of book smarts and IQ", clicked: false},
    {text: "You consider yourself physically strong", clicked: false},
    {text: "You have a great sense of hearing", clicked: false},
    {text: "You have really poor eye-sight", clicked: false},
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
        }} disabled={stateQuestions.every((elem) => !elem.clicked)}>
          <span className="submitText">
            Find out your monster!
          </span>
        </button>
      </div>
    )
  }

  function getMonster() {
    for (let i = 0; i < stateQuestions.length; i++) {
      if (stateQuestions[i].clicked) {
        console.log("Clicked");
        let weightsToAdd = questionWeights[i];
        for (const key of Object.keys(weightsToAdd)) {
          monsterWeights[key] += weightsToAdd[key];
          console.log(monsterWeights[key]);
        }
      }
    }

    return Object.keys(monsterWeights).reduce((a, b) => monsterWeights[a] > monsterWeights[b] ? a : b);
  }

  function MonsterOutput() {
    let mostCommonMonster = getMonster();
    console.log(mostCommonMonster);
    return (
      <div className="monsterOutput">
        <img className="monsterImage" src={images[mostCommonMonster]} />
        <div className="monsterDescription">
          {
            descriptions[mostCommonMonster]
          }
        </div>
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
                    disabled={isQuizSubmitted}
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
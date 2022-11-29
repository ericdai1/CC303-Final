import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./App.css"

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
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

    </div>
  )
}

export default App;
import "./ChecklistBox.css"

function RadioButton({isClicked}) {
    return (
        <div className="radioButton">
          {
            isClicked ? <div className="clickedRadioButton"/> : null
          }
        </div>
    );
}

export default function ChecklistBox({isClicked, text, onClick}) {
    return (
      <button className="checklistBox" onClick={onClick}>
        <RadioButton isClicked={isClicked}/>
        <span className="checklistText">
            {text}
        </span>
      </button>
    )
  }
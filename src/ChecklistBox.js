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

export default function ChecklistBox({isClicked, text, onClick, disabled}) {
    return (
      <button className="checklistBox" onClick={onClick} disabled={disabled}>
        <RadioButton isClicked={isClicked}/>
        <span className={isClicked ? "checklistTextClicked" : "checklistText"}>
            {text}
        </span>
      </button>
    )
  }
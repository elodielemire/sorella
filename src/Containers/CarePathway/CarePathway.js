import {useState} from "react";
import './CarePathway.css'
import ProgressionBar from "../../Components/ProgressionBar/ProgressionBar"
import Button from "../../Components/Button/Button"
import Popup from "../../Components/Popup/Popup"
import pregnantPicture from '../../assets/pregnant.svg'
import pregnancySteps from '../../assets/datas/pregnancy-steps.json'

export default function CarePathway(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="container care-pathway-page">
      {open ? <Popup text="Entrer la date d'ovulation" closePopup={() => setOpen(false)}/> : null}
      <h2>Suivre ma grossesse</h2>

      <div className="h3-container">
        <img src={pregnantPicture}/>
        <h3>Semaine par semaine</h3>
      </div>

      <div className="progression-bar-container">
        <ProgressionBar percentage={props.pregnancyDatas?.percentage}/>
        <div className="time-details">
          <span>0</span>
          <span>41 SA</span>
        </div>

        <p className="date-pregnancy">{props.pregnancyDatas?.durationInDays} jours de grossesse
          ({props.pregnancyDatas?.durationInWeeksAndDays})</p>
        <p className="date-pregnancy">DPA {props.pregnancyDatas?.dpaDate}</p>
        <Button onClick={() => setOpen(true)} text="Recalculer ma DPA"/>
      </div>

      <div className="steps-container">
        <div className="step-bar"></div>
        {
          pregnancySteps.map((step, index) => {
            const dotBackground = index <= props.pregnancyDatas?.durationInWeeks ? "var(--secondary-color)" : "var(--secondary-color-light)"

            return (<div className="step" key={index}>
              <p className="step-date">{index} SA</p>
              <p>{step.text}</p>
              <div className="step-todos">
                {step.todo.length > 0 && step.todo.map((todo, i) =>
                  <div className="todo" key={i}>{todo}</div>
                )}
              </div>
              <div className="dot-container">
                <div style={{"backgroundColor": dotBackground}} className="dot"></div>
              </div>
            </div>)
          })
        }
      </div>
    </div>
  )
}
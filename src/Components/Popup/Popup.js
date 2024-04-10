import { useState, useContext } from 'react'
import "./Popup.css";
import Button from "../Button/Button"
import {appContext} from '../../App'

export default function Popup (props) {
  const [ovulationDate, setOvulationDate] = useState(new Date())
  const [name, setName] = useState("")
  const context = useContext(appContext)

  const onClickOvulationButton = () => {
    context.updateOvulationDate(ovulationDate)
    props.closePopup()
  }

  const onClickLoginButton = () => {
    context.updateOvulationDate(ovulationDate)
    context.updateUserName(name)
    props.closePopup()
  }

  return (
    <div className={props.login ? "popup-container with-picture" : "popup-container"}>
    <div className="popup-background">
     <div className="popup">
      <h2>{props.text}</h2>
        {props.login ? 
          <div className="popup__content">
            <label>Entrer votre prénom</label>
            <input type="text" onChange={(event) => setName(event.target.value)} />
            <label>Entrer votre date d'ovulation</label>
            <input type="date" onChange={(event) => setOvulationDate(event.target.value)} />
            <Button text="Entrer" onClick={onClickLoginButton}/>
          </div> : 
          <div className="popup__content">
          <input type="date" onChange={(event) => setOvulationDate(event.target.value)} />
              <Button text="OK" onClick={onClickOvulationButton}/>
              <Button onClick={props.closePopup} text="Annuler" />
         </div>
       }
     </div>
     </div>
    </div>
  );
};
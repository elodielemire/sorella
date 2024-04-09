import { useState, useContext } from 'react'
import "./Popup.css";
import Button from "../Button/Button"
import {appContext} from '../../App'

export default function Popup (props) {
  const [ovulationDate, setOvulationDate] = useState(new Date())
  const [name, setName] = useState("")
  const context = useContext(appContext)

  const onClickOkButton = () => {
    context.updateOvulationDate(ovulationDate)
    props.closePopup()
  }

  return (
    <div className="popup-container">
     <div className="popup">
      <p>{props.text}</p>
        {props.login ? 
          <div>
            <input type="text" onChange={(event) => setName(event.target.value)} />
            <div onClick={props.closePopup}>
                <Button text="Fermer" />
            </div>
         </div> : <div>
          <input type="date" onChange={(event) => setOvulationDate(event.target.value)} />
          <div className="popup__buttons">
            <div onClick={props.closePopup}>
              <Button text="Annuler" />
            </div>
            <div onClick={onClickOkButton}>
              <Button text="OK" />
            </div>
          </div>
         </div>
       }
     </div>
    </div>
  );
};
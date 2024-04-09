import "./AppointmentCard.css"
import Button from "../Button/Button"
import timeLogo from "../../assets/clock.svg"
import dateLogo from "../../assets/calendar.svg"
import {Link} from 'react-router-dom';

export default function AppointmentCard(props) {
	return(
		<div className="appointment-card">
			<div className="appointment-card__person">
				<div className="appointment-card__person__picture">
					<img className="profile-picture" src={props.appointment.profilePicture}/>
				</div>
				<div className="appointment-card__person__text">
					<p className="appointment-card__person__text__name">{props.appointment.name}</p>
					<p>{props.appointment.position}</p>
					
					<Link to="https://www.doctolib.fr/sessions/new">
						<Button text="Annuler"/>
					</Link>
				</div>
			</div>	
			
			<div className="appointment-card__schedule">
				<div>
					<img src={dateLogo}/>
					<p>{props.appointment.date}</p>
				</div>
				
				<div>
					<img src={timeLogo}/>
					<p>{props.appointment.time}</p>
				</div>
			</div>
		</div>
	)
}
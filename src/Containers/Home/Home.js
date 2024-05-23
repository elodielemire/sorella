import AppointmentCard from '../../Components/AppointmentCard/AppointmentCard';
import PregnancyCard from '../../Components/PregnancyCard/PregnancyCard';
import "./Home.css"
import mathildePicture from '../../assets/mathilde.png'
import roxanePicture from '../../assets/roxane.png'

const appointments = [
  {
    profilePicture: mathildePicture,
    name: "Dr Mathilde Rose",
    position: "Sage-femme échographiste",
    date: "Vendredi 12 avril 2024",
    time: "17h30"
  },
  {
    profilePicture: roxanePicture,
    name: "Dr Roxane Rakotobe",
    position: "Kinésithérapeute",
    date: "Mercredi 24 avril 2024",
    time: "11h45"
  }
];

export default function Home(props) {
  return (
    <div className="container">
      <h2>Bonjour {props.userDatas?.name},</h2>
      <h2>Nous sommes ravis de te revoir !</h2>
      <div className="home-cards-container">
        <div>
          <h3>Mes prochains RDVs</h3>
          <ul>
            <li><AppointmentCard appointment={appointments[0]}/></li>
            <li><AppointmentCard appointment={appointments[1]}/></li>
          </ul>
        </div>
        <div>
          <h3>Ma grossesse</h3>
          <PregnancyCard pregnancyDatas={props.pregnancyDatas}/>
        </div>
      </div>
    </div>
  )
}
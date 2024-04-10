import "./Navbar.css";
import Button from "../Button/Button"
import {Link} from 'react-router-dom';
import sorellaLogo from '../../assets/sorella.svg';
import homeLogo from '../../assets/home.svg';
import pathwayLogo from '../../assets/pathway.svg';
import todoLogo from '../../assets/todo.svg';
import appointmentLogo from '../../assets/appointment.svg';
import profileLogo from '../../assets/profile.svg';

export default function Navbar(props) {
    return (
        <nav>
            <div className="navbar">
                <Link to="https://www.sorella-care.com/"><img className="sorella-logo" src={sorellaLogo}/></Link>
                <ul className="list">
                    <Link to='/'><li className="item"><img src={homeLogo}/>Accueil</li></Link>
                    <Link to='/suivre-ma-grossesse'><li className="item"><img src={pathwayLogo}/>Suivre ma grossesse</li></Link>
                    <Link to='/a-faire'><li className="item"><img src={todoLogo}/>A faire</li></Link>
                </ul>
                
                <Link to="https://www.doctolib.fr/cabinet-pluridisciplinaire/issy-les-moulineaux/sorella-care-sante-des-femmes">
                        <Button logo={appointmentLogo} text="Prendre RDV"/>
                </Link>
            </div>
        </nav>
    );
}
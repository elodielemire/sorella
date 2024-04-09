import './PregnancyCard.css'
import Button from "../Button/Button"
import ProgressionBar from "../ProgressionBar/ProgressionBar"
import {Link} from 'react-router-dom';

export default function PregnancyCard(props) {
    return (
        <div className="pregnancy-card">
            <div className="pregnancy-card__content">
                <p className="pregnancy-card__content__title">{props.pregnancyDatas.durationInDays} jours ({props.pregnancyDatas.durationInWeeksAndDays})</p>
                <p className="pregnancy-card__content__title">DPA {props.pregnancyDatas.dpaDate}</p>
                <ProgressionBar percentage={props.pregnancyDatas.percentage} />
                <Link to='/suivre-ma-grossesse'><Button text="Suivre l'évolution"/></Link>
            </div>
        </div>
    );
}
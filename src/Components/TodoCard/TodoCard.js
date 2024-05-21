import { useState } from 'react'
import clockLogo from '../../assets/clock.svg'
import CheckboxItem from '../../Components/CheckboxItem/CheckboxItem'
import './TodoCard.css'

export default function TodoCard (props) {
	const [isActive, setActive] = useState(false);
	const [data, setData] = useState(props.category.items);
	const toggleCheckbox = (index) => {
		const newData = [...data];
		newData[index] = {
			...newData[index],
			checked: !newData[index].checked
		};
		setData(newData);
	}
  	const togglePanel = () => {
  	  	setActive(!isActive); 
   	};

	return (
		<div className="todo-card">
			<li onClick={togglePanel} className={isActive ? "todo-card__title arrow-up" : "todo-card__title"}>{props.category.title}
			{props.category.when && 
					<div className="todo-card__when">
						<img src={clockLogo}/>
						<p>{props.category.when}</p>
					</div>
				}</li>
			<div className={isActive ? "" : "hidden"}>
				<p className="todo-card__subtitle">{props.category.subtitle}</p>
				<ul>
					{props.category.items.map((item, i) =>
						<li key={i}>
							<CheckboxItem toggle={toggleCheckbox} index={i} checked={data[i].checked} text={item.title}/>
						</li>
						)}
				</ul>
			</div>
		</div>
	)
}
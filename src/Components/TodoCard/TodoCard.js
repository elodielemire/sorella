import { useState } from 'react'
import clockLogo from '../../assets/clock.svg'
import CheckboxItem from '../../Components/CheckboxItem/CheckboxItem'
import './TodoCard.css'

export default function TodoCard ({id, title, subtitle, when, items}) {
	const [isActive, setActive] = useState(false);
	const initalCheckboxes = localStorage.getItem(id) == null ?  items : JSON.parse(localStorage.getItem(id))
	const [data, setData] = useState(initalCheckboxes)
	const toggleCheckbox = (index) => {
		const newData = [...data];
		newData[index] = {
			...newData[index],
			checked: !newData[index].checked
		};
		setData(newData);
		localStorage.setItem(id, JSON.stringify(newData))
	}
  	const togglePanel = () => {
  	  	setActive(!isActive); 
   	};

	return (
		<div className="todo-card">
			<li onClick={togglePanel} className={isActive ? "todo-card__title arrow-up" : "todo-card__title"}>{title}
			{when &&
					<div className="todo-card__when">
						<img src={clockLogo}/>
						<p>{when}</p>
					</div>
				}</li>
			<div className={isActive ? "" : "hidden"}>
				<p className="todo-card__subtitle">{subtitle}</p>
				<ul>
					{
						items.map((item, i) =>
							<li key={i}>
								<CheckboxItem toggle={toggleCheckbox} index={i} checked={data[i].checked || false} text={item.title}/>
							</li>
						)}
				</ul>
			</div>
		</div>
	)
}
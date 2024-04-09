import { useState } from 'react'
import clockLogo from '../../assets/clock.svg'
import CheckboxItem from '../../Components/CheckboxItem/CheckboxItem'
import './TodoCategory.css'

export default function TodoCategory (props) {
	const [isActive, setActive] = useState(false);

  	const togglePanel = () => {
  	  	setActive(!isActive); 
   	};

	return (
		<>
			<li onClick={togglePanel} className={isActive ? "todo-category__title arrow-up" : "todo-category__title"}>{props.category.title}
			{props.category.when && 
					<div className="todo-category__when">
						<img src={clockLogo}/>
						<p>{props.category.when}</p>
					</div>
				}</li>
			<div className={isActive ? "" : "hidden"}>
				<p className="todo-category__subtitle">{props.category.subtitle}</p>
				<ul>
					{props.category.items.map((item, i) =>
						<li key={i}>
							<CheckboxItem checked={item.check} text={item.title}/>
						</li>
						)}
				</ul>
			</div>
		</>
	)
}
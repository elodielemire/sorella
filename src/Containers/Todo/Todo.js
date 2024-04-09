import './Todo.css'
import adminPicture from '../../assets/administrative.svg'
import furniturePicture from '../../assets/health.svg'
import TodoCategory from '../../Components/TodoCategory/TodoCategory'
import adminList from '../../assets/datas/admin-list.json'
import furnitureList from '../../assets/datas/furniture-list.json'

export default function Todo () {
	return (
		<div className="container">
			<h2>A faire</h2>

			<div className="h3-container">
				<img src={adminPicture}/>
				<h3>Mes démarches administratives</h3>
			</div>
			<ul className="list-container">
				{adminList.map((category, i) =>
					<TodoCategory key={i} category={category}/>
				)}
			</ul>
			
			<div className="h3-container">
				<img src={furniturePicture}/>
				<h3>Mon équipement</h3>
			</div>
			<ul className="list-container">
				{furnitureList.map((category, i) => 
					<TodoCategory key={i} category={category}/>
				)}
			</ul>
		</div>
	)
}
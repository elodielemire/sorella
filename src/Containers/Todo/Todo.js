import './Todo.css'
import adminPicture from '../../assets/administrative.svg'
import furniturePicture from '../../assets/health.svg'
import TodoCard from '../../Components/TodoCard/TodoCard'
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
				<TodoCard id="list0" title={adminList[0].title} subtitle={adminList[0].subtitle} when={adminList[0].when} items={adminList[0].items}/>
				<TodoCard id="list1" title={adminList[1].title} subtitle={adminList[1].subtitle} when={adminList[1].when} items={adminList[1].items}/>
				<TodoCard id="list2" title={adminList[2].title} subtitle={adminList[2].subtitle} when={adminList[2].when} items={adminList[2].items}/>
			</ul>
			
			<div className="h3-container">
				<img src={furniturePicture}/>
				<h3>Mon équipement</h3>
			</div>
			<ul className="list-container">
				<TodoCard id="list3" title={furnitureList[0].title} subtitle={furnitureList[0].subtitle} when={furnitureList[0].when} items={furnitureList[0].items}/>
				<TodoCard id="list4" title={furnitureList[1].title} subtitle={furnitureList[1].subtitle} when={furnitureList[1].when} items={furnitureList[1].items}/>
				<TodoCard id="list5" title={furnitureList[2].title} subtitle={furnitureList[2].subtitle} when={furnitureList[2].when} items={furnitureList[2].items}/>
			</ul>
		</div>
	)
}
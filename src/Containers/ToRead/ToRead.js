import './ToRead.css'
import articles from '../../assets/datas/articles.json'
import ArticleCard from "../../Components/ArticleCard/ArticleCard"

export default function ToRead () {
	return (
		<div className="container">
			<h2>Un peu de lecture</h2>
			<div className="article-card-container">
				{articles.map(article => 
					<ArticleCard article={article}/>
				)}
			</div>
		</div>
	)

}
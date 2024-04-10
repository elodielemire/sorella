import './ArticleCard.css'
import {Link} from "react-router-dom";

export default function ArticleCard(props) {
	const formattedTitle = props.article.title.replace(/\s+/g, '-').replace(/\’/g, '-').trim().toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
	const state={
		title: props.article.title,
		subtitle: props.article.subtitle,
		authorName: props.article.author.name,
		authorJob: props.article.author.job,
		authorPicture: props.article.author.picture,
		content: props.article.content,
		picture: props.article.picture
	}

	return(
		<div className="article-card">
			<Link to={{pathname: `/lectures/${formattedTitle}`}} state={state}>
				<div className="article-card__picture" style={{backgroundImage :`url(${props.article.picture})`}}/>
				<div className="article-card__content">
				<p className="article-card__title">{props.article.title}</p>
				<p className="article-card__subtitle">{props.article.subtitle}</p>
				<div className="article-card__author">
					<div className="article-card__author__picture">
						<img src={props.article.author.picture}/>
					</div>
					<div>
						<p className="article-card__author__name">{props.article.author.name}</p>
						<p>{props.article.author.job}</p>
					</div>
				</div>
				</div>
			</Link>
		</div>
	)
}
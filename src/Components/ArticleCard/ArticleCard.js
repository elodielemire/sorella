import './ArticleCard.css'

export default function AticleCard(props) {
	return(
		<div className="article-card">
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
		</div>
	)
}
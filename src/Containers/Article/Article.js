import './Article.css'
import {useLocation} from "react-router-dom";
import {Link} from "react-router-dom";

export default function Article() {
	const location = useLocation();

	return(
		<div className="container article">
			<div>
				<Link to='/lectures'><span className="article__back-button">← Retour</span></Link>
				<h2>{location.state.title}</h2>
				<p>{location.state.subtitle}</p>
				<div className="article__author">
					<div className="article__author__picture">
						<img src={location.state.authorPicture}/>
					</div>
					<div>
						<p className="article__author__name">{location.state.authorName}</p>
						<p>{location.state.authorJob}</p>
					</div>
				</div>
				<div className="article__banner" style={{backgroundImage :`url(${location.state.picture})`}}></div>
				<div className="article__content"dangerouslySetInnerHTML={{__html: location.state.content}}></div>
			</div>
		</div>
	)
}
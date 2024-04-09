import "./Button.css"

export default function Button(props) {
	return(
		<button className="button">
		        {props.logo && <img src={props.logo}/>}
		        {props.text}
   		</button>
	)
}
import "./Button.css"

export default function Button(props) {
  return (
    <button onClick={props.onClick} className="button">
      {props.logo && <img src={props.logo}/>}
      {props.text}
    </button>
  )
}
import './CheckboxItem.css'

export default function CheckboxItem (props) {
	return (
		<label className="checkbox-item__container">{props.text}
			<input type="checkbox" checked={props.checked} onChange={() => props.toggle(props.index)}/>
			<span className="checkmark"></span>
		</label>
	)
}
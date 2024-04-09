import './CheckboxItem.css'

export default function CheckboxItem (props) {
	return (
		<label className="checkbox-item__container">{props.text}
			<input type="checkbox" value="{props.checked}" />
			<span className="checkmark"></span>
		</label>
	)
}
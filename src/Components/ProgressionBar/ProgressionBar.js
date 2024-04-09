import './ProgressionBar.css'

export default function ProgressionBar(props) {
    var barWidth = props.percentage + '%'
    return (
        <div className="progression-bar">
            <span className="progression-bar__bar" style={{width: barWidth}}></span>
        </div>
    );
}
import "./Widgets.css"

const Widget = (props) => {
    return(
        <div className="widget-wrapper">
            <div className="widget-icon"><img src={props.img} alt={props.name} /></div>
            <div className="widget-text">{props.name}</div>
        </div>
    )
}

export default Widget
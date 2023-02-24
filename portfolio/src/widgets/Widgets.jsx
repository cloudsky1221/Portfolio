import "./Widgets.css"

const Widget = (props) => {
    return(
        <div className="widget-wrapper">
            <div className="widget-icon">
                <a href={props.url} target="_blank" rel="noopener noreferrer" download={props.file} >
                    <img src={props.img} alt={props.name} />
                </a>
            </div>
            <div className="widget-text">{props.name}</div>
        </div>
    )
}

export default Widget
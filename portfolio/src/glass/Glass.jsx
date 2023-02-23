import "./Glass.css";

const Glass = (props) => {
    return (
        <div className="glass-wrapper" style={{width:`${props.width}rem`,height:`${props.height}rem`}}>
            <div className="title">{props.title}</div>
        </div>
    )
}

export default Glass
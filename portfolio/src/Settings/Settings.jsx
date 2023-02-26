import { useContext } from "react";
import { settingContext } from "./Context";

import "./Settings.css";


const Settings = () => {
    const { count, setCount } = useContext(settingContext)

    return (
        <div className="settings-wrapper">
            <input type="range" value={count} min={10} onChange={(ev) => {setCount(ev.target.value)}}/>
        </div>
    )
}

export default Settings
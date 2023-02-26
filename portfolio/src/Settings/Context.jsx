import { createContext, useState } from "react";
import Settings from "./Settings";
import App from "../App";

export const settingContext = createContext(null)


const ContextUse = () => {
    const [count, setCount] = useState(100)

    return (
        <settingContext.Provider value={{count, setCount}}>
            <Settings />
            <App />
        </settingContext.Provider>
    )
}

export default ContextUse
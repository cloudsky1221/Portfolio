import "./Weather.css"

import { useState, useEffect } from "react"

const Weather = () => {
    const [data, setData] = useState();
    const [timer, setTimer] = useState("");
    const [mood, setMood] = useState(true);

    // setInterval(() => {
    //     if (mood) setMood(false);
    //     else setMood(true);
    //     setTimer("")
    // }, 60000);

    async function kall() {
        await fetch("https://api.open-meteo.com/v1/forecast?latitude=18.52&longitude=73.86&current_weather=true")
        .then(res => res.json()).then(res => setData(res.current_weather))
    }

    useEffect(() => {
        setTimeout(() => {
            kall()  
            setTimer("")
        }, 3600000);
    },[timer])

    return (
        <div className="weather-wrapper">
            {console.count("timer")}
            <div className="city">Pune</div>
            <div className="temp">Temperature: {data?.temperature}</div>
            <div className="windspeed">Wind-speed: {data?.windspeed}</div>
            <div className="winddirection">Wind-direction: {data?.winddirection}</div>
        </div>
    )
}

export default Weather
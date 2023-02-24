import "./Weather.css"

import Clear from "./Icons/day-clear.png";
import Fog from "./Icons/fog.png";
import FreezingRain from "./Icons/freezing-rain.png";
import PartlyCloudy from "./Icons/partly-cloudy.png";
import Rain from "./Icons/rain.png";
import Snowfall from "./Icons/snowfall.png";
import Thunderstorm from "./Icons/thunderstorm.png";

import { useState, useEffect } from "react"

const Weather = () => {
    const [data, setData] = useState();
    const [timer, setTimer] = useState("");
    const [icon, setIcon] = useState({title:"Not Known", img:Clear});

    function icons(codeNumber){
        switch(codeNumber){
            case 0:
                setIcon({title:"Clear", img:Clear});
                break;

            case 1:
            case 2:
            case 3:
                setIcon({title:"Partly Cloudy", img:PartlyCloudy});
                    break;

            case 45:
            case 48:
                setIcon({title:"Fog", img:Fog});
                break;

            case 51:
            case 53:
            case 55:
                setIcon({title:"Moderate Drizzle", img:Rain});
                    break;

            case 61:
            case 63:
            case 65:
                setIcon({title:"Freezing Drizzle", img:Rain});
                break;

            case 66:
            case 67:
                setIcon({title:"Freezing Rain", img:FreezingRain});
                break;

            case 71:
            case 73:
            case 75:
                setIcon({title:"Snowfall", img:Snowfall});
                    break;

            case 77:
                setIcon({title:"Snow Grains", img:Snowfall});
                    break;

            case 80: 
            case 81: 
            case 82:
                setIcon({title:"Rain Showers", img:Rain});
                    break;

            case 85:
            case 86:
                setIcon({title:"Snow Showers", img:Snowfall});
                    break;

            case 95:
            case 96:
            case 99:
                setIcon({title:"Thunderstorm", img:Thunderstorm});
                    break;

            default:
                setIcon({title:"Not Known", img:Clear});

        }
    }

    setInterval(() => {
        setTimer("")
    }, 3600000);

    async function kall() {
        await fetch("https://api.open-meteo.com/v1/forecast?latitude=18.52&longitude=73.86&current_weather=true")
        .then(res => res.json()).then(res => {setData(res.current_weather);icons(res.current_weather.weathercode)})
    }

    useEffect(() => {
        kall()
    },[timer])

    return (
        <div className="weather-wrapper">
            <div className="city">Pune</div>
            <div className="icon">
                <img src={icon.img} alt="icon-image" />
                <div className="text">{icon.title}</div>
            </div>
            <div className="temp">Temperature: {data?.temperature}</div>
            <div className="windspeed">Wind-speed: {data?.windspeed}</div>
            <div className="winddirection">Wind-direction: {data?.winddirection}</div>
        </div>
    )
}

export default Weather
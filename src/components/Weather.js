import React from "react"


const Weather  = (props) => {
return (
    <div className="weather-panel">
        {props.city && props.country && <p><b>Location:</b> {props.city}, {props.country}</p>}

        {props.temperature && <p><b>Temperature:</b> {props.temperature} C</p>}
        {props.humidity && <p><b>Humidity:</b> {props.humidity}</p>}
        {props.description && <p><b>Conditions:</b> {props.description}</p>}
        {props.error && <p><b>{props.error}</b></p>}
    </div>
)

};


export default Weather;
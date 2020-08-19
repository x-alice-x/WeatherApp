import React from 'react'

const Weather = props => (
    <div className='weather'>
    {props.city && 
        <div>
            <p>Location: <span>{props.city}, {props.country}</span></p>
            <p>Temperature: <span>{props.temp}&deg;</span></p>
            <p>Pressure: <span>{props.pressure}</span></p>
            <p>Sunset: <span>{props.sunset}</span></p>
        </div>
    }
    <p className='error'>{props.error}</p>
    </div>
)

export default Weather
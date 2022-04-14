import React from "react";
import axios from "axios";
import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function Arequest(){
    const [temperature, setTemperature] = useState(0);
    const [humidity, setHumidity]       = useState(0);
    const [area, setArea]               = useState(0);
    const [requestLock, setRequestLock] = useState(false);
    const [background, setBackground]   = useState(0);
    //const [area, setArea]               = React.useState("");
    //const [error, setError]             = React.useState("");
    //const latitude                      =  23.777176;
    //const longitude                     =  90.407608;
    const options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/climate/month',
        params: {q: 'San Francisco'},
        headers: {
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
            'X-RapidAPI-Key': 'de4521d967msh4f0f50f65ecdfb0p1282b4jsne253f8022f73'
            }
    };
    if (requestLock===false) {
     axios.request(options).then(function (response) {
        // handle success
        const humidity      = response.data.list[29].humidity;
        const temperature   = response.data.list[29].temp.average/10;
        const area          = response.data.city.name;
        //const pressure = response.data.list[29].pressure; //response.data.list[29].pressure,
        //console.log(response);
        console.log(response.data.list[29].humidity, response.data.list[29].temp.average,response.data.city.name);
        setHumidity(humidity);
        setTemperature(temperature);
        setArea(area);
        setRequestLock(true);
        if (temperature<=18){
            setBackground('container winter');
        }
        else setBackground('container summer');
        
    })
    .catch(function (error) {
        console.error(error);
    });
}

    return(
        <div className={background}>
        <div className="row">
            <div className="col">
                    <div className="cardModal">
                    <h5 className="card-title">Humidity</h5>
                    <p className="card-text">{humidity}</p>
                </div>
            </div>

            <div className="col">

                    <div className="cardModal">
                    <h5 className="card-title">Temperature</h5>
                    <p className="card-text">{temperature}</p>

                </div>
            </div>

            <div className="col">
                    <div className="cardModal">
                    <h5 className="card-title">Area</h5>
                    <p className="card-text">{area}</p>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Arequest;
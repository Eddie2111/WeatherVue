import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function Bcomponent(){
    const humidity = "67%";
    const temperature = "67%";
    const area = "67%";
    return(
        
        <div class="container">
        <div class="row">

            <div class="col">
                <div className="App">
                    <div className="cardModal">
                    <h5 class="card-title">Humidity</h5>
                    <p class="card-text">{humidity}</p>
                    </div>
                </div>
            </div>

            <div class="col">
            <div className="App">
                    <div className="cardModal">
                    <h5 class="card-title">Temperature</h5>
                    <p class="card-text">{temperature}</p>
                    </div>
                </div>
            </div>

            <div class="col">
            <div className="App">
                    <div className="cardModal">
                    <h5 class="card-title">Area</h5>
                    <p class="card-text">{area}</p>
                    </div>
                </div>
            </div>

        </div>
        </div>

    )
}
export default Bcomponent;
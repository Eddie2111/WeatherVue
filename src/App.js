import React from 'react';
import Acomponent from './Acomponent';
//import Bcomponent from './Bcomponent';
import Arequest from './Arequest';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Bcomponent from "./Bcomponent";

function App() {
  return (
    <div>
    <div className='App'>
    <div className="App-header">
      <p>WeatherVue</p>
      <Acomponent />
      <Arequest />
      <button type="button" className="btnAlter">Primary</button>
      </div>
    </div>
    </div>
  );
}

export default App;

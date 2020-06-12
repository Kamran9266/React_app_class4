import React, {useState} from 'react';
import './Light.css';

function Light() {
    const [isOn, setOn] = useState(true);
    let [Temp, setTemp] = useState(72);
    return (
    <div className = {`room ${isOn? "on":"off"}`}>
        The Light Bulb is turned: {isOn? "On": "Off"}
        <br />
        The Room temperature is: {Temp}
        <br />
        <br />
        <button onClick = {() => setOn(true)}>ON</button>  
        <button onClick = {() => setOn(false)}>OFF</button>
        <div>
            <button onClick = {()=> setTemp(++Temp)}>+</button>
            <button onClick = {()=> setTemp(--Temp)}>-</button>
        </div>
    </div>

    );
}
export default Light;

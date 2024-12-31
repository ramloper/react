import { useState } from 'react';

export const Bulb = () => {
    const [light, setLight] = useState("OFF");
    return (
        <div>
            {light === 'ON' ?
                <h1 style={{ backgroundColor: "red" }}>ON</h1> :
                <h1 style={{ backgroundColor: "gray" }}>OFF</h1>}
            <button onClick={() => {
                setLight(light === "ON" ? "OFF" : "ON");
            }}>
                {light === 'ON' ? "OFF" : "ON"}
            </button>
        </div>
    );
};


export default Bulb;
import {useState} from "react";
import './style.css';

const TemperatureInput = ({value, scale, onChange}) => {
    return <input
        value={value}
        onChange={(e) => onChange(e.target.value, scale)}/>
}


const BoilingVerdict = ({temp}) => {
    if (temp >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

export default function Calculator() {
    const [tempC, setTempC] = useState(0);
    const [tempF, setTempF] = useState(0);
    const [tempK, setTempK] = useState(0);
    const [tempR, setTempR] = useState(0);

    const handleTempChange = (temp, scale) => {
        if (scale === 'C') {
            setTempC(temp);
            setTempF((temp * 1.8) + 32);
            setTempK(+temp + 273.15);
            setTempR((temp * 1.8) + 491.67);
        } else if (scale === 'F') {
            setTempF(temp);
            setTempC((temp - 32) * (5 / 9));
            setTempK((+temp + 459.67) * 5 / 9);
            setTempR(+temp + 459.67);
        } else if (scale === 'K') {
            setTempK(temp);
            setTempC(temp - 273.15);
            setTempF((temp - 273.15) * (9 / 5) + 32);
            setTempR(temp * (9 / 5));
        } else if (scale === 'R') {
            setTempR(temp);
            setTempC((temp * (5 / 9)) - 273.15);
            setTempF(temp - 459.67);
            setTempK(temp * (5 / 9));
        }
    }

    const ResetButton = () => {
        setTempC(0);
        setTempF(0);
        setTempK(0);
        setTempR(0);
    }

    return (
        <div className='wrapper'>
            <h1 className='calculatorTitle'>TEMPERATURE CONVERSION CALCULATOR</h1>
            <p>ENTER TEMPERATURE IN <span className='blue'> 'CELSIUS'</span>:</p>
            <TemperatureInput
                value={tempC}
                scale='C'
                placeholder="Write temperature"
                onChange={handleTempChange}/>
            <p>ENTER TEMPERATURE IN <span className='lightBlue'> 'FAHRENHEIT'</span>:</p>
            <TemperatureInput
                value={tempF}
                scale='F'
                placeholder="Write temperature"
                onChange={handleTempChange}/>
            <p>ENTER TEMPERATURE IN <span className='darkGreen'> 'KELVIN'</span>:</p>
            <TemperatureInput
                value={tempK}
                scale='K'
                placeholder="Write temperature"
                onChange={handleTempChange}/>
            <p>ENTER TEMPERATURE IN <span className='green'> 'RANKINE'</span>:</p>
            <TemperatureInput
                value={tempR}
                scale='R'
                placeholder="Write temperature"
                onChange={handleTempChange}/>

            <button onClick={ResetButton}>CLEAR</button>
            <BoilingVerdict temp={tempC}/>
        </div>
    );
}

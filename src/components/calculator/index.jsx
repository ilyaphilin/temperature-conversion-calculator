import {useState} from "react";
import './style.css';

const TemperatureInput = ({value, scale, onChange}) => {
    return <input
        value={value}
        className='calculatorInput'
        placeholder={`Write temperature in ${scale}`}
        onChange={(e) => onChange(e.target.value, scale)}/>
}


const BoilingVerdict = ({temp}) => {
    if (temp >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p className='calculatorParagraph'>The water would not boil.</p>;
}

export default function Calculator() {
    const [tempC, setTempC] = useState();
    const [tempF, setTempF] = useState();
    const [tempK, setTempK] = useState();
    const [tempR, setTempR] = useState();
    const handleTempChange = (temp, scale) => {
        if (scale === 'C') {
            setTempC(temp);
            setTempF(((temp * 1.8) + 32).toFixed(2));
            setTempK((+temp + 273.15).toFixed(2));
            setTempR(((temp * 1.8) + 491.67).toFixed(2));
        } else if (scale === 'F') {
            setTempF(temp);
            setTempC(((temp - 32) * (5 / 9)).toFixed(2));
            setTempK(((+temp + 459.67) * 5 / 9).toFixed(2));
            setTempR((+temp + 459.67).toFixed(2));
        } else if (scale === 'K') {
            setTempK(temp);
            setTempC((temp - 273.15).toFixed(2));
            setTempF(((temp - 273.15) * (9 / 5) + 32).toFixed(2));
            setTempR((temp * (9 / 5)).toFixed(2));
        } else if (scale === 'R') {
            setTempR(temp);
            setTempC(((temp * (5 / 9)) - 273.15).toFixed(2));
            setTempF((temp - 459.67).toFixed(2));
            setTempK((temp * (5 / 9)).toFixed(2));
        }
    }

    const ResetButton = () => {
        setTempC('');
        setTempF('');
        setTempK('');
        setTempR('');
    }

    return (
        <div className='wrapper'>
            <h1 className='calculatorTitle'>TEMPERATURE CONVERSION CALCULATOR</h1>
            <p className='calculatorParagraph'>ENTER TEMPERATURE IN <span className='blue'> 'CELSIUS'</span>:</p>
            <TemperatureInput
                value={tempC}
                scale='C'
                onChange={handleTempChange}/>
            <p className='calculatorParagraph'>ENTER TEMPERATURE IN <span className='lightBlue'> 'FAHRENHEIT'</span>:</p>
            <TemperatureInput
                value={tempF}
                scale='F'
                onChange={handleTempChange}/>
            <p className='calculatorParagraph'>ENTER TEMPERATURE IN <span className='darkGreen'> 'KELVIN'</span>:</p>
            <TemperatureInput
                value={tempK}
                scale='K'
                onChange={handleTempChange}/>
            <p className='calculatorParagraph'>ENTER TEMPERATURE IN <span className='green'> 'RANKINE'</span>:</p>
            <TemperatureInput
                value={tempR}
                scale='R'
                onChange={handleTempChange}/>
            <button className='resetButton' onClick={ResetButton}>CLEAR</button>
            <BoilingVerdict temp={tempC}/>
        </div>
    );
}

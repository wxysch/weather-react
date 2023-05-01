import {useState} from 'react'

const Form = ({getWeather}) => {
    const [city,setCity] = useState('')
    return (
            <div className='form'>
                <label>
                    <input value={city} placeholder='Введите город' type="text" onChange={(event) => setCity(event.target.value)}/>
                </label>
                <button type='button' onClick={getWeather}>Получить погоду</button>
            </div>
    );
};
export default Form;
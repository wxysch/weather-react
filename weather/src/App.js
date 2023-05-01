import {useState} from 'react'
import axios from "axios";
import './app.css'
import Form from './Form'
import Table from './Table'
import getWeather from './Form'

function App() {
  const [weather, setWeather] = useState({})
  const getWeather = (city) =>{
    const KEY = '86a842b32f9b286dc9968efd1c58f3c0'
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`
    axios(API)
    .then(({data})=>{
      setWeather(data)
    })
  }
  return (
    <div className="App">
      <Form getWeather={getWeather}/>
      <br />
      <Table />
    </div>
  );
}

export default App;

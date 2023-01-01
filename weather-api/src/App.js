import React, { useState } from "react";
import './App.css';
import Header from './components/Header'
import Middle from './components/Middle';
import Lower from './components/Lower';
import axios from "axios";



function App() {

  const [data, setData] = useState('');

  const GetWeatherData = async (cityName) => {

    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=8&units=metric&appid=c8352c4987416f58636f8e3c13f1511d`
    await axios
      .get(url)
      .then((response) =>
        setData(response.data))

    // axios.get(url).then((response) => {
    //   setData(response.data)
    //   console.log(response.data)
    // })
  }

  return (
    <div className="App">
      <Header getWeatherData={GetWeatherData} />
      <Middle middleData={data} />
      <Lower lowerData={data} />

    </div>
  );
}

export default App;


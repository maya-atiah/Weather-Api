import React from "react";
import clear from "../images/weather-icons/Clear.svg";
import FakeWeather from "../data/FakeWeather.json";

export default function Middle (){

const currentFakeWeather= FakeWeather && FakeWeather.list[0]

    return(

    <div >     
       {
                console.log(FakeWeather.list)
            }
              {

FakeWeather && (
  <div>
    <div className="block"></div>   
    <img src={clear} alt="storm icon" />   
    <h3 className="h3--middle">{currentFakeWeather.weather[0].main}</h3>
   <h2 className="h2--middle">Temperature {currentFakeWeather.main.temp_min} to {currentFakeWeather.main.temp_max}</h2>

   <h4 className="h4--middle">Humidity {currentFakeWeather.main.humidity}  pressure {currentFakeWeather.main.pressure}</h4>
   <div className="block"></div> </div>  )}
    </div>


)
}



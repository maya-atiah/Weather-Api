import React from "react";
import clear from "../images/weather-icons/Clear.svg";
import drizzle from "../images/weather-icons/drizzle.svg";
import fog from "../images/weather-icons/fog.svg";
import mostlycloudy from "../images/weather-icons/mostlycloudy.svg";
import rain from "../images/weather-icons/Rain.svg";
import snow from "../images/weather-icons/snow.svg";
import storm from "../images/weather-icons/storm.svg";
import unknown from "../images/weather-icons/unknown.svg";

export default function Middle({ middleData }) {


  const currentWeather = middleData && middleData.list[0];



  const imageFunction = (x) => {

    let image;

    if (x === "Clear") {
      image = clear;
    } else if (x === "Drizzle") {
      image = drizzle;
    } else if (x === "Fog") {
      image = fog;
    } else if (x === "Clouds") {
      image = mostlycloudy;
    } else if (x === "Rain") {
      image = rain;
    } else if (x === "Storm") {
      image = storm;
    } else if (x === "Snow") {
      image = snow;
    } else image = unknown;
    return <img src={image} />;
  };

  return (
    <div>
      {console.log(currentWeather)}
      {currentWeather && (
        <div>
          <div className="block"></div>
          <div>
            {" "}
           {imageFunction(currentWeather.weather[0].main)} 
          </div>
          <h3 className="h3--middle">
            {" "}
            {currentWeather.weather[0].discription}
          </h3>
          <h2 className="h2--middle">
            Temperature {currentWeather.main.temp_min} to{" "}
            {currentWeather.main.temp_max}
          </h2>

          <h4 className="h4--middle">
            Humidity {currentWeather.main.humidity} pressure{" "}
            {currentWeather.main.pressure}
          </h4>
          <div className="block"></div>
        </div>
      )}
    </div>
  );
}

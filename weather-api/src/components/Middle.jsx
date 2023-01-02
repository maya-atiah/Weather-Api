import React from "react";
import clear from "../images/weather-icons/Clear.svg";
import drizzle from "../images/weather-icons/drizzle.svg";
import fog from "../images/weather-icons/fog.svg";
import mostlycloudy from "../images/weather-icons/mostlycloudy.svg";
import rain from "../images/weather-icons/Rain.svg";
import snow from "../images/weather-icons/snow.svg";
import storm from "../images/weather-icons/storm.svg";
import unknown from "../images/weather-icons/unknown.svg";
import partlycloudy from "../images/weather-icons/partlycloudy.svg";

export default function Middle({ middleData }) {
  const currentWeather = middleData && middleData.list[0];

 // Matching up the weather id with the appropriate icon

  const imageFunction = (id) => {
    let image;

    if (id === 800) {
      image = clear;
    } else if (id >= 300 && id < 499) {
      image = drizzle;
    } else if (id >= 700 && id < 799) {
      image = fog;
    } else if (id > 801 && id < 805) {
      image = mostlycloudy;
    } else if (id >= 500 && id < 599) {
      image = rain;
    } else if (id < 300) {
      image = storm;
    } else if (id >= 600 && id < 699) {
      image = snow;
    } else if (id === 801) {
      image = partlycloudy;
    } else image = unknown;
    return <img src={image} />;
  };

  return (
    <div>
      {console.log(currentWeather)}
      {currentWeather && (
        <div key={currentWeather.dt}>
          <div className="block"></div>
          <div> {imageFunction(currentWeather.weather[0].id)}</div>
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

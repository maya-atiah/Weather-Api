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

export default function Lower({ lowerData }) {


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
    <div className="lower-block">
      {console.log(lowerData)}

      {lowerData &&
        lowerData.list.map((x) => {
        //   let weather =
        //     x.weather[0].main === "Clear"
        //       ? Clear
        //       : x.weather[0].main === "Rain"
        //       ? Rain
        //       : clouds;

          return (
            <div key={x.dt}>
              <span>{x.dt_txt}</span>
              <div> {imageFunction(x.weather[0].id)}</div>
              <span>{x.main.temp} </span>
            </div>
          );
        })}
    </div>
  );
}

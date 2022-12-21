import React from "react";
import Clear from "../images/weather-icons/Clear.svg";
import Rain from "../images/weather-icons/Rain.svg";
import clouds from "../images/weather-icons/mostlycloudy.svg";
import FakeWeather from "../data/FakeWeather.json";

export default function Lower() {

    return (

        <div className="lower-block">

            {
                console.log(FakeWeather.list)
            }

            {

                FakeWeather && FakeWeather.list.map(x => {

                    let weather = x.weather[0].main === 'Clear' ? Clear : x.weather[0].main === 'Rain' ? Rain :  clouds;

                    return (
                        <div>
                            <span>{x.dt_txt}</span>
                            <img src={weather} alt="cloudy" />
                            <span>{x.main.temp} </span>
                        </div>
                    )
                })
            }

        </div>
    )

}


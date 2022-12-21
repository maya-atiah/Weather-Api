import React from "react";
import cloudy from "../images/weather-icons/cloudy.svg";
import clear from "../images/weather-icons/clear.svg";

export default function Lower (){
    return(

        <div className="lower-block">
            <div>
                <span>03:00</span>
             <img src={cloudy} alt="cloudy icon" />
                <span>8 C</span>
            </div>
            <div>
                <span>06:00</span>
                <img src={clear} alt="cloudy icon" />
                 <span>9 C</span>
            </div>
            <div>
                <span>09:00</span>
                <img src={clear} alt="cloudy icon" />
                  <span>14 C</span>
            </div>
            <div>
                <span>12:00</span>
                <img src={clear} alt="cloudy icon" />
                  <span>17 C</span>
            </div>
            <div>
                <span>15:00</span>
                <img src={clear} alt="cloudy icon" />
                 <span>18 C</span>
            </div>
            <div>
                <span>18:00</span>
                <img src={clear} alt="cloudy icon" />
                 <span>16 C</span>
            </div>
            <div>
                <span>21:00</span>
                <img src={cloudy} alt="cloudy icon" />
                <span>13 C</span>
            </div>
            </div>
            )
            }
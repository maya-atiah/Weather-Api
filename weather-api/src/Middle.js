import React from "react";
import storm from "./images/weather-icons/storm.svg";

export default function Middle (){
    return(

    <div >     
    <div className="block"></div>   
    <img src={storm} alt="storm icon" />   
    <h3 className="h3--middle">overcast clouds</h3>
   <h2 className="h2--middle">Temperature 10 to 11 C</h2>

   <h4 className="h4--middle">Humidity 78%  pressure 1008.4</h4>
   <div className="block"></div>   
    </div>


)
}



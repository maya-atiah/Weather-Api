import React , {useState} from "react";



export default function Header(props) {
  
const [cityName,setCity]=useState("London")
 


  const inputChange = (event)=>{
    setCity(event.target.value);
    
  }

  const onSubmitHandler =(event)=>{
    event.preventDefault();

    props.getWeatherData(cityName);
    console.log(event);
    setCity('');
  }
 
  return (
    <div className="head">
      <header>
        <input
          type="text"
          id="country"
          placeholder="Enter city name"
          value={cityName}
          onChange={inputChange}
        ></input>

        <button className="button" onClick={onSubmitHandler} type="submit">
          
          FIND WEATHER
        </button>
      </header>
    </div>
  );
}

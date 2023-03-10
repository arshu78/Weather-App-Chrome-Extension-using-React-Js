import React, { useState ,useEffect } from 'react'
import "./css/style.css";
const Tempapp = () => {
    const [city,setCity] =useState(null);
    const [search,setSearch] =useState("Pune");

    useEffect( ()=> {
      const fetchApi =async () => {
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=cd9668801d04bf86b829fe0e249c0b88&units=metric`
        const response =await fetch(url);
         const resJson=await response.json();
        //  console.log(json);
        setCity(resJson.main);
      };

      fetchApi();
    },[search])

  return (
    <>
    <div className="box">
        <div className="inputData">
            <input type="search" className="inputField" 
            value={search}
            onChange={(event)=>{
              setSearch(event.target.value);
            }}/>
        </div>

      {
        !city ? (
          <p className="errorMsg">No Data Found</p>
        ) :
        (
          <>
          <div className="info">
            <h2 className="location">
            <i className="fa-solid fa-street-view"></i> {search}
            </h2>
            <h1 className="temp">{city.temp}°C</h1>
            <h3 className="tempmin_max"> {city.temp_min}°C | {city.temp_max}°C</h3>
        </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </>
        )
      }
        
    </div>


</>
  )
}

export default Tempapp;

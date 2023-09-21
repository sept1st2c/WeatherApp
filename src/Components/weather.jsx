import React from 'react'




import {BiSearchAlt} from 'react-icons/bi'
import {WiHumidity} from 'react-icons/wi'
import {WiWindy} from 'react-icons/wi'
/*
import {WiDayLightWind} from 'react-icons/wi'

import clear_icon from '../Images/clear.png'
import cloud_icon from '../Images/cloud.png'
import drizzle_icon from '../Images/drizzle.png'
import rain_icon from '../Images/rain.png'
import snow_icon from '../Images/snow.png'
import wind_icon from '../Images/wind.png'
import humidity_icon from '../Images/humidity.png'
*/







const Weather = () => {

  let api_key = "c7b78328fbcb1b813787655db49d81c6";


  const searching = async () => {
    const element = document.getElementsByClassName("smallicon");
    if (element[0].value == "")
    {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidityy");
    const wind = document.getElementsByClassName("windd");
    const temperature = document.getElementsByClassName("temperature");
    const location = document.getElementsByClassName("location");

    humidity[0].innerHTML  = data.main.humidity+"%";
    wind[0].innerHTML  = data.wind.speed+"km/hr";
    temperature[0].innerHTML = data.main.temp+"°C";
    location[0].innerHTML = data.name;




  }


  return (
    <div className="app">
      <div className="search">
        <input
          placeholder='Enter Location'
          type="text" />
          <div className='smallicon'
          onClick={()=>{searching()}}
          >
          <BiSearchAlt/>
          </div>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>London</p>
          </div>
          <div className="temp">
            <h1 className='temperature'>32°C</h1>
          </div>
        </div>
          <div className="bottom">
            <div className="humidity">
              <p className='bold '><div className='humidityy'>75%</div></p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className='bold windd'>12 kPH</p>
              <p>Wind Speed</p>
            </div>
          </div>



      </div>
    </div>
  )
}

export default Weather
/*
const Container = styled.div`
  width: 607px;
  height: 829px;
  margin: auto;
  margin-top: 75px;
  border-radius: 12px;
  background-color: aliceblue;
`;
const Searchbar = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-top: 350px;
  input {
    display: flex;
    padding-left: 30px;
    width: 350px;
    height: 78px;
    background-color: antiquewhite;
    border: none;
    outline: none;
    border-radius: 40px;
    font-size: 20px;

  }
`;

const SearchIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: aqua;
  cursor: pointer;
  scale: 100%;
`;
const WeatherImage = styled.div`
  margin-top: 29px;
  display: flex;
  justify-content: center;


`;
const Temperature = styled.div `
  display: flex;
  justify-content: center;
  color: white;
  font-size: 120px;
  font-weight: 400;

`;
const Location = styled.div `
  display: flex;
  justify-content: center;
  color: white;
  font-size: 60px;
  font-weight: 400;


`;
const DataContainer = styled.div `
  margin-top: 50px;
  color: white;
  display: flex;
  justify-content: center;
`;
const Element = styled.div `
  margin: auto;
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;
const Data = styled.div`
  font-size: 34px;
  font-weight: 400;

`;
const Text = styled.div`
  font-size: 20px;
  font-weight: 400;
`;
const Icon = styled.div`
  margin-top: 10px;
`;

*/
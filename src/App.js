import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Map from "./Map";
import SmallCards from "./SmallCards";
import BigCard from "./BigCard";
import "./App.css";

const App = () => {
  const [locationInfo, setLocationInfo] = useState();
  const [fiveDayWeatherData, setFiveDayWeatherData] = useState();
  const [selectedDayWeatherData, setSelectedDayWeatherData] = useState();

  const updateLocation = (locationInfo) => {
    setLocationInfo(locationInfo);
    if (locationInfo && locationInfo.woeid) {
      //fetch(`http://localhost:8010/proxy/api/location/${woeid}`)
      fetch(
        "https://cors-anywhere.herokuapp.com/" +
        `https://www.metaweather.com/api/location/${locationInfo.woeid}`
      )
        .then(res => res.json())
        .then(data => {
          setFiveDayWeatherData(data.consolidated_weather);
          setSelectedDayWeatherData(data.consolidated_weather[0]);
        })
    }
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      columnGap: '1rem',
      gridTemplateRows: 'auto auto 1fr',
      rowGap: '1rem',
      height: '100vh',
    }}>
      <div div style={{
        gridColumnStart: 1,
        gridColumnEnd: 3,
        margin: '1rem 1rem 0 1rem'
      }}>
        <SearchBar updateLocation={updateLocation} />
      </div >
      <div style={{
        gridRowStart: '2',
        gridRowEnd: '4',
        margin: '0 0 1rem 1rem'
      }}>
        {locationInfo &&
          <Map latt_long={locationInfo.latt_long} />
        }
      </div>
      <div style={{
        gridRowStart: '2',
        gridColumnStart: '2',
        margin: '0 1rem 0 0'
      }}
      >
        {fiveDayWeatherData &&
          <SmallCards fiveDayWeatherData={fiveDayWeatherData} setSelectedDayWeatherData={setSelectedDayWeatherData} />
        }
      </div>
      <div style={{
        gridRowStart: '3',
        gridColumnStart: '2',
        margin: '0 1rem 1rem 0',
      }}>
        {selectedDayWeatherData &&
          <BigCard selectedDayWeatherData={selectedDayWeatherData} />
        }
      </div>
    </div>
  );
}

export default App;

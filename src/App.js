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
      let woeid = locationInfo.woeid;
      fetch(`http://localhost:8010/proxy/api/location/${woeid}`)
        .then(res => res.json())
        .then(data => {
          setFiveDayWeatherData(data.consolidated_weather);
          setSelectedDayWeatherData(data.consolidated_weather[0]);
        })
    }
  }

  return (
    <>
      <div style={{ margin: '1rem' }}>
        <SearchBar updateLocation={updateLocation} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '400px auto', columnGap: '1rem', gridTemplateRows: 'auto auto', rowGap: '1rem', margin: '1rem' }}>
        <div style={{ gridRowStart: '1', gridRowEnd: '3' }}>
          {locationInfo &&
            <Map latt_long={locationInfo.latt_long} />
          }
        </div>
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, auto)', columnGap: '1rem', height: '13rem' }}>
            {fiveDayWeatherData &&
              <SmallCards fiveDayWeatherData={fiveDayWeatherData} setSelectedDayWeatherData={setSelectedDayWeatherData} />
            }
          </div>
        </div>
        <div style={{ height: '20rem' }}>
          {selectedDayWeatherData &&
            <BigCard selectedDayWeatherData={selectedDayWeatherData} />
          }
        </div>
      </div>
    </>
  );
}

export default App;

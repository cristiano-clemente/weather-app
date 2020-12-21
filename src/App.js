import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import SearchBar from "./SearchBar";
//import WeatherDisplay from "../components/WeatherDisplay/WeatherDisplay";
import FullWeatherCard from "./FullWeatherCard";
import WeatherCard from "./WeatherCard";
import { QueryClient, QueryClientProvider } from 'react-query';
import "./App.css";
import data from "./example_data_location_request.json";

const queryClient = new QueryClient();

const App = () => {
  const [location, setLocation] = useState("");
  const [selectedData, setSelectedData] = useState(data.consolidated_weather[0]);

  return (
    <QueryClientProvider client={queryClient}>
      <>
        <div id="search-bar" style={{ margin: '1rem' }}>
          <SearchBar onChange={setLocation}></SearchBar>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '400px auto', columnGap: '1rem', gridTemplateRows: 'auto auto', rowGap: '1rem', margin: '1rem' }}>
          <div id="map" style={{ gridRowStart: '1', gridRowEnd: '3', backgroundColor: 'red' }}>
            <h1>mapa</h1>
          </div>
          <div>
            <div id="small-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, auto)', columnGap: '1rem' }}>
              {
                data.consolidated_weather.slice(0, 5).map(data => {
                  return (<WeatherCard key={data.id} data={data} setSelectedData={setSelectedData} />);
                })
              }
            </div>
          </div>
          <div id="big-card">
            <FullWeatherCard selectedData={selectedData}></FullWeatherCard>
          </div>
        </div>
      </>
    </QueryClientProvider >
  );
}

export default App;

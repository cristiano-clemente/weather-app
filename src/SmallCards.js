import React from "react";
import SmallCard from "./SmallCard";

const SmallCards = ({ fiveDayWeatherData, setSelectedDayWeatherData }) => {
    return (
        fiveDayWeatherData.slice(0, 5).map(data => {
            return (<SmallCard
                key={data.id}
                data={data}
                setSelectedDayWeatherData={setSelectedDayWeatherData} />);
        })
    );
}

export default SmallCards;

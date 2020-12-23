import React from "react";
import SmallCard from "./SmallCard";

const SmallCards = ({ fiveDayWeatherData, setSelectedDayWeatherData }) => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, auto)',
            columnGap: '1rem',
            height: '100%'
        }}>
            {
                fiveDayWeatherData.slice(0, 5).map(data => {
                    return (<SmallCard
                        key={data.id}
                        data={data}
                        setSelectedDayWeatherData={setSelectedDayWeatherData} />);
                })
            }
        </div>
    );
}

export default SmallCards;

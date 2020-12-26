import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Moment from "moment";

const BigCard = ({ selectedDayWeatherData }) => {

    const imageLink =
        "https://www.metaweather.com/static/img/weather/png/" +
        selectedDayWeatherData.weather_state_abbr +
        ".png";

    return (
        <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
            <Typography variant="h3" component="h3" align="center">
                {Moment(selectedDayWeatherData.applicable_date).format("D MMMM YYYY")}
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Typography variant="h2" component="h3" align="right">
                    {selectedDayWeatherData.the_temp.toFixed(2)} ºC
                </Typography>
                <Typography variant="h5" component="p">
                    Max: {selectedDayWeatherData.max_temp.toFixed(2)} ºC<br />
                    Min: {selectedDayWeatherData.min_temp.toFixed(2)} ºC
                </Typography>
                <img
                    width="20%" height="auto"
                    src={imageLink}
                    alt={selectedDayWeatherData.weather_state_name}
                />
            </div>
        </Card>
    );
}

export default BigCard;
import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Moment from "moment";

const SmallCard = ({ data, setSelectedDayWeatherData }) => {

    const imageLink =
        "https://www.metaweather.com/static/img/weather/png/" +
        data.weather_state_abbr +
        ".png";

    return (
        <Card
            onClick={() => setSelectedDayWeatherData(data)}
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: "pointer",
                alignItems: 'center'
            }}>
            <Typography variant="h5" component="h2" style={{ margin: '1rem' }}>
                {Moment(data.applicable_date).format("D MMM")}
            </Typography>
            <img width="50%" height="auto" src={imageLink} alt={data.weather_state_name} />
            <Typography variant="h5" component="h3" style={{ margin: '1rem' }}>
                {data.the_temp.toFixed(2)} ºC
                </Typography>
        </Card>
    );
}

export default SmallCard;
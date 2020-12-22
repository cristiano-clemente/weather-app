import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Moment from "moment";

const SmallCard = ({ data, setSelectedDayWeatherData }) => {

    const imageLink =
        "https://www.metaweather.com/static/img/weather/png/" +
        data.weather_state_abbr +
        ".png";

    return (
        <Card style={{ textAlign: 'center', cursor: "pointer" }}>
            <CardContent onClick={() => setSelectedDayWeatherData(data)} style={{ padding: '1rem' }}>
                <Typography variant="h5" component="h2">
                    {Moment(data.applicable_date).format("D MMM")}
                </Typography>
                <img width="50%" height="auto" src={imageLink} alt={data.weather_state_name} style={{ margin: '1rem' }} />
                <Typography variant="h5" component="h3">
                    {data.the_temp.toFixed(2)} ºC
          </Typography>
            </CardContent>
        </Card>
    );
}

export default SmallCard;
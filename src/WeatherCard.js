import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Moment from "moment";

const WeatherCard = (props) => {

  function setSelectedData() {
    props.setSelectedData(props.data);
  }

  const imageLink =
    "https://www.metaweather.com/static/img/weather/png/" +
    props.data.weather_state_abbr +
    ".png";

  return (
    <Card style={{ textAlign: 'center', cursor: "pointer" }}>
      <CardContent onClick={setSelectedData} style={{ padding: '1rem' }}>
        <Typography variant="h5" component="h2">
          {Moment(props.data.applicable_date).format("D MMM")}
        </Typography>
        <img width="50%" height="auto" src={imageLink} alt={props.data.weather_state_name} style={{ margin: '1rem' }} />
        <Typography variant="h5" component="h3">
          {props.data.the_temp.toFixed(2)} ºC
          </Typography>
      </CardContent>
    </Card>
  );
}

export default WeatherCard;

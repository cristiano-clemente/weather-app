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

{/*
<Grid container>
                    <Grid item xs={12}>
                        <Typography
                            variant="h3"
                            component="h3"
                            align="center"
                            className={classes.title}
                        >
                            {Moment(selectedDayWeatherData.applicable_date).format("D MMMM YYYY")}
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        item
                        justify="flex-end"
                        alignItems="center"
                        className={classes.temp}
                        xs={4}
                    >
                        <Typography variant="h2" component="h3" align="right">
                            {selectedDayWeatherData.the_temp.toFixed(2)} ºC
            </Typography>
                    </Grid>
                    <Grid
                        xs={3}
                        item
                        container
                        direction="column"
                        justify="center"
                        alignItems="flex-start"
                    >
                        <Typography variant="h5" component="p">
                            Max: {selectedDayWeatherData.max_temp.toFixed(2)} ºC
            </Typography>
                        <Typography variant="h5" component="p">
                            Min: {selectedDayWeatherData.min_temp.toFixed(2)} ºC
            </Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <img
                            className={classes.icon}
                            src={imageLink}
                            alt={selectedDayWeatherData.weather_state_name}
                        />
                    </Grid>
                    <InfoDisplay
                        title="Wind speed"
                        value={selectedDayWeatherData.wind_speed.toFixed(2)}
                        size={4}
                    ></InfoDisplay>
                    <InfoDisplay
                        title="Wind direction"
                        value={selectedDayWeatherData.wind_direction.toFixed(2)}
                        size={4}
                    ></InfoDisplay>
                    <InfoDisplay
                        title="Wind direction compass"
                        value={selectedDayWeatherData.wind_direction_compass}
                        size={4}
                    ></InfoDisplay>
                    <InfoDisplay
                        title="Air pressure"
                        value={selectedDayWeatherData.air_pressure.toFixed(2)}
                        size={4}
                    ></InfoDisplay>
                    <InfoDisplay
                        title="Humidity"
                        value={selectedDayWeatherData.humidity.toFixed(2)}
                        size={4}
                    ></InfoDisplay>
                </Grid>
*/}
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import InfoDisplay from "./InfoDisplay";
import Moment from "moment";

const useStyles = makeStyles({
    icon: {
        height: 200,
        marginBottom: 40,
        marginTop: 20
    },
    title: {
        margin: 20
    },
    temp: {
        paddingRight: 30
    }
});

const BigCard = ({ selectedDayWeatherData }) => {
    const classes = useStyles();

    const imageLink =
        "https://www.metaweather.com/static/img/weather/png/" +
        selectedDayWeatherData.weather_state_abbr +
        ".png";

    return (
        <Card>
            <CardContent style={{ padding: '1rem' }}>
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
            </CardContent>
        </Card >
    );
}

export default BigCard;
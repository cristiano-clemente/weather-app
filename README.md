Our weather app will consist of an [SPA](https://en.wikipedia.org/wiki/Single-page_application) that will display the current forecast details and the next few days' forecast, for a selected location.

Users should be allowed to search for a location. This search will guide our users, displaying possible locations containing the users' query as he types.

Upon selecting a location, he should be able to check the forecast for the next 5 days and the details of today's weather report.

We will rely on [MetaWeather](https://www.metaweather.com/api/)'s data. It provides endpoints to search for a location from a provided query string and another to fetch the weather report of a location, through its [WOEID](https://en.wikipedia.org/wiki/WOEID) - _Where on Earth ID_.

## [moment](https://momentjs.com/)

```bash
npm install moment
```

```JavaScript
import moment from 'moment';

const date = new Date(); // "Mon Nov 15 2020 11:11:02 GMT+0000 (Western European Standard Time)"
moment(date).format('MMMM Do YYYY, h:mm:ss a'); // "November 15th 2020, 11:11:02 pm"
```

## [material-ui](https://material-ui.com/)

```bash
npm install @material-ui/core @material-ui/icons @material-ui/lab
```

```JSX
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  footer: {
    fontSize: 8,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography className={classes.title}>
          Title
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Subtitle
        </Typography>
        <Typography color="textSecondary">
          Main content of the card
        </Typography>
        <Typography className={classes.footer} variant="body2" component="p">
          A footer note
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Call to action</Button>
      </CardActions>
    </Card>
  );
};
```

## [axios](https://github.com/axios/axios#axios) + [local-cors-proxy](https://github.com/garmeeh/local-cors-proxy#readme) + [react-query](https://github.com/tannerlinsley/react-query#visit-react-querytanstackcom-for-docs-guides-api-and-more)

```bash
npm install -g local-cors-proxy
lcp --origin http://localhost:3000 --proxyUrl https://www.metaweather.com
npm install axios react-query
```

```JavaScript
import axios from 'axios';
import { useQuery } from 'react-query';

export default function ForecastLocationDetails({ woeid }) {
  const {
    data,
    isLoading,
    isError,
    error
  } = useQuery(
    ['getLocationForecastDetails', woeid],
    () =>  {
      return axios.get(`http://localhost:8010/proxy/api/location/${woeid}/`)
      .then(({ data } = {}) => data)
    });

  if(isError) {
    return <h3>{error.message}</h3>
  }

  if(isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>{data.title}</h1>
      <h3>{data.location_type}</h3>
      <h2>{data.consolidated_weather[0].weather_state_name}</h2>
      <h2>{`${data.consolidated_weather[0].the_temp}º`}</h2>
    </>
  );
}
```

## [react-mapbox-gl](https://github.com/alex3165/react-mapbox-gl) + [mapbox-gl](https://docs.mapbox.com/mapbox-gl-js/api/)

```bash
npm install react-mapbox-gl mapbox-gl
```

```JavaScript

import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoicHNpbHZhaWMiLCJhIjoiY2tobmI5YTRlMDAzbTMxcGV6NDk3ZHNrdCJ9.mpgz1tj9j8cLrhrsZ5hlhw'
});

function MyMap() {
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: '100%',
        width: '100%'
      }}
    >
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[38.725670, -9.150370]} />
      </Layer>
    </Map>
  )
}
```

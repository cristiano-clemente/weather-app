# Building a Weather app

Our weather app will consist of an [SPA](https://en.wikipedia.org/wiki/Single-page_application) that will display the current forecast details and the next few days' forecast, for a selected location.

Users should be allowed to search for a location. This search will guide our users, displaying possible locations containing the users' query as he types.

Upon selecting a location, he should be able to check the forecast for the next 5 days and the details of today's weather report.

We will rely on [MetaWeather](https://www.metaweather.com/api/)'s data. It provides endpoints to search for a location from a provided query string and another to fetch the weather report of a location, through its [WOEID](https://en.wikipedia.org/wiki/WOEID) - _Where on Earth ID_.

## Moment

[Moment](https://momentjs.com/) is the most used package to handle and format dates.

```bash
npm install moment
```

Usage example

```JavaScript
import moment from 'moment';

const date = new Date(); // "Mon Nov 15 2020 11:11:02 GMT+0000 (Western European Standard Time)"
moment(date).format('MMMM Do YYYY, h:mm:ss a'); // "November 15th 2020, 11:11:02 pm"
```

## Material-UI

[Material](https://material-ui.com/) is a well known and very popular library of polished UI components that can easily be reused.
All components follow an underlying theme, keeping our application with a consistent look and feel.

```bash
npm install @material-ui/core @material-ui/icons @material-ui/lab
```

Usage example:

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

Material-UI brings along dozens of components that cover a fairly amount of scenarios and the following root components will be quite useful during our development:

- [Autocomplete](https://material-ui.com/components/autocomplete) - Input with suggestions;
- [Card](https://material-ui.com/components/cards/) - Material-UI's root Card component;
- [Grid](https://material-ui.com/components/grid/) - Easy manage a 12 columns layout;
- [Typography](https://material-ui.com/components/typography/) - Wrapper for all kind of text, with a huge set of variants to fit titles, paragraphs, etc;

## axios + react-query

Until now, our forecast comes only from the sample files, but ideally, we should be fetching the data directly from [MetaWeather](https://www.metaweather.com/), but this is where it gets complicated.

MetaWeather API doesn't have [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) enabled, so our browser will refuse to fetch data from it. As a work around, we can use [`local-cors-proxy`](https://github.com/garmeeh/local-cors-proxy#readme) to proxy the request and trick our browser.

```bash
npm install -g local-cors-proxy
lcp --origin http://localhost:3000 --proxyUrl https://www.metaweather.com
```

In order to perform request to MetaWeather, [axios](https://github.com/axios/axios#axios) is definitely the right tool for the job.

[react-query](https://github.com/tannerlinsley/react-query#visit-react-querytanstackcom-for-docs-guides-api-and-more) streamlines the usage of axios, so that it works as any other hook.

```bash
npm install axios react-query
```

Simple example, performing a request to MetaWeather to fetch a locations data through its _woeid_:

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

## react-mapbox-gl

A map would be a great addition to our weather app. Since MetaWeather provides the latitude and longitude of a location, it would be nice to focus that location on a map.

It would be a bit awkward to make plans for a nice weekend BBQ based on the forecast for [Lisbon, Florida](https://en.wikipedia.org/wiki/Lisbon,_Florida) or some other [Lisbon](<https://en.wikipedia.org/wiki/Lisbon_(disambiguation)#United_States>), just in the USA.

As you can imagine, there are quite a few components at our disposal, and we suggest the usage of [react-mapbox-gl](https://github.com/alex3165/react-mapbox-gl).
It is quite simple to integrate and to display a point at a certain latitude and longitude.
Feel free to play with their [demos](https://alex3165.github.io/react-mapbox-gl/demos) to get a feeling about how it works and look around their [documentation](https://alex3165.github.io/react-mapbox-gl/documentation).
The most important components to focus upon a location would be `ReactMapboxGl`, `Layer` and `Feature`.

We can install it into our project with:

```bash
npm install react-mapbox-gl mapbox-gl
```

In order to use react-mapbox-gl, we will need an accessToken, that we already requested:

```
pk.eyJ1IjoicHNpbHZhaWMiLCJhIjoiY2tobmI5YTRlMDAzbTMxcGV6NDk3ZHNrdCJ9.mpgz1tj9j8cLrhrsZ5hlhw
```

The snippet bellow we displays how we can create a Map, with the provide accessToken, that will focus upon Lisbon, Portugal and place a small marker:

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

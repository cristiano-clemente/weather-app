# Weather App

My "Weather App" consists of an [SPA](https://en.wikipedia.org/wiki/Single-page_application) that will display the current forecast details and the next few days' forecast for a selected location.

Users should be allowed to search for a location. This search will guide the users, displaying possible locations containing the users' query as he types.

Upon selecting a location, he should be able to check the forecast for the next 5 days and the details of today's weather report.

We will rely on [MetaWeather](https://www.metaweather.com/api/)'s data. It provides endpoints to search for a location from a provided query string and another to fetch the weather report of a location, through its [WOEID](https://en.wikipedia.org/wiki/WOEID) - _Where on Earth ID_.

## Built with

[moment](https://momentjs.com/)

[material-ui](https://material-ui.com/)

[local-cors-proxy](https://github.com/garmeeh/local-cors-proxy#readme) | [cors-anywhere](https://github.com/Rob--W/cors-anywhere/#documentation)

[react-mapbox-gl](https://github.com/alex3165/react-mapbox-gl) + [mapbox-gl](https://docs.mapbox.com/mapbox-gl-js/api/)

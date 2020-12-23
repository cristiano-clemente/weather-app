import React from "react";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapAux = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoicHNpbHZhaWMiLCJhIjoiY2tobmI5YTRlMDAzbTMxcGV6NDk3ZHNrdCJ9.mpgz1tj9j8cLrhrsZ5hlhw'
});

const Map = ({ latt_long }) => {
    const latitude = parseFloat(latt_long.split(",")[0]);
    const longitude = parseFloat(latt_long.split(",")[1]);

    return (
        <MapAux
            center={[longitude, latitude]}
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{ height: '100%', width: '100%' }}
        />
    );
}

export default Map;

{/*
    import React from "react";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
//import 'mapbox-gl/dist/mapbox-gl.css';

const MapAux = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoicHNpbHZhaWMiLCJhIjoiY2tobmI5YTRlMDAzbTMxcGV6NDk3ZHNrdCJ9.mpgz1tj9j8cLrhrsZ5hlhw'
});

const Map = ({ latt_long }) => {
    const latt = parseFloat(latt_long.split(",")[0]);
    console.log(latt);
    const long = parseFloat(latt_long.split(",")[1]);
    console.log(long);

    return (
        <MapAux style="mapbox://styles/mapbox/streets-v9" containerStyle={{ height: '100%', width: '100%' }}>
            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[37.777119, -122.41964]} />
            </Layer>
        </MapAux>
    );
}

export default Map;
*/}
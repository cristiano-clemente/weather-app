import React from "react";
import ReactMapboxGl from 'react-mapbox-gl';
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
import React from 'react';
import Globe from 'react-globe.gl';

function SimpleGlobe() {

    const gData = [...Array(10).keys()].map(() => ({
        lat: (Math.random() - 0.5) * 180,
        lng: (Math.random() - 0.5) * 360,
        size: Math.random() / 3,
        color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
    }));

    return <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        pointsData={gData}
        pointLat="lat"
        pointLng="lng"
        pointAltitude="size"
        pointColor="color"
    />
}

export { SimpleGlobe };
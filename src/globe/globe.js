import React from 'react';
import Globe from 'react-globe.gl';
import ReactGlobe from 'react-globe.gl';
import { defaultBarMarkerOptions, defaultDotMarkerOptions } from 'react-globe.gl';

function SimpleGlobe() {

    //create a list of labels:
    var gData = [{
        lat: 37.7749,
        lng: -122.4194,
        color: 'red',
        text: 'San Francisco',
        id: '1',
    }];


    return <ReactGlobe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        labelsData={gData}
        labelSize={1.3}
        labelDotRadius={0.5}
        onLabelClick={() => {console.log("clicked")} }
        options={{
            enableMarkerGlow: true,
            markerRadiusScaleRange: [1, 2],
            markerType: 'dot',
          }}
    />
}

export { SimpleGlobe };
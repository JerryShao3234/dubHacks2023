import React, { useEffect } from 'react';
import Globe from 'react-globe.gl';
import ReactGlobe from 'react-globe.gl';
import { defaultBarMarkerOptions, defaultDotMarkerOptions } from 'react-globe.gl';

function SimpleGlobe({country, setCountry}) {

    //create a list of labels:
    var gData = [{
        lat: 37.7749,
        lng: -122.4194,
        color: 'red',
        text: 'San Francisco',
        id: '1',
    }];

    var globeEl =  React.useRef();

    useEffect(() => {
        globeEl.autoRotate = true;
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.5;
    }, []);

    return <ReactGlobe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
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
            autoRotate: true,
            pointLightIntensity: 40,
            pointLightPositionRadiusScales: [2, 1, -1]
        }}
    />
}

export { SimpleGlobe };

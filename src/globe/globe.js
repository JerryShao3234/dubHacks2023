import React, { useEffect } from 'react';
import Globe from 'react-globe.gl';
import ReactGlobe from 'react-globe.gl';
import { defaultBarMarkerOptions, defaultDotMarkerOptions } from 'react-globe.gl';
import { MAPPED_COUNTRIES } from './../countries.js'
function SimpleGlobe({country, setCountry}) {
    //create a list of labels:

    var globeEl =  React.useRef();

    const [labelSize, setLabelSize] = React.useState(1.3);
    const [currAlt, setCurrAlt] = React.useState(1.5);

    const handleZoom2 = (event) => {
        if(event.altitude != currAlt){
            setCurrAlt(event.altitude);
            if(event.altitude < 1.0){
                setLabelSize(0.5);
            }else{
                setLabelSize(1.2);
            }
        }
    }


    useEffect(() => {
        globeEl.autoRotate = true;
        globeEl.current.controls().enableZoom = true;
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.15;
        globeEl.current.pointOfView({lat: country.lat, lng: country.lng, altitude: 0.5}, 1000);
    }, [country]);

    return <ReactGlobe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        labelsData={MAPPED_COUNTRIES}
        labelSize={labelSize}
        labelDotRadius={labelSize*0.35}
        onZoom={handleZoom2}
        onLabelClick={(label, event, coords) => (
            setCountry(label)
        )}
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

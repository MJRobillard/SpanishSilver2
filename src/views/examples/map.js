import { tooltip } from 'leaflet';
import React, { useState } from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs, InfoWindow } from 'react-google-maps';

const MapComponent = withScriptjs(withGoogleMap(() => {
  // Coordinates of each point of interest
  const pointsOfInterest = [
    { name: 'Potosi (1572)', coordinates: { lat: -19.5836, lng: -65.7531 }, tooltip: "\nEstimated pesos coined c.1790: 4,600,000" },
    { name: 'Santiago de Chile (1743)', coordinates: { lat: -33.4489, lng: -70.6693 }, tooltip: "\nEstimated pesos coined c.1790: 1,000,000" },
    { name: 'Lima (1565 1a)(1683 2a)', coordinates: { lat: -12.0464, lng: -77.0428 }, tooltip: "\nEstimated pesos coined c.1790: 6,000,000" },
    { name: 'Popayan (1749)', coordinates: { lat: 2.4387, lng: -76.6132 }, color: 'blue', tooltip: "(1749)\nEstimated pesos coined c.1790: 1,000,000" }, // Custom color for Popayan
    { name: 'Bogota (1620)', coordinates: { lat: 4.7109, lng: -74.0721 }, tooltip: "\nEstimated pesos coined c.1790: 1,200,000" },
    { name: 'Cartagena (1620)', coordinates: { lat: 10.391, lng: -75.4794 }, color: 'green', tooltip: "\nEstimated pesos coined c.1790: 1,000,000" }, // Custom color for Cartagena
    { name: 'St. Domingo (1536)', coordinates: { lat: 18.4861, lng: -69.9312 }, tooltip: "\nEstimated pesos coined c.1790: TBD" },
    { name: 'Guatemala (1731)', coordinates: { lat: 14.6349, lng: -90.5069 }, tooltip: "\nEstimated pesos coined c.1790: 200,000" },
    { name: 'Mexico (1535)', coordinates: { lat: 19.4326, lng: -99.1332 }, tooltip: "\nEstimated pesos coined c.1790: 24,000,000" },
    { name: 'Havana (1741)', coordinates: { lat: 23.1136, lng: -82.3666 }, tooltip: "\nEstimated pesos coined c.1790: TBD" },
  ];

  const [selectedPoint, setSelectedPoint] = useState(null);

  return (
    <GoogleMap
      defaultZoom={2}
      defaultCenter={{ lat: 20, lng: -70 }} // Centered between South and Central America
      defaultOptions={{ draggable: false }}
    >
      {pointsOfInterest.map((poi, index) => (
        <Marker
          key={index}
          position={poi.coordinates}
          icon={{
            url: `http://maps.google.com/mapfiles/ms/icons/${poi.color ? poi.color : 'red'}-dot.png`,
          }}
          onMouseOver={() => setSelectedPoint(poi)}
        />
      ))}
      {selectedPoint && (
        <InfoWindow
          onCloseClick={() => setSelectedPoint(null)}
          position={selectedPoint.coordinates}
        >
          <div>
            <h3>{selectedPoint.name}</h3>
            <p>{selectedPoint.tooltip}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}));

const MapWithPointsOfInterest = () => {
  return (
    <MapComponent
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAeHiEzI9oc40up7PYv0f-2_S_Ce-1FmnU&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}

export default MapWithPointsOfInterest;

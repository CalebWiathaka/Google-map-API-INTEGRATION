import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = ({ lat, lng }) => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: lat,
    lng: lng,
  };

  return (
    <LoadScript
      googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

function App() {
  const [showMap, setShowMap] = useState(false);

  const handleButtonClick = () => {
    setShowMap(!showMap);
  };

  return (
    <div>
      <h1>Google Map App</h1>
      <button onClick={handleButtonClick}>
        {showMap ? 'Hide Map' : 'Show Map'}
      </button>
      {showMap && <MapContainer lat={37.7749} lng={-122.4194} />}
    </div>
  );
}

export default App;

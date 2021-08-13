import React from 'react';
import GoogleMapReact from 'google-map-react';

import "../styles/Map.css";

const mapStyles = {
  width: '100%',
  height: '100%'
};

export default function SightingsMap() {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={{
            lat: 0,
            lng: 0
          }}
          defaultZoom={11}
        >
        </GoogleMapReact>
      </div>
    );
}
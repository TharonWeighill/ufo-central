import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import "../components/Map.css";

const containerStyle = {
    width: '1425px',
    height: '970px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

export default function Map() {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyAIZ8UwE7nfYBEz0xejCqdQfggaOL5afW0"
        >
            <div className="map-container">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            </div>
        </LoadScript>
    );
}
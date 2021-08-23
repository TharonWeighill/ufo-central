import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../styles/Map.css';

const containerStyle = {
    width: '1350px',
    height: '960px'
};

const center = {
    lat: 0,
    lng: 0
};

export default function Map() {
    return (
        <LoadScript
            googleMapsApiKey='AIzaSyAIZ8UwE7nfYBEz0xejCqdQfggaOL5afW0'
        >
            <div className='map-container'>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={3}>
                        
                    <></>
                </GoogleMap>
            </div>
        </LoadScript>
    );
    
}
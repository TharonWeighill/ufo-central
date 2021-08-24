import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../styles/Map.css';
import { getSightings } from '../actions/sightings'


const containerStyle = {
    width: '1350px',
    height: '960px'
};

const center = {
    lat: 0,
    lng: 0
};

export default function Map() {
    const sightingsReported = useSelector((state) => {
        console.log(state)
        return state.sightings; 
        
    })
    

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSightings());
    }, [dispatch]);
    
    return (
        <LoadScript
            googleMapsApiKey='AIzaSyAIZ8UwE7nfYBEz0xejCqdQfggaOL5afW0'
        >
            <div className='map-container'>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={3}
                >        
                    {sightingsReported.sightings.map((sighting) => (
                        <Marker key={sighting.id} position={{ lat: sighting.latitude, lng: sighting.longitude }}/>
                    ))};
                </GoogleMap>
            </div>
        </LoadScript>
    );
    
}
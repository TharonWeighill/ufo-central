import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
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
   
    const [selectedSighting, setSelectedSighting] = useState(null);
    
    const sightingsReported = useSelector((state) => {
        console.log(state)
        return state.sightings; 
        
    })
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSightings());
    }, [dispatch]);
    
    return (
        <LoadScript >
            <div className='map-container'>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={3}
                >        
                {sightingsReported.sightings.map((sighting) => (
                    <Marker 
                    key={sighting.id} 
                    position={{ 
                    lat: sighting.latitude, 
                    lng: sighting.longitude 
                    }}
                        onClick={() => { 
                            setSelectedSighting(sighting)
                        }}
                        />
                    ))};
                    {selectedSighting && (
                        <InfoWindow
                        position={{ lat: selectedSighting.latitude, lng: selectedSighting.longitude }}>
                            <div>
                                <h1>Sighting Report</h1>
                                <h2>{selectedSighting.city}</h2>
                                <h3>{selectedSighting.comments}</h3>
                                <h4>{selectedSighting.date_posted}</h4>
                            </div> 
                        </InfoWindow>
                    ) }
                </GoogleMap>
            </div>
        </LoadScript>
    );
    
}
import React from 'react';

export default function SightingCard(props) {
    return (
        <div className='card' id={`sighting-${props.id}`}>
            <h2>{props.date_time}</h2>
            <h2>{props.city}</h2>
            <h3>{props.state}</h3>
            <p>{props.comments}</p>

        </div>
    );
}

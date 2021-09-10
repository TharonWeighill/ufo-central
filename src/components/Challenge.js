import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSightings } from '../actions/sightings'
import '../styles/challenge.css';
import { Link } from 'react-router-dom';


export default function Challenge() {

    
    const [search, setSearch] = useState("");
    
    const sightings = useSelector((state) => {
        return state.sightings.sightings;         
    })
    console.log(sightings)
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSightings());
    }, [dispatch]);
    
    return (
        <div className="challenge-box">
        <ul >
            <input type="text" placholder="Search City" onChange={e =>{setSearch(e.target.value)}}></input>
            {sightings.filter((val)=> {
                if (search == "") {
                    return val
                } else if (val.city.toLowerCase().includes(search.toLocaleLowerCase())) {
                    return val
                }
                }).map((val, key) => {
                    return (
                        <div className="city" key={key}>
                            <li>{val.city}</li>
                        </div>
                    )
                }
                )}
        </ul>
        <Link to='/' >Home</Link>  
        </div>
    );
}

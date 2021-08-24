import { SET_SIGHTINGS_ERROR, SET_SIGHTINGS } from '../constants/sightings'


export const newSighting = (credentials) => {
    return (dispatch) => {
        return fetch('http://localhost:3001/sightings', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ sightings: credentials })
        })
    };
};

export const getSightings = () => {
    return (dispatch) => {
        return fetch('http://localhost:3001/sightings', {
            headers: { 'Content-Type' : 'application/json' }})
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
          dispatch({
              type: SET_SIGHTINGS,
              payload: data
          })
        })
        .catch((error) => {
            dispatch({
                type: SET_SIGHTINGS_ERROR,
            })
            console.error(error);
        })
    };
};
import { SET_SIGHTINGS_ERROR, SET_SIGHTINGS } from '../constants/sightings'

const intialState = {
    sightings: [],
    error: null,
};

export default function sightings (state = intialState, action) {
    switch(action.type) {
        case SET_SIGHTINGS:
            console.log("xxx", action.payload)
            return {
                ...state, 
                sightings: action.payload
            }
        case SET_SIGHTINGS_ERROR:
            return {
                ...state,
                error: "Something went wrong when fetching sightings."
            }
        default:
            return state;
    }
};

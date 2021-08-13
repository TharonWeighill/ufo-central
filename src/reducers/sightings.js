const AUTHENTICATED = 'AUTHENTICATED'
const NOT_AUTHENTICATED = 'NOT_AUTHENTICATED'
const GET_SIGHTINGS = 'GET_SIGHTINGS';
const SET_SIGHTINGS_ERROR = 'SET_SIGHTINGS_ERROR';

const intialState = {
    sightings: [],
    error: null,
};

export default sightings = (state = intialState, action)  => {
    switch(action.type) {
        case SET_SIGHTINGS_ERROR:
            return {
                ...state,
                error: "Something went wrong when fetching sightings."
            }
        default:
            return state;
    }
};
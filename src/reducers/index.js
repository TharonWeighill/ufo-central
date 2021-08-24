import { combineReducers } from 'redux';
import ufoNewsReducer from './ufoNewsReducer';
import auth from './auth'
import sightings from './sightings';

const rootReducer = combineReducers({
    ufoNews: ufoNewsReducer,
    sightings,
    auth
});

export default rootReducer;
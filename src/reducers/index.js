import { combineReducers } from 'redux';
import ufoNewsReducer from './ufoNewsReducer';
import auth from './auth'

const rootReducer = combineReducers({
    ufoNews: ufoNewsReducer,
    auth
});

export default rootReducer;
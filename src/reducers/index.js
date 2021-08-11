import { combineReducers } from "redux";
import ufoNewsReducer from "./ufoNewsReducer";

const rootReducer = combineReducers({
    ufoNews: ufoNewsReducer
});

export default rootReducer;
import { SET_ERROR, SET_ARTICLES } from "../constants/ufoNews";

const initialState = {
    articles: [],
    error: null
};

export default function ufoNewsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ERROR:
            return {
                ...state,
                error: "Something went wrong when fecthing the UFO articles!"
            };
        case SET_ARTICLES:
            return {
                ...state,
                articles: action.payload
            };
        default:
            return state;
    }
}
const initialState = {
    ufoArticles: [],
    ufoArticlesError: null
};

export default function ufoNewsReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_UFO_ARTICLES_ERROR":
            return {
                ...state,
                ufoArticlesError: action.payload
            };
        case "SET_UFO_ARTICLES":
            return {
                ...state,
                ufoArticles: action.payload
            };
        default:
            return state;
    }
}
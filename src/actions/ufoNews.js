import { SET_ERROR, SET_ARTICLES } from '../constants/ufoNews';

export const getUfoArticles = () => {
    return (dispatch) => {
        return fetch('https://www.reddit.com/r/UFOs.json').then(resp => resp.json())
            .then((resp) => {
                dispatch({
                    type: SET_ARTICLES,
                    payload: resp.data.children
                });
            })
            .catch(error => {
                dispatch({
                    type: SET_ERROR,
                    payload: error.message
                });
                console.error(error);
            });

    };
};
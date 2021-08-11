export const getUfoArticles = () => {
    return (dispatch) => {
        return fetch("https://www.reddit.com/r/UFOs.json").then(resp => {
            if (!resp.ok) {
                throw new Error("Error fetchig UFO articles");
            }
            return resp.json();
        })
            .then((resp) => {
                dispatch({
                    type: "SET_UFO_ARTICLES",
                    payload: resp.data.children
                });
            })
            .catch(error => {
                dispatch({
                    type: "SET_UFO_ARTICLES_ERROR",
                    payload: error.message
                });
                console.error(error);
            });

    };
}
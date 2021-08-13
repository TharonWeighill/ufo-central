const AUTHENTICATED = 'AUTHENTICATED'
const NOT_AUTHENTICATED = 'NOT_AUTHENTICATED'
const setToken = (token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
};

export const newSighting = (credentials) => {
    return (dispatch) => {
        return fetch("http://localhost:3001/sightings", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user: credentials })
        }).then((res) => {
            if (res.ok) {
                setToken(res.headers.get("Authorization"));
                return res
                    .json()
                    .then((userJson) =>
                        dispatch({ type: AUTHENTICATED, payload: userJson })
                    );
            } else {
                return res.json().then((errors) => {
                    dispatch({ type: NOT_AUTHENTICATED });
                    return Promise.reject(errors);
                });
            }
        });
    };
};
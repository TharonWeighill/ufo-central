import { SET_SIGHTINGS_ERROR } from "../constants/sightings"
import { AUTHENTICATED, NOT_AUTHENTICATED } from "../constants/users";

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

export const getSightings = () => {
    return (dispatch) => {
        return fetch("http://localhost:3001/sightings")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            dispatch({
                type: SET_SIGHTINGS_ERROR,
            })
            console.error(error);
        })
    };
};
import axios from 'axios';


const LOGIN_USER = 'CREATE_USER';
const LOGIN_USER_ERROR = 'CREATE_USER_ERROR';

const loginUser = loginUser => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_USER, ...loginUser });
        const response = await axios({
            method: 'GET',
            url: 'http://localhost:3001/signup',
            data: { user: loginUser },
            crossdomain: true,
        });
        const { token } = response.data;
        localStorage.setItem('jwt', token);
    } catch {
        dispatch({ type: LOGIN_USER_ERROR });
    }
};
export { loginUser };


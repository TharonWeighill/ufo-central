
const initialState = {
    isLogin: false,
    user: {
        email: '',
        password: '',
    }
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER': return {
            ...state.user,
            isLogin: true,
            user: {
                email: action.email,
                password: action.password,
            },
        };
        case 'LOGIN_USER_ERROR': return {
            isLogin: false,
        };
        default: return state;
    }
};
export default authReducer;
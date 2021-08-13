import { AUTHENTICATED, NOT_AUTHENTICATED } from "../constants/users";

const initialState = {
  authChecked: false,
  loggedIn: false,
  currentUser: {}
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATED:
      console.log(action.payload)
      return {
        ...state, 
        authChecked: true,
        loggedIn: true,
        currentUser: action.payload,
      };
    case NOT_AUTHENTICATED:
      return {
        authChecked: true,
        loggedIn: false,
        currentUser: {}
      };
    default:
      return state;
  }
}
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';



// react redux-thunk
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

// // REDUX Examples 

// //ACTION EXAMPLE
// const increment = () => {
//     return {
//         type: 'INCREMENT'
//     };
// };
// const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     };
// };

// //REDUCER EXAMPLE 
// const counter = (state = 0, action) => {
//     switch (action.type) {
//         case "INCREMENT":
//             return state + 1;
//         case "DECREMENT":
//             return state - 1;

//     }
// };
// let store = createStore(counter);

// // DISPATCH EXAMPLE
// store.dispatch(increment());




const reactContentRoot = document.getElementById('root');

ReactDOM.render(<Provider store={store}><App /></Provider>, reactContentRoot);

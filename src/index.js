import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';

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

ReactDOM.render(<App />, reactContentRoot);

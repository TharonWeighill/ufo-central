import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';

window.YTConfig = {
    host: 'https://www.youtube.com'
};

// react redux-thunk
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

const reactContentRoot = document.getElementById('root');

ReactDOM.render(<Provider store={store}><App /></Provider>, reactContentRoot);

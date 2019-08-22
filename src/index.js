import * as serviceWorker from './serviceWorker';
// import store from './store/store';
import store from './store/redux-store';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rerenderOnStateChange = state => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={ store.getState() }
                store={ store }
                dispatch={ store.dispatch.bind(store) }/>
        </BrowserRouter>, document.getElementById('root')
    );

    // console.log('State => ');
    // console.log(state);
};

const state = store.getState();

rerenderOnStateChange(state);

store.subscribe(() => {
    rerenderOnStateChange(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

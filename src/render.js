import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { addPost, changePost } from './store/store';

const rerenderOnStateChange = state => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={ state }
                addPost={ addPost }
                changePost={ changePost }/>
        </BrowserRouter>, document.getElementById('root')
    );

    console.log(state);
};

export default rerenderOnStateChange;

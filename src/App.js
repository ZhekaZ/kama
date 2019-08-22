import React from 'react';
import { Route } from "react-router-dom";
import './App.scss';

import Profile from './components/profile/Profile';
import Header from './components/header/Header';
import NavBar from './components/navbar/Navbar';
import DialogsContainer from "./components/dialogs/DialogsContainer";

const App = props => {
    return (
        <div className="App">
            <div className='wrapper'>
                <Header/>
                <NavBar/>
                <main className='content'>
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer /> }/>
                    <Route path='/profile'
                           render={ () => <Profile /> }/>
                </main>
            </div>
        </div>
    );
};

export default App;

import React from 'react';
import { Route } from "react-router-dom";
import './App.scss';

import HeaderContainer from './components/header/HeaderContainer';
import NavBar from './components/navbar/Navbar';
import UsersContainer from "./components/users/UsersContainer";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import ProfileContainer from "./components/profile/ProfileContainer";

const App = () => {
    return (
        <div className="App">
            <div className='wrapper'>
                <HeaderContainer/>
                <NavBar/>
                <main className='content'>
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer /> }/>
                    <Route path='/profile/:userId?'
                           render={ () => <ProfileContainer /> }/>

                    <Route path='/users'
                           render={ () => <UsersContainer /> }/>
                </main>
            </div>
        </div>
    );
};

export default App;

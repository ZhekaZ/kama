import React from 'react';
import { Route } from "react-router-dom";
import './App.scss';

import Profile from "./components/profile/Profile";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/Navbar";
import Dialogs from "./components/dialogs/Dialogs";

const App = props => {
    return (
        <div className="App">
            <div className='wrapper'>
                <Header/>
                <NavBar/>
                <main className='content'>
                    <Route path='/dialogs'
                           render={ () => <Dialogs state={ props.state.dialogsPage }/> }/>
                    <Route path='/profile'
                           render={ () => <Profile
                               state={ props.state.profilePage }
                               changePost={ props.changePost }
                               addPost={ props.addPost }/> }/>
                </main>
            </div>
        </div>
    );
};

export default App;

import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.scss';

import Profile from "./components/profile/Profile";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/Navbar";
import Dialogs from "./components/dialogs/Dialogs";

const App = () => {
  return (
      <BrowserRouter>
          <div className="App">
              <div className='wrapper'>
                  <Header />
                  <NavBar />
                  <main className='content'>
                      <Route path='/dialogs' component={Profile} />
                      <Route path='/profile' component={Dialogs} />
                  </main>
              </div>
          </div>
      </BrowserRouter>
  );
};

export default App;
